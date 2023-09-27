import './faqs.css'

export default function FaqBullet({ faq }) {
    const { question, answer, moreInfoTitle, moreInfoLink } = faq

    return (
        <div className="faq_bullet">
            <p className="expand_collapse_icon">+</p>
            <p className="question">{question}</p>
        </div>
    )
}