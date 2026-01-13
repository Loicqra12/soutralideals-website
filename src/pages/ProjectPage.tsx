import { ProjectPresentation } from '../components/sections/ProjectPresentation';
import { MobileApp } from '../components/sections/MobileApp';
import { WebDashboard } from '../components/sections/WebDashboard';
import { IdentificationApp } from '../components/sections/IdentificationApp';
import { FinalCTA } from '../components/sections/FinalCTA';
import { SEO } from '../components/seo/SEO';

/**
 * ProjectPage - Page dédiée "Le Projet"
 * 
 * Page MAJEURE pour investisseurs/partenaires
 * 
 * Contenu :
 * - Vision du projet tech
 * - App mobile
 * - Plateforme web (dashboard)
 * - App d'identification
 * 
 * Future amélioration :
 * - Architecture technique (schéma)
 * - Roadmap 2025-2026
 * - Stack technologique
 */
export const ProjectPage = () => {
    return (
        <>
            <SEO
                title="Le Projet Soutrali"
                description="Une vision ambitieuse pour digitaliser le secteur informel. Découvrez nos applications mobiles, dashboard web et outils d'identification."
            />
            <div className="pt-24">
                <ProjectPresentation />
                <MobileApp />
                <WebDashboard />
                <IdentificationApp />
                <FinalCTA />
            </div>
        </>
    );
};
