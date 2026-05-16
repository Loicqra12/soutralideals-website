import { useReducedMotion } from 'framer-motion';
import { Ecosystem } from '../components/sections/Ecosystem';
import { FinalCTA } from '../components/sections/FinalCTA';
import { SEO } from '../components/seo/SEO';
import { HowItWorksSection } from '../components/ecosystem/HowItWorksSection';
import { PillarRow } from '../components/ecosystem/PillarRow';
import { ToolsSection } from '../components/ecosystem/ToolsSection';
import { DashboardSection } from '../components/ecosystem/DashboardSection';
import { BeneficiariesSection } from '../components/ecosystem/BeneficiariesSection';
import { VisionSection } from '../components/ecosystem/VisionSection';
import {
  IconBadge,
  IconDatabase,
  IconMapPin,
  IconMetiers,
  IconPay,
  IconPortfolio,
  IconShop,
  IconTrack,
  IconZap,
} from '../components/ecosystem/icons';

import artisansImage from '../assets/images/pilier_1_artisans_1768488740726.png';
import freelancesImage from '../assets/images/pilier_2_freelances_1768488774447.png';
import marketplaceImage from '../assets/images/pilier_3_marketplace_1768488828674.png';
import sdealsIdImageSrc from '../assets/images/sdeals_id_verification_1768488864696.png';
import soutrapayImageSrc from '../assets/images/soutrapay_payment_1768488897962.png';
import dashboardImageSrc from '../assets/images/project/project_dashboard_admin.png';

const PILLARS = [
  {
    num: '01',
    badge: 'PILIER 1',
    color: 'green' as const,
    title: 'Métiers & Prestataires',
    desc: "Artisans, techniciens, services de proximité — organisés par catégories et géolocalisés en temps réel pour connecter l'offre à la demande.",
    quote: "Nous structurons l'informel sans le compliquer.",
    image: artisansImage,
    theme: 'dark' as const,
    cards: [
      { Icon: IconMapPin, title: 'Géolocalisation', desc: 'Trouvez les meilleurs prestataires autour de vous en temps réel.' },
      { Icon: IconMetiers, title: '12+ Métiers', desc: 'Tous les corps de métiers organisés par catégorie et spécialité.' },
      { Icon: IconBadge, title: 'Badge vérifié', desc: 'Chaque prestataire est validé et certifié par Soutrali ID.' },
    ],
    variant: 'slideRight' as const,
  },
  {
    num: '02',
    badge: 'PILIER 2',
    color: 'blue' as const,
    title: 'Freelance & Numérique',
    desc: 'IT, design, marketing — réalisés en interne ou par nos freelances référencés. La compétence locale au service des projets ambitieux.',
    quote: 'La compétence locale au service des projets ambitieux.',
    image: freelancesImage,
    theme: 'light' as const,
    reversed: true,
    cards: [
      { Icon: IconZap, title: 'Services IT', desc: 'Web, mobile et design réalisés par nos équipes internes.' },
      { Icon: IconDatabase, title: 'Freelances ref.', desc: 'Talents locaux qualifiés, référencés et évalués.' },
      { Icon: IconPortfolio, title: 'Portfolio', desc: 'Historique des projets, évaluations et réputation visibles.' },
    ],
    variant: 'scale3D' as const,
  },
  {
    num: '03',
    badge: 'PILIER 3',
    color: 'gold' as const,
    title: 'E-marché & Vendeurs',
    desc: 'Boutiques locales, produits artisanaux, alimentaires — connectés à la livraison et au paiement intégré SoutraPay.',
    quote: 'Le commerce local digitalisé, enfin accessible.',
    image: marketplaceImage,
    theme: 'dark' as const,
    cards: [
      { Icon: IconShop, title: 'Boutiques locales', desc: 'Tous les vendeurs de proximité référencés sur la plateforme.' },
      { Icon: IconTrack, title: 'Commandes trackées', desc: 'Suivi de livraison en temps réel pour chaque commande.' },
      { Icon: IconPay, title: 'Paiement intégré', desc: 'Transactions sécurisées via notre outil SoutraPay.' },
    ],
    variant: 'wipe' as const,
  },
];

const TOOLS = [
  {
    badge: 'OUTIL CLÉ',
    color: 'green' as const,
    title: 'Soutrali ID',
    tagline: 'Recensement & Vérification terrain',
    desc: 'Application qui collecte et valide les données des prestataires, freelances et vendeurs. La base fiable qui rend tout le reste possible.',
    features: ['Identité, métier, photo & GPS', 'Validation et vérification terrain', 'Base de données sécurisée'],
    image: sdealsIdImageSrc,
    imageRight: true,
  },
  {
    badge: 'INCLUSION FINANCIÈRE',
    color: 'blue' as const,
    title: 'SoutraPay',
    tagline: 'Paiement sécurisé intégré',
    desc: 'Système de paiement interne simple et traçable — conçu pour les économies informelles. Pas une banque, juste un outil qui fonctionne.',
    features: ['Paiement simple et traçable', 'Historique des transactions', 'Réputation et scoring progressif'],
    image: soutrapayImageSrc,
    imageRight: false,
  },
];

export const EcosystemPage = () => {
  const reduced = useReducedMotion();

  return (
    <>
      <SEO
        title="Notre Écosystème"
        description="Découvrez comment Freelances, Artisans, Commerçants et Startups collaborent au sein de l'écosystème Soutrali Deals."
      />
      <div className="bg-[#060e1a]">
        <Ecosystem pageHero />
        <HowItWorksSection reduced={!!reduced} />
        {PILLARS.map((p) => (
          <PillarRow key={p.num} {...p} reduced={!!reduced} />
        ))}
        <ToolsSection reduced={!!reduced} tools={TOOLS} />
        <DashboardSection reduced={!!reduced} dashboardImage={dashboardImageSrc} />
        <BeneficiariesSection reduced={!!reduced} />
        <VisionSection reduced={!!reduced} />
        <FinalCTA />
      </div>
    </>
  );
};
