import React from "react";
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
          <li><a href="#home">Home</a></li>
          <li><a href="https://www.youtube.com/@PetClipsDE" target="_blank" rel="noreferrer">Channel</a></li>
          <li><a href="#product">Produkt</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
