import Step from "./Step"
import './howItWorks.css'
import { useLocation } from 'react-router-dom'

export default function HowItWorks({data}) {
    const location = useLocation()

const allSteps = data.map(step => (
        <Step 
            key={step.id}
            step={step}
        />
    ))
    return (
        <div className={location.pathname === "/kids" ? "wrapper__how_it_works_kids" : "wrapper__how_it_works"}>
        <section className={location.pathname === "/kids" ? "container__how_it_works_kids" : "container__how_it_works"}>
            <h2>{location.pathname === "/kids" ? "How it works" : "How Stitch Fix works"}</h2>
            <div className="container_steps">
            {allSteps}
            </div>
        </section>
        </div>
    )
}