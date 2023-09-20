import Step from "./Step"

export default function HowItWorks({data}) {

const allSteps = data.map(step => (
        <Step 
            key={step}
            step={step}
        />
    ))
    return (
        <section className="container__how-it-works">
            <h2>How Stitch Fix works</h2>
            <div className="container_steps">
            {allSteps}
            </div>
        </section>
    )
}