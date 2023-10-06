import './moreInfo.css'
import { useState } from 'react'
import serviceData from './serviceData'
import companyData from './companyData'
import socialData from './socialData'
import download from '../../images/app_store.png'

export default function MoreInfo() {
    const [isSocialExpand, setIsSocialExpand] = useState(false)

    function handleClick() {
        setIsSocialExpand(isSocialExpand => !isSocialExpand)
    }

    const allService = serviceData.map(item => (
        <a href={item.link} key={item.title}>{item.title}</a>
    ))

    const allCompany = companyData.map(item => (
        <a href={item.link} key={item.title}>{item.title}</a>
    ))

    const allSocial = socialData.map(item => (
        <li key={item.id} onClick={handleClick}>
            <button>{item.icon}</button>
        </li>
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
                <ul className="social_links">
                    {allSocial}
                </ul>
                {isSocialExpand ? 
                <ul className="social_business_links">
                Handle
                </ul> : null}
            </div>
            <div className="wrapper__download">
                <img src={download} className="download_icon" alt="Link to download Stitch Fix app from the App Store"></img>
            </div>
        </div>
    )
}