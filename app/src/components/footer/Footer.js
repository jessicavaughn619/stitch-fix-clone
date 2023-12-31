import './footer.css'
import { useState, useEffect } from 'react'
import MoreInfo from './MoreInfo'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import SocialLinks from './SocialLinks'
import FooterLinks from './FooterLinks'
import MobileRegionFaq from './MobileRegionFaq'
import RegionSelector from './RegionSelector'
import LOGO_DESKTOP from '../header/images/stitch-fix-logo.png'
import download from './images/app_store.png'

export default function Footer() {
    const [isExpand, setIsExpand] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 900px)');
    
        const handleMediaChange = (e) => {
          setIsExpand(e.matches);
        };
    
        mediaQuery.addEventListener('change', handleMediaChange);
    
        setIsExpand(mediaQuery.matches);
    
        return () => {
          mediaQuery.removeEventListener('change', handleMediaChange);
        };
      }, []);

    function handleClick() {
        setIsExpand(isExpand => !isExpand)
    }

    return (
        <div className="wrapper__footer">
            <footer className="container__footer">
                <MobileRegionFaq />
                <div className="toggle_button">
                <div className="wrapper__btn-round">
                    <button className="btn-round" onClick={handleClick}>More Info {isExpand ? <AiOutlineMinus className="expand_collapse" /> : <AiOutlinePlus className="expand_collapse" />}</button>
                </div>
                </div>
                <div className="more_info">
                    {isExpand ? 
                    <div className="content_grid">
                    <div className="logo_region">
                        <span className="wrapper__footer_logo">
                        <img src={LOGO_DESKTOP} alt="Stitch Fix logo"></img>
                        </span>
                        <RegionSelector />
                    </div>
                    <MoreInfo />
                    <SocialLinks />
                    <div className="wrapper__download">
                        <a href="https://itunes.apple.com/app/apple-store/id1022579925?pt=117196399&ct=global_footer&mt=8" target="_blank" rel="noreferrer">
                            <img src={download} className="download_icon" alt="Link to download Stitch Fix app from the App Store"></img>
                        </a>
                    </div>
                    </div> : null}
                </div>
                <FooterLinks />
            </footer></div>
    )
}