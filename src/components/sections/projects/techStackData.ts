import type { SimpleIcon } from 'simple-icons';
import {
  siDart,
  siFirebase,
  siFlutter,
  siGithubactions,
  siGoogleanalytics,
  siGraphql,
  siKotlin,
  siMapbox,
  siMongodb,
  siNodedotjs,
  siNextdotjs,
  siPostgresql,
  siReact,
  siSwift,
  siTailwindcss,
  siTypescript,
} from 'simple-icons';

export type TechItem = {
  label: string;
  icon?: SimpleIcon;
};

export type TechCategory = {
  id: string;
  title: string;
  summary: string;
  technologies: TechItem[];
  layout: 'tall' | 'default' | 'wide';
};

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'mobile',
    title: 'Mobile',
    summary:
      'Application Soutrali en Flutter : une base de code, déploiement App Store & Play Store, auth et push via Firebase.',
    technologies: [
      { label: 'Flutter', icon: siFlutter },
      { label: 'Dart', icon: siDart },
      { label: 'Kotlin', icon: siKotlin },
      { label: 'Swift', icon: siSwift },
      { label: 'Firebase', icon: siFirebase },
    ],
    layout: 'tall',
  },
  {
    id: 'web',
    title: 'Web',
    summary:
      'Marketplace et interfaces admin en React + TypeScript, styles Tailwind, rendu rapide côté client.',
    technologies: [
      { label: 'React', icon: siReact },
      { label: 'TypeScript', icon: siTypescript },
      { label: 'Next.js', icon: siNextdotjs },
      { label: 'Tailwind CSS', icon: siTailwindcss },
      { label: 'Flutter Web', icon: siFlutter },
    ],
    layout: 'default',
  },
  {
    id: 'backend',
    title: 'Backend',
    summary:
      'API Node.js exposant REST et GraphQL ; données relationnelles PostgreSQL et documents MongoDB selon les modules.',
    technologies: [
      { label: 'Node.js', icon: siNodedotjs },
      { label: 'GraphQL', icon: siGraphql },
      { label: 'PostgreSQL', icon: siPostgresql },
      { label: 'MongoDB', icon: siMongodb },
      { label: 'API REST' },
    ],
    layout: 'default',
  },
  {
    id: 'tools',
    title: 'Outils & intégrations',
    summary:
      'OpenAI pour l’assistance, Mapbox pour la géolocalisation, connecteurs Mobile Money, analytics et pipelines CI/CD.',
    technologies: [
      { label: 'OpenAI' },
      { label: 'Mapbox', icon: siMapbox },
      { label: 'Mobile Money APIs' },
      { label: 'Analytics', icon: siGoogleanalytics },
      { label: 'CI/CD', icon: siGithubactions },
    ],
    layout: 'wide',
  },
];

export const TECH_ARCHITECTURE_POINTS = [
  'API stateless derrière un reverse proxy — montée en charge par instances',
  'Données chiffrées en transit (TLS) ; accès par rôles sur le dashboard admin',
  'Déploiements automatisés (GitHub Actions) avec environnements staging / prod',
] as const;
