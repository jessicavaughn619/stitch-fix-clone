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
    if (region === "US") {
        regionLogo = USLogo
    } else {
        regionLogo = UKLogo
    }

    return (
        <div className="wrapper__footer">
            <footer className="container__footer">
                <div className="wrapper__region_selector">
                    <div className="region_selector">
                    <span className="wrapper__region_logo"><img src={regionLogo} className="region_logo"></img></span>
                    <div>
                        <select onChange={handleChange} id="region_select">
                            <option selected value="US">United States</option>
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
                <div className="footer_links">
                Footer Links
                </div>
            </footer></div>
    )
}