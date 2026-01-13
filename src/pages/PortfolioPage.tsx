import { Portfolio } from '../components/sections/Portfolio';
import { FinalCTA } from '../components/sections/FinalCTA';
import { SEO } from '../components/seo/SEO';

/**
 * PortfolioPage - Page dédiée "Réalisations"
 * 
 * Future amélioration :
 * - Filtres Web/Mobile/Dashboard
 * - Modal détails projets
 * - Logo client + année
 */
export const PortfolioPage = () => {
    return (
        <>
            <SEO
                title="Nos Réalisations"
                description="Explorez nos projets récents : applications mobiles, sites e-commerce, dashboards et solutions digitales innovantes."
            />
            <div className="pt-24" id="portfolio">
                <Portfolio />
                <FinalCTA />
            </div>
        </>
    );
};
