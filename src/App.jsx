import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Footer from './components/Footer';
import Product from './pages/Product';

import "./Global.css";

function App() {
  return (
      <Router>
        <div className="app">
          {/* Navigation Bar */}
          <Navbar />

          {/* Page Routing */}
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Stats />
                </>
              }
            />

            {/* Product Page */}
            <Route path="/product" element={<Product />} />

            {/* 404 Fallback Page */}
            <Route
              path="*"
              element={
                <div style={{ textAlign: "center", padding: "4rem", color: "#fff" }}>
                  <h2>404 - Seite nicht gefunden 🐾</h2>
                  <a href="/" className="btn">
                    Zurück zur Startseite
                  </a>
                </div>
              }
            />
          </Routes>

          {/* Footer always visible */}
          <Footer />
        </div>
    </Router>
  );
}

export default App;
