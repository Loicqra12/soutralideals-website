import { Ecosystem } from '../components/sections/Ecosystem';
import { FinalCTA } from '../components/sections/FinalCTA';
import { SEO } from '../components/seo/SEO';

/**
 * EcosystemPage - Page dédiée "Écosystème"
 * 
 * Contenu :
 * - Section Ecosystem complète (Vision, Mission, Équipe, Philosophie, Valeurs)
 * - CTA final pour conversion
 * 
 * Future amélioration :
 * - Ajouter schéma visuel (équipe → communauté → plateforme)
 * - Animation d'entrée spécifique
 */
export const EcosystemPage = () => {
    return (
        <>
            <SEO
                title="Notre Écosystème"
                description="Découvrez comment Freelances, Artisans, Commerçants et Startups collaborent au sein de l'écosystème Soutrali Deals."
            />
            <div className="pt-24">
                <Ecosystem />
                <FinalCTA />
            </div>
        </>
    );
};
