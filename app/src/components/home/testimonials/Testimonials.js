import './testimonials.css'
import IMG1 from './images/testimonials.webp'

export default function Testimonials() {
    return (
        <div className="wrapper__testimonials">
        <section className="container__testimonials">
            <div className="container__image_info">
            <div className="wrapper__image">
                <img src={IMG1} alt="A man and women Stitch Fix stylist picking clothing from a rack."/>
            </div>
            <div className="testimonials_info">
                <h2>I'd like to thank my Stylist...</h2>
                <p>...for really getting my style. Your Stylist helps you dress for the changing seasons,
                recommends pieces that fit your unique body and incorporates your input into each piece they send.</p>
            </div>
            </div>
            <div className="testimonials_swiper">
                Swiper
            </div>
        </section>
        </div>
    )
}