import './faqs.css'
import { useState } from 'react'

export default function FaqBullet({ faq }) {
    const [isExpand, setIsExpand] = useState(false)
    const { question, answer, moreInfoTitle, moreInfoLink } = faq

    function handleClick() {
        setIsExpand(isExpand => !isExpand)
    }

    return (
        <div>
            <div className="faq_bullet_collapse">
            <div className="wrapper__expand_collapse_button">
            <button className="expand_collapse_button" onClick={handleClick}>
                {isExpand ? 
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M2.23999 7.30005H7.99999H13.76V8.70005H7.99999H2.23999V7.30005Z" fill="#25282d"></path></svg> : 
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M7.29999 7.29999V2.23999H8.69999V7.29999H13.76V8.69999H8.69999V13.76H7.29999V8.69999H2.23999V7.29999H7.29999Z" fill="#25282d"></path></svg>}
            </button>
            </div>
            <div className="wrapper__question">
                <h3 className="question">{question}</h3>
            </div>
            {isExpand ? 
            <div className="faq_bullet_expand">
            <div className="wrapper__answer">
                <p className="answer">{answer}</p>
            </div>
            {moreInfoTitle ? <div className="faq_more_info">
            <a href={moreInfoLink} className="more_info_link">
            <span className="more_info_link_content">
            {moreInfoTitle}
            </span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="icon1223_icon_title" aria-hidden="true" color="#00625d"><title id="icon1223_icon_title">Go to link</title><path fillRule="evenodd" clipRule="evenodd" d="M5.93687 2.09001L6.43288 2.58395L8.94716 5.08781L11.4614 7.59166L11.9596 8.08773L11.4614 8.58374L8.95412 11.0799L6.44687 13.576L5.9508 14.0699L4.96305 13.0778L5.45912 12.5839L7.96637 10.0877L9.97542 8.08759L7.95927 6.07981L5.44499 3.57596L4.94898 3.08201L5.93687 2.09001Z" fill="#00625d"></path></svg>
            </a></div> : null}
            </div> : null}
            </div>
        </div>
    )
}