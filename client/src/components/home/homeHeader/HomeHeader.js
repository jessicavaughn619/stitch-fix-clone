import './homeHeader.css'

export default function HomeHeader({ data }) {
    const { content, image, imageAlt } = data;

    return (
        <div className="container__homeheader">
            <div className="container_content">
                <h1 className="content_title">{content}</h1>
                <button className="btn">Take your style quiz</button>
            </div>
            <div className="container_image">
                <img src={image} className="fashion-image" alt={imageAlt}/>
            </div>
        </div>
    )
}