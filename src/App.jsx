// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Changed BrowserRouter to HashRouter
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ParticleBackground from './pages/ParticleBackground';
import './App.css';

function App() {
  return (
    <Router> {/* Use HashRouter here */}
      <div className="App">
        <ParticleBackground />
        <Navbar />
        <Routes>
          <Route path="/portfolio" element={<Home />} /> {/* Changed /portfolio to / for the root route */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;