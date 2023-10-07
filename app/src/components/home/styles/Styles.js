import './styles.css'
import data from './stylesData'
import { useLocation } from 'react-router-dom'

export default function Styles() {
    const location = useLocation();

    let stylesData;
    
    switch (location.pathname) {
      case "/women":
        stylesData = data.find(item => item.style === "women");
        break;
      case "/men":
        stylesData = data.find(item => item.style === "men");
        break;
      default:
        stylesData = data.find(item => item.style === "home");
        break;
    }
    
    const { title, content, slides } = stylesData;
    return (
        <div className="wrapper__styles">
        <section className="container__styles">
            <div className="styles_info">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
            <div className="wrapper__styles_swiper">
                <div className="container__styles_swiper">
                    <swiper-container slides-per-view="2">
                        {stylesData.slides.map(slide => (
                            <swiper-slide 
                            key={slide.id}>
                            <div>
                            <a href={slide.link}>
                            <div>
                            <img src={slide.image} alt={slide.imageAlt}></img>
                            </div>
                            </a>
                            <div>
                                <a href={slide.link}>
                                    <span>{slide.style}</span>
                                    <svg></svg>
                                </a>
                            </div>
                            </div>
                            </swiper-slide>
                        ))}
                    </swiper-container>
                </div>
            </div>
        </section>
        </div>
    )
}