import { Send } from "lucide-react";
import "./Contact.css";

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section__heading">
        <p className="eyebrow">Contact</p>
        <h2>Request an air intelligence demo</h2>
      </div>
      <form className="contact__form glass reveal">
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea placeholder="Tell us what you want to monitor" rows="4" />
        </label>
        <button className="button button--primary" type="button">
          Send Message <Send size={18} />
        </button>
      </form>
    </section>
  );
}

export default Contact;
