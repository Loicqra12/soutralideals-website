import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Suspense, lazy } from 'react';
import { Loading } from './components/ui/Loading';

// Lazy loading des pages pour optimiser les performances
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const EcosystemPage = lazy(() => import('./pages/EcosystemPage').then(module => ({ default: module.EcosystemPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.ServicesPage })));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage').then(module => ({ default: module.PortfolioPage })));
const CommunityPage = lazy(() => import('./pages/CommunityPage').then(module => ({ default: module.CommunityPage })));
const ProjectPage = lazy(() => import('./pages/ProjectPage').then(module => ({ default: module.ProjectPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));

// Pages Services Premium
const DevProductPage = lazy(() => import('./pages/services/DevProductPage').then(module => ({ default: module.DevProductPage })));
const SolutionsToolsPage = lazy(() => import('./pages/services/SolutionsToolsPage').then(module => ({ default: module.SolutionsToolsPage })));
const StrategyConsultingPage = lazy(() => import('./pages/services/StrategyConsultingPage').then(module => ({ default: module.StrategyConsultingPage })));
const DesignBrandingPage = lazy(() => import('./pages/services/DesignBrandingPage').then(module => ({ default: module.DesignBrandingPage })));
const MarketingFormationPage = lazy(() => import('./pages/services/MarketingFormationPage').then(module => ({ default: module.MarketingFormationPage })));

/**
 * App.tsx refactorisé avec react-router-dom
 * Structure de routing principale
 */
function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="ecosysteme" element={<EcosystemPage />} />
            <Route path="ecosysteme" element={<EcosystemPage />} />

            {/* Routes Services */}
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/developpement-produits" element={<DevProductPage />} />
            <Route path="services/solutions-metiers" element={<SolutionsToolsPage />} />
            <Route path="services/strategie-conseil" element={<StrategyConsultingPage />} />
            <Route path="services/design-branding" element={<DesignBrandingPage />} />
            <Route path="services/marketing-formation" element={<MarketingFormationPage />} />

            <Route path="realisations" element={<PortfolioPage />} />
            <Route path="communaute" element={<CommunityPage />} />
            <Route path="le-projet" element={<ProjectPage />} />
            <Route path="a-propos" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;
