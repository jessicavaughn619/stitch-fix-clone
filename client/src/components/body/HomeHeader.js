import './homeheader.css'
import IMG1 from '../../images/fashion-woman-1.jpg'
import IMG2 from '../../images/fashion-woman-2.jpg'

export default function HomeHeader() {
    return (
        <div className="container__homeheader">
            <div className="container_content">
                <h2>Personalized fall finds, thanks to your Stylist.</h2>
                <button className="btn">TAKE YOUR STYLE QUIZ</button>
            </div>
            <div className="container_image">
                <img src={IMG1} className="fashion-image" alt="fashionable woman"/>
                <img src={IMG2} className="fashion-image" alt="fashionable woman"/>
            </div>
        </div>
    )
}