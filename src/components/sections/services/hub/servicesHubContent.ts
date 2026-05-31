import type { LucideIcon } from 'lucide-react';
import {
  Code2,
  Building2,
  LineChart,
  Palette,
  Megaphone,
  FileText,
  Search,
  Target,
  Users,
  Headphones,
} from 'lucide-react';

import heroImage from '../../../../assets/images/services_hero_growth.png';
import devImage from '../../../../assets/images/services_dev_mockups.png';
import toolsImage from '../../../../assets/images/services_dashboard_tools.png';
import strategyImage from '../../../../assets/images/services_strategy_blueprint.png';
import designImage from '../../../../assets/images/services_strategy_blueprint.png';
import marketingImage from '../../../../assets/images/services_marketing_growth.png';

export const SERVICES_HUB_HERO = {
  eyebrow: 'Agence digitale · Côte d’Ivoire',
  titleBefore: 'Des services numériques',
  titleHighlight: 'sur mesure',
  titleAfter: 'pour faire grandir votre activité',
  paragraphs: [
    'Sites, applications, outils métiers et accompagnement : nous concevons des solutions adaptées aux réalités des entrepreneurs, PME et porteurs de projets en Afrique de l’Ouest.',
    'De la première vitrine en ligne à la plateforme complète, chaque prestation est pensée pour être claire, livrable et évolutive.',
  ],
  bullets: [
    'Forfaits transparents pour démarrer rapidement',
    'Expertises techniques et stratégiques à la carte',
    'Paiement Mobile Money et support local',
    'Équipe terrain + produit Soutrali Deals',
  ],
  heroImage,
} as const;

export const SERVICES_HUB_STATS = [
  { value: '2–6 sem.', label: 'Délai moyen\nsite vitrine livré' },
  { value: '4 forfaits', label: 'Offres packagées\nPME & artisans' },
  { value: '5+', label: 'Pôles d’expertise\ninterconnectés' },
  { value: '6j/7', label: 'Support & suivi\nWhatsApp & email' },
] as const;

