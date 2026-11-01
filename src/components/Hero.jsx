import React from 'react';
import { 
  Zap, 
  BarChart3, 
  BookOpen, 
  TrendingUp, 
  BatteryCharging, 
  Compass, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Gauge
} from 'lucide-react';
import { TABLEAU_CONFIG } from '../config/tableau.js';

export default function Hero() {
  const highlightPillars = [
    {
      icon: TrendingUp,
      title: 'Market Penetration',
      desc: 'Annual growth rates, sales volume distributions, and regional adoption trajectories across global markets.'
    },
    {
      icon: BatteryCharging,
      title: 'Battery Tech & Range',
      desc: 'Usable kWh capacity correlation against real-world driving autonomy and energy efficiency ratios.'
    },
    {
      icon: Gauge,
      title: 'Price vs Performance',
      desc: 'MSRP segment brackets, manufacturer price competitiveness, and kilowatt-hour value benchmarks.'
    },
    {
      icon: Compass,
      title: 'Brand Benchmarking',
      desc: 'Comparative automaker market share, portfolio diversification, and product segment coverage.'
    }
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Radial atmospheric glows (Blue / Cyan) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wide shadow-lg shadow-blue-500/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-blue-400 -ml-4" />
            <span className="text-slate-400">Project Showcase:</span>
            <span>Tableau Public Interactive Intelligence</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Electric Vehicle Market{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 glow-text">
              Performance & Insights
            </span>
          </h1>

          {/* Subtitle / Executive Summary */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            A comprehensive data analytics and visualization platform synthesizing global electric mobility trends. 
            Investigate automaker sales dominance, pricing dynamics, battery capacity frontiers, and geographical adoption 
            through an interactive, cloud-embedded Tableau executive dashboard.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <BarChart3 className="w-4 h-4" />
              <span>Explore Dashboard</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="#story"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700/80 hover:border-blue-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Explore Story & Insights</span>
            </a>

            <a
              href={TABLEAU_CONFIG.dashboardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <span>Tableau Public Portal</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Embedded Tableau Status Tag */}
          <div className="pt-2 flex items-center justify-center gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Tableau Public 2026 Live Viz Ready</span>
            </div>
            <span className="text-slate-700">•</span>
            <span>No Auth Required</span>
            <span className="text-slate-700">•</span>
            <span>Interactive Tooltips & Filters</span>
          </div>

        </div>

        {/* EV Visual Schematic & Metric Cards */}
        <div className="mt-16 relative">
          <div className="rounded-2xl p-1 bg-gradient-to-b from-blue-900/30 via-slate-800/20 to-transparent shadow-2xl">
            <div className="rounded-2xl bg-gradient-to-b from-slate-900/95 to-[#0b1329]/95 border border-slate-800/80 p-6 md:p-8 backdrop-blur-xl">
              
              {/* Header inside schematic card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800/80 gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs uppercase tracking-widest font-bold text-cyan-400">
                      Core Analytical Dimensions
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-white mt-1">
                    What This Platform Visualizes
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Curated for Academic & Industry Evaluation</span>
                </div>
              </div>

              {/* 4 Feature highlight blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {highlightPillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx}
                      className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/50 transition-all group hover:bg-slate-900/90"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}