import React, { useState } from "react";
import './Nav.css'

function Navbar() {
  // reponsive navbar
  const [isOpen, setisOpen] = useState(false)
  // change nav background color on scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <div className="nav-logo">
          <a href="#home">
            <h2>FurniShop</h2>
          </a>
        </div>

        <div className={`nav-items ${isOpen && "open"}`}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Features</a>
          <a href="/">Contact</a>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setisOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
