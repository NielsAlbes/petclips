import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Global.css";

const Navbar = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation shortly after mount
    const timer = setTimeout(() => setAnimate(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <a
            href="https://www.youtube.com/@PetClipsDE"
            target="_blank"
            rel="noopener noreferrer"
            className="logo-link"
          >
            <img
              src="profile.jpg"
              alt="Pet Clips Logo"
            />
            <h1 className={`logo-text ${animate ? "slide-in" : ""}`}>PetClips</h1>
          </a>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="https://www.youtube.com/@PetClipsDE" target="_blank" rel="noreferrer">Channel</a></li>
          <li><Link to="/product">Product</Link></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
