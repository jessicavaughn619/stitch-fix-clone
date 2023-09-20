import Nav from "./Nav"
import './header.css'
import { NavLink } from "react-router-dom"

export default function Header() {

    return (
        <header className="container__header">
            <Nav />
            <div className="category-links">
            <NavLink to="/women" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}>Women</NavLink>
            <NavLink to="/men" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}>Men</NavLink>
            <NavLink to="/kids" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}>Kids</NavLink>
            </div>
            <div>
            <span>Cart</span>
            </div>
        </header>
    )
}