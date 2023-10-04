# typed: true
# frozen_string_literal: true

require "dependable"

# A dependency on another Homebrew formula.
#
# @api private
class Dependency
  extend Forwardable
  include Dependable
  extend Cachable

  attr_reader :name, :env_proc, :option_names, :tap

  DEFAULT_ENV_PROC = proc {}.freeze
  private_constant :DEFAULT_ENV_PROC

  def initialize(name, tags = [], env_proc = DEFAULT_ENV_PROC, option_names = [name&.split("/")&.last])
    raise ArgumentError, "Dependency must have a name!" unless name

    @name = name
    @tags = tags
    @env_proc = env_proc
    @option_names = option_names

    @tap = Tap.fetch(Regexp.last_match(1), Regexp.last_match(2)) if name =~ HOMEBREW_TAP_FORMULA_REGEX
  end

  def to_s
    name
  end

  def ==(other)
    instance_of?(other.class) && name == other.name && tags == other.tags
  end
  alias eql? ==

  def hash
    [name, tags].hash
  end

  def to_formula
    formula = Formulary.factory(name)
    formula.build = BuildOptions.new(options, formula.options)
    formula
  end

  def installed?(minimum_version: nil)
    formula = begin
      to_formula
    rescue FormulaUnavailableError
      nil
    end
    return false unless formula

    if minimum_version.present?
      formula.any_version_installed? && (formula.any_installed_version.version >= minimum_version)
    else
      formula.latest_version_installed?
    end
  end

  def satisfied?(inherited_options = [], minimum_version: nil)
    installed?(minimum_version: minimum_version) && missing_options(inherited_options).empty?
  end

  def missing_options(inherited_options)
    formula = to_formula
    required = options
    required |= inherited_options
    required &= formula.options.to_a
    required -= Tab.for_formula(formula).used_options
    required
  end

  def modify_build_environment
    env_proc&.call
  end

  sig { overridable.returns(T::Boolean) }
  def uses_from_macos?
    false
  end

  sig { returns(String) }
  def inspect
    "#<#{self.class.name}: #{name.inspect} #{tags.inspect}>"
  end

  # Define marshaling semantics because we cannot serialize @env_proc.
  def _dump(*)
    Marshal.dump([name, tags])
  end

  def self._load(marshaled)
    new(*Marshal.load(marshaled)) # rubocop:disable Security/MarshalLoad
  end

  sig { params(formula: Formula).returns(T.self_type) }
  def dup_with_formula_name(formula)
    self.class.new(formula.full_name.to_s, tags, env_proc, option_names)
  end

  class << self
    # Expand the dependencies of each dependent recursively, optionally yielding
    # `[dependent, dep]` pairs to allow callers to apply arbitrary filters to
    # the list.
    # The default filter, which is applied when a block is not given, omits
    # optionals and recommends based on what the dependent has asked for
    def expand(dependent, deps = dependent.deps, cache_key: nil, &block)
      # Keep track dependencies to avoid infinite cyclic dependency recursion.
      @expand_stack ||= []
      @expand_stack.push dependent.name

      if cache_key.present?
        cache[cache_key] ||= {}
        return cache[cache_key][cache_id dependent].dup if cache[cache_key][cache_id dependent]
      end

      expanded_deps = []

      deps.each do |dep|
        next if dependent.name == dep.name

        case action(dependent, dep, &block)
        when :prune
          next
        when :skip
          next if @expand_stack.include? dep.name

          expanded_deps.concat(expand(dep.to_formula, cache_key: cache_key, &block))
        when :keep_but_prune_recursive_deps
          expanded_deps << dep
        else
          next if @expand_stack.include? dep.name

          dep_formula = dep.to_formula
          expanded_deps.concat(expand(dep_formula, cache_key: cache_key, &block))

          # Fixes names for renamed/aliased formulae.
          dep = dep.dup_with_formula_name(dep_formula)
          expanded_deps << dep
        end
      end

      expanded_deps = merge_repeats(expanded_deps)
      cache[cache_key][cache_id dependent] = expanded_deps.dup if cache_key.present?
      expanded_deps
    ensure
      @expand_stack.pop
    end

    def action(dependent, dep, &block)
      catch(:action) do
        if block
          yield dependent, dep
        elsif dep.optional? || dep.recommended?
          prune unless dependent.build.with?(dep)
        end
      end
    end

    # Prune a dependency and its dependencies recursively.
    sig { void }
    def prune
      throw(:action, :prune)
    end

    # Prune a single dependency but do not prune its dependencies.
    sig { void }
    def skip
      throw(:action, :skip)
    end

    # Keep a dependency, but prune its dependencies.
    sig { void }
    def keep_but_prune_recursive_deps
      throw(:action, :keep_but_prune_recursive_deps)
    end

    def merge_repeats(all)
      grouped = all.group_by(&:name)

      all.map(&:name).uniq.map do |name|
        deps = grouped.fetch(name)
        dep  = deps.first
        tags = merge_tags(deps)
        option_names = deps.flat_map(&:option_names).uniq
        kwargs = {}
        kwargs[:bounds] = dep.bounds if dep.uses_from_macos?
        # TODO: simpify to just **kwargs when we require Ruby >= 2.7
        if kwargs.empty?
          dep.class.new(name, tags, dep.env_proc, option_names)
        else
          dep.class.new(name, tags, dep.env_proc, option_names, **kwargs)
        end
      end
    end

    private

    def cache_id(dependent)
      "#{dependent.full_name}_#{dependent.class}"
    end

    def merge_tags(deps)
      other_tags = deps.flat_map(&:option_tags).uniq
      other_tags << :test if deps.flat_map(&:tags).include?(:test)
      merge_necessity(deps) + merge_temporality(deps) + other_tags
    end

    def merge_necessity(deps)
      # Cannot use `deps.any?(&:required?)` here due to its definition.
      if deps.any? { |dep| !dep.recommended? && !dep.optional? }
        [] # Means required dependency.
      elsif deps.any?(&:recommended?)
        [:recommended]
      else # deps.all?(&:optional?)
        [:optional]
      end
    end

    def merge_temporality(deps)
      new_tags = []
      new_tags << :build if deps.all?(&:build?)
      new_tags << :implicit if deps.all?(&:implicit?)
      new_tags
    end
  end
