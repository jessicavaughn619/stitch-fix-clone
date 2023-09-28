import './footer.css'
import { useState } from 'react'
import MoreInfo from './MoreInfo'

export default function Footer() {
    const [isExpand, setIsExpand] = useState(false)

    function handleClick() {
        setIsExpand(isExpand => !isExpand)
    }

    return (
        <div className="wrapper__footer">
            <footer className="container__footer">
                <div className="region_selector">
                    <div className="selector_dropdown">
                        Dropdown
                    </div>
                    <div className="questions">
                        <p>Questions?</p>
                        <a href="https://support.stitchfix.com/hc/en-us/sections/360006899113">Visit our FAQ</a>
                    </div>
                </div>
                <div className="more_info">
                    <div className="wrapper__btn-round">
                    <button className="btn-round" onClick={handleClick}>More Info {isExpand ? '-' : '+'}</button>
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