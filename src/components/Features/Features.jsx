import { features } from "../../utils/constants.js";
import FeatureCard from "./FeatureCard.jsx";
import "./Features.css";

function Features() {
  return (
    <section className="section features" id="features">
      <div className="section__heading">
        <p className="eyebrow">Platform capabilities</p>
        <h2>Built for clear air decisions</h2>
      </div>
      <div className="features__grid">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default Features;
