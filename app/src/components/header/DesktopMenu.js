import Nav from "./Nav"

export default function DesktopMenu({ isMobile, isMenuOpen }) {
    return (
        <Nav 
        isMobile={isMobile}
        isMenuOpen={isMenuOpen}
        />
    )
}