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
    <div className="min-h-screen bg-[#080a0f] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Home / Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Interactive Tableau Dashboard Embedding Section */}
        <Dashboard />

        {/* Tableau Story & Narrative Synthesis Section */}
        <Story />

        {/* 7 Core Analytics Modules Section */}
        <AnalyticsFeatures />

        {/* 8-Stage Research Methodology Section */}
        <Methodology />

        {/* Technologies Used Section */}
        <TechStack />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