end

# A dependency that's marked as "installed" on macOS
class UsesFromMacOSDependency < Dependency
  attr_reader :bounds

  def initialize(name, tags = [], env_proc = DEFAULT_ENV_PROC, option_names = [name], bounds:)
    super(name, tags, env_proc, option_names)

    @bounds = bounds
  end

  def ==(other)
    instance_of?(other.class) && name == other.name && tags == other.tags && bounds == other.bounds
  end

  def hash
    [name, tags, bounds].hash
  end

  def installed?(minimum_version: nil)
    use_macos_install? || super(minimum_version: minimum_version)
  end

  sig { returns(T::Boolean) }
  def use_macos_install?
    # Check whether macOS is new enough for dependency to not be required.
    if Homebrew::SimulateSystem.simulating_or_running_on_macos?
      # Assume the oldest macOS version when simulating a generic macOS version
      return true if Homebrew::SimulateSystem.current_os == :macos && !bounds.key?(:since)

      if Homebrew::SimulateSystem.current_os != :macos
        current_os = MacOSVersion.from_symbol(Homebrew::SimulateSystem.current_os)
        since_os = MacOSVersion.from_symbol(bounds[:since]) if bounds.key?(:since)
        return true if current_os >= since_os
      end
    end

    false
  end

  sig { override.returns(T::Boolean) }
  def uses_from_macos?
    true
  end

  sig { override.params(formula: Formula).returns(T.self_type) }
  def dup_with_formula_name(formula)
    self.class.new(formula.full_name.to_s, tags, env_proc, option_names, bounds: bounds)
  end

  sig { returns(String) }
  def inspect
    "#<#{self.class.name}: #{name.inspect} #{tags.inspect} #{bounds.inspect}>"
  end
end
