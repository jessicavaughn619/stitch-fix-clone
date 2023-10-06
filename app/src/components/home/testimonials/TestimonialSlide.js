import './testimonials.css'

export default function TestimonialSlide({ testimonial }) {
    const { content, author } = testimonial
    return (
        <div className="wrapper__testimonial_slide">
        <blockquote className="container__testimonial_slide">
            <p className="testimonial_slide_content">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" 
            xmlns="http://www.w3.org/2000/svg" aria-labelledby="icon703_icon_title" 
            className="quoteIcon" role="img" 
            color="#22bfb0"><title id="icon703_icon_title">Quotation Mark</title>
            <path fill-rule="evenodd" 
            clip-rule="evenodd" d="M2.40002 23.6386C2.40002 28.5072 5.6522 32.4001 10.4348 32.4001C14.661 32.4001 18.087 28.9719 18.087 24.743C18.087 20.514 14.661 17.0858 10.4348 17.0858C9.91491 17.0858 9.40712 17.1377 8.91633 17.2366C10.03 14.0743 12.588 11.2173 15.947 10.4447V5.6001C10.243 6.21856 2.40002 11.4755 2.40002 23.6386ZM29.9478 17.0858C29.4659 17.0858 28.9943 17.1304 28.537 17.2157C29.6546 14.0617 32.2087 11.2156 35.5603 10.4447V5.6001C29.8563 6.21856 22.0134 11.4755 22.0134 23.6386C22.0134 28.4247 25.7217 32.4001 29.9478 32.4001C34.174 32.4001 37.6 28.9719 37.6 24.743C37.6 20.514 34.174 17.0858 29.9478 17.0858Z" 
            fill="#22bfb0"></path></svg>
            {content}</p>
            <cite className="testimonial_slide_citation">—{author}</cite>
        </blockquote>
        </div>
    )
}