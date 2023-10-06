import './faqs.css'
import { useState } from 'react'

export default function FaqBullet({ faq }) {
    const [isExpand, setIsExpand] = useState(false)
    const { question, answer, moreInfoTitle, moreInfoLink } = faq

    function handleClick() {
        setIsExpand(isExpand => !isExpand)
    }

    return (
        <div className="faq_bullet">
            <div className="faq_bullet_collapse">
            <p className="expand_collapse_icon" onClick={handleClick}>{isExpand ? "-" : "+"}</p>
            <p className="question">{question}</p>
            </div>
            {isExpand ? 
            <div className="faq_bullet_expand">
            <p className="answer">{answer}</p>
            {moreInfoTitle ? <div className="more_info"><a href={moreInfoLink} id="more_info">{moreInfoTitle}</a></div> : null}
            </div> : null}
        </div>
    )
}