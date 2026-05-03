import { Community } from '../components/sections/Community';
import { CommunityPillars } from '../components/sections/CommunityPillars';
import { ArtisanCommunities } from '../components/sections/ArtisanCommunities';
import { CommunityGamification } from '../components/sections/CommunityGamification';
import { FeaturedMembers } from '../components/sections/FeaturedMembers';
import { Events } from '../components/sections/Events';
import { FinalCTA } from '../components/sections/FinalCTA';
import { SEO } from '../components/seo/SEO';

/**
 * CommunityPage - Page dédiée "Communauté"
 * 
 * Structure complète :
 * 1. Hero - Introduction "Les SOUTRALIENS"
 * 2. Piliers - Les 4 piliers de la communauté
 * 3. Membres - Catégories de membres (Artisans, Freelances, etc.)
 * 4. Gamification - Système de niveaux et badges
 * 5. Témoignages - Histoires vraies des membres
 * 6. Événements - Timeline des participations
 * 7. CTA Final - Appel à l'action
 */
export const CommunityPage = () => {
    return (
        <>
            <SEO
                title="La Communauté"
                description="Rejoignez la plus grande communauté de talents en Côte d'Ivoire. Networking, événements, entraide et opportunités d'affaires."
            />
            <div className="pt-24">
                <Community heroAsH1 />
                <CommunityPillars />
                <ArtisanCommunities />
                <CommunityGamification />
                <FeaturedMembers />
                <Events />
                <FinalCTA />
            </div>
        </>
    );
};
