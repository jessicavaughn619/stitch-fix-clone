export default function Step({step}) {
    const { image, heading, detail } = step;

    return (
        <div className="container_image_content">
        <div className="image-wrapper">
            <img src={image} alt={step}></img>
        </div>
        <p className="heading">{heading}</p>
        <p className="detail">{detail}</p>
    </div>
    )
}