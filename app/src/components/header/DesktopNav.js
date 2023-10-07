import Nav from "./Nav"

export default function DesktopNav({isMobile, isMenuOpen, onSetIsMenuOpen}) {
    return (
        <Nav 
            isMobile={isMobile}
            isMenuOpen={isMenuOpen}
            onSetIsMenuOpen={onSetIsMenuOpen}
        />
    )
}