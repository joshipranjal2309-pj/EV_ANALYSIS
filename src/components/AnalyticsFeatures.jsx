import React from 'react';
import { 
  BarChart2, 
  DollarSign, 
  Globe, 
  Battery, 
  Gauge, 
  Layers, 
  Zap, 
  ArrowUpRight, 
  ChevronRight,
  Sliders,
  Sparkles
} from 'lucide-react';
import { TABLEAU_CONFIG } from '../config/tableau.js';

export default function AnalyticsFeatures() {
  const analyticsModules = [
    {
      id: 'manufacturer-sales',
      icon: BarChart2,
      title: 'Manufacturer Sales Analysis',
      badge: 'Market Share',
      purpose: 'Quantify automaker sales volume, brand growth velocity, and market capture across leading pure-play and legacy electric vehicle manufacturers.',
      metrics: ['Registration Volume', 'Quarterly Growth Rate', 'OEM Market Share %', 'Portfolio Expansion'],
      vizType: 'Ranked Horizontal Bar & Treemap Charts',
      tableauInsight: 'Isolates market leaders versus high-growth challengers in the executive view.'
    },
    {
      id: 'pricing-comparison',
      icon: DollarSign,
      title: 'EV Pricing Comparison',
      badge: 'Economics',
      purpose: 'Examine MSRP distribution curves, base pricing brackets, and luxury versus mass-market vehicle tiers to assess affordability progress.',
      metrics: ['Base MSRP ($ USD)', 'Trim Tier Elasticity', 'Incentive Adjusted Pricing', 'Segment Price Medians'],
      vizType: 'Box Plots & Price Distribution Histograms',
      tableauInsight: 'Filters vehicles by price bands to reveal price-to-range value propositions.'
    },
    {
      id: 'country-distribution',
      icon: Globe,
      title: 'Country-wise EV Distribution',
      badge: 'Geographic Intelligence',
      purpose: 'Map regional adoption density, country-level registration concentrations, and charging infrastructure correlation across continents.',
      metrics: ['National Fleet Share', 'Per-Capita Adoption', 'Regional Growth Rate', 'Incentive Policy Weight'],
      vizType: 'Choropleth Geographic Map & Regional Matrices',
      tableauInsight: 'Reveals geographically disparate adoption rates driven by national clean energy policy.'
    },
    {
      id: 'battery-capacity',
      icon: Battery,
      title: 'Battery Capacity Analysis',
      badge: 'Powertrain Tech',
      purpose: 'Evaluate gross vs usable kilowatt-hour (kWh) pack capacities, volumetric energy densities, and battery chemistry trade-offs.',
      metrics: ['Pack Capacity (kWh)', 'Cell Chemistry (LFP / NMC)', 'Fast-Charge C-Rates', 'Pack Weight Impact'],
      vizType: 'Binned Capacity Distributions & Scatter Correlation',
      tableauInsight: 'Exposes how standard pack sizes gravitate between 55 kWh and 85 kWh brackets.'
    },
    {
      id: 'driving-range',
      icon: Gauge,
      title: 'Driving Range Comparison',
      badge: 'Autonomy',
      purpose: 'Benchmark certified EPA / WLTP single-charge driving autonomy across vehicle body styles, drivetrains (AWD/RWD), and segments.',
      metrics: ['Rated Range (Miles/Km)', 'Highway vs City Autonomy', 'Temperature Degradation', 'Range per $1,000 MSRP'],
      vizType: 'Comparative Range Rangefinder & Scatter Plots',
      tableauInsight: 'Correlates usable battery size directly against certified driving range.'
    },
    {
      id: 'manufacturer-distribution',
      icon: Layers,
      title: 'Manufacturer Distribution',
      badge: 'OEM Portfolio',
      purpose: 'Assess OEM product portfolio diversification across sedans, crossovers, SUVs, light commercial vehicles, and halo performance models.',
      metrics: ['Models per Manufacturer', 'Platform Sharing Ratios', 'Body Style Coverage', 'Powertrain Diversity'],
      vizType: 'Stacked Bar Breakdown & Multi-Axis Matrix',
      tableauInsight: 'Demonstrates how legacy OEMs diversify platform architectures across segments.'
    },
    {
      id: 'ev-efficiency',
      icon: Zap,
      title: 'EV Efficiency Analysis',
      badge: 'Energy Dynamics',
      purpose: 'Calculate energy expenditure efficiency in Watt-hours per mile (Wh/mi) or MPGe, accounting for vehicle curb weight and aerodynamic drag coefficients.',
      metrics: ['Consumption (kWh / 100 km)', 'MPGe Equivalent', 'Drag Coefficient (Cd)', 'Weight-to-Energy Efficiency Ratio'],
      vizType: 'Dual-Axis Scatter & Efficiency Pareto Frontiers',
      tableauInsight: 'Highlights ultra-efficient models setting operational autonomy benchmarks.'
    }
  ];

  return (
    <section id="analytics" className="py-24 bg-[#090c13] relative border-t border-slate-800">
      
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[400px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sliders className="w-3.5 h-3.5" />
            <span>Analytical Feature Breakdown</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Analytics Modules
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Detailed breakdown of the 7 core analytical modules modeled within our Tableau intelligence architecture. 
            Each dimension is purpose-built to answer specific strategic questions about the global EV market.
          </p>
        </div>

        {/* 7 Analytics Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {analyticsModules.map((module, index) => {
            const Icon = module.icon;
            const isWide = index === 6; // Make 7th card span cleanly or stand out nicely

            return (
              <div
                key={module.id}
                className={`p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 group hover:bg-slate-900/90 flex flex-col justify-between ${
                  isWide ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {module.badge}
                    </span>
                    <span className="text-xs font-mono text-amber-400/80">
                      Module 0{index + 1}
                    </span>
                  </div>

                  {/* Header & Icon */}
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      {module.title}
                    </h3>
                  </div>

                  {/* Purpose description */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {module.purpose}
                  </p>

                  {/* Metrics Tag List */}
                  <div className="pt-2">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Metrics Tracked:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {module.metrics.map((m, mi) => (
                        <span
                          key={mi}
                          className="px-2 py-0.5 text-[11px] rounded bg-slate-950 text-slate-300 border border-slate-800/80"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visualization Type Note */}
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-300">Viz Representation: </span>
                    <span>{module.vizType}</span>
                  </div>

                </div>

                {/* Card Action Link to Dashboard */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    Interactive in Tableau
                  </span>
                  <a
                    href="#dashboard"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>View in Dashboard</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive CTA Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-amber-400 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white">Experience Dynamic Multi-Dimensional Filtering</h4>
              <p className="text-xs text-slate-300">All 7 analytical features are interconnected inside the Tableau Public executive workbook.</p>
            </div>
          </div>
          <a
            href="#dashboard"
            className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shrink-0 shadow-md shadow-amber-500/20"
          >
            Launch Interactive Dashboard
          </a>
        </div>

      </div>
    </section>
  );
}
