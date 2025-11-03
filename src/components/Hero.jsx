import React, { useEffect, useState } from "react";
import "../Global.css";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      src: "https://vitamoment.de/cdn/shop/files/muskulatur_creatin.jpg?v=1716467787&width=1200",
      caption: "PetBoost Creatine-Monohydrate",
    },
    {
      src: "https://vitamoment.de/cdn/shop/files/creatin_default.png?v=1686752954&width=400",
      caption: "100% natürlich & sicher für dein Tier",
    },
    {
      src: "https://vitamoment.de/cdn/shop/files/VM_Icon_100Tage-Garantie_ae43686a-04ea-4ab3-98a4-e93ff97104d9.png?v=1722614500&width=448",
      caption: "Empfohlen von Tierärzten",
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
            Die besten täglichen <span>Tiermomente</span>
          </h2>
          <p>
            Unser neues Produkt ist einzigartig und perfekt geeignet für Ihr
            Haustier.
          </p>
          <a href="#product" className="btn">Zu unserem Produkt</a>
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
