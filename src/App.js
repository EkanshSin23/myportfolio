import logo from './logo.svg';
import './App.css';
import React, { memo } from 'react'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />




      <Routes>
    <Route exact path="/myportfolio/" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/service" element={<Service />} />

      </Routes>

      <Footer />

    </>
  );
}

export default App;
