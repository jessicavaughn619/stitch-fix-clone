import './lookYourBest.css'
import data from './lookYourBestData'

export default function LookYourBest() {
    return (
        <div className="wrapper__lookYourBest">
            <div className="container__lookYourBest">
                <div className="lookYourBest_info">
                    <h2>We make it easy to look your best, all the time</h2>
                </div>
                <div className="wrapper__lookYourBest_icons">
                <section className="container__lookYourBest_icons">
                <div className="lookYourBest_grid_container">
                {data.map(data => 
                    <div className="lookYourBest_grid_item" id={data.id}>
                        <div className="icon">
                            <img src={data.icon} alt={data.heading}></img>
                        </div>
                        <p className="icon_heading">{data.heading}</p>
                        <p className="icon_content">{data.content}</p>
                    </div>
                )}
                </div>
                </section>
                </div>
            </div>
        </div>
    )
}