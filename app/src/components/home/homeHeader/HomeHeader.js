import './homeHeader.css'

export default function HomeHeader({ data }) {
    const { content, image, imageAlt } = data;

    return (
        <div className="wrapper__homeheader">
        <div className="container__homeheader">
            <div className="container_content">
                <h1 className="content_title">{content}</h1>
                <a href="https://www.stitchfix.com/signup">
                    <button className="btn">Take your style quiz</button>
                </a>
            </div>
            <div className="container_image">
                <img src={image} className="fashion-image" alt={imageAlt}/>
            </div>
        </div>
        </div>
    )
}