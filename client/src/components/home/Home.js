import HomeHeader from "./homeHeader/HomeHeader";
import HowItWorks from "./howItWorks/HowItWorks";
import Brands from "./brands/Brands";
import Testimonials from "./testimonials/Testimonials";
import Styles from "./styles/Styles";
import LookYourBest from './lookYourBest/LookYourBest'
import GetStarted from "./getStarted/GetStarted";

export default function Home({data}) {
    return (
        <>
        <HomeHeader data={data}/>
        <HowItWorks data={data.howItWorks}/>
        <Styles />
        <Brands />
        <Testimonials />
        <LookYourBest />
        <GetStarted />
        </>
    )
}