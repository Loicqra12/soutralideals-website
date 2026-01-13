import { Community } from '../components/sections/Community';
import { ArtisanCommunities } from '../components/sections/ArtisanCommunities';
import { FeaturedMembers } from '../components/sections/FeaturedMembers';
import { Events } from '../components/sections/Events';
import { FinalCTA } from '../components/sections/FinalCTA';
import { SEO } from '../components/seo/SEO';

/**
 * CommunityPage - Page dédiée "Communauté"
 * 
 * Regroupe :
 * - Vision "Les SOUTRALIENS"
 * - Artisans/Freelances/Vendeurs
 * - Membres featured
 * - Événements timeline
 * 
 * Future amélioration :
 * - Chiffres par communauté
 * - Sous-pages /communaute/artisans, etc.
 */
export const CommunityPage = () => {
    return (
        <>
            <SEO
                title="La Communauté"
                description="Rejoignez la plus grande communauté de talents en Côte d'Ivoire. Networking, événements, entraide et opportunités d'affaires."
            />
            <div className="pt-24">
                <Community />
                <ArtisanCommunities />
                <FeaturedMembers />
                <Events />
                <FinalCTA />
            </div>
        </>
    );
};
