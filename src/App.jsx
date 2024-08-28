import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Feedbacks from './components/Feedbacks';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Tech from './components/Tech';
import StarsCanvas from './components/canvas/Stars';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="relative z-0">
        <Contact />
          <StarsCanvas />
        </div>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      {/* Render all components you want to show on the root URL */}
      <About />
      <Experience />
      <Tech />
      <Feedbacks />
    </div>
  );
};

export default App;



