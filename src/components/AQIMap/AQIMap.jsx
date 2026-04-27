import { cities } from "../../utils/constants.js";
import { getAQIStatus } from "../../utils/aqiCalculator.js";
import "./AQIMap.css";

function AQIMap() {
  return (
    <section className="section map-section" id="map">
      <div className="section__heading">
        <p className="eyebrow">Static map</p>
        <h2>City air risk view</h2>
      </div>
      <div className="aqi-map glass reveal" aria-label="Static AQI map with city markers">
        <div className="aqi-map__grid" />
        {cities.map((city) => {
          const status = getAQIStatus(city.aqi);
          return (
            <button
              className="aqi-map__marker"
              key={city.name}
              style={{ left: `${city.x}%`, top: `${city.y}%`, "--marker-color": status.color }}
              type="button"
              aria-label={`${city.name}: ${city.aqi} AQI, ${status.label}`}
            >
              <span className="aqi-map__tooltip">
                <strong>{city.name}</strong>
                <small>{city.aqi} AQI</small>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default AQIMap;
