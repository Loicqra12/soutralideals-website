import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Suspense, lazy } from 'react';
import { Loading } from './components/ui/Loading';

// Lazy loading des pages pour optimiser les performances
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const EcosystemPage = lazy(() => import('./pages/EcosystemPage').then(module => ({ default: module.EcosystemPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.ServicesPage })));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage').then(module => ({ default: module.PortfolioPage })));
const RealisationDetailPage = lazy(() => import('./pages/RealisationDetailPage').then(module => ({ default: module.RealisationDetailPage })));
const CommunityPage = lazy(() => import('./pages/CommunityPage').then(module => ({ default: module.CommunityPage })));
const ProjectPage = lazy(() => import('./pages/ProjectPage').then(module => ({ default: module.ProjectPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const DevisPage = lazy(() => import('./pages/DevisPage').then(module => ({ default: module.DevisPage })));
const InformationsLegalesPage = lazy(() =>
  import('./pages/InformationsLegalesPage').then((module) => ({ default: module.InformationsLegalesPage })),
);
const MentionsLegalesPage = lazy(() => import('./pages/legal/MentionsLegalesPage'));
const CGUPage = lazy(() => import('./pages/legal/CGUPage'));
const CGVPage = lazy(() => import('./pages/legal/CGVPage'));
const ConfidentialitePage = lazy(() => import('./pages/legal/ConfidentialitePage'));
const CookiesPage = lazy(() => import('./pages/legal/CookiesPage'));
const AccessibilitePage = lazy(() => import('./pages/legal/AccessibilitePage'));

const PlanDuSitePage = lazy(() =>
  import('./pages/PlanDuSitePage').then((module) => ({ default: module.PlanDuSitePage })),
);
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));

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

            {/* Routes Services */}
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/developpement-produits" element={<DevProductPage />} />
            <Route path="services/solutions-metiers" element={<SolutionsToolsPage />} />
            <Route path="services/strategie-conseil" element={<StrategyConsultingPage />} />
            <Route path="services/design-branding" element={<DesignBrandingPage />} />
            <Route path="services/marketing-formation" element={<MarketingFormationPage />} />

            <Route path="realisations" element={<PortfolioPage />} />
            <Route path="realisations/:slug" element={<RealisationDetailPage />} />
            <Route path="communaute" element={<CommunityPage />} />
            <Route path="plateforme" element={<ProjectPage />} />
            <Route path="le-projet" element={<Navigate to="/plateforme" replace />} />
            <Route path="a-propos" element={<AboutPage />} />
            <Route path="devis" element={<DevisPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="informations-legales" element={<InformationsLegalesPage />} />
            <Route path="mentions-legales" element={<MentionsLegalesPage />} />
            <Route path="cgu" element={<CGUPage />} />
            <Route path="cgv" element={<CGVPage />} />
            <Route path="confidentialite" element={<ConfidentialitePage />} />
            <Route path="cookies" element={<CookiesPage />} />
            <Route path="accessibilite" element={<AccessibilitePage />} />
            <Route path="informations-legales/mentions-legales" element={<Navigate to="/mentions-legales" replace />} />
            <Route path="informations-legales/cgu" element={<Navigate to="/cgu" replace />} />
            <Route path="informations-legales/cgv" element={<Navigate to="/cgv" replace />} />
            <Route path="informations-legales/politique-confidentialite" element={<Navigate to="/confidentialite" replace />} />
            <Route path="informations-legales/politique-cookies" element={<Navigate to="/cookies" replace />} />
            <Route path="informations-legales/accessibilite" element={<Navigate to="/accessibilite" replace />} />
            <Route path="plan-du-site" element={<PlanDuSitePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;
