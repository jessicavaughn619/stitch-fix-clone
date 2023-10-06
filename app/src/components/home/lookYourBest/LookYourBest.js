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
        <div className="wrapper__lookYourBest">
            <div className="container__lookYourBest">
                <div className="lookYourBest_info">
                    <h2>{title}</h2>
                </div>
                <div className="wrapper__lookYourBest_icons">
                <section className="container__lookYourBest_icons">
                <div className="lookYourBest_grid_container">
                {steps.map(step => 
                    <div className="lookYourBest_grid_item" key={step.id}>
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