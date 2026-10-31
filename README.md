# EV Insights — Electric Vehicle Market Performance & Insights

> An executive data analytics web platform and interactive Tableau dashboard exploring global electric vehicle adoption, automaker market share, pricing dynamics, battery capacity progressions, and real-world driving range distributions.

[![Deploy to GitHub Pages](https://github.com/pranjal-joshi/ev-insights/actions/workflows/deploy.yml/badge.svg)](https://github.com/pranjal-joshi/ev-insights/actions/workflows/deploy.yml)
[![Built with React](https://img.shields.io/badge/Frontend-React_19-blue.svg)](https://react.dev/)
[![Bundled with Vite](https://img.shields.io/badge/Bundler-Vite_8-646CFF.svg)](https://vitejs.dev/)
[![Styled with Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS_v4-38B2AC.svg)](https://tailwindcss.com/)
[![Tableau Public](https://img.shields.io/badge/Visual_Analytics-Tableau_Public-E97627.svg)](https://public.tableau.com/)
[![Hosting](https://img.shields.io/badge/Hosting-GitHub_Pages-181717.svg)](https://pages.github.com/)

---

## 1. Project Overview

**EV Insights** was developed as an academic and professional data analytics project titled **"Electric Vehicle Market Performance & Insights"**. 

As the global automotive industry navigates a historic transition toward electrified mobility, market intelligence becomes paramount. This platform bridges high-dimensional automotive data with intuitive visual exploration by embedding a cloud-published Tableau Public executive dashboard within a modern, responsive web application.

- **Author**: Pranjal Joshi
- **Published Tableau Dashboard**: [EVExecutiveDashboard on Tableau Public](https://public.tableau.com/app/profile/pranjal.joshi2614/viz/EV_Market_Performance_Market_Story_2026-10-25_17934422258050/EVExecutiveDashboard?publish=yes)
- **Deployment Platform**: GitHub Pages (100% static, zero third-party hosting fees or backend servers)

---

## 2. Key Features

- **Embedded Tableau Public Executive Dashboard**:
  - Live embedding of the verified published view without requiring visitor login or Tableau credentials.
  - Interactive multi-dimensional filters, brand selections, and tooltips.
  - Fullscreen/expand toggle, viz refresh button, and one-click direct access to Tableau Public.
  - Graceful loading skeleton and fallback support if browser shields block third-party iframes.
- **Dedicated Tableau Story Section**:
  - Configurable Tableau Story embedding for multi-point narrative exploration.
  - Real-time interactive Story URL configurator with browser persistence (`localStorage`) and fallback config file.
  - 5 structured narrative cards covering Market Growth, Automaker Competition, Battery Tech, Pricing, and Range vs Efficiency.
- **7 Core Analytics Feature Modules**:
  1. *Manufacturer Sales Analysis* — OEM registration volumes, market share %, and growth velocity.
  2. *EV Pricing Comparison* — MSRP distributions, luxury vs economy brackets, and cost-per-kWh.
  3. *Country-wise EV Distribution* — Geographic registration density and national policy incentives.
  4. *Battery Capacity Analysis* — Pack capacities (gross vs usable kWh) and chemistry trade-offs (LFP vs NMC).
  5. *Driving Range Comparison* — Certified EPA/WLTP autonomy distributions across vehicle classes.
  6. *Manufacturer Distribution* — Automaker portfolio diversification across body styles and platform segments.
  7. *EV Efficiency Analysis* — Energy consumption efficiency (Wh/mi and MPGe) versus aerodynamic drag.
- **Academic Research Methodology**:
  - 8-stage analytical framework: Data Collection, Preparation, EDA, Visualization Design, Dashboard Development, Story Creation, Web Integration, and Quality Assurance.
- **SaaS Dark Mode UI/UX**:
  - Charcoal/slate dark theme with electric amber accents, subtle borders, custom scrollbars, and accessible keyboard navigation.
  - Fully responsive across desktop, tablet, and mobile viewports.

---

## 3. Technologies Used

| Technology | Category | Role in Project |
| :--- | :--- | :--- |
| **React 19** | UI Framework | Component-based interface and state management |
| **Vite 8** | Build Engine | Ultra-fast ES-module dev server and asset optimization |
| **JavaScript (ESNext)** | Language | Client-side reactive logic and dynamic configuration |
| **HTML5 & CSS3** | Web Standards | Semantic markup, responsive layouts, and accessibility |
| **Tailwind CSS v4** | Styling | Utility-first styling with dark-mode tokens and glows |
| **Tableau Public** | Visual Analytics | Cloud-hosted interactive dashboard and story engine |
| **GitHub** | Version Control | Source code management and repository hosting |
| **GitHub Pages** | Hosting | Static production hosting with zero server maintenance |
| **GitHub Actions** | CI/CD | Automated build and deployment pipeline on push to `main` |

*Note: No Python, Flask, Streamlit, Render, Vercel, or paid databases are used or required.*

---

## 4. Project Structure

```text
ev-insights/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Actions build & deploy workflow
├── public/
│   └── favicon.svg           # Custom electric vehicle badge favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation with active scroll tracking
│   │   ├── Hero.jsx          # Hero banner with project title and primary CTAs
│   │   ├── About.jsx         # Research context, objectives, and value proposition
│   │   ├── Dashboard.jsx     # Embedded Tableau Public dashboard container & controls
│   │   ├── Story.jsx         # Tableau Story embed, configurator & 5 insight cards
│   │   ├── AnalyticsFeatures.jsx # 7 core analytical feature breakdown cards
│   │   ├── Methodology.jsx   # 8-stage data science and engineering pipeline
│   │   ├── TechStack.jsx     # Technology badges and architecture guarantees
│   │   └── Footer.jsx        # Branding, GitHub link, copyright, and back-to-top
│   ├── config/
│   │   └── tableau.js        # Centralized Tableau URLs and embedding helpers
│   ├── App.jsx               # Main React application layout
│   ├── index.css             # Tailwind CSS tokens, scrollbar, and glowing effects
│   └── main.jsx              # Application DOM entry point
├── index.html                # HTML entry point with SEO metadata and Tableau API
├── package.json              # Project dependencies and npm scripts
├── vite.config.js            # Vite configuration with relative base './' for Pages
├── tsconfig.json             # Compiler options supporting JavaScript/JSX
└── README.md                 # Complete documentation
```

---

## 5. Local Installation & Development

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- `npm` (comes bundled with Node.js)

### Step 1: Clone the Repository
```bash
git clone https://github.com/pranjal-joshi/ev-insights.git
cd ev-insights
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port indicated in terminal).

### Step 4: Verify Lint & Build
```bash
# Check code syntax
npm run lint

# Generate production build in ./dist
npm run build

# Preview production build locally
npm run preview
```

---

## 6. How to Upload to GitHub & Deploy to GitHub Pages

### Step 1: Initialize Git and Commit
If you are initializing a new local git repository:
```bash
git init
git add .
git commit -m "feat: complete EV Insights platform with Tableau Public integration"
```

### Step 2: Link to Your GitHub Repository
Replace `<your-username>` with your GitHub username:
```bash
git branch -M main
git remote add origin https://github.com/<your-username>/ev-insights.git
git push -u origin main
```

### Step 3: Enable GitHub Pages in Repository Settings
1. Open your repository on GitHub (`https://github.com/<your-username>/ev-insights`).
2. Click on **Settings** (top navigation tab).
3. In the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment** > **Source**, select:
   👉 **GitHub Actions**
5. That's it! The included `.github/workflows/deploy.yml` workflow will automatically trigger, install dependencies, build the project with `npm run build`, and publish your site.

### Step 4: Access Your Live Site
Your live website will be accessible at:
```text
https://<your-username>.github.io/ev-insights/
```
*Because `vite.config.js` uses `base: './'`, relative asset paths resolve automatically without hardcoding paths or breaking images/scripts.*

---

## 7. Tableau Integration & Configuration

### Published Executive Dashboard
The dashboard is already integrated in `src/config/tableau.js`:
```javascript
export const TABLEAU_CONFIG = {
  dashboardUrl: 'https://public.tableau.com/app/profile/pranjal.joshi2614/viz/EV_Market_Performance_Market_Story_2026-10-25_17934422258050/EVExecutiveDashboard?publish=yes',
  dashboardEmbedUrl: 'https://public.tableau.com/views/EV_Market_Performance_Market_Story_2026-10-25_17934422258050/EVExecutiveDashboard',
  workbookName: 'EV_Market_Performance_Market_Story_2026-10-25_17934422258050',
  dashboardSheetName: 'EVExecutiveDashboard',
  // ...
};
```

### How to Configure the Tableau Story URL
You have two easy ways to set or update your Tableau Story URL:

1. **Option A: Interactively in the Browser (No Code Required)**
   - Scroll to the **Story** section on the website.
   - Click the **"Configure Story URL"** button.
   - Paste your published Story view link (e.g. `https://public.tableau.com/views/.../EVMarketStory`).
   - Click **Save & Embed**. The website immediately updates and saves the URL in your browser's `localStorage`.

2. **Option B: Statically in Code**
   - Open `src/config/tableau.js`.
   - Update `storyUrl`:
     ```javascript
     storyUrl: 'https://public.tableau.com/views/EV_Market_Performance_Market_Story_2026-10-25_17934422258050/YourStorySheetName',
     ```
   - Commit and push to GitHub.

---

## 8. Known Considerations & Technical Limitations

1. **Browser Privacy Extensions / Ad-Blockers**:
   - Strict tracking protection or privacy extensions (e.g., Brave Shields, uBlock Origin) may occasionally restrict Tableau Public iframes from loading external cookies.
   - **Resolution Built-In**: The platform detects loading states and provides a prominent **"Open in Tableau Public"** button and direct link so evaluators can always access the visualization in one click.
2. **Static Client-Side Scope**:
   - In accordance with GitHub Pages architecture, this website does not require or run a server-side database. All interactive data slicing and cross-filtering is processed client-side via Tableau Public's WebGL/SVG engine.
3. **Tableau Public Server Response**:
   - Initial load time of the embedded visualization depends on Tableau Public's cloud CDN response. An animated loading skeleton provides clear visual feedback during handshake.

---

## 9. Academic Project Attribution

- **Project Name**: EV Insights
- **Full Title**: Electric Vehicle Market Performance & Insights
- **Author**: Pranjal Joshi
- **Tableau Public Profile**: [pranjal.joshi2614](https://public.tableau.com/app/profile/pranjal.joshi2614)
- **License**: Educational / Academic Project Portfolio Use
