import type { LucideIcon } from 'lucide-react';
import { Briefcase, Users, TrendingUp, MapPin } from 'lucide-react';

export type ImpactPillar = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  accent: string;
  iconBg: string;
};

export const IMPACT_INTRO_POINTS = [
  'Économie informelle structurée et visible en ligne',
  'Emplois locaux créés et valorisés sur la plateforme',
  'Services accessibles partout via mobile et Mobile Money',
] as const;

export const IMPACT_PILLARS: ImpactPillar[] = [
  {
    id: 'formalisation',
    icon: Briefcase,
    title: 'Structuration des métiers informels',
    description:
      'Formalisation des prestataires, freelances et vendeurs pour une meilleure visibilité et une image professionnelle sur le marché.',
    bullets: [
      'Profils vérifiés et fiches métiers complètes',
      'Parcours de commande clair pour les clients',
      'Outils de suivi pour les prestataires',
    ],
    accent: 'text-primary-green',
    iconBg: 'bg-primary-green/15',
  },
  {
    id: 'emplois',
    icon: Users,
    title: 'Création d\'emplois',
    description:
      'Opportunités d\'emploi directes et indirectes pour les talents locaux, au service du développement des quartiers et communes.',
    bullets: [
      'Mise en relation clients ↔ prestataires',
      'Formation et montée en compétences',
      'Revenus complémentaires pour les jeunes',
    ],
    accent: 'text-primary-blue',
    iconBg: 'bg-primary-blue/15',
  },
  {
    id: 'digitalisation',
    icon: TrendingUp,
    title: 'Digitalisation des services locaux',
    description:
      'Transformation digitale de l\'artisanat, de la réparation, de la livraison et des services de proximité.',
    bullets: [
      'Catalogue et réservation en ligne',
      'Paiement Mobile Money intégré',
      'Suivi des prestations en temps réel',
    ],
    accent: 'text-gold-premium',
    iconBg: 'bg-gold-premium/15',
  },
  {
    id: 'acces',
    icon: MapPin,
    title: 'Accès simplifié aux opportunités',
    description:
      'Connexion facilitée entre clients et prestataires grâce à la géolocalisation et aux outils de mise en relation.',
    bullets: [
      'Recherche par zone et par métier',
      'Notifications d\'opportunités locales',
      'Élargissement du réseau professionnel',
    ],
    accent: 'text-teal-600',
    iconBg: 'bg-teal-500/15',
  },
];
