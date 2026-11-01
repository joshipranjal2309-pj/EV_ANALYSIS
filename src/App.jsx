import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Dashboard from './components/Dashboard.jsx';
import Story from './components/Story.jsx';
import AnalyticsFeatures from './components/AnalyticsFeatures.jsx';
import Methodology from './components/Methodology.jsx';
import TechStack from './components/TechStack.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070d19] text-slate-100 flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Dashboard />
        <Story />
        <AnalyticsFeatures />
        <Methodology />
        <TechStack />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}