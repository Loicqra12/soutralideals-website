import { Hero } from '../components/sections/Hero';
import { SuperAppServices } from '../components/sections/SuperAppServices';
import { MarqueeSection } from '../components/ui/MarqueeSection';
import { ProfileModesSection } from '../components/sections/ProfileModesSection';
import { Ecosystem } from '../components/sections/Ecosystem';
import { IdentificationApp } from '../components/sections/IdentificationApp';
import { Services } from '../components/sections/Services';
import { Testimonials } from '../components/sections/Testimonials';
import { CommunityTeaser } from '../components/sections/CommunityTeaser';
import { FAQ } from '../components/sections/FAQ';
import { FinalCTA } from '../components/sections/FinalCTA';
import { SEO } from '../components/seo/SEO';
import homeOgImage from '../assets/images/Hero/Hero-1.png';

/**
 * Accueil — fil narratif :
 * Promesse → Plateforme → Métiers → Profils → Écosystème → Confiance (ID)
 * → Agence → Preuve sociale → Communauté (teaser) → FAQ → CTA
 *
 * Hors accueil : Portfolio (/realisations), Communauté complète (/communaute),
 * Partenaires (footer), Newsletter (footer).
 */
export const HomePage = () => {
  return (
    <>
      <SEO
        title="Accueil"
        description="La plateforme tout-en-un pour les travailleurs indépendants en Côte d'Ivoire. Trouvez des missions, gérez votre activité et rejoignez une communauté."
        ogImage={homeOgImage}
      />
      <Hero />
      <SuperAppServices />
      <MarqueeSection />
      <ProfileModesSection />
      <Ecosystem />
      <IdentificationApp />
      <Services />
      <Testimonials />
      <CommunityTeaser />
      <FAQ />
      <FinalCTA />
    </>
  );
};
