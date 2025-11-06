import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <section className="product-page">
      <div className="container">
        <h2>PetBoost Creatine-Monohydrate 💪</h2>
        <p>
          PetBoost supports your pet's muscle strength and recovery.
          100% natural, safe, and recommended by veterinarians!
        </p>
        <img
          src="https://vitamoment.de/cdn/shop/files/muskulatur_creatin.jpg?v=1716467787&width=1200"
          alt="PetBoost Produkt"
          className="product-image"
        />
        <div className="product-details">
          <ul>
            <li>Emphasizes durability 🐕</li>
            <li>For stronger muscles 💪</li>
            <li>100% natural ✅</li>
          </ul>
        </div>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Visit
        </a>
      </div>
    </section>
  );
};

export default Product;
