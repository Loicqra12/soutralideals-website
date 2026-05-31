import type { LucideIcon } from 'lucide-react';
import { LayoutDashboard, Smartphone, Globe, Users } from 'lucide-react';
import dashboardImage from '../../../assets/images/project/project_dashboard_admin.png';
import mobileImage from '../../../assets/images/project/app2.png';
import webImage from '../../../assets/images/project/project_web_marketplace.png';
import recensementImage from '../../../assets/images/project/project_recensement.png';

export type PlatformId = 'dashboard' | 'mobile' | 'web' | 'recensement';

export type EcosystemPlatform = {
  id: PlatformId;
  name: string;
  description: string;
  icon: LucideIcon;
  image: string;
  accent: string;
  glow: string;
  stage: string;
  ring: string;
};

export const ECOSYSTEM_PLATFORMS: EcosystemPlatform[] = [
  {
    id: 'mobile',
    name: 'App Mobile',
    description: 'Application tout-en-un pour utilisateurs',
    icon: Smartphone,
    image: mobileImage,
    accent: 'from-gold-premium/80 to-amber-300/60',
    glow: 'shadow-gold-premium/25',
    stage: 'bg-gold-premium/15 border-gold-premium/35',
    ring: 'ring-gold-premium/40',
  },
  {
    id: 'dashboard',
    name: 'Dashboard Admin',
    description: "Centre de pilotage de l'écosystème",
    icon: LayoutDashboard,
    image: dashboardImage,
    accent: 'from-primary-green/80 to-emerald-400/60',
    glow: 'shadow-primary-green/30',
    stage: 'bg-primary-green/15 border-primary-green/35',
    ring: 'ring-primary-green/40',
  },
  {
    id: 'web',
    name: 'Marketplace Web',
    description: 'Vitrine publique et marketplace',
    icon: Globe,
    image: webImage,
    accent: 'from-primary-blue/80 to-sky-400/60',
    glow: 'shadow-primary-blue/30',
    stage: 'bg-primary-blue/15 border-primary-blue/35',
    ring: 'ring-primary-blue/40',
  },
  {
    id: 'recensement',
    name: 'Soutrali Recensement',
    description: "App d'identification terrain",
    icon: Users,
    image: recensementImage,
    accent: 'from-teal-400/70 to-primary-green/50',
    glow: 'shadow-teal-400/25',
    stage: 'bg-teal-400/10 border-teal-400/30',
    ring: 'ring-teal-400/35',
  },
];
