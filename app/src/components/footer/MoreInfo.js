import './footer.css'
import serviceData from './serviceData'
import companyData from './companyData'
import faqData from './faqData'
import {useState, useEffect} from 'react'

export default function MoreInfo() {
    const [isExpand, setIsExpand] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 560px)');
    
        const handleMediaChange = (e) => {
          setIsExpand(e.matches);
        };
    
        mediaQuery.addEventListener('change', handleMediaChange);
    
        setIsExpand(mediaQuery.matches);
    
        return () => {
          mediaQuery.removeEventListener('change', handleMediaChange);
        };
      }, []);

    const allService = serviceData.map(item => (
        <a href={item.link} key={item.title}>{item.title}</a>
    ))

    const allCompany = companyData.map(item => (
        <a href={item.link} key={item.title}>{item.title}</a>
    ))

    const allFaq = faqData.map(item => (
        <a href={item.link} key={item.title}>{item.title}</a>
    ))

    return (
            <div className="container__service_company_links">
                <div className="title">
                <p>The Service</p>
                <div className="all_links">{allService}</div>
                </div>
                <div className="title">
                <p>The Company</p>
                <div className="all_links">{allCompany}</div>
                </div>
                {isExpand ? <div className="title">
                <p>Questions?</p>
                <div className="all_links">{allFaq}</div>
                </div> : null}
            </div>
    )
}