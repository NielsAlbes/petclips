import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats';
import Footer from './components/Footer';
import "./Global.css"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Footer />
    </>
  );
}

export default App;