export type ServicePole = {
  id: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

export const SERVICES_HUB_POLES: ServicePole[] = [
  {
    id: 'developpement',
    label: 'Expertise 01',
    title: 'Développement & produits digitaux',
    description:
      'Applications web et mobiles, marketplaces et tableaux de bord : nous livrons des produits stables, pensés pour les usages réels et les connexions locales.',
    bullets: [
      'Sites vitrines & plateformes sur mesure',
      'Apps mobiles & PWA',
      'E-commerce & marketplaces',
      'Dashboards & outils internes',
    ],
    cta: 'Découvrir le pôle développement',
    href: '/services/developpement-produits',
    image: devImage,
    imageAlt: 'Maquettes de produits digitaux Soutrali',
  },
  {
    id: 'solutions',
    label: 'Expertise 02',
    title: 'Solutions métiers & automatisation',
    description:
      'Digitalisez vos processus : CRM, reporting, workflows et intégrations pour gagner en visibilité sur votre activité sans complexité inutile.',
    bullets: [
      'CRM & gestion clients',
      'Automatisation & notifications',
      'Reporting & tableaux de bord',
      'Outils internes sur mesure',
    ],
    cta: 'Optimiser mes opérations',
    href: '/services/solutions-metiers',
    image: toolsImage,
    imageAlt: 'Outils métiers et tableaux de bord',
    reverse: true,
  },
  {
    id: 'strategie',
    label: 'Expertise 03',
    title: 'Stratégie, conseil & cadrage',
    description:
      'Avant de coder, nous structurons : audit, choix technologiques, feuille de route et cahier des charges pour sécuriser budget et planning.',
    bullets: [
      'Audit digital & technique',
      'Stratégie produit & roadmap',
      'Cahier des charges complet',
      'CTO as a Service',
    ],
    cta: 'Structurer mon projet',
    href: '/services/strategie-conseil',
    image: strategyImage,
    imageAlt: 'Plan stratégique et architecture projet',
  },
  {
    id: 'design',
    label: 'Expertise 04',
    title: 'Design, branding & expérience',
    description:
      'Identité visuelle, interfaces et parcours utilisateur : une présentation professionnelle qui inspire confiance dès le premier contact.',
    bullets: [
      'Logo & charte graphique',
      'UI/UX web & mobile',
      'Maquettes & prototypes',
      'Design system & guidelines',
    ],
    cta: 'Renforcer mon image',
    href: '/services/design-branding',
    image: designImage,
    imageAlt: 'Identité visuelle et interfaces',
    reverse: true,
  },
  {
    id: 'marketing',
    label: 'Expertise 05',
    title: 'Marketing digital & formation',
    description:
      'Visibilité, acquisition et montée en compétences : SEO, réseaux sociaux, campagnes et formations pour autonomiser vos équipes.',
    bullets: [
      'SEO & référencement local',
      'Réseaux sociaux & publicité',
      'Stratégies d’acquisition',
      'Formations & accompagnement',
    ],
    cta: 'Développer ma visibilité',
    href: '/services/marketing-formation',
    image: marketingImage,
    imageAlt: 'Croissance marketing et visibilité',
  },
];

export type ExpertiseCard = {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  href: string;
};

export const SERVICES_HUB_EXPERTISE: ExpertiseCard[] = [
  {
    id: 'dev',
    title: 'Applications & SaaS',
    description: 'Produits web et mobiles robustes, API et déploiement cloud.',
    Icon: Code2,
    href: '/services/developpement-produits',
  },
  {
    id: 'metiers',
    title: 'Outils métiers',
    description: 'CRM, ERP légers et automatisation des processus.',
    Icon: Building2,
    href: '/services/solutions-metiers',
  },
  {
    id: 'strat',
    title: 'Conseil & architecture',
    description: 'Audit, roadmap et choix technologiques alignés business.',
    Icon: LineChart,
    href: '/services/strategie-conseil',
  },
  {
    id: 'brand',
    title: 'Identité & UI/UX',
    description: 'Branding, maquettes et expériences utilisateur soignées.',
    Icon: Palette,
    href: '/services/design-branding',
  },
  {
    id: 'mkt',
    title: 'Visibilité & ads',
    description: 'SEO, social ads et stratégies d’acquisition locales.',
    Icon: Megaphone,
    href: '/services/marketing-formation',
  },
  {
    id: 'cdc',
    title: 'Cahier des charges',
    description: 'Spécifications, budget et planning avant développement.',
    Icon: FileText,
    href: '/services/strategie-conseil',
  },
];

export const SERVICES_HUB_VISIBILITY = {
  title: 'Comment développer sa visibilité en ligne ?',
  paragraphs: [
    'En Côte d’Ivoire, vos clients vous cherchent sur Google, WhatsApp et les réseaux sociaux avant de vous appeler. Une présence claire et cohérente n’est plus optionnelle.',
    'Nous combinons site professionnel, référencement local et contenus utiles pour attirer des prospects qualifiés — sans dépenses publicitaires gaspillées.',
  ],
  inbound: {
    tag: 'Approche Soutrali',
    title: 'Miser sur une stratégie durable',
    description:
      'Plutôt que des campagnes isolées, nous construisons un écosystème : vitrine, preuves sociales, suivi des leads et outils de gestion reliés à votre activité.',
    points: [
      'Site optimisé mobile & SEO local Abidjan',
      'Intégration WhatsApp & formulaires de contact',
      'Tableaux de bord pour suivre vos demandes',
      'Accompagnement et formation de vos équipes',
    ],
  },
  offers: [
    {
      title: 'SEO local',
      description: 'Référencement Google pour apparaître quand on cherche votre métier près de chez vous.',
      Icon: Search,
    },
    {
      title: 'Acquisition',
      description: 'Campagnes Meta & Google ciblées, avec budgets maîtrisés et reporting clair.',
      Icon: Target,
    },
    {
      title: 'Communauté',
      description: 'Contenus, témoignages et présence Soutrali Deals pour crédibiliser votre offre.',
      Icon: Users,
    },
  ],
} as const;

export const SERVICES_HUB_FAQ = [
  {
    question: 'Quelle différence entre forfaits et expertises sur mesure ?',
    answer:
      'Les forfaits (Présence à Écosystème) couvrent les besoins les plus fréquents avec un prix fixe. Les expertises s’adressent aux projets spécifiques : application métier, marketplace, audit complet, etc. Nous vous orientons après un échange gratuit.',
  },
  {
    question: 'Proposez-vous des devis gratuits ?',
    answer:
      'Oui. Décrivez votre besoin via la page Contact ou WhatsApp : nous revenons vers vous avec une fourchette, un planning et les livrables attendus.',
  },
  {
    question: 'Travaillez-vous avec Mobile Money ?',
    answer:
      'Oui. Nos solutions e-commerce et plateformes intègrent Orange Money, MTN, Wave et autres moyens de paiement utilisés en Côte d’Ivoire.',
  },
  {
    question: 'Puis-je commencer petit puis faire évoluer mon site ?',
    answer:
      'C’est notre approche recommandée : démarrer avec un forfait Présence ou Croissance, puis ajouter boutique, CRM ou app selon vos résultats.',
  },
  {
    question: 'Intervenez-vous hors d’Abidjan ?',
    answer:
      'Oui, à distance pour la conception et le développement ; des sessions terrain sont possibles selon le projet et le planning.',
  },
  {
    question: 'Qui réalise les prestations ?',
    answer:
      'L’équipe Soutrali Deals : développeurs, designers et chefs de projet basés en CI, avec la même exigence que sur notre plateforme produit.',
  },
] as const;

export const SERVICES_HUB_WHY = [
  { Icon: Users, title: 'Équipe pluridisciplinaire' },
  { Icon: Target, title: 'Vision business & produit' },
  { Icon: Headphones, title: 'Support réactif 6j/7' },
] as const;
