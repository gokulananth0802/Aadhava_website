import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingSnacks from './components/FloatingSnacks';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {

  return (
    <Router>
      <div className="min-h-screen flex flex-col relative bg-[#F8E9C9]">
        <ScrollToTop />
        {/* Critical Background Animation */}
        <FloatingSnacks />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;