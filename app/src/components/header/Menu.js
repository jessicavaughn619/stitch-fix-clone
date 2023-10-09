import Nav from './Nav'

export default function Menu({isMenuOpen, onSetIsMenuOpen, isMobile}) {
    return (
        <Nav 
            isMenuOpen={isMenuOpen}
            onSetIsMenuOpen={onSetIsMenuOpen}
            isMobile={isMobile}
        />
    )
}