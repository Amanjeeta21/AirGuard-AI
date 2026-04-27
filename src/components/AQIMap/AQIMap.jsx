import { Layers, LocateFixed, Minus, Plus } from "lucide-react";
import { cities } from "../../utils/constants.js";
import { getAQIStatus } from "../../utils/aqiCalculator.js";
import "./AQIMap.css";

const roadLines = [
  "M -40 350 C 190 250, 310 210, 520 240 S 830 370, 1180 250",
  "M 90 80 C 220 170, 330 210, 470 190 S 700 80, 940 120",
  "M 280 520 C 390 370, 520 310, 710 320 S 960 420, 1210 340",
  "M 120 430 C 260 400, 390 450, 510 390 S 690 180, 900 230",
  "M 780 -40 C 720 120, 700 250, 790 410 S 930 570, 890 660"
];

const neighborhoods = [
  { name: "North Ridge", x: 16, y: 18 },
  { name: "Green Belt", x: 66, y: 21 },
  { name: "Central Zone", x: 42, y: 48 },
  { name: "Industrial East", x: 72, y: 62 },
  { name: "Lake District", x: 22, y: 72 }
];

function AQIMap() {
  return (
    <section className="section map-section" id="map">
      <div className="section__heading">
        <p className="eyebrow">Map view</p>
        <h2>Google-style AQI city map</h2>
      </div>
      <div className="aqi-map glass reveal" aria-label="Google-style static AQI map with city markers">
        <div className="aqi-map__topbar">
          <div className="aqi-map__search">
            <LocateFixed size={18} />
            <span>AirGuard AQI Map</span>
          </div>
          <button className="aqi-map__layer" type="button" aria-label="Map layers">
            <Layers size={18} />
            Map
          </button>
        </div>

        <svg className="aqi-map__roads" viewBox="0 0 1200 680" aria-hidden="true">
          <path className="aqi-map__river" d="M-20 160 C180 230 250 80 430 130 S660 310 820 210 S1040 90 1220 180" />
          {roadLines.map((line) => (
            <path className="aqi-map__road" d={line} key={line} />
          ))}
          <path className="aqi-map__highway" d="M-30 590 C220 470 390 500 570 440 S880 230 1230 280" />
        </svg>

        <div className="aqi-map__parks" aria-hidden="true">
          <span className="aqi-map__park aqi-map__park--one" />
          <span className="aqi-map__park aqi-map__park--two" />
          <span className="aqi-map__park aqi-map__park--three" />
        </div>

        {neighborhoods.map((place) => (
          <span
            className="aqi-map__label"
            key={place.name}
            style={{ left: `${place.x}%`, top: `${place.y}%` }}
          >
            {place.name}
          </span>
        ))}

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
              <span className="aqi-map__pin" />
              <span className="aqi-map__tooltip">
                <strong>{city.name}</strong>
                <small>
                  {city.aqi} AQI · {status.label}
                </small>
              </span>
            </button>
          );
        })}

        <div className="aqi-map__zoom" aria-label="Map zoom controls">
          <button type="button" aria-label="Zoom in">
            <Plus size={18} />
          </button>
          <button type="button" aria-label="Zoom out">
            <Minus size={18} />
          </button>
        </div>

        <div className="aqi-map__legend">
          <span><i className="legend-good" /> Good</span>
          <span><i className="legend-moderate" /> Moderate</span>
          <span><i className="legend-risk" /> Risk</span>
        </div>
      </div>
    </section>
  );
}

export default AQIMap;
