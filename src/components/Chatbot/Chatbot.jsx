import { Bot, MessageCircle, Send, X } from "lucide-react";
import { useMemo, useState } from "react";
import "./Chatbot.css";

const quickPrompts = [
  "What does my AQI mean?",
  "How can I stay safe today?",
  "Explain PM2.5",
  "Which city is worst?"
];

const starterMessages = [
  {
    id: 1,
    role: "bot",
    text: "Hi, I am AirGuard Assistant. Ask me about AQI ranges, pollutants, or simple health actions."
  }
];

function getBotReply(message, currentAQI) {
  const text = message.toLowerCase();

  if (text.includes("pm2.5") || text.includes("pollutant")) {
    return "PM2.5 is fine particulate matter small enough to enter the lungs. In this demo, the pollutant chart uses static sample values.";
  }

  if (text.includes("safe") || text.includes("health") || text.includes("mask")) {
    return `For ${currentAQI.city}, the current simulated AQI is ${currentAQI.value}. ${currentAQI.status.message}`;
  }

  if (text.includes("worst") || text.includes("city")) {
    const worstCity = currentAQI.cities.reduce((highest, city) => (city.aqi > highest.aqi ? city : highest));
    return `${worstCity.name} has the highest static AQI in this demo at ${worstCity.aqi}. Use the city dropdown to compare simulated readings.`;
  }

  if (text.includes("aqi") || text.includes("mean") || text.includes("range")) {
    return "AQI is grouped as Good from 0-50, Moderate from 51-100, Unhealthy for Sensitive Groups from 101-150, and Unhealthy from 151+.";
  }

  return "I can help with AQI ranges, PM2.5, health tips, and city comparisons using the dummy data on this frontend.";
}

function Chatbot({ currentAQI }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(starterMessages);

  const subtitle = useMemo(() => {
    return `${currentAQI.city}: ${currentAQI.value} AQI`;
  }, [currentAQI.city, currentAQI.value]);

  function sendMessage(text = input) {
    const trimmed = text.trim();

    if (!trimmed) {
      return;
    }

    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text: trimmed
    };

    const botMessage = {
      id: crypto.randomUUID(),
      role: "bot",
      text: getBotReply(trimmed, currentAQI)
    };

    setMessages((current) => [...current, userMessage, botMessage]);
    setInput("");
    setIsOpen(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage();
  }

  return (
    <aside className="chatbot" aria-label="AirGuard Assistant">
      {isOpen ? (
        <section className="chatbot__panel glass">
          <header className="chatbot__header">
            <div className="chatbot__identity">
              <span>
                <Bot size={19} />
              </span>
              <div>
                <strong>AirGuard Assistant</strong>
                <small>{subtitle}</small>
              </div>
            </div>
            <button className="icon-button" type="button" onClick={() => setIsOpen(false)} aria-label="Close chatbot">
              <X size={18} />
            </button>
          </header>

          <div className="chatbot__messages" aria-live="polite">
            {messages.map((message) => (
              <p className={`chatbot__message chatbot__message--${message.role}`} key={message.id}>
                {message.text}
              </p>
            ))}
          </div>

          <div className="chatbot__prompts">
            {quickPrompts.map((prompt) => (
              <button type="button" key={prompt} onClick={() => sendMessage(prompt)}>
                {prompt}
              </button>
            ))}
          </div>

          <form className="chatbot__form" onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about AQI..."
              aria-label="Chat message"
            />
            <button className="icon-button" type="submit" aria-label="Send message">
              <Send size={18} />
            </button>
          </form>
        </section>
      ) : (
        <button className="chatbot__launcher" type="button" onClick={() => setIsOpen(true)} aria-label="Open chatbot">
          <MessageCircle size={24} />
        </button>
      )}
    </aside>
  );
}

export default Chatbot;
