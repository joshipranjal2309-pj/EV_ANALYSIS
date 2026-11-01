import React, { useState, useEffect, useRef } from 'react';
import { 
  BarChart3, 
  ExternalLink, 
  RefreshCw, 
  Maximize2, 
  Minimize2, 
  Info, 
  Sparkles, 
  CheckCircle,
  AlertCircle,
  Layers,
  HelpCircle,
  UserCheck
} from 'lucide-react';
import { TABLEAU_CONFIG } from '../config/tableau.js';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const vizContainerRef = useRef(null);

  // Direct embed view URL from configuration
  const embedSrc = `${TABLEAU_CONFIG.dashboardEmbedUrl}?:showVizHome=no&:embed=true&:device=desktop&:toolbar=yes`;

  const handleReload = () => {
    setIsLoading(true);
    setLoadError(false);
    setReloadKey(prev => prev + 1);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
    setLoadError(false);
  };

  // 15-second safety timeout in case browser privacy extensions block Tableau Public iframe
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 12000);
    return () => clearTimeout(timer);
  }, [reloadKey, isLoading]);

  return (
    <section id="dashboard" className="py-20 md:py-28 bg-[#070d19] relative border-t border-slate-800">
      
      {/* Background accents (Blue glow) */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-semibold tracking-wide">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Interactive Analytics View</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              EV Executive Dashboard
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore live market performance data published on Tableau Public. Filter by vehicle segment, 
              compare brand market shares, inspect range vs battery capacity distributions, and uncover 
              geographical sales concentrations in real time.
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={handleReload}
              title="Reload Dashboard View"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium border border-slate-800 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-cyan-400' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              title={isExpanded ? 'Standard View' : 'Expand Height'}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium border border-slate-800 transition-colors"
            >
              {isExpanded ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden sm:inline">Default Height</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden sm:inline">Expand Height</span>
                </>
              )}
            </button>

            <a
              href={TABLEAU_CONFIG.dashboardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xs hover:from-blue-500 hover:to-cyan-500 transition-all shadow-md shadow-blue-500/20 active:scale-95"
            >
              <span>Open in Tableau Public</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Tableau Embed Container Card */}
        <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800/90 overflow-hidden shadow-2xl shadow-black/80">
          
          {/* Top Bar for Dashboard Frame */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0a1120] border-b border-slate-800 text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-slate-600">|</span>
              <span className="font-mono text-slate-300 truncate max-w-xs sm:max-w-md">
                EVExecutiveDashboard • Tableau Public 2026
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 text-[11px] font-medium hidden sm:inline-flex">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Embedded Viz
              </span>
              <a
                href={TABLEAU_CONFIG.authorProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors text-[11px] flex items-center gap-1"
              >
                <UserCheck className="w-3 h-3 text-cyan-400" />
                <span>By {TABLEAU_CONFIG.authorName}</span>
              </a>
            </div>
          </div>

          {/* Embed Screen */}
          <div 
            ref={vizContainerRef}
            className={`relative w-full transition-all duration-300 bg-[#070d19] ${
              isExpanded ? 'h-[1050px]' : 'h-[750px] sm:h-[850px] lg:h-[900px]'
            }`}
          >
            {/* Loading Indicator Overlay */}
            {isLoading && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#070d19] p-6 text-center space-y-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center animate-pulse">
                    <BarChart3 className="w-7 h-7 text-cyan-400 animate-bounce" />
                  </div>
                  <div className="absolute -inset-1 rounded-2xl border-2 border-blue-500/40 border-t-transparent animate-spin" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Connecting to Tableau Public...</h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-sm">
                    Streaming published workbook: <code className="text-cyan-400 font-mono text-[11px]">EVExecutiveDashboard</code>
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-2">
                  <span>Standard Public Viz</span>
                  <span>•</span>
                  <span>No login required</span>
                </div>
              </div>
            )}

            {/* Error / Timeout Fallback banner */}
            {loadError && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#070d19] p-6 text-center space-y-4">
                <AlertCircle className="w-10 h-10 text-cyan-400" />
                <h4 className="text-base font-bold text-white">Notice on Embedded Tableau Viz</h4>
                <p className="text-xs text-slate-300 max-w-md leading-relaxed">
                  If your browser has third-party cookie restrictions or strict privacy shields enabled, 
                  Tableau Public may prevent direct iframe rendering. You can interact directly with the 
                  original published dashboard via Tableau Public's official cloud portal.
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleReload}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-white hover:bg-slate-700"
                  >
                    Retry Loading
                  </button>
                  <a
                    href={TABLEAU_CONFIG.dashboardUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500"
                  >
                    Open in Tableau Public
                  </a>
                </div>
              </div>
            )}

            {/* Tableau Public Iframe Embed */}
            <iframe
              key={reloadKey}
              src={embedSrc}
              title="Tableau Public EV Executive Dashboard"
              className="w-full h-full border-0 relative z-10"
              allowFullScreen
              onLoad={handleIframeLoad}
              onError={() => {
                setIsLoading(false);
                setLoadError(true);
              }}
            />
          </div>

          {/* Bottom Info Bar */}
          <div className="px-5 py-3 bg-[#0a1120] border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>
                Tip: Click marks, legends, and dropdown selectors inside the dashboard to filter views dynamically.
              </span>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={TABLEAU_CONFIG.dashboardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1.5"
              >
                <span>Direct Tableau Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}