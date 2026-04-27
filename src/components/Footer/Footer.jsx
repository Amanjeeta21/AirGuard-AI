import { navLinks } from "../../utils/constants.js";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>AirGuard AI</strong>
        <p>Static AI SaaS frontend for smarter air quality awareness.</p>
      </div>
      <nav aria-label="Footer navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}

export default Footer;
