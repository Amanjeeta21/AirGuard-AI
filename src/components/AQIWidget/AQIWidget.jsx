import { RefreshCw } from "lucide-react";
import "./AQIWidget.css";

function AQIWidget({ city, value, status, cities, selectCity, refreshAQI }) {
  return (
    <section className="section monitor" id="monitor">
      <div className="section__heading">
        <p className="eyebrow">Live simulation</p>
        <h2>AQI Monitor</h2>
      </div>

      <div className="aqi-card glass reveal" style={{ "--aqi-color": status.color }}>
        <div className="aqi-card__controls">
          <label htmlFor="city">City</label>
          <select id="city" value={city} onChange={(event) => selectCity(event.target.value)}>
            {cities.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <button className="icon-button" type="button" onClick={refreshAQI} aria-label="Generate new AQI value">
            <RefreshCw size={18} />
          </button>
        </div>

        <div className="aqi-card__value">
          <span>{value}</span>
          <small>AQI</small>
        </div>

        <div className="aqi-card__status">
          <strong>{status.label}</strong>
          <span>{status.range}</span>
          <p>{status.message}</p>
        </div>
      </div>
    </section>
  );
}

export default AQIWidget;
