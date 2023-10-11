import USLogo from '../../images/region/united-states.png'
import UKLogo from '../../images/region/united-kingdom.png'
import './footer.css'
import {useState } from 'react'

export default function RegionSelector() {
    const [region, setRegion] = useState("US")

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
        <div className="region_selector">
        <span className="wrapper__region_logo"><img src={regionLogo} className="region_logo" alt={regionAlt}></img></span>
        <div>
            <select onChange={handleChange} className="region_select">
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
            </select>
        </div>
        </div>
    )
}