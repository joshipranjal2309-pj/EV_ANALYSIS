import React from 'react';
import { 
  Cpu, 
  Code2, 
  Flame, 
  Palette, 
  BarChart3, 
  Github, 
  Globe, 
  FileCode, 
  CheckCircle2,
  ServerOff,
  ShieldCheck
} from 'lucide-react';

export default function TechStack() {
  const technologies = [
    {
      name: 'React 19',
      category: 'UI Library',
      description: 'Component-driven reactive user interface architecture with modern hooks and state management.',
      icon: Code2,
      badge: 'Frontend Framework'
    },
    {
      name: 'Vite 8',
      category: 'Build Tool & Bundler',
      description: 'Next-generation ES module frontend tooling delivering instant HMR and optimized production bundles.',
      icon: Flame,
      badge: 'Build Engine'
    },
    {
      name: 'JavaScript (ESNext)',
      category: 'Core Language',
      description: 'Modern ECMAScript syntax with modular imports, async operations, and clean DOM integration.',
      icon: FileCode,
      badge: 'Programming Language'
    },
    {
      name: 'HTML5',
      category: 'Semantic Markup',
      description: 'Accessible, semantic document structure optimized for responsive rendering and search engine discovery.',
      icon: Globe,
      badge: 'Web Standard'
    },
    {
      name: 'CSS3 & Tailwind CSS v4',
      category: 'Styling Architecture',
      description: 'Utility-first modern styling with dark-mode color tokens, custom scrollbars, and glowing accents.',
      icon: Palette,
      badge: 'Design System'
    },
    {
      name: 'Tableau Public',
      category: 'Visual Analytics Platform',
      description: 'Industry-standard cloud data visualization engine hosting the interactive executive workbook.',
      icon: BarChart3,
      badge: 'BI & Analytics'
    },
    {
      name: 'GitHub',
      category: 'Source Control & Collaboration',
      description: 'Git-based version control repository hosting the complete source code, documentation, and history.',
      icon: Github,
      badge: 'Version Control'
    },
    {
      name: 'GitHub Pages & Actions',
      category: 'Deployment & CI/CD',
      description: 'Automated workflow compiling and deploying static assets directly to GitHub Pages hosting.',
      icon: Globe,
      badge: 'Static Hosting'
    }
  ];

  const architecturalHighlights = [
    {
      icon: ServerOff,
      title: '100% Static Client-Side Architecture',
      desc: 'Eliminates backend server management, cold starts, and hosting maintenance. Operates fully in modern browsers.'
    },
    {
      icon: ShieldCheck,
      title: 'Zero Third-Party Paid Services',
      desc: 'No paid APIs, proprietary databases, or commercial subscriptions required for live evaluation.'
    },
    {
      icon: Globe,
      title: 'GitHub Pages Native Compatibility',
      desc: 'Configured with relative asset paths so it deploys seamlessly to any GitHub repository subpath.'
    }
  ];

  return (
    <section id="technologies" className="py-24 bg-[#070d19] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Modern Production Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technologies Used
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Strictly adhering to lightweight, production-grade tools. Every listed technology is actively 
            implemented in the final website architecture.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/50 transition-all duration-300 group hover:bg-slate-900/90 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </h3>
                  <span className="text-[11px] font-medium text-cyan-400/90 block mt-0.5">
                    {tech.category}
                  </span>

                  <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architectural Principles Box */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-[#0a1120] to-slate-900 border border-slate-800 shadow-xl">
          <h3 className="text-sm uppercase tracking-wider font-bold text-slate-300 mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Architecture & Hosting Guarantees</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {architecturalHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-cyan-400 shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}