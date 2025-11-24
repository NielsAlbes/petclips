import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Global.css";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      src: "/mainPicture.jpg",
      caption: '"My cats love it. 😍"',
    },
    {
      src: "/secondPicture.jpg",
      caption: '"Very satisfied - very advantageous."',
    },
    {
      src: "/thirdPicture.jpg",
      caption: '"The quality is decent."',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header id="home" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h2>
            The Best Daily <span>Pet Moments</span>
          </h2>
          <p>
            We developed a new product, that fits your pet perfectly. Using only natural and
            sustainable resources, we offer an exclusive deal.
          </p>
          <Link to="/product" className="btn">See more</Link>
        </div>

        <div className="hero-product">
          <div className="slideshow-container">
            <img
              src={slides[current].src}
              alt={slides[current].caption}
              className="slide-img"
            />
            <div className="caption">{slides[current].caption}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
