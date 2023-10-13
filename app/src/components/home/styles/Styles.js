import './styles.css'
import data from './stylesData'
import { useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'

export default function Styles() {
    const location = useLocation();
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            navigation: true,
            slidesPerView: 'auto',
            spaceBetween: 8,
            navigation: true,
            injectStyles: [
                `
                .swiper-button-next,
                .swiper-button-prev {
                    background-color: #25282d;
                    background-position: center;
                    background-repeat: no-repeat;
                    color: var(--color-white);
                    border-radius: 10rem;
                    display: inline-block;
                    height: 16px;
                    width: 16px;
                    padding: 1rem;
                    transition: background-color .4s, opacity .4s ease;
                    opacity: 0;
                    outline: none;
                    outline-offset: 0;
                }
                .swiper-button-prev {
                    background-image: url(/arrow.svg);
                    transform: rotate(180deg);
                }
                .swiper-button-next {
                    background-image: url(/arrow.svg);
                }
                .swiper-button-prev:hover,
                .swiper-button-next:hover {
                    background-color: #515762;
                }
                .swiper-button-prev:focus,
                .swiper-button-next:focus {
                    outline: 2px solid #008182;
                    outline-offset: 1px;
                }
                .swiper-button-prev:active,
                .swiper-button-next:active {
                    background-color: #000000;
                }
                .swiper-button-next > svg,
                .swiper-button-prev > svg {
                    display: none;
                }
                .swiper-button-disabled {
                    display: none;
                }
                .swiper-initialized:hover .swiper-button-prev,
                .swiper-initialized:hover .swiper-button-next {
                    opacity: 1;
                }
                `
            ]
        };
        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []); 

    let stylesData;
    
    switch (location.pathname) {
      case "/women":
        stylesData = data.find(item => item.style === "women");
        break;
      case "/men":
        stylesData = data.find(item => item.style === "men");
        break;
    case "/kids":
        stylesData = data.find(item => item.style === "kids");
        break;
      default:
        stylesData = data.find(item => item.style === "home");
        break;
    }
    
    const { title, content } = stylesData;
    return (
        <div className="wrapper__styles">
        <section className="container__styles">
            <div className="styles_info">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
            <div className="wrapper__styles_swiper">
                <div className="container__styles_swiper">
                    <swiper-container ref={swiperRef} init="false" >
                        {stylesData.slides.map(slide => (
                            <swiper-slide 
                            key={slide.id}
                            class="swiper_slide">
                            <div>
                            <a href={slide.link}>
                            <div>
                            <img className={location.pathname === "/" ? "swiper_image_home" : "swiper_image"} src={slide.image} alt={slide.imageAlt}></img>
                            </div>
                            </a>
                            {(location.pathname === "/") ? <div className="styles_label">
                                <a className="styles_link" href={slide.link}>
                                    <span className="styles_link_content">{slide.style}</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" color="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M10.7699 8.69226L6.90066 12.5011L7.88278 13.4988L12.9699 8.49111L13.4767 7.99225L12.9699 7.49339L7.89818 2.5011L6.91608 3.49883L10.7699 7.29226H2.52036V8.69226H10.7699Z" fill="#00625d"></path></svg>
                                </a>
                            </div> : null}
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