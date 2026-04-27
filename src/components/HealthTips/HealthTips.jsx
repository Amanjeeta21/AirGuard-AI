import { tipsByStatus } from "../../utils/constants.js";
import "./HealthTips.css";

function HealthTips({ status, city }) {
  const tips = tipsByStatus[status.label] || tipsByStatus.Good;

  return (
    <section className="section health">
      <div className="section__heading">
        <p className="eyebrow">Health guidance</p>
        <h2>Recommended actions for {city}</h2>
      </div>
      <div className="health__grid">
        {tips.map((tip) => (
          <article className="health__tip glass reveal" key={tip}>
            <span style={{ backgroundColor: status.color }} />
            <p>{tip}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HealthTips;
