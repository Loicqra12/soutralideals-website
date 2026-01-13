import { Services } from '../components/sections/Services';
import { FinalCTA } from '../components/sections/FinalCTA';
import { SEO } from '../components/seo/SEO';

/**
 * ServicesPage - Page dédiée "Services"
 * 
 * Future amélioration :
 * - Ajouter prix "À partir de ... FCFA"
 * - Badges "Populaire"
 * - Bouton "Parler à un expert"
 * - Ancres internes pour sous-sections
 */
export const ServicesPage = () => {
    return (
        <>
            <SEO
                title="Nos Services & Tarifs"
                description="Développement web, application mobile, marketing digital, comptabilité. Des services premium adaptés à votre budget."
            />
            <div className="pt-24">
                <Services />
                <FinalCTA />
            </div>
        </>
    );
};
