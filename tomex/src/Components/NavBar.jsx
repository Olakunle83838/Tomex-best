import React, { useState } from "react";
import "./navBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navContainer">
      <p className="logo">TOMEX</p>

      {/* Hamburger Toggle Button for Mobile */}
      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Links & Buttons wrapper */}
      <div className={`navLinkContainer ${isOpen ? "open" : ""}`}>
        <ul className="navLinks">
          <li>
            <a href="#" className="navLink" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="navLink" onClick={() => setIsOpen(false)}>
              Marketplace
            </a>
          </li>
          <li>
            <a href="#" className="navLink" onClick={() => setIsOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="navLink" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

        <div className="navBtns">
          <a
            href="#"
            className="navBtn navBtn1"
            onClick={() => setIsOpen(false)}
          >
            Login
          </a>
          <a
            href="#"
            className="navBtn navBtn2"
            onClick={() => setIsOpen(false)}
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
