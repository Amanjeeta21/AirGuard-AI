import Navbar from "../components/Navbar/Navbar.jsx";
import DashboardPreview from "../components/DashboardPreview/Dashboard.jsx";
import AQIWidget from "../components/AQIWidget/AQIWidget.jsx";
import HealthTips from "../components/HealthTips/HealthTips.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { useAQI } from "../hooks/useAQI.js";
import { useTheme } from "../hooks/useTheme.js";

function DashboardPage() {
  const theme = useTheme();
  const aqi = useAQI();

  return (
    <div className="app-shell">
      <Navbar theme={theme.theme} toggleTheme={theme.toggleTheme} />
      <main className="dashboard-page">
        <AQIWidget {...aqi} />
        <DashboardPreview />
        <HealthTips status={aqi.status} city={aqi.city} />
      </main>
      <Footer />
    </div>
  );
}

export default DashboardPage;
