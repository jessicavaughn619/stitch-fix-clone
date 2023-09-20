import HomeHeader from "./homeHeader/HomeHeader";
import HowItWorks from "./howItWorks/HowItWorks";
import Brands from "./Brands";
import Testimonials from "./Testimonials";

export default function Home({data}) {
    return (
        <>
        <HomeHeader data={data}/>
        <HowItWorks data={data.howItWorks}/>
        <Brands />
        <Testimonials />
        </>
    )
}