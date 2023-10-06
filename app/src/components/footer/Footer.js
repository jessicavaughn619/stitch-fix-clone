import './footer.css'
import { useState } from 'react'
import MoreInfo from './MoreInfo'
import USLogo from '../../images/region/united-states.png'
import UKLogo from '../../images/region/united-kingdom.png'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export default function Footer() {
    const [isExpand, setIsExpand] = useState(false)
    const [region, setRegion] = useState("US")

    function handleClick() {
        setIsExpand(isExpand => !isExpand)
    }

    function handleChange(e) {
        setRegion(e.target.value)
    }

    let regionLogo;
    let regionAlt;

    if (region === "US") {
        regionLogo = USLogo;
        regionAlt = "United States flag";
    } else {
        regionLogo = UKLogo
        regionAlt = "United Kingdom flag";
    }

    return (
        <div className="wrapper__footer">
            <footer className="container__footer">
                <div className="wrapper__region_selector">
                    <div className="region_selector">
                    <span className="wrapper__region_logo"><img src={regionLogo} className="region_logo" alt={regionAlt}></img></span>
                    <div>
                        <select onChange={handleChange} id="region_select">
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                        </select>
                    </div>
                    </div>
                    <div className="questions">
                        <p>Questions?</p>
                        <a href="https://support.stitchfix.com/hc/en-us/sections/360006899113">Visit our FAQ</a>
                    </div>
                </div>
                <div className="more_info">
                    <div className="wrapper__btn-round">
                    <button className="btn-round" onClick={handleClick}>More Info {isExpand ? <AiOutlineMinus className="expand_collapse" /> : <AiOutlinePlus className="expand_collapse" />}</button>
                    </div>
                    {isExpand ? 
                    <MoreInfo /> : null}
                </div>
                <div className="wrapper__footer_links">
                    <div className="container__footer_links">
                       <a href="https://www.stitchfix.com/terms" className="footer_link">Terms of Use</a>-
                        <a href="https://www.stitchfix.com/privacy" className="footer_link">Privacy Policy</a>-
                        <a href="https://www.stitchfix.com/supply-chain-information" className="footer_link">Supply Chain Information</a>-
                        <a href="https://www.stitchfix.com/privacy#marketing-companies" className="footer_link">Ad Choices</a>-
                        <a href="https://www.stitchfix.com/sitemap" className="footer_link">Sitemap</a>
                    </div>
                    <p className="trademark">Stitch Fix and Fix are trademarks of Stitch Fix, Inc.</p>
                </div>
            </footer></div>
    )
}