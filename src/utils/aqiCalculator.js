export function getAQIStatus(value) {
  if (value <= 50) {
    return {
      label: "Good",
      color: "#22c55e",
      range: "0-50",
      message: "Air quality is ideal for outdoor activity."
    };
  }

  if (value <= 100) {
    return {
      label: "Moderate",
      color: "#facc15",
      range: "51-100",
      message: "Air is acceptable, but sensitive users should stay aware."
    };
  }

  if (value <= 150) {
    return {
      label: "Unhealthy for Sensitive Groups",
      color: "#fb923c",
      range: "101-150",
      message: "People with respiratory concerns should reduce heavy activity."
    };
  }

  return {
    label: "Unhealthy",
    color: "#ef4444",
    range: "151+",
    message: "Limit outdoor exposure and use filtration where possible."
  };
}

export function getRandomAQI(min = 24, max = 188) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
