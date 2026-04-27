import {
  Activity,
  BrainCircuit,
  CloudSun,
  HeartPulse,
  MapPinned,
  ShieldCheck
} from "lucide-react";

export const navLinks = [
  { label: "Monitor", href: "#monitor" },
  { label: "Features", href: "#features" },
  { label: "Map", href: "#map" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Contact", href: "#contact" }
];

export const cities = [
  { name: "Bengaluru", aqi: 48, x: 52, y: 68 },
  { name: "Delhi", aqi: 168, x: 45, y: 28 },
  { name: "Mumbai", aqi: 82, x: 30, y: 62 },
  { name: "Hyderabad", aqi: 112, x: 50, y: 58 },
  { name: "Chennai", aqi: 73, x: 57, y: 77 }
];

export const features = [
  {
    icon: BrainCircuit,
    title: "AI Pattern Detection",
    text: "Spot pollutant spikes and risk windows from realistic simulated signals."
  },
  {
    icon: Activity,
    title: "Live AQI Simulation",
    text: "Generate fresh dummy AQI values with clear health status mapping."
  },
  {
    icon: MapPinned,
    title: "City Risk Map",
    text: "View hardcoded city markers with visual severity cues and hover details."
  },
  {
    icon: HeartPulse,
    title: "Health Guidance",
    text: "Surface simple recommendations based on the selected AQI category."
  },
  {
    icon: CloudSun,
    title: "Pollutant Trends",
    text: "Compare PM2.5, PM10, NO2, and O3 through dashboard charts."
  },
  {
    icon: ShieldCheck,
    title: "Clean Frontend",
    text: "Static architecture with reusable components and beginner-readable logic."
  }
];

export const steps = [
  "Collect city air readings",
  "Classify AQI risk",
  "Visualize trends",
  "Recommend action"
];

export const aqiTrendData = [
  { time: "06:00", aqi: 42 },
  { time: "09:00", aqi: 58 },
  { time: "12:00", aqi: 92 },
  { time: "15:00", aqi: 118 },
  { time: "18:00", aqi: 101 },
  { time: "21:00", aqi: 74 }
];

export const pollutantData = [
  { name: "PM2.5", value: 62 },
  { name: "PM10", value: 88 },
  { name: "NO2", value: 36 },
  { name: "O3", value: 49 }
];

export const tipsByStatus = {
  Good: ["Open windows for ventilation.", "Enjoy outdoor workouts.", "Keep monitoring evening changes."],
  Moderate: ["Hydrate often.", "Sensitive users should reduce long outdoor sessions.", "Use indoor plants or filtration."],
  "Unhealthy for Sensitive Groups": [
    "Choose lighter exercise indoors.",
    "Wear a mask near traffic-heavy roads.",
    "Keep medication accessible if advised."
  ],
  Unhealthy: ["Avoid heavy outdoor activity.", "Run an air purifier indoors.", "Close windows during peak pollution hours."]
};
