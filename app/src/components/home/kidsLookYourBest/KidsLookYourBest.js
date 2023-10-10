import './kidsLookYourBest.css'
import data from './kidsLookYourBestData'
import IMG1 from './images/kids_style.webp'

export default function KidsLookYourBest() {

    let kidsContent;

    kidsContent = data.find(item => item.style === "kids")

    const { title, steps } = kidsContent;

    return (
        <div className="wrapper__kids_look_your_best">
            <section className="container__kids_look_your_best">
                <div className="wrapper__kids_image">
                    <div className="container__kids_image">
                        <img src={IMG1} alt="A lay down of kid's clothing and shoes from Stitch Fix."></img>
                    </div>
                </div>
                <div className="wrapper__kids_content">
                    <div className="container__kids_content">
                        <div className="kids_content_title">
                            <h2>{title}</h2>
                        </div>
                        <div className="wrapper__kids_content_steps">
                            <div className="kids_content_steps">
                            {steps.map(step => (
                                <div className="content_step" key={step.id}>
                                    <h3>{step.heading}</h3>
                                    <p>{step.content}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}