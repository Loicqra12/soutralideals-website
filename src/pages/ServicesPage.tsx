import { SEO } from '../components/seo/SEO';
import { ServicesHubHero } from '../components/sections/services/hub/ServicesHubHero';
import { ServicesHubStats } from '../components/sections/services/hub/ServicesHubStats';
import { ServicesHubPackages } from '../components/sections/services/hub/ServicesHubPackages';
import { ServicesHubPolesIntro } from '../components/sections/services/hub/ServicesHubPolesIntro';
import { ServicesHubPoleSection } from '../components/sections/services/hub/ServicesHubPoleSection';
import { SERVICES_HUB_POLES } from '../components/sections/services/hub/servicesHubContent';
import { ServicesHubExpertiseCarousel } from '../components/sections/services/hub/ServicesHubExpertiseCarousel';
import { ServicesHubVisibility } from '../components/sections/services/hub/ServicesHubVisibility';
import { ServicesHubFaq } from '../components/sections/services/hub/ServicesHubFaq';
import { ServicesHubCta } from '../components/sections/services/hub/ServicesHubCta';
import servicesOgImage from '../assets/images/services_hero_growth.png';

export const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Nos Services — Forfaits & Expertises Digitales"
        description="Forfaits web pour PME en Côte d’Ivoire et expertises sur mesure : développement, design, stratégie, marketing et outils métiers. Devis gratuit."
        ogImage={servicesOgImage}
        keywords={[
          'agence web Côte d’Ivoire',
          'création site internet Abidjan',
          'développement application mobile',
          'forfait site vitrine',
          'e-commerce Mobile Money',
        ]}
        breadcrumbs={[
          { name: 'Accueil', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
      />
      <div className="min-h-screen bg-[#f4faf6] pt-24">
        <ServicesHubHero />
        <ServicesHubStats />
        <ServicesHubPackages />
        <ServicesHubPolesIntro />
        {SERVICES_HUB_POLES.map((pole, index) => (
          <ServicesHubPoleSection key={pole.id} pole={pole} index={index} />
        ))}
        <ServicesHubExpertiseCarousel />
        <ServicesHubVisibility />
        <ServicesHubFaq />
        <ServicesHubCta />
      </div>
    </>
  );
};
