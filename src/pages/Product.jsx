import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <section className="product-page">
      <div className="container">
        <h2>The Cat Cave</h2>
        <p>
          comfortable | luxurious | sustainable
        </p>
        <img
          src="/mainPicture.jpg"
          alt="PetBoost Produkt"
          className="product-image"
        />
        <div className="product-details">
          <ul>
            <li> 100% safe sleeping 🐕</li>
            <li> semi-enclosed design 💪</li>
            <li> warm and comfortable ✅</li>
          </ul>
        </div>
        <div className="checkout">
          <a
            href=""
            className="btn">
            Buy
          </a>
          <h3>29.99 €</h3>
        </div>
      </div>
    </section>
  );
};

export default Product;
