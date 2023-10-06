import './lookYourBest.css'
import data from './lookYourBestData'
import { useLocation } from 'react-router-dom'

export default function LookYourBest() {
    const location = useLocation()

    let headerObject;
    
    switch (location.pathname) {
      case "/women":
        headerObject = data.find(item => item.style === "women");
        break;
      case "/men":
        headerObject = data.find(item => item.style === "men");
        break;
      default:
        headerObject = data.find(item => item.style === "home");
        break;
    }
    
    const { title, steps } = headerObject;

    return (
        <div className="wrapper__look_your_best">
            <div className="container__look_your_best">
                <div className="look_your_best_info">
                    <h2>{title}</h2>
                </div>
                <div className="wrapper__look_your_best_icons">
                <section className="container__look_your_best_icons">
                <div className="look_your_best_grid_container">
                {steps.map(step => 
                    <div className="look_your_best_grid_item" key={step.id}>
                        <div className="icon">
                            <img src={step.icon} alt={step.heading}></img>
                        </div>
                        <p className="icon_heading">{step.heading}</p>
                        <p className="icon_content">{step.content}</p>
                    </div>
                )}
                </div>
                </section>
                </div>
            </div>
        </div>
    )
}