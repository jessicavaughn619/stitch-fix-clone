import './brands.css'
import brandsData from './brandsData'
import headerData from './brandsHeaderData';
import { useLocation } from 'react-router-dom'

export default function Brands() {
    const location = useLocation();

    let data;

    switch(location.pathname) {
        case "/women":
            data = brandsData.filter(item => (item.styles).includes("women"));
            break;
        case "/men":
            data = brandsData.filter(item => (item.styles).includes("men"));
            break;
        case "/kids":
            data = brandsData.filter(item => (item.styles).includes("kids"));
            break;
        default:
            data = brandsData.filter(item => (item.styles).includes("home"));
            break;
        }


    const allBrands = data.map(item => (
        <div key={item.id} className="wrapper__brand">
            <img src={item.logo} className="brand_logo" alt={`Brand logo for ${item.logo}`}></img>
        </div>
    ))

    return (
        <div className="wrapper__brands">
            <section className="container__brands">
                <div className="brands_info">
                    <h2>Let us find your faves from 1000+ brands & styles</h2>
                    <p>We carry women's sizes XS-3X including Plus, Petite and Maternity; men's sizes XS-3XL including Big & Tall and kids sizes 2T-18.</p>
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