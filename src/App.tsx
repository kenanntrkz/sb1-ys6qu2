import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import { LoadingScreen } from './components/LoadingScreen';

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <AppContent />
      )}
    </Router>
  );
}