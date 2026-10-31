import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  Settings, 
  Check, 
  Save, 
  AlertTriangle, 
  TrendingUp, 
  Building2, 
  BatteryCharging, 
  DollarSign, 
  Compass, 
  Info,
  Sparkles,
  Link2,
  X
} from 'lucide-react';
import { TABLEAU_CONFIG, getTableauEmbedUrl } from '../config/tableau.js';

export default function Story() {
  // Check local storage or configuration for Story URL
  const [storyUrl, setStoryUrl] = useState(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('ev_story_url') : null;
    return saved || TABLEAU_CONFIG.storyUrl || '';
  });

  const [inputUrl, setInputUrl] = useState(storyUrl);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [isSavedNotice, setIsSavedNotice] = useState(false);
  const [isStoryLoading, setIsStoryLoading] = useState(true);

  const hasConfiguredStory = Boolean(storyUrl && storyUrl.trim().length > 0);
  const embedStorySrc = hasConfiguredStory ? getTableauEmbedUrl(storyUrl) : null;

  const handleSaveUrl = (e) => {
    e.preventDefault();
    const trimmed = inputUrl.trim();
    setStoryUrl(trimmed);
    if (typeof window !== 'undefined') {
      if (trimmed) {
        localStorage.setItem('ev_story_url', trimmed);
      } else {
        localStorage.removeItem('ev_story_url');
      }
    }
    setIsSavedNotice(true);
    setTimeout(() => setIsSavedNotice(false), 2500);
    setShowConfigModal(false);
  };

  const handleClearUrl = () => {
    setInputUrl('');
    setStoryUrl('');
    if (typeof window !== 'undefined') {
      localStorage.removeItem('ev_story_url');
    }
  };

  // Structured Insight Cards
  const keyStoryInsights = [
    {
      id: 'growth',
      icon: TrendingUp,
      title: 'Market Growth & Trajectory',
      category: 'Macro Trends',
      summary: 'Electrification momentum is accelerating globally driven by stringent emissions standards, fleet decarbonization mandates, and expanding consumer willingness to adopt battery-electric propulsion over traditional ICE vehicles.',
      keyTakeaway: 'Compound annual growth rates in EV registrations continue to outpace total automotive sales across major regions.'
    },
    {
      id: 'manufacturers',
      icon: Building2,
      title: 'Automaker & Brand Comparisons',
      category: 'Competitive Landscape',
      summary: 'Pure-play electric manufacturers established early market leadership in software integration and dedicated skateboard platforms. Meanwhile, legacy OEM giants are scaling production across diverse product tiers and commercial segments.',
      keyTakeaway: 'Market concentration is evolving from solitary brand dominance toward fierce multi-brand competition across SUV and sedan segments.'
    },
    {
      id: 'battery',
      icon: BatteryCharging,
      title: 'Battery Capacity & Chemistry',
      category: 'Powertrain Tech',
      summary: 'Battery chemistry variations (such as Lithium Iron Phosphate [LFP] for cost efficiency and Nickel Manganese Cobalt [NMC] for higher gravimetric energy density) define the current trade-offs in pack weight, thermal stability, and vehicle range.',
      keyTakeaway: 'Usable battery capacities predominantly span 50 kWh to 100+ kWh, balancing curb weight against urban commuting requirements.'
    },
    {
      id: 'pricing',
      icon: DollarSign,
      title: 'Vehicle Pricing & Affordability',
      category: 'Economic Analysis',
      summary: 'Vehicle MSRP distributions highlight distinct pricing clusters. While premium luxury segments absorbed initial battery costs, price parity against internal combustion counterparts is approaching via improved manufacturing efficiencies.',
      keyTakeaway: 'Subsidies and federal tax incentives significantly alter purchasing elasticity within mid-range vehicle tiers.'
    },
    {
      id: 'range',
      icon: Compass,
      title: 'Real-World Range vs Efficiency',
      category: 'Operational Performance',
      summary: 'Driving autonomy is governed by battery capacity, aerodynamic drag, vehicle mass, and HVAC consumption. Analyzing EPA/WLTP ratings demonstrates how kilowatt-hour per 100 miles efficiency defines actual operational range.',
      keyTakeaway: 'Aerodynamic optimization and heat pump integration yield substantial range gains independent of raw battery pack enlargement.'
    }
  ];

  return (
    <section id="story" className="py-24 bg-[#080b11] relative border-t border-slate-800">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[350px] bg-orange-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Data Narrative & Synthesized Findings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tableau Story & Market Insights
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Synthesizing analytical observations across market expansion, automaker portfolios, battery chemistry, 
              pricing stratifications, and operational driving autonomy.
            </p>
          </div>

          {/* Story Settings Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowConfigModal(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium border border-slate-800 transition-colors"
            >
              <Settings className="w-3.5 h-3.5 text-amber-400" />
              <span>Configure Story URL</span>
            </button>

            {hasConfiguredStory && (
              <a
                href={storyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-xs hover:from-amber-400 hover:to-orange-400 transition-all shadow-md shadow-amber-500/20"
              >
                <span>Open Story</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Embedded Tableau Story Section (If URL is configured) */}
        {hasConfiguredStory ? (
          <div className="mb-16 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#0d1117] border-b border-slate-800 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span className="font-semibold text-white">Embedded Tableau Story</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Active Link
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowConfigModal(true)}
                  className="text-slate-400 hover:text-white transition-colors text-xs"
                >
                  Change URL
                </button>
                <a
                  href={storyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1"
                >
                  <span>Open in Tableau</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="relative w-full h-[650px] sm:h-[750px] lg:h-[820px] bg-[#0a0d14]">
              {isStoryLoading && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#090c12] space-y-3">
                  <div className="w-10 h-10 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
                  <p className="text-xs text-slate-400">Loading published Tableau Story view...</p>
                </div>
              )}
              <iframe
                src={embedStorySrc}
                title="Published Tableau Story"
                className="w-full h-full border-0"
                allowFullScreen
                onLoad={() => setIsStoryLoading(false)}
              />
            </div>
          </div>
        ) : (
          /* Placeholder / Configuration Callout when no Story URL is provided */
          <div className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0d121c]/90 to-slate-900/90 border border-dashed border-slate-700/80">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                <Link2 className="w-3.5 h-3.5" />
                <span>Story Embedding Ready</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Connect Your Published Tableau Story
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                If you have published a specific Tableau Story tab (such as a multi-point market narrative) 
                in your Tableau Public workbook, you can enter its link to embed it directly below. 
                In the meantime, review the key analytical dimensions and findings synthesized below.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setShowConfigModal(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-md shadow-amber-500/20"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Enter Tableau Story URL</span>
                </button>
                <a
                  href={TABLEAU_CONFIG.dashboardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                >
                  <span>View Published Workbook on Tableau Public</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Clear Explanatory Distinction Notice */}
        <div className="mb-10 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 leading-relaxed">
            <span className="font-bold text-amber-300">Methodological Note: </span>
            The narrative cards below represent domain insights and structural market dynamics synthesized from the EV research scope. 
            For exact interactive statistical drill-downs, filters, and verified dataset distributions, reference the embedded 
            <a href="#dashboard" className="text-amber-400 underline underline-offset-2 ml-1 hover:text-amber-300">Tableau Executive Dashboard</a>.
          </div>
        </div>

        {/* 5 Analytical Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyStoryInsights.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 hover:bg-slate-900/90 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-400/90 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                      {card.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {card.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] font-medium text-slate-400">
                      <strong className="text-slate-200">Key Takeaway:</strong> {card.keyTakeaway}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Story URL Configuration Modal */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg p-6 rounded-2xl bg-[#0d1117] border border-slate-700 shadow-2xl">
            <button
              onClick={() => setShowConfigModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Configure Tableau Story URL</h3>
                <p className="text-xs text-slate-400">Add or update your published Tableau Story link</p>
              </div>
            </div>

            <form onSubmit={handleSaveUrl} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Tableau Story Public URL
                </label>
                <input
                  type="url"
                  placeholder="https://public.tableau.com/views/... or /app/profile/..."
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                />
                <p className="text-[11px] text-slate-500 mt-1.5">
                  Paste the full link from Tableau Public's Share button or browser address bar.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                <span className="font-semibold text-slate-300">Default Setting:</span>
                <p>
                  You can leave this blank until you have finalized your Tableau Story tab. 
                  You can also edit this statically anytime in <code className="text-amber-400">src/config/tableau.js</code>.
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={handleClearUrl}
                  className="px-3 py-2 text-xs text-red-400 hover:text-red-300 font-medium"
                >
                  Clear Story URL
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowConfigModal(false)}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors shadow-md"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save & Embed</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Temporary Toast confirmation */}
      {isSavedNotice && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold shadow-2xl animate-bounce">
          <Check className="w-4 h-4" />
          <span>Story URL configuration updated!</span>
        </div>
      )}

    </section>
  );
}
