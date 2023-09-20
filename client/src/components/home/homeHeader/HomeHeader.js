import './homeHeader.css'

export default function HomeHeader({ data }) {
    const { content, image1, image1Alt, image2, image2Alt} = data;

    return (
        <div className="container__homeheader">
            <div className="container_content">
                <h2>{content}</h2>
                <button className="btn">TAKE YOUR STYLE QUIZ</button>
            </div>
            <div className="container_image">
                <img src={image1} className="fashion-image" alt={image1Alt}/>
                <img src={image2} className="fashion-image" alt={image2Alt}/>
            </div>
        </div>
    )
}