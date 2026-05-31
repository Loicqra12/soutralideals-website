import type { LucideIcon } from 'lucide-react';
import {
  BarChart3,
  CreditCard,
  Fingerprint,
  Globe2,
  GraduationCap,
  Layers,
  LineChart,
  MapPin,
  Megaphone,
  MessageSquareText,
  Rocket,
  ShoppingBag,
  Smartphone,
  Store,
  Target,
  TrendingUp,
  Users,
  Wallet,
} from 'lucide-react';

export type RoadmapPhaseItem = {
  text: string;
  Icon: LucideIcon;
};

export type RoadmapPhase = {
  id: string;
  label: string;
  number: string;
  title: string;
  objective: string;
  summary: string;
  Icon: LucideIcon;
  items: RoadmapPhaseItem[];
};

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    id: 'foundation',
    label: 'Phase 01',
    number: '01',
    title: 'Fondation',
    objective: 'Lancer, tester et structurer',
    summary:
      'Poser les bases produit et terrain : une plateforme utilisable, des premiers utilisateurs et des processus clairs.',
    Icon: Rocket,
    items: [
      { text: 'Lancement officiel des versions web et mobile', Icon: Smartphone },
      { text: 'Collecte et intégration des retours utilisateurs', Icon: MessageSquareText },
      { text: 'Déploiement de l’application d’identification Soutrali ID', Icon: Fingerprint },
      { text: 'Communication ciblée (WhatsApp, réseaux, terrain)', Icon: Megaphone },
      { text: 'Premières fonctionnalités marketplace opérationnelles', Icon: Store },
    ],
  },
  {
    id: 'growth',
    label: 'Phase 02',
    number: '02',
    title: 'Croissance',
    objective: 'Diversifier, optimiser et renforcer',
    summary:
      'Élargir l’offre, fiabiliser les parcours et accélérer l’adoption grâce au paiement et à l’analyse des usages.',
    Icon: TrendingUp,
    items: [
      { text: 'Nouvelles catégories de services et petites annonces', Icon: Layers },
      { text: 'Intégration progressive de SoutraPay (wallet & paiement)', Icon: Wallet },
      { text: 'Campagnes marketing ciblées par segment', Icon: Target },
      { text: 'Tableaux de bord et amélioration continue produit', Icon: LineChart },
      { text: 'Marketplace avancée et monétisation renforcée', Icon: ShoppingBag },
    ],
  },
  {
    id: 'expansion',
    label: 'Phase 03',
    number: '03',
    title: 'Expansion régionale',
    objective: 'Étendre, engager et ouvrir les marchés',
    summary:
      'Répliquer le modèle dans de nouvelles villes et pays, tout en renforçant la communauté et la formation.',
    Icon: Globe2,
    items: [
      { text: 'Déploiement dans d’autres villes (Bouaké, Korhogo…)', Icon: MapPin },
      { text: 'Plateforme de formation pour artisans et freelances', Icon: GraduationCap },
      { text: 'Communauté : SoutraNews, événements et badges', Icon: Users },
      { text: 'Études de marchés régionaux (Bénin, Sénégal…)', Icon: BarChart3 },
      { text: 'Adaptation des offres à l’international', Icon: CreditCard },
    ],
  },
];
