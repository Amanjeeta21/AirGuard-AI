import { Layers, LocateFixed, Minus, Navigation, Plus, Search } from "lucide-react";
import { cities } from "../../utils/constants.js";
import { getAQIStatus } from "../../utils/aqiCalculator.js";
import "./AQIMap.css";

const roadLines = [
  {
    name: "Outer Ring Road",
    path: "M -40 350 C 190 250, 310 210, 520 240 S 830 370, 1180 250",
    x: 57,
    y: 39,
    rotation: 8
  },
  {
    name: "Airport Road",
    path: "M 90 80 C 220 170, 330 210, 470 190 S 700 80, 940 120",
    x: 31,
    y: 24,
    rotation: 10
  },
  {
    name: "Green Line Avenue",
    path: "M 280 520 C 390 370, 520 310, 710 320 S 960 420, 1210 340",
    x: 59,
    y: 58,
    rotation: -8
  },
  {
    name: "Station Road",
    path: "M 120 430 C 260 400, 390 450, 510 390 S 690 180, 900 230",
    x: 38,
    y: 53,
    rotation: -28
  },
  {
    name: "Metro Corridor",
    path: "M 780 -40 C 720 120, 700 250, 790 410 S 930 570, 890 660",
    x: 66,
    y: 45,
    rotation: 68
  }
];

const neighborhoods = [
  { name: "North Ridge", x: 16, y: 18, type: "district" },
  { name: "Green Belt", x: 66, y: 21, type: "park" },
  { name: "Central Zone", x: 42, y: 48, type: "district" },
  { name: "Industrial East", x: 72, y: 62, type: "district" },
  { name: "Lake District", x: 22, y: 72, type: "water" },
  { name: "Riverfront", x: 76, y: 29, type: "water" },
  { name: "Tech Park", x: 51, y: 67, type: "poi" },
  { name: "City Hospital", x: 34, y: 33, type: "poi" },
  { name: "University Area", x: 14, y: 51, type: "poi" },
  { name: "Railway Junction", x: 81, y: 48, type: "poi" },
  { name: "Market Square", x: 47, y: 27, type: "poi" }
];

const mapPois = [
  { name: "Air Sensor A1", x: 39, y: 58 },
  { name: "Eco Park", x: 19, y: 27 },
  { name: "Clean Air Clinic", x: 35, y: 38 },
  { name: "Metro Station", x: 67, y: 52 },
  { name: "City Lake", x: 24, y: 79 },
  { name: "Industrial Stack", x: 77, y: 66 },
  { name: "Public School", x: 58, y: 28 }
];

function AQIMap() {
  return (
    <section className="section map-section" id="map">
      <div className="section__heading">
        <p className="eyebrow">Map view</p>
        <h2>Google-style AQI city map</h2>
      </div>
      <div className="aqi-map glass reveal" aria-label="Google-style static AQI map with named places">
        <div className="aqi-map__topbar">
          <div className="aqi-map__search">
            <Search size={18} />
            <span>Search AirGuard AQI Map</span>
          </div>
          <button className="aqi-map__layer" type="button" aria-label="Map layers">
            <Layers size={18} />
            Map
          </button>
        </div>

        <svg className="aqi-map__roads" viewBox="0 0 1200 680" aria-hidden="true">
          <path className="aqi-map__river" d="M-20 160 C180 230 250 80 430 130 S660 310 820 210 S1040 90 1220 180" />
          {roadLines.map((road) => (
            <path className="aqi-map__road" d={road.path} key={road.name} />
          ))}
          <path className="aqi-map__highway" d="M-30 590 C220 470 390 500 570 440 S880 230 1230 280" />
        </svg>

        {roadLines.map((road) => (
          <span
            className="aqi-map__road-label"
            key={`${road.name}-label`}
            style={{ left: `${road.x}%`, top: `${road.y}%`, transform: `rotate(${road.rotation}deg)` }}
          >
            {road.name}
          </span>
        ))}

        <div className="aqi-map__parks" aria-hidden="true">
          <span className="aqi-map__park aqi-map__park--one" />
          <span className="aqi-map__park aqi-map__park--two" />
          <span className="aqi-map__park aqi-map__park--three" />
        </div>

        {neighborhoods.map((place) => (
          <span
            className={`aqi-map__label aqi-map__label--${place.type}`}
            key={place.name}
            style={{ left: `${place.x}%`, top: `${place.y}%` }}
          >
            {place.name}
          </span>
        ))}

        {mapPois.map((poi) => (
          <span className="aqi-map__poi" key={poi.name} style={{ left: `${poi.x}%`, top: `${poi.y}%` }}>
            <i />
            {poi.name}
          </span>
        ))}

        {cities.map((city) => {
          const status = getAQIStatus(city.aqi);
          return (
            <div
              className="aqi-map__city"
              key={city.name}
              style={{ left: `${city.x}%`, top: `${city.y}%`, "--marker-color": status.color }}
            >
              <button
                className="aqi-map__marker"
                type="button"
                aria-label={`${city.name}: ${city.aqi} AQI, ${status.label}`}
              >
                <span className="aqi-map__pin" />
                <span className="aqi-map__tooltip">
                  <strong>{city.name}</strong>
                  <small>
                    {city.aqi} AQI - {status.label}
                  </small>
                </span>
              </button>
              <span className="aqi-map__city-label">{city.name}</span>
            </div>
          );
        })}

        <button className="aqi-map__locate" type="button" aria-label="Find my location">
          <LocateFixed size={18} />
        </button>

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

        <div className="aqi-map__scale">
          <span>2 km</span>
        </div>

        <div className="aqi-map__compass" aria-hidden="true">
          <Navigation size={18} />
        </div>
      </div>
    </section>
  );
}

export default AQIMap;
