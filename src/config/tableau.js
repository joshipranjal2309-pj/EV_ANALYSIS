/**
 * Tableau Integration Configuration
 * 
 * Update these settings to configure your Tableau Public Dashboard and Story embedding.
 * All URLs are configured without requiring credentials or third-party paid services.
 */

export const TABLEAU_CONFIG = {
  // Published Tableau Public Executive Dashboard URL
  dashboardUrl: 'https://public.tableau.com/app/profile/pranjal.joshi2614/viz/EV_Market_Performance_Market_Story_2026-10-25_17934422258050/EVExecutiveDashboard?publish=yes',
  
  // Tableau Public View Embed URL (used for the <tableau-viz> web component and iframe embed)
  dashboardEmbedUrl: 'https://public.tableau.com/views/EV_Market_Performance_Market_Story_2026-10-25_17934422258050/EVExecutiveDashboard',
  
  // Workbook & View identifiers
  workbookName: 'EV_Market_Performance_Market_Story_2026-10-25_17934422258050',
  dashboardSheetName: 'EVExecutiveDashboard',
  
  /**
   * Tableau Story URL:
   * If you have published a specific Story tab (e.g., 'EVMarketStory' or 'MarketStory'),
   * set its published or embed URL here.
   * If left empty or null, the Story section provides an interactive URL configurator
   * and displays structured analytical insight cards while awaiting your Story link.
   */
  storyUrl: '', // Example: 'https://public.tableau.com/views/EV_Market_Performance_Market_Story_2026-10-25_17934422258050/EVMarketStory'
  storyEmbedUrl: '',
  
  // Author & Repository metadata
  authorName: 'Pranjal Joshi',
  authorProfileUrl: 'https://public.tableau.com/app/profile/pranjal.joshi2614',
  githubRepoUrl: 'https://github.com/pranjal-joshi/ev-insights',
};

/**
 * Helper to normalize Tableau Public URLs into embed-friendly URLs
 * Handles both /app/profile/.../viz/... format and /views/... format
 */
export function getTableauEmbedUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return null;
  const trimmed = rawUrl.trim();
  if (!trimmed) return null;

  try {
    // If it's already a /views/ embed url
    if (trimmed.includes('public.tableau.com/views/')) {
      const cleanUrl = trimmed.split('?')[0];
      return `${cleanUrl}?:embed=true&:showVizHome=no&:device=desktop&:toolbar=yes`;
    }

    // If it's an /app/profile/ format:
    // Format: https://public.tableau.com/app/profile/<user>/viz/<workbook>/<sheet>
    const match = trimmed.match(/tableau\.com\/app\/profile\/[^/]+\/viz\/([^/?]+)\/([^/?]+)/);
    if (match) {
      const workbook = match[1];
      const sheet = match[2];
      return `https://public.tableau.com/views/${workbook}/${sheet}?:embed=true&:showVizHome=no&:device=desktop&:toolbar=yes`;
    }

    return trimmed;
  } catch {
    return trimmed;
  }
}
