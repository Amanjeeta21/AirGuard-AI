import { useMemo, useState } from "react";
import { cities } from "../utils/constants.js";
import { getAQIStatus, getRandomAQI } from "../utils/aqiCalculator.js";

export function useAQI() {
  const [city, setCity] = useState(cities[0].name);
  const [value, setValue] = useState(cities[0].aqi);

  const status = useMemo(() => getAQIStatus(value), [value]);

  function selectCity(nextCity) {
    const selected = cities.find((item) => item.name === nextCity);
    setCity(nextCity);
    setValue(selected?.aqi ?? getRandomAQI());
  }

  function refreshAQI() {
    setValue(getRandomAQI());
  }

  return {
    city,
    value,
    status,
    cities,
    selectCity,
    refreshAQI
  };
}
