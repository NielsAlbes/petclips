import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <section className="product-page">
      <div className="container">
        <h2>PetBoost Creatine-Monohydrate 💪</h2>
        <p>
          PetBoost unterstützt die Muskelkraft und Regeneration deines Haustiers. 
          100 % natürlich, sicher und von Tierärzten empfohlen!
        </p>
        <img
          src="https://vitamoment.de/cdn/shop/files/muskulatur_creatin.jpg?v=1716467787&width=1200"
          alt="PetBoost Produkt"
          className="product-image"
        />
        <div className="product-details">
          <ul>
            <li>Fördert Energie & Ausdauer 🐕</li>
            <li>Für gesunde Muskeln & Vitalität 💪</li>
            <li>100 % natürlich & laborgeprüft ✅</li>
          </ul>
        </div>
        <a
          href="https://vitamoment.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Jetzt ansehen
        </a>
      </div>
    </section>
  );
};

export default Product;
