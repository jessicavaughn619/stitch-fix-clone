import RegionSelector from './RegionSelector'
import './footer.css'

export default function MobileRegionFaq() {

    return (
        <div className="wrapper__region_selector">
            <RegionSelector />
        <div className="questions">
            <p>Questions?</p>
            <a href="https://support.stitchfix.com/hc/en-us/sections/360006899113">Visit our FAQ</a>
        </div>
    </div>
    )
}