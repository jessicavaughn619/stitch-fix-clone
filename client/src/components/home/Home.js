import HomeHeader from "./HomeHeader";
import HowItWorks from "./HowItWorks";
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