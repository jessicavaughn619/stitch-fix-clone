import './brands.css'
import brandsData from './brandsData'
import headerData from './brandsHeaderData';
import { useLocation } from 'react-router-dom'

export default function Brands() {
    const location = useLocation();

    let data;
    let headerObject;

    switch(location.pathname) {
        case "/women":
            data = brandsData.filter(item => (item.styles).includes("women"));
            headerObject = headerData.find(item => item.style === "women")
            break;
        case "/men":
            data = brandsData.filter(item => (item.styles).includes("men"));
            headerObject = headerData.find(item => item.style === "men")
            break;
        case "/kids":
            data = brandsData.filter(item => (item.styles).includes("kids"));
            headerObject = headerData.find(item => item.style === "kids")
            break;
        default:
            data = brandsData.filter(item => (item.styles).includes("home"));
            headerObject = headerData.find(item => item.style === "home")
            break;
        }

        const {heading, content} = headerObject;


    const allBrands = data.map(item => (
        <div key={item.id} className="wrapper__brand">
            <img src={item.logo} className="brand_logo" alt={`Brand logo for ${item.logo}`}></img>
        </div>
    ))

    return (
        <div className="wrapper__brands">
            <section className="container__brands">
                <div className="brands_info">
                    <h2>{heading}</h2>
                    <p dangerouslySetInnerHTML={{ __html: content}} />
                </div>
                <div className="wrapper__brands_list">
                <div className={location.pathname === "/kids" ? "container__brands_list_kids" : "container__brands_list"}>
                    {allBrands}
                </div>
                </div>
            </section>
        </div>
    )
}