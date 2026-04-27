import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "../../utils/constants.js";
import "./Navbar.css";

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <a className="navbar__brand" href="#top" aria-label="AirGuard AI home">
        <span className="navbar__brand-mark">A</span>
        <span>AirGuard AI</span>
      </a>

      <nav className={`navbar__links ${isOpen ? "is-open" : ""}`} aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="navbar__actions">
        <button className="icon-button" type="button" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button
          className="icon-button navbar__menu"
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
