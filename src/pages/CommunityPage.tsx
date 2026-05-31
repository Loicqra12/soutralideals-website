import { Community } from '../components/sections/Community';
import { CommunityPillars } from '../components/sections/CommunityPillars';
import { ArtisanCommunities } from '../components/sections/ArtisanCommunities';
import { CommunityGamification } from '../components/sections/CommunityGamification';
import { FeaturedMembers } from '../components/sections/FeaturedMembers';
import { Events } from '../components/sections/Events';
import { FinalCTA } from '../components/sections/FinalCTA';
import { SEO } from '../components/seo/SEO';
import communityOgImage from '../assets/images/community/community-teaser.png';

export const CommunityPage = () => {
  return (
    <>
      <SEO
        title="La Communauté"
        description="Rejoignez la plus grande communauté de talents en Côte d'Ivoire. Networking, événements, entraide et opportunités d'affaires."
        ogImage={communityOgImage}
        breadcrumbs={[
          { name: 'Accueil', path: '/' },
          { name: 'Communauté', path: '/communaute' },
        ]}
      />
      <Community heroAsH1 />
      <CommunityPillars />
      <ArtisanCommunities />
      <CommunityGamification />
      <FeaturedMembers />
      <Events />
      <FinalCTA />
    </>
  );
};
