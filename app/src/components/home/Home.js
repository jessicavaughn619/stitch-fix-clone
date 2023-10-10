import HomeHeader from "./homeHeader/HomeHeader";
import HowItWorks from "./howItWorks/HowItWorks";
import Brands from "./brands/Brands";
import Testimonials from "./testimonials/Testimonials";
import Styles from "./styles/Styles";
import LookYourBest from './lookYourBest/LookYourBest'
import GetStarted from "./getStarted/GetStarted";
import Faqs from "./faqs/Faqs";
import { useLocation } from "react-router-dom";
import KidsLookYourBest from "./kidsLookYourBest/KidsLookYourBest";

export default function Home({data}) {
    const location = useLocation()

    return (
        <>
        <HomeHeader data={data}/>
        <HowItWorks data={data.howItWorks}/>
        {location.pathname === "/kids" ? <KidsLookYourBest /> : null}
        <Styles />
        <Brands data={data.brands}/>
        {location.pathname === "/" || location.pathname === "/women" ? <Testimonials /> : null}
        {location.pathname === "/kids" ? null : <LookYourBest />}
        <GetStarted />
        {location.pathname === "/kids" ? null : <Faqs />}
        </>
    )
}