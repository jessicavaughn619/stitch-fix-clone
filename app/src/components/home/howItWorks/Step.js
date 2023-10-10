import './howItWorks.css'
import { useLocation } from 'react-router-dom';

export default function Step({step}) {
    const { image, imgAlt, heading, detail } = step;
    const location = useLocation();

    return (
        <div className="container_image_content">
        {image ? <div className="image-wrapper">
            <img src={image} alt={imgAlt}></img>
        </div> : null}
        <p className={location.pathname === "/kids" ? "kids_heading" : "heading"}>{heading}</p>
        <p className={location.pathname === "/kids" ? "kids_detail" : "detail"}>{detail}</p>
    </div>
    )
}