import './lookYourBest.css'
import data from './lookYourBestData'
import headerData from './lookYourBestHeaderData'
import { useLocation } from 'react-router-dom'

export default function LookYourBest() {
    const location = useLocation()

    let headerText;
    let headerObject;
    
    switch (location.pathname) {
      case "/women":
        headerObject = headerData.find(item => item.style === "women");
        break;
      case "/men":
        headerObject = headerData.find(item => item.style === "men");
        break;
      default:
        headerObject = headerData.find(item => item.style === "home");
        break;
    }
    
    headerText = headerObject.content;

    return (
        <div className="wrapper__lookYourBest">
            <div className="container__lookYourBest">
                <div className="lookYourBest_info">
                    <h2>{headerText}</h2>
                </div>
                <div className="wrapper__lookYourBest_icons">
                <section className="container__lookYourBest_icons">
                <div className="lookYourBest_grid_container">
                {data.map(data => 
                    <div className="lookYourBest_grid_item" key={data.id}>
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