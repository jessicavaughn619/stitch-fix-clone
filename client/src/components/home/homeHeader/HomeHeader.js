import './homeHeader.css'

export default function HomeHeader({ data }) {
    const { content, image, imageAlt } = data;

    return (
        <div className="container__homeheader">
            <div className="container_content">
                <h2>{content}</h2>
                <button className="btn">TAKE YOUR STYLE QUIZ</button>
            </div>
            <div className="container_image">
                <img src={image} className="fashion-image" alt={imageAlt}/>
            </div>
        </div>
    )
}