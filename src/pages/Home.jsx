import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import AQIWidget from "../components/AQIWidget/AQIWidget.jsx";
import Features from "../components/Features/Features.jsx";
import HowItWorks from "../components/HowItWorks/HowItWorks.jsx";
import AQIMap from "../components/AQIMap/AQIMap.jsx";
import DashboardPreview from "../components/DashboardPreview/Dashboard.jsx";
import HealthTips from "../components/HealthTips/HealthTips.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Chatbot from "../components/Chatbot/Chatbot.jsx";
import { useAQI } from "../hooks/useAQI.js";
import { useTheme } from "../hooks/useTheme.js";

function Home() {
  const theme = useTheme();
  const aqi = useAQI();

  return (
    <div className="app-shell">
      <Navbar theme={theme.theme} toggleTheme={theme.toggleTheme} />
      <main>
        <Hero />
        <AQIWidget {...aqi} />
        <Features />
        <HowItWorks />
        <AQIMap />
        <DashboardPreview />
        <HealthTips status={aqi.status} city={aqi.city} />
        <Contact />
      </main>
      <Footer />
      <Chatbot currentAQI={aqi} />
    </div>
  );
}

export default Home;
