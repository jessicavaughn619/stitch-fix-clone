import Nav from "./Nav"
import './header.css'
import { NavLink } from "react-router-dom"
import { BsBag } from 'react-icons/bs'
import { useState } from "react"
import DesktopNav from "./DesktopNav"

export default function Header({isMobile}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="wrapper__header">
        <header className="container__header">
            <Nav 
                isMenuOpen={isMenuOpen}
                onSetIsMenuOpen={setIsMenuOpen}
            /> 
            {!isMobile ? <DesktopNav /> : null}
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