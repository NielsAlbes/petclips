import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Global.css";

const Navbar = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation shortly after mount
    const timer = setTimeout(() => setAnimate(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <Link to="/product" className="logo-link">
            <img
              src="profile.jpg"
              alt="Pet Clips Logo"
            />
            <h1 className={`logo-text ${animate ? "slide-in" : ""}`}>PetClipsDe</h1>
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="https://www.youtube.com/@PetClipsDE" target="_blank" rel="noreferrer">Channel</a></li>
          <li><div className="product-link"><Link to="/product">Product</Link></div></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
