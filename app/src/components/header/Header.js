import './header.css'
import { NavLink } from "react-router-dom"
import { BsBag } from 'react-icons/bs'
import { useState } from "react"
import DesktopMenu from "./DesktopMenu"
import Menu from "./Menu"

export default function Header({isMobile}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function handleSetIsMenuOpen() {
        setIsMenuOpen(isMenuOpen => !isMenuOpen);
    }

    console.log(isMenuOpen)

    return (
        <div className="wrapper__header">
        <header className="container__header">
        {isMobile ? 
            <Menu 
                isMenuOpen={isMenuOpen}
                onSetIsMenuOpen={handleSetIsMenuOpen}
                isMobile={isMobile}
            /> :
            <DesktopMenu 
                isMobile={isMobile}
                isMenuOpen={isMenuOpen}
            />}
            <div className="category-links">
            <NavLink to="/women" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}>Women</NavLink>
            <NavLink to="/men" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}>Men</NavLink>
            <NavLink to="/kids" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}>Kids</NavLink>
            </div>
            {!isMobile ? 
                <div className="wrapper__desktop_links">
                    <ul className="container__desktop_links">
                        <li className="desktop_link">
                            <a></a>
                        </li>
                        <li className="desktop_link">
                            <a></a>
                        </li>
                        <li className="desktop_link">
                            <a></a>
                        </li>
                    </ul>
                    Links
                </div> : null}
            <div className="wrapper__cart">
            <BsBag className="cart_icon"/>
            </div>
        </header>
        </div>
    )
}