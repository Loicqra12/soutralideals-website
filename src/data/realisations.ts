// Soutrali Deals
import soutraliLogo from '../assets/images/realisations/soutrali-deals/logo/logo.png';
import soutraliWeb from '../assets/images/realisations/soutrali-deals/web/web-1.jpg';
import soutraliMobile from '../assets/images/realisations/soutrali-deals/mobile/mobile-1.png';
import soutraliDashboard from '../assets/images/realisations/soutrali-deals/dashboard/dashboard-1.png';

// Chape Chape Residence
import chapeLogo from '../assets/images/realisations/chape-chape-residence/logo/logo.png';
import chapeWeb from '../assets/images/realisations/chape-chape-residence/web/web-1.png';
import chapeMobile from '../assets/images/realisations/chape-chape-residence/mobile/mobile-1.png';
import chapeDashboard from '../assets/images/realisations/chape-chape-residence/dashboard/dashboard-1.png';

// APA
import apaLogo from '../assets/images/realisations/apa/logo/logo.png';
import apaWeb from '../assets/images/realisations/apa/web/web-1.png';
import apaMobile from '../assets/images/realisations/apa/mobile/mobile-1.png';
import apaDashboard from '../assets/images/realisations/apa/dashboard/dashboard-1.png';

// Artisan du Bien-être
import artisanLogo from '../assets/images/realisations/artisan-du-bien-etre/logo/logo.png';
import artisanWeb from '../assets/images/realisations/artisan-du-bien-etre/web/web-1.png';

// OVPR
import ovprLogo from '../assets/images/realisations/ovpr/logo/logo.png';
import ovprWeb from '../assets/images/realisations/ovpr/web/web-1.png';
import ovprMobile from '../assets/images/realisations/ovpr/mobile/mobile-1.png';
import ovprDashboard from '../assets/images/realisations/ovpr/dashboard/dashboard-1.png';

// KPS Services
import kpsLogo from '../assets/images/realisations/kps-service/logo/logo.png';
import kpsWeb from '../assets/images/realisations/kps-service/web/web-1.png';

// CNDPEP-CI
import cndpepLogo from '../assets/images/realisations/cndepepci/logo/logo.png';
import cndpepWeb from '../assets/images/realisations/cndepepci/web/web-1.png';

export type DeliverableType = 'Web' | 'Mobile' | 'Dashboard';
export type CoverFrame = 'mobile' | 'laptop' | 'none';

export interface Realisation {
  id: string;
  client: string;
  sector: string;
  projectType: string;
  year: string;
  tagline: string;
  description: string;
  challenge: string;
  deliverables: string[];
  types: DeliverableType[];
  technologies: string[];
  liveUrl?: string;
  results: string[];
  logo: string;
  cover: string;
  /** mobile = cadre téléphone, laptop = cadre MacBook, none = visuel déjà en mockup */
  coverFrame: CoverFrame;
  images: Partial<Record<Lowercase<DeliverableType>, string>>;
  featured: boolean;
}

export const REALISATIONS: Realisation[] = [
  {
    id: 'soutrali-deals',
    client: 'Soutrali Deals',
    sector: 'Marketplace & Écosystème digital',
    projectType: 'Plateforme & écosystème',
    year: '2023 – en cours',
    tagline:
      'La plateforme africaine qui connecte les services, les commerces et les talents dans un seul écosystème numérique.',
    description:
      'Marketplace digitale conçue pour centraliser les services professionnels, commerces, freelances et opportunités en Afrique. Les utilisateurs recherchent, comparent et commandent des services ou produits, tandis que les prestataires développent leur activité et leur visibilité.',
    challenge:
      'Le marché des services en Afrique reste largement informel et fragmenté. Il fallait créer un écosystème unique, fiable et accessible, capable de connecter clients, commerces et talents tout en structurant un réseau de prestataires de confiance.',
    deliverables: [
      'Plateforme web',
      'Application mobile',
      'Dashboard prestataire',
      'Dashboard admin',
      'Système de référencement de services',
      'Module e-commerce et annonces',
    ],
    types: ['Web', 'Mobile', 'Dashboard'],
    technologies: ['React / TS', 'Flutter (BLoC)', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Docker'],
    results: [
      'Base utilisateur en croissance',
      'Structuration d’un réseau de prestataires',
      'Digitalisation progressive des services informels',
    ],
    logo: soutraliLogo,
    cover: soutraliMobile,
    coverFrame: 'mobile',
    images: { web: soutraliWeb, mobile: soutraliMobile, dashboard: soutraliDashboard },
    featured: true,
  },
  {
    id: 'chape-chape-residence',
    client: 'ChapeChape Residence',
    sector: 'Immobilier & Hospitality tech',
    projectType: 'Plateforme immobilière',
    year: '2024 – en cours',
    tagline:
      'Simplifier la location de résidences en Afrique grâce à une expérience digitale fluide et sécurisée.',
    description:
      'Plateforme de gestion et de réservation de résidences meublées et non meublées. Elle connecte propriétaires et locataires avec une solution simple de recherche, réservation, paiement et gestion de logements.',
    challenge:
      'La location courte durée souffrait d’un manque de transparence et d’outils de gestion. L’enjeu : digitaliser tout le parcours, de l’annonce au paiement, en sécurisant les transactions et en automatisant les réservations.',
    deliverables: [
      'Plateforme web',
      'Application mobile',
      'Espace propriétaire',
      'Système de réservation',
      'Gestion des annonces immobilières',
      'Dashboard admin',
    ],
    types: ['Web', 'Mobile', 'Dashboard'],
    technologies: ['Flutter', 'React.js', 'Node.js', 'MongoDB', 'Mobile Money', 'Google Maps API', 'Twilio', 'Docker'],
    liveUrl: 'https://presentation.chapechaperesidence.com/',
    results: [
      'Réseau de résidences partenaires structuré',
      'Digitalisation de la location courte durée',
      'Automatisation des réservations et demandes clients',
    ],
    logo: chapeLogo,
    cover: chapeMobile,
    coverFrame: 'mobile',
    images: { web: chapeWeb, mobile: chapeMobile, dashboard: chapeDashboard },
    featured: true,
  },
  {
    id: 'apa',
    client: 'APA – Allo Pièce Auto',
    sector: 'Automobile & E-commerce',
    projectType: 'Marketplace & livraison',
    year: '2024 – en cours',
    tagline: 'Commander les pièces automobiles rapidement, simplement et en toute confiance.',
    description:
      'Plateforme de commande et de livraison de pièces automobiles. Elle connecte clients, mécaniciens, garages et vendeurs pour faciliter la recherche, la commande et la livraison rapide de pièces compatibles et vérifiées.',
    challenge:
      'Trouver la bonne pièce auto compatible était long, incertain et dépendant du marché informel. Il fallait fiabiliser la recherche, garantir la compatibilité et accélérer la livraison via un réseau de vendeurs vérifiés.',
    deliverables: [
      'Application mobile client',
      'Application vendeur',
      'Dashboard admin',
      'Système de recherche de pièces',
      'Module de livraison en temps réel',
    ],
    types: ['Web', 'Mobile', 'Dashboard'],
    technologies: ['Flutter', 'React.js', 'Node.js', 'PostgreSQL', 'Géolocalisation', 'Mobile Money', 'IA (recherche)'],
    liveUrl: 'https://apa.com/',
    results: [
      'Digitalisation du marché informel des pièces auto',
      'Réduction du temps de recherche de pièces',
      'Réseau de vendeurs et livreurs structuré',
    ],
    logo: apaLogo,
    cover: apaMobile,
    coverFrame: 'mobile',
    images: { web: apaWeb, mobile: apaMobile, dashboard: apaDashboard },
    featured: true,
  },
  {
    id: 'ovpr',
    client: 'OVPR',
    sector: 'Civic tech & Trust platform',
    projectType: 'Plateforme civic-tech',
    year: '2023 – en cours',
    tagline:
      'La plateforme intelligente qui connecte les objets perdus, volés et retrouvés pour accélérer leur restitution.',
    description:
      'Plateforme digitale pour déclarer, rechercher et retrouver des objets perdus, volés ou oubliés. Elle repose sur un système de matching intelligent, des statuts clairs et un écosystème sécurisé impliquant le grand public et les institutions.',
    challenge:
      'Retrouver un objet perdu ou volé reposait sur le hasard et des démarches dispersées. L’enjeu : créer un système de confiance numérique avec un matching intelligent reliant citoyens et institutions de manière sécurisée.',
    deliverables: [
      'Application mobile',
      'Plateforme web',
      'Système de matching intelligent',
      'Back-office administration',
      'Module forces de l’ordre',
      'Système de paiement sécurisé',
    ],
    types: ['Web', 'Mobile', 'Dashboard'],
    technologies: ['Flutter', 'React.js', 'Node.js', 'IA matching', 'PostgreSQL', 'Chiffrement', 'Mobile Money'],
    liveUrl: 'https://ovpr.com/',
    results: [
      'Plateforme de restitution innovante',
      'Système de confiance numérique structuré',
      'Potentiel d’intégration institutionnelle',
    ],
    logo: ovprLogo,
    cover: ovprMobile,
    coverFrame: 'mobile',
    images: { web: ovprWeb, mobile: ovprMobile, dashboard: ovprDashboard },
    featured: true,
  },
  {
    id: 'artisan-du-bien-etre',
    client: 'Artisan du Bien-Être',
    sector: 'Beauté, Spa & Services premium',
    projectType: 'Site vitrine premium',
    year: '2025 – en cours',
    tagline: 'Un espace dédié au bien-être masculin, à la détente et à l’élégance.',
    description:
      'Concept de salon de beauté et spa orienté principalement vers les hommes : soins, massage, grooming et relaxation dans un environnement premium, moderne et professionnel.',
    challenge:
      'Sur un marché du bien-être très féminin, il fallait imposer un positionnement masculin premium et traduire cette élégance en ligne, avec une réservation digitale fluide qui renforce l’expérience client.',
    deliverables: [
      'Site web vitrine',
      'Système de réservation',
      'Catalogue de services',
      'Gestion clients',
      'Programme de fidélité',
    ],
    types: ['Web'],
    technologies: ['React / TS', 'Réservation en ligne', 'Paiement en ligne', 'CRM'],
    liveUrl: 'https://artisandubienetre.fr/',
    results: [
      'Positionnement premium sur le bien-être masculin',
      'Expérience client améliorée via réservation digitale',
      'Marque lifestyle structurée',
    ],
    logo: artisanLogo,
    cover: artisanWeb,
    coverFrame: 'laptop',
    images: { web: artisanWeb },
    featured: false,
  },
  {
    id: 'kps-service',
    client: 'KPS Services',
    sector: 'Nettoyage industriel & Facility management',
    projectType: 'Site vitrine + devis',
    year: '2002 – modernisation en cours',
    tagline: 'L’expertise du nettoyage professionnel au service des entreprises et des espaces industriels.',
    description:
      'Entreprise spécialisée dans le nettoyage industriel, l’entretien de bureaux, le nettoyage de chantiers et la maintenance d’espaces professionnels, combinant expertise terrain et modernisation digitale progressive.',
    challenge:
      'Une entreprise établie mais peu visible en ligne. L’objectif : moderniser son image, valoriser son expertise terrain et simplifier la demande de devis pour capter une clientèle B2B exigeante.',
    deliverables: [
      'Site web vitrine',
      'Système de devis en ligne',
      'Gestion des interventions',
      'Suivi clients',
      'Fiches d’intervention digitales',
    ],
    types: ['Web'],
    technologies: ['HTML / CSS / JS', 'CRM', 'Gestion interne', 'Reporting mobile'],
    liveUrl: 'https://kpsservices.fr/',
    results: [
      'Activité établie et stable',
      'Modernisation progressive des processus',
      'Image professionnelle renforcée',
    ],
    logo: kpsLogo,
    cover: kpsWeb,
    coverFrame: 'laptop',
    images: { web: kpsWeb },
    featured: false,
  },
  {
    id: 'cndepepci',
    client: 'CNDPEP-CI',
    sector: 'Sécurité privée & Organisation professionnelle',
    projectType: 'Plateforme institutionnelle',
    year: '2025 – structuration en cours',
    tagline: 'Structurer, encadrer et professionnaliser le métier d’enquêteur privé en Côte d’Ivoire.',
    description:
      'Organisation professionnelle encadrant les détectives privés et enquêteurs professionnels de Côte d’Ivoire. Elle sert de cadre de certification, de régulation et de mise en relation des acteurs de l’investigation privée.',
    challenge:
      'Un secteur émergent sans cadre structuré ni outil de référence. Il fallait bâtir une plateforme institutionnelle crédible pour certifier les membres, réguler la profession et centraliser les demandes d’enquête.',
    deliverables: [
      'Plateforme institutionnelle',
      'Annuaire des membres',
      'Système de certification',
      'Espace de demande d’enquête',
      'Dashboard administratif',
      'Module de vérification',
    ],
    types: ['Web', 'Dashboard'],
    technologies: ['Plateforme web', 'Base de données sécurisée', 'Système de vérification', 'CRM organisationnel'],
    results: [
      'Secteur émergent structuré',
      'Réseau professionnel certifié',
      'Base pour partenariats institutionnels',
    ],
    logo: cndpepLogo,
    cover: cndpepWeb,
    coverFrame: 'none',
    images: { web: cndpepWeb },
    featured: false,
  },
];

export const DELIVERABLE_FILTERS: Array<'Tous' | DeliverableType> = ['Tous', 'Web', 'Mobile', 'Dashboard'];

export const getRealisation = (id: string): Realisation | undefined =>
  REALISATIONS.find((r) => r.id === id);

export const getOtherRealisations = (id: string, limit = 3): Realisation[] =>
  REALISATIONS.filter((r) => r.id !== id).slice(0, limit);

export const galleryImages = (
  r: Realisation,
): Array<{ type: DeliverableType; src: string; frame: CoverFrame }> => {
  const map: Array<{ type: DeliverableType; key: Lowercase<DeliverableType> }> = [
    { type: 'Web', key: 'web' },
    { type: 'Mobile', key: 'mobile' },
    { type: 'Dashboard', key: 'dashboard' },
  ];
  return map
    .filter((m) => r.images[m.key])
    .map((m) => ({
      type: m.type,
      src: r.images[m.key] as string,
      frame: frameForDeliverable(m.type, r.id),
    }));
};

export const frameForDeliverable = (type: DeliverableType, projectId: string): CoverFrame => {
  if (projectId === 'cndepepci') return 'none';
  if (type === 'Mobile') return 'mobile';
  return 'laptop';
};
