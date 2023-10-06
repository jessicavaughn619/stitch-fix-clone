import './faqs.css'
import FaqBullet from './FaqBullet'

export default function Faqs({data}) {
    const allFaqs = data.map(item => (
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