# AirGuard AI

AirGuard AI is a fully responsive React frontend for an AI-powered air quality monitoring platform. It presents simulated AQI readings, city risk markers, pollutant charts, health guidance, and a static chatbot assistant in a futuristic SaaS-style interface.

This project is frontend-only. It does not use any backend, API, database, or real-time air quality service.

## Features

- Responsive landing page built with React and Vite
- Dark and light mode toggle
- Simulated AQI widget with city selector
- AQI status logic for Good, Moderate, Unhealthy for Sensitive Groups, and Unhealthy ranges
- Static city AQI map with interactive markers
- Dashboard preview with line and bar charts
- Health tips based on the selected AQI status
- Static chatbot assistant with rule-based AQI guidance
- Contact form UI with no backend submission
- Clean component-based folder structure

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Recharts
- Lucide React icons

## Project Structure

```text
src/
├── assets/
│   ├── animations/
│   ├── icons/
│   └── images/
├── components/
│   ├── AQIMap/
│   ├── AQIWidget/
│   ├── Chatbot/
│   ├── Contact/
│   ├── DashboardPreview/
│   ├── Features/
│   ├── Footer/
│   ├── HealthTips/
│   ├── Hero/
│   ├── HowItWorks/
│   └── Navbar/
├── hooks/
│   ├── useAQI.js
│   └── useTheme.js
├── pages/
│   ├── DashboardPage.jsx
│   └── Home.jsx
├── styles/
│   ├── global.css
│   └── variables.css
├── utils/
│   ├── aqiCalculator.js
│   └── constants.js
├── App.jsx
└── main.jsx
```

## Getting Started

Clone the repository:

```powershell
git clone https://github.com/Amanjeeta21/AirGuard-AI.git
cd AirGuard-AI
```

Install dependencies:

```powershell
npm.cmd install
```

Start the development server:

```powershell
npm.cmd run dev
```

Open the local URL shown in the terminal. By default, Vite usually runs at:

```text
http://localhost:5173
```

## Available Scripts

```powershell
npm.cmd run dev
```

Runs the app in development mode.

```powershell
npm.cmd run build
```

Creates a production build in the `dist/` folder.

```powershell
npm.cmd run preview
```

Previews the production build locally.

## Notes

- All AQI values are dummy/static or randomly simulated.
- The chatbot is a frontend-only rule-based assistant.
- The contact form is UI-only and does not submit data anywhere.
- The `dist/` and `node_modules/` folders are ignored by Git.

## License

This project is for educational and portfolio use.
