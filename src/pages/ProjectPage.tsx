import { ProjectHero } from '../components/sections/projects/ProjectHero';
import { EcosystemOverview } from '../components/sections/projects/EcosystemOverview';
import { ProjectsGrid } from '../components/sections/projects/ProjectsGrid';
import { Methodology } from '../components/sections/projects/Methodology';
import { ImpactResults } from '../components/sections/projects/ImpactResults';
import { TechnologiesStack } from '../components/sections/projects/TechnologiesStack';
import { FinalCTA } from '../components/sections/FinalCTA';
import { SEO } from '../components/seo/SEO';

/**
 * ProjectPage - Page dédiée "Le Projet"
 *
 * Page MAJEURE pour investisseurs/partenaires
 *
 * Structure complète :
 * - Section 1 : Introduction (Vision globale)
 * - Section 2 : Vue d'ensemble de l'écosystème
 * - Section 3 : Les 4 projets (avec vraies images)
 * - Section 4 : Méthodologie A → Z
 * - Section 5 : Impact & Résultats
 * - Section 6 : Technologies & Compétences
 *
 * Le pitch deck se télécharge uniquement via le bouton du hero (pas d’auto-téléchargement).
 */
export const ProjectPage = () => {
  return (
    <>
      <SEO
        title="Le Projet Soutrali - Écosystème Digital Complet"
        description="Découvrez nos 4 plateformes interconnectées : Dashboard Admin, App Mobile, Marketplace Web et Soutrali Recensement. Une vision ambitieuse pour digitaliser le secteur informel en Côte d'Ivoire."
      />
      <div className="pt-24">
        <ProjectHero />
        <EcosystemOverview />
        <ProjectsGrid />
        <Methodology />
        <ImpactResults />
        <TechnologiesStack />
        <FinalCTA />
      </div>
    </>
  );
};
