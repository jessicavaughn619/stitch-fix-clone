import HomeHeader from "./homeHeader/HomeHeader";
import HowItWorks from "./howItWorks/HowItWorks";
import Brands from "./brands/Brands";
import Testimonials from "./Testimonials";
import Styles from "./Styles";

export default function Home({data}) {
    return (
        <>
        <HomeHeader data={data}/>
        <HowItWorks data={data.howItWorks}/>
        <Styles />
        <Brands />
        <Testimonials />
        </>
    )
}