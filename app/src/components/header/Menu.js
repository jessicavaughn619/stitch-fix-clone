import Nav from './Nav'

export default function Menu({isMenuOpen, onSetIsMenuOpen}) {
    return (
        <Nav 
            isMenu={true}
            onSetIsMenuOpen={onSetIsMenuOpen}
        />
    )
}