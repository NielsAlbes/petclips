import React from "react";
import { Link } from "react-router-dom";
import "../Global.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <a
            href="https://www.youtube.com/@PetClipsDE"
            target="_blank"
            rel="noreferrer"
            className="logo-link"
          >
            <img
              src="https://yt3.googleusercontent.com/k7AX2WHVAkdKkEdsytbilcr_H61aLk9QOct8SFZOlBToGi9NmiY1SH63dCXT2NtKYJjjOv_RGw=s160-c-k-c0x00ffffff-no-rj"
              alt="Pet Clips Logo"
            />
            <h1>PetClips</h1>
          </a>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="https://www.youtube.com/@PetClipsDE" target="_blank" rel="noreferrer">Channel</a></li>
          <li><Link to="/product">Produkt</Link></li>
          <li><a href="#">Kontakt</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
