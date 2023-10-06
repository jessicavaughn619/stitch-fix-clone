import './faqs.css'
import FaqBullet from './FaqBullet'
import data from './faqData'
import { useLocation } from 'react-router'

export default function Faqs() {
    const location = useLocation();

    let faqData;
    switch (location.pathname) {
      case "/women":
        faqData = data.find(item => item.style === "women");
        break;
      case "/men":
        faqData = data.find(item => item.style === "men");
        break;
      default:
        faqData = data.find(item => item.style === "home");
        break;
    }

    const { faqs } = faqData;
    
    const allFaqs = faqs.map(item => (
        <FaqBullet 
            key={item.id}
            faq={item}
        />
    ))
    return (
        <div className="wrapper__faqs">
            <section className="container__faqs">
                <div className="faqs_info">
                    <h4>FAQs</h4>
                </div>
                <div className="faqs_list">
                    {allFaqs}
                </div>
            </section>
        </div>
    )
}