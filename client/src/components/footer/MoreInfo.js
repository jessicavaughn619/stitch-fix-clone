import './moreInfo.css'

export default function MoreInfo() {
    return (
        <div className="wrapper__more_info">
            <div className="container__service_company_links">
                <div className="service">The Service</div>
                <div className="company">The Company</div>
            </div>
            <div className="social_links">Social Icons</div>
            <div className="download">Download on App Store</div>
        </div>
    )
}