import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Global.css";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      src: "https://vitamoment.de/cdn/shop/files/muskulatur_creatin.jpg?v=1716467787&width=1200",
      caption: "PetBoost Creatine Mono-Hydrate",
    },
    {
      src: "https://vitamoment.de/cdn/shop/files/creatin_default.png?v=1686752954&width=400",
      caption: "100% natural & safe for your pet.",
    },
    {
      src: "https://vitamoment.de/cdn/shop/files/VM_Icon_100Tage-Garantie_ae43686a-04ea-4ab3-98a4-e93ff97104d9.png?v=1722614500&width=448",
      caption: "Recommended by vets.",
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
            The best daily <span>pet moments</span>
          </h2>
          <p>
            We developed a new product, that fits your pet perfectly. Using only natural and
            sustainable ingredients, we offer an exclusive deal.
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
