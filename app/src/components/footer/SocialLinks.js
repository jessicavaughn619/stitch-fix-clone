import './footer.css'
import Social from './Social'
import socialData from './socialData'
import { useState } from 'react'

export default function SocialLinks() {
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

    const allSocials = socialData.map(item => (
        <Social 
            key={item.id}
            item={item}
            onSetIsSocialExpand={handleSetIsSocialExpand}
            activeSocial={activeSocial}
        />
    ))

    return (
        <div className="wrapper__social_links">
            <div className="container__social_links">
                <ul className={`social_links ${isSocialExpand ? "opened" : "closed"}`}>
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
        </div>
    )
}