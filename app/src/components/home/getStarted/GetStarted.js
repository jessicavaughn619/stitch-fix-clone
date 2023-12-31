import './getStarted.css'
import data from './getStartedData'
import {useLocation} from 'react-router-dom'

export default function GetStarted() {
    const location = useLocation();

    let dataObject;
    
    switch (location.pathname) {
      case "/women":
        dataObject = data.find(item => item.style === "women");
        break;
      case "/men":
        dataObject = data.find(item => item.style === "men");
        break;
        case "/kids":
            dataObject = data.find(item => item.style === "kids");
            break;
      default:
        dataObject = data.find(item => item.style === "home");
        break;
    }

    const { heading, buttonText } = dataObject;

    return (
        <div className="wrapper__get_started">
            <section className={location.pathname === "/kids" ? "container__get_started_kids" : "container__get_started"}>
                <div className="get_started_info">
                    <h2>{heading}</h2>
                </div>
                <a href="https://www.stitchfix.com/signup">
                <button className="btn">{buttonText}</button>
                </a>
            </section>
        </div>
    )
}