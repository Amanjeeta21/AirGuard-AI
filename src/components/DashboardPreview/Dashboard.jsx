import { AQILineChart, PollutantBarChart } from "./Charts.jsx";
import "./Dashboard.css";

function DashboardPreview() {
  return (
    <section className="section dashboard" id="dashboard">
      <div className="section__heading">
        <p className="eyebrow">Analytics preview</p>
        <h2>Signal-rich dashboard</h2>
      </div>
      <div className="dashboard__grid">
        <article className="chart-panel glass reveal">
          <h3>AQI over time</h3>
          <AQILineChart />
        </article>
        <article className="chart-panel glass reveal">
          <h3>Pollutant levels</h3>
          <PollutantBarChart />
        </article>
      </div>
    </section>
  );
}

export default DashboardPreview;
