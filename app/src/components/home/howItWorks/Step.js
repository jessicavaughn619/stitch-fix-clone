import './howItWorks.css'

export default function Step({step}) {
    const { image, imgAlt, heading, detail } = step;

    return (
        <div className="container_image_content">
        {image ? <div className="image-wrapper">
            <img src={image} alt={imgAlt}></img>
        </div> : null}
        <p className="heading">{heading}</p>
        <p className="detail">{detail}</p>
    </div>
    )
}