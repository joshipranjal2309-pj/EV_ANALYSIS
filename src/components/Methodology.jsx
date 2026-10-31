import React from 'react';
import { 
  Database, 
  Filter, 
  BarChart, 
  PieChart, 
  LayoutDashboard, 
  BookOpen, 
  Code2, 
  FileCheck2,
  Workflow,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function Methodology() {
  const steps = [
    {
      num: '01',
      title: 'Data Collection',
      icon: Database,
      tag: 'Acquisition',
      description: 'Aggregation of electric vehicle market datasets encompassing vehicle technical specifications, battery capacities, certified range ratings, regional sales registrations, and manufacturer MSRPs.'
    },
    {
      num: '02',
      title: 'Data Preparation & Cleaning',
      icon: Filter,
      tag: 'Sanitization',
      description: 'Standardization of units across metric and imperial standards (miles vs km, kWh, EPA vs WLTP), handling missing values, standardizing automaker nomenclatures, and removing duplicate vehicle trims.'
    },
    {
      num: '03',
      title: 'Exploratory Data Analysis (EDA)',
      icon: BarChart,
      tag: 'Statistical Inquiry',
      description: 'Investigating central tendencies, outlier distributions, price-to-range correlation coefficients, and skewness across vehicle segments to identify meaningful market patterns.'
    },
    {
      num: '04',
      title: 'Data Visualization Design',
      icon: PieChart,
      tag: 'Visual Encoding',
      description: 'Selecting optimal chart visual encodings—including scatter plots for range vs capacity, bar charts for brand sales rankings, and choropleth maps for geographic density.'
    },
    {
      num: '05',
      title: 'Dashboard Development',
      icon: LayoutDashboard,
      tag: 'Tableau Authoring',
      description: 'Assembling coordinated worksheets within Tableau Desktop, configuring interactive quick filters, action highlights, calculated fields, and responsive device layouts for desktop and mobile.'
    },
    {
      num: '06',
      title: 'Story Creation',
      icon: BookOpen,
      tag: 'Narrative Framing',
      description: 'Synthesizing key insights into an executive narrative sequence, organizing sequential story points to communicate macro EV growth, competitive dynamics, and technological breakthroughs.'
    },
    {
      num: '07',
      title: 'Web Integration',
      icon: Code2,
      tag: 'Full-Stack Implementation',
      description: 'Architecting a static React and Vite platform with Tailwind CSS, integrating the published Tableau Public workbook via responsive embedding, and ensuring zero external server dependencies.'
    },
    {
      num: '08',
      title: 'Testing & Documentation',
      icon: FileCheck2,
      tag: 'Quality Assurance',
      description: 'Cross-browser validation of responsive containers, fallback behavior verification for blocked third-party iframes, automated GitHub Actions CI/CD workflows, and comprehensive README documentation.'
    }
  ];

  return (
    <section id="methodology" className="py-24 bg-[#080a0f] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5" />
            <span>Structured Analytical Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Project Methodology
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The end-to-end 8-stage engineering and analytical framework executed to progress from raw vehicle data 
            to an executive Tableau Public interactive intelligence web application.
          </p>
        </div>

        {/* 8-Stage Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num}
                className="relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 group hover:bg-slate-900/90 flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-amber-500/60 group-hover:text-amber-400 transition-colors">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {step.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Stage {idx + 1} of 8</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
