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
        <div className="top_wrapper__header">
        <header className="wrapper__header">
            <div className="container__header">
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
                            <a href="https://www.stitchfix.com/impact">Social Impact</a>
                        </li>
                        <li className="desktop_link">
                            <a href="https://support.stitchfix.com/hc/en-us/sections/360006899113">FAQ</a>
                        </li>
                        <li className="desktop_link">
                            <a href="https://www.stitchfix.com/gifts">Gift Cards</a>
                        </li>
                    </ul>
                </div> : null}
            <div className="wrapper__cart_signin">
                <a className="container__cart" href="https://www.stitchfix.com/product/shopping_bag?ic=other">
                <BsBag className="cart_icon"/>
                {!isMobile ? <span className="cart_title">Bag</span> : null}
                </a>
            </div>
            {!isMobile ? <a className="btn-secondary sign_in_button" href="https://www.stitchfix.com/login">Sign In</a>: null}
            </div>
        </header>
        </div>
    )
}