import './moreInfo.css'
import serviceData from './serviceData'
import companyData from './companyData'
import socialData from './socialData'

export default function MoreInfo() {

    const allService = serviceData.map(item => (
        <a href={item.link} key={item.title}>{item.title}</a>
    ))

    const allCompany = companyData.map(item => (
        <a href={item.link} key={item.title}>{item.title}</a>
    ))

    const allSocial = socialData.map(item => (
        <a href={item.link} key={item.title}>{item.icon}</a>
    ))

    return (
        <div className="wrapper__more_info">
            <div className="container__service_company_links">
                <div className="title">
                <p>The Service</p>
                <div className="all_links">{allService}</div>
                </div>
                <div className="title">
                <p>The Company</p>
                <div className="all_links">{allCompany}</div>
                </div>
            </div>
            <div className="wrapper__social_links">
                <div className="social_links">
                    {allSocial}
                </div>
            </div>
            <div className="download">Download on App Store</div>
        </div>
    )
}