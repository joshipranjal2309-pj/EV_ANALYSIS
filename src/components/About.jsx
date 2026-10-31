import React from 'react';
import { 
  Target, 
  Lightbulb, 
  LineChart, 
  Search, 
  CheckCircle2, 
  Cpu, 
  Globe2, 
  Sparkles,
  Zap
} from 'lucide-react';

export default function About() {
  const objectives = [
    {
      icon: Target,
      title: 'What the Project Analyzes',
      description: 'The study investigates the multi-faceted dynamics of the electric vehicle ecosystem, encompassing automaker sales volume, vehicle retail pricing, battery pack capacities, real-world driving autonomy, and country-level adoption curves across international automotive markets.'
    },
    {
      icon: Lightbulb,
      title: 'Why EV Market Analysis Matters',
      description: 'The global automotive industry is undergoing an unprecedented structural transition from internal combustion engines (ICE) toward electrification. Analyzing market trajectory illuminates manufacturing scalability, grid infrastructure demands, clean energy incentives, and raw battery material consumption trends.'
    },
    {
      icon: LineChart,
      title: 'The Purpose of Data Visualization',
      description: 'Raw vehicle specifications and transactional registrations are high-dimensional and cumbersome to interpret in tabular form. Visual analytics bridges this gap by rendering multi-variable distributions, scatter correlations, geographic heatmaps, and outlier detections instantly digestible.'
    },
    {
      icon: Search,
      title: 'How It Helps Explore Market Patterns',
      description: 'Through filterable Tableau interactions, stakeholders can isolate specific manufacturer portfolios, correlate vehicle price brackets against usable kilowatt-hour battery capacity, inspect regional penetration disparities, and evaluate cost-per-mile driving efficiency.'
    }
  ];

  const coreFocusAreas = [
    'Global & Regional EV Market Penetration',
    'Automaker Portfolio & Sales Share Comparisons',
    'Battery Chemistry, Capacity (kWh) & Usable Density',
    'Driving Range Disparities Across Vehicle Segments',
    'MSRP Price Tiers vs Range Efficiency Correlation',
    'Geographic Adoption Patterns & Charging Infrastructure Alignment'
  ];

  return (
    <section id="about" className="py-24 bg-[#090c12] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic & Analytical Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About the Project
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Understanding the technological inflection points, consumer choices, and economic catalysts 
            powering the global electric mobility revolution.
          </p>
        </div>

        {/* 4 Objective Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {objectives.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="relative p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 group hover:bg-slate-900/90 hover:shadow-xl hover:shadow-amber-500/5"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Summary Box */}
        <div className="rounded-2xl p-8 bg-gradient-to-r from-slate-900 via-[#0d121b] to-slate-900 border border-slate-800/80 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <Globe2 className="w-4 h-4" />
                <span>Strategic Research Scope</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Empowering Data-Driven Automotive Decisions
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether evaluating market readiness for utility providers, forecasting competitive pressure for original equipment manufacturers (OEMs), or assessing consumer total cost of ownership (TCO), rigorous data intelligence is foundational.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                This project aggregates multi-dimensional EV telemetry and market performance indicators into an intuitive, interactive analytical dashboard built in Tableau Public and served via modern web architecture.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-950/70 p-6 rounded-xl border border-slate-800">
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-300 mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Primary Exploration Themes</span>
              </h4>
              <ul className="space-y-2.5">
                {coreFocusAreas.map((theme, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
