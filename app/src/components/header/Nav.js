import './header.css'
import LOGO from '../../images/logo-round.png'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Nav() {
    return (
        <div className="container__nav">
            <div className="wrapper__menu">
            <AiOutlineMenu className="menu_icon"/>
            </div>
            <div className="wrapper__logo">
            <img src={LOGO} className="logo_circle" alt="Stitch Fix logo"/>
            </div>
        </div>
    )
}