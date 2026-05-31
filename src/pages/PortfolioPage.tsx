import { RealisationsHero } from '../components/sections/realisations/RealisationsHero';
import { RealisationsGrid } from '../components/sections/realisations/RealisationsGrid';
import { RealisationsTestimonials } from '../components/sections/realisations/RealisationsTestimonials';
import { RealisationsTrust } from '../components/sections/realisations/RealisationsTrust';
import { FinalCTA } from '../components/sections/FinalCTA';
import { SEO } from '../components/seo/SEO';
import portfolioOgImage from '../assets/images/services_dev_mockups.png';

/**
 * PortfolioPage - Page dédiée "Réalisations"
 */
export const PortfolioPage = () => {
    return (
        <>
            <SEO
                title="Nos Réalisations"
                description="Découvrez nos projets clients : marketplaces, plateformes immobilières, applications mobiles et dashboards de pilotage. Des solutions digitales complètes en Côte d’Ivoire et en Afrique."
                ogImage={portfolioOgImage}
                keywords={[
                    'portfolio agence web Côte d’Ivoire',
                    'réalisations applications mobiles',
                    'développement plateforme web Afrique',
                    'dashboard sur mesure',
                ]}
                breadcrumbs={[
                    { name: 'Accueil', path: '/' },
                    { name: 'Réalisations', path: '/realisations' },
                ]}
            />
            <div className="pt-24" id="portfolio">
                <RealisationsHero />
                <RealisationsGrid />
                <RealisationsTestimonials />
                <RealisationsTrust />
                <FinalCTA />
            </div>
        </>
    );
};
