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
        <div className="wrapper__getStarted">
            <section className="container__getStarted">
                <div className="getStarted_info">
                    <h2>{heading}</h2>
                </div>
                <button className="btn">{buttonText}</button>
            </section>
        </div>
    )
}