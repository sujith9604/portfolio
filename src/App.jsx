// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ParticleBackground from './pages/ParticleBackground';
import ThankYou from './pages/ThankYou';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <div>
        <ParticleBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ThankYou />
      </div>
    </BrowserRouter>
  );
}

export default App;
