import React from 'react';
import { 
  Zap, 
  Github, 
  ArrowUp, 
  BarChart3, 
  ExternalLink, 
  CheckCircle2 
} from 'lucide-react';
import { TABLEAU_CONFIG } from '../config/tableau.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Story', href: '#story' },
    { label: 'Analytics Modules', href: '#analytics' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Tech Stack', href: '#technologies' },
  ];

  return (
    <footer className="bg-[#05070a] border-t border-slate-800 text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20">
                <Zap className="w-5 h-5 fill-slate-950" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                EV INSIGHTS
              </span>
            </div>

            <p className="text-sm font-semibold text-slate-300">
              Electric Vehicle Market Performance & Insights
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              A comprehensive academic and data analytics project exploring global EV market performance, 
              automaker competition, battery technology, and adoption dynamics through an interactive Tableau Public dashboard.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={TABLEAU_CONFIG.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs border border-slate-800 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={TABLEAU_CONFIG.dashboardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 hover:text-amber-300 text-xs border border-amber-500/30 transition-colors"
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Tableau Public</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verification & Deployment Note */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Deployment & Host
            </h4>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>GitHub Pages Ready</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Zero third-party hosting dependencies. Compiles to static HTML/JS/CSS via automated GitHub Actions.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} EV Insights. Academic Project Portfolio.
          </p>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-medium transition-colors cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
