import type { LucideIcon } from 'lucide-react';
import {
  Search,
  Palette,
  Code2,
  FlaskConical,
  Rocket,
  BarChart3,
} from 'lucide-react';

export type MethodologyStep = {
  id: string;
  tab: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  bentoBg: string;
  bentoBorder: string;
  accent: string;
  deliverable: string;
  duration: string;
  focus: string;
  quote: string;
};

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    id: 'analyse',
    tab: 'Analyse',
    title: 'Analyse du besoin',
    description:
      'Compréhension du contexte local, des utilisateurs cibles et des contraintes métier pour poser des bases solides.',
    Icon: Search,
    bentoBg: 'bg-primary-blue/[0.12]',
    bentoBorder: 'border-primary-blue/25',
    accent: 'text-primary-blue',
    deliverable: 'Cahier des charges',
    duration: '1–2 sem.',
    focus: 'Besoin & marché',
    quote: 'Un bon cadrage évite 50 % des retours en arrière.',
  },
  {
    id: 'ux',
    tab: 'UX / UI',
    title: 'Conception UX/UI',
    description:
      'Parcours utilisateurs, wireframes et identité visuelle alignés sur les réalités ivoiriennes.',
    Icon: Palette,
    bentoBg: 'bg-primary-green/[0.12]',
    bentoBorder: 'border-primary-green/25',
    accent: 'text-primary-green',
    deliverable: 'Maquettes Figma',
    duration: '2–3 sem.',
    focus: 'Expérience',
    quote: 'Le design doit servir l’informel, pas le compliquer.',
  },
  {
    id: 'dev',
    tab: 'Développement',
    title: 'Développement technique',
    description:
      'Architecture scalable, code propre et intégrations Mobile Money, géolocalisation et API.',
    Icon: Code2,
    bentoBg: 'bg-gold-premium/[0.12]',
    bentoBorder: 'border-gold-premium/25',
    accent: 'text-gold-premium',
    deliverable: 'MVP fonctionnel',
    duration: '4–8 sem.',
    focus: 'Produit',
    quote: 'Construire vite, mais construire juste.',
  },
  {
    id: 'test',
    tab: 'Tests',
    title: 'Tests & amélioration continue',
    description:
      'Tests utilisateurs, corrections et itérations jusqu’à une expérience fluide sur tous les devices.',
    Icon: FlaskConical,
    bentoBg: 'bg-teal-400/[0.1]',
    bentoBorder: 'border-teal-400/25',
    accent: 'text-teal-300',
    deliverable: 'Rapport QA',
    duration: '1–2 sem.',
    focus: 'Qualité',
    quote: 'Chaque bug corrigé renforce la confiance.',
  },
  {
    id: 'deploy',
    tab: 'Déploiement',
    title: 'Déploiement',
    description:
      'Mise en production, stores, hébergement cloud et formation des équipes internes.',
    Icon: Rocket,
    bentoBg: 'bg-primary-green/[0.12]',
    bentoBorder: 'border-primary-green/25',
    accent: 'text-primary-green',
    deliverable: 'Go-live',
    duration: '3–5 j.',
    focus: 'Lancement',
    quote: 'Le jour J n’est que le début.',
  },
  {
    id: 'suivi',
    tab: 'Suivi',
    title: 'Suivi & évolution',
    description:
      'Monitoring, analytics, évolutions produit et support pour faire grandir la plateforme.',
    Icon: BarChart3,
    bentoBg: 'bg-primary-blue/[0.12]',
    bentoBorder: 'border-primary-blue/25',
    accent: 'text-primary-blue',
    deliverable: 'Roadmap v2',
    duration: 'Continu',
    focus: 'Croissance',
    quote: 'Un produit vivant s’adapte à son marché.',
  },
];

export const METHODOLOGY_STATS = [
  { value: '6', label: 'étapes structurées', sub: 'De A à Z' },
  { value: '100%', label: 'méthode agile', sub: 'Itérations courtes' },
  { value: '∞', label: 'suivi post-lancement', sub: 'Évolution continue' },
] as const;
