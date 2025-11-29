import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Global.css";

const Navbar = () => {
  const [animate, setAnimate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="navbar">
      <div className="container nav-container">

        {/* LOGO + MENU BTN */}
        <div className="logo" style={{ width: "100%", justifyContent: "space-between" }}>
          <Link to="/product" className="logo-link">
            <img src="profile.jpg" alt="Pet Clips Logo" />
            <h1 className={`logo-text ${animate ? "slide-in" : ""}`}>
              PetClipsDe
            </h1>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>

          <li>
            <a
              href="https://www.youtube.com/@PetClipsDE"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Channel
            </a>
          </li>

          <li>
            <div className="product-link">
              <Link to="/product" onClick={() => setMenuOpen(false)}>
                Product
              </Link>
            </div>
          </li>

          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
