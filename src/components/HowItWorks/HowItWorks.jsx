import { steps } from "../../utils/constants.js";
import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="section how">
      <div className="section__heading">
        <p className="eyebrow">Workflow</p>
        <h2>From reading to recommendation</h2>
      </div>
      <div className="how__steps reveal">
        {steps.map((step, index) => (
          <article className="how__step" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
