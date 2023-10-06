import './testimonials.css'
import data from './testimonialData'
import { useLocation } from 'react-router-dom'
import TestimonialSlide from './TestimonialSlide';

export default function Testimonials() {
    const location = useLocation();

    let headerObject;
    
    switch (location.pathname) {
      case "/women":
        headerObject = data.find(item => item.style === "women");
        break;
      default:
        headerObject = data.find(item => item.style === "home");
        break;
    }

    const { title, content, image, imageAlt, testimonials } = headerObject;

    const allTestimonials = testimonials.map(testimonial => (
        <TestimonialSlide 
            key={testimonial.id}
            testimonial={testimonial}
        />
    ))

    return (
        <div className="wrapper__testimonials">
        <section className="container__testimonials">
            <div className="container__image_info">
            <div className="wrapper__image">
                <img src={image} alt={imageAlt}/>
            </div>
            <div className="testimonials_info">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
            </div>
            <div className="testimonials_swiper">
                {allTestimonials}
            </div>
        </section>
        </div>
    )
}