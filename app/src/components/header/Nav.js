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
            : <>
                <a className="wrapper__svg_logo" href="https://www.stitchfix.com/signup">
                <div className="container__svg_logo">
                    <svg width="410" height="48" viewBox="0 0 410 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="icon991456_icon_title" data-testid="logo" role="img"><title id="icon991456_icon_title">Stitch Fix</title><path d="M17.7004 21.1128L17.153 20.9323C9.85382 18.9474 6.38674 17.5038 6.38674 11.7293C6.38674 6.85714 9.30639 4.15038 14.2333 4.15038C14.2333 4.15038 24.6346 4.15038 27.5542 12.6316L27.7367 12.9925H31.0213V0H27.7367L26.4593 4.69173C23.3572 1.80451 19.3427 0 14.7807 0C6.20426 0 0.182478 5.41353 0.182478 13.1729C0.182478 21.8346 7.48161 24.3609 15.6931 26.3459C23.9047 28.3308 27.3717 29.9549 27.3717 35.9098C27.3717 41.1429 22.9923 43.6692 19.1602 43.6692C12.226 43.6692 7.29913 40.9624 3.46709 35.3684L3.28461 35.0075H0V48H3.28461L4.74443 42.406C8.75896 46.1955 13.1384 48 18.6128 48C27.3717 48 33.576 42.0451 33.576 34.1053C33.576 25.2632 26.2769 23.2782 17.7004 21.1128ZM40.3277 9.92481H43.4298L43.6123 9.02256C44.7072 3.78947 44.8896 3.78947 48.5392 3.78947H56.9332V44.0301H52.3713V47.8195H68.2469V44.0301H63.8674V3.78947H72.0789C75.9109 3.78947 76.2759 3.78947 77.3708 9.02256L77.5533 9.92481H80.6554V0H40.3277V9.92481ZM115.326 9.92481H118.428L118.611 9.02256C119.706 3.78947 119.888 3.78947 123.538 3.78947H131.932V44.0301H127.552V47.8195H143.428V44.0301H139.048V3.78947H147.26C151.092 3.78947 151.457 3.78947 152.552 9.02256L152.734 9.92481H155.836V0H115.326V9.92481ZM89.9618 0V3.78947H94.5237V44.2105H89.9618V48H105.837V44.2105H101.458V3.78947H105.837V0H89.9618ZM241.601 0V3.78947H246.163V23.4586H223.536V3.78947H227.915V0H212.04V3.78947H216.784V44.2105H212.222V48H228.098V44.2105H223.536V27.2481H246.163V44.2105H241.601V48H257.477V44.2105H253.097V3.78947H257.477V0H241.601ZM340.139 0V3.78947H344.701V44.2105H340.139V48H356.015V44.2105H351.636V3.78947H356.015V0H340.139ZM393.971 0V3.78947H397.62L387.401 18.406L377.547 3.78947H381.197V0H365.321V3.78947H369.883L383.752 24.1805L370.066 44.2105H365.139V48H381.015V44.2105H375.905L386.489 28.5113L397.073 44.2105H393.058V48H408.934V44.2105H404.554L390.321 22.7368L403.459 3.78947H409.846V0H393.971ZM294.52 3.78947H299.264V44.0301H294.52V47.8195H310.396V44.0301H306.199V27.0677H313.498C316.235 27.0677 316.417 27.4286 317.33 30.1353L317.512 30.4962V30.8571H320.614V18.9474H317.512V19.3083C317.512 19.6692 317.33 19.8496 317.147 20.0301C316.235 22.1955 315.87 23.2782 313.315 23.2782H306.016V3.78947H322.622C325.724 3.78947 326.454 4.69173 328.278 9.20301V9.56391H331.928V0H294.337L294.52 3.78947ZM197.441 29.0526C195.982 38.4361 190.872 43.6692 183.026 43.6692C173.719 43.6692 168.062 35.9098 168.062 23.6391C168.062 11.9098 173.719 4.33083 182.478 4.33083C190.872 4.33083 195.252 9.56391 197.259 14.0752L197.441 14.4361H200.726V0H197.077L195.799 5.05263C192.332 1.62406 187.953 0 182.661 0C170.252 0 160.763 10.2857 160.763 24C160.763 31.0376 162.953 36.9925 166.785 41.3233C170.617 45.6541 176.092 47.8195 182.113 47.8195C193.062 47.8195 199.996 41.1429 201.456 29.0526V28.5113H197.259V29.0526H197.441Z" fill="#25282D"></path></svg>
                    </div></a>
                </>}
        </div>
    )
}