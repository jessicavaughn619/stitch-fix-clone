import './footer.css'

export default function Footer() {
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
                    <button className="btn-round">More Info +</button>
                </div>
                <div className="footer_links">
                Footer Links
                </div>
            </footer></div>
    )
}