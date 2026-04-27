import { ArrowRight, Radar } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__content reveal">
        <p className="eyebrow">AI-powered air quality intelligence</p>
        <h1>AirGuard AI</h1>
        <p className="hero__copy">
          A responsive frontend dashboard for monitoring AQI signals, pollutant trends, and healthier city decisions.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#monitor">
            Start Monitoring <ArrowRight size={18} />
          </a>
          <a className="button button--ghost" href="#dashboard">
            View Dashboard
          </a>
        </div>
      </div>

      <div className="hero__visual reveal" aria-hidden="true">
        <div className="radar">
          <Radar size={72} />
          <span />
          <span />
          <span />
        </div>
        <div className="hero__metric">
          <strong>98.4%</strong>
          <span>signal confidence</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
