import './header.css'
import { NavLink } from "react-router-dom"
import { BsBag } from 'react-icons/bs'
import { useState } from "react"
import DesktopNav from "./DesktopNav"
import Menu from "./Menu"

export default function Header({isMobile}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="wrapper__header">
        <header className="container__header">
            <Menu 
                isMenuOpen={isMenuOpen}
                onSetIsMenuOpen={setIsMenuOpen}
            />
            {!isMobile ? 
            <DesktopNav 
                isMenuOpen={isMenuOpen}
                onSetIsMenuOpen={setIsMenuOpen}
                isMobile={isMobile}
            /> : null}
            <div className="category-links">
            <NavLink to="/women" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}>Women</NavLink>
            <NavLink to="/men" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}>Men</NavLink>
            <NavLink to="/kids" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}>Kids</NavLink>
            </div>
            <div className="wrapper__cart">
            <BsBag className="cart_icon"/>
            </div>
        </header>
        </div>
    )
}