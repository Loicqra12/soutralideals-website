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
            <Route path="services" element={<ServicesPage />} />
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
