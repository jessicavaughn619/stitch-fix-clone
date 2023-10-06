import './moreInfo.css'
import serviceData from './serviceData'
import companyData from './companyData'
import socialData from './socialData'
import download from '../../images/app_store.png'
import Social from './Social'
import { useState } from 'react'

export default function MoreInfo() {
    const [isSocialExpand, setIsSocialExpand] = useState(false)
    const [activeSocial, setActiveSocial] = useState({})

    function handleSetIsSocialExpand(id) {
        if (activeSocial && activeSocial.id === id) {
            setIsSocialExpand(isSocialExpand => !isSocialExpand)
        } else {
            setActiveSocial(socialData.find(item => item.id === id))
            setIsSocialExpand(true)
        }
    }

    const allService = serviceData.map(item => (
        <a href={item.link} key={item.title}>{item.title}</a>
    ))

    const allCompany = companyData.map(item => (
        <a href={item.link} key={item.title}>{item.title}</a>
    ))

    const allSocials = socialData.map(item => (
        <Social 
            key={item.id}
            item={item}
            onSetIsSocialExpand={handleSetIsSocialExpand}
        />
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
                    {allSocials}
                </ul>
                {isSocialExpand && activeSocial.handles ? 
                <ul className="social_handles">
                {activeSocial.handles.map(handle => (
                    <li className="social_handle_li" key={handle.id}>
                        <a className="social_handle_link" href={handle.link}>
                            <span className="social_handle_label">{handle.label}</span>
                            <span className="social_handle_handle">{handle.handle}</span>
                        </a>
                    </li>
                ))}
                </ul> : null}
            </div>
            <div className="wrapper__download">
                <img src={download} className="download_icon" alt="Link to download Stitch Fix app from the App Store"></img>
            </div>
        </div>
    )
}