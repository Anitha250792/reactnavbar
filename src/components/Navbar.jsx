import React, { useState } from "react";
import "../styles.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "About", "Services", "Contact"];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">My Navbar</div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          {links.map((link) => (
            <li
              key={link}
              className={`nav-item ${activeLink === link ? "active" : ""}`}
              onClick={() => {
                setActiveLink(link);
                setIsOpen(false); // close menu on mobile click
              }}
            >
              {link}
            </li>
          ))}
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${isOpen ? "rotate1" : ""}`}></div>
          <div className={`line ${isOpen ? "fade" : ""}`}></div>
          <div className={`line ${isOpen ? "rotate2" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
