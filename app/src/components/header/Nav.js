import './header.css'
import LOGO from '../../images/logo-round.png'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Nav({isMobile, isMenuOpen, onSetIsMenuOpen}) {

    function handleClick() {
        onSetIsMenuOpen();
    }

    return (
        <div className="container__nav">
            {isMobile ?
            <>
            <div className="wrapper__menu_logo" onClick={handleClick}>
            <div className="wrapper__menu">
            <AiOutlineMenu className="menu_icon"/>
            </div>
            <div className="wrapper__logo">
            <img src={LOGO} className="logo_circle" alt="Stitch Fix logo"/>
            </div>
            </div>
            <div className={`menu_dropdown ${isMenuOpen ? "menu_open" : "menu_closed"}`}>
                <div className="container__dropdown">
                    <div className="dropdown_content">
                        <div className="container__top_links">
                            <div className="container__first_link">
                                <a href="https://www.stitchfix.com/">Home</a>
                            </div>
                            <div className="container__second_link">
                                <a href="https://www.stitchfix.com/impact">Social Impact</a>
                            </div>
                        </div>
                        <div className="container__bottom_links">
                            <div className="container__first_link">
                                <a href="https://support.stitchfix.com/hc/en-us/sections/360006899113">FAQ</a>
                            </div>
                            <div className="container__second_link">
                                <a href="https://www.stitchfix.com/gifts">Gift Cards</a>
                            </div>
                            <div className="container__sign_up_button">
                                <a href="https://www.stitchfix.com/login">
                                <button className="btn">Sign In</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </>
            : <><div>Desktop Logo</div></>}
        </div>
    )
}