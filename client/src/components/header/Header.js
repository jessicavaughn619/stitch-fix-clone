import Nav from "./Nav"
import './header.css'

export default function Header() {
    return (
        <header className="container__header">
            <Nav />
            <div>
                <span>Women</span>
                <span>Men</span>
                <span>Kids</span>
            </div>
            <div>
            <span>Cart</span>
            </div>
        </header>
    )
}