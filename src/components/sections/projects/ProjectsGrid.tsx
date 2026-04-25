import { motion } from 'framer-motion';
import { SectionWrapper } from '../../ui/SectionWrapper';
import { Smartphone, Globe, LayoutDashboard, Users, Check, ExternalLink } from 'lucide-react';
import dashboardImage from '../../../assets/images/project/project_dashboard_admin.png';
import mobileImage from '../../../assets/images/project/project_mobile_app.png';
import webImage from '../../../assets/images/project/project_web_marketplace.png';
import recensementImage from '../../../assets/images/project/project_recensement.png';

interface Project {
    id: string;
    name: string;
    badge: string;
    badgeBgColor: string;
    badgeTextColor: string;
    iconBgColor: string;
    iconColor: string;
    checkColor: string;
    image: string;
    description: string;
    objective: string;
    features: string[];
    technologies: string[];
    valueProps: string[];
    icon: React.ElementType;
}

const projects: Project[] = [
    {
        id: 'dashboard',
        name: 'Soutrali Deals – Dashboard Administrateur',
        badge: 'Back-office',
        badgeBgColor: 'bg-primary-green/10',
        badgeTextColor: 'text-primary-green',
        iconBgColor: 'bg-primary-green/10',
        iconColor: 'text-primary-green',
        checkColor: 'text-primary-green',
        image: dashboardImage,
        description: 'Le dashboard Soutrali Deals est le centre de pilotage de tout l\'écosystème. Il permet à l\'équipe interne de gérer l\'ensemble des activités : services, utilisateurs, prestataires, commandes et performances financières.',
        objective: 'Aide à la prise de décision stratégique avec une vision globale et claire de la plateforme.',
        features: [
            'Suivi en temps réel des services et utilisateurs',
            'Gestion des prestataires, freelances et vendeurs',
            'Analyse du chiffre d\'affaires et de la croissance',
            'Statistiques visuelles (objectifs vs résultats)',
            'Classement des meilleurs prestataires',
            'Tableaux de bord personnalisables'
        ],
        technologies: ['React', 'TypeScript', 'Recharts', 'API REST'],
        valueProps: [
            'Aide à la prise de décision stratégique',
            'Vision globale et claire de la plateforme',
            'Scalabilité et contrôle total'
        ],
        icon: LayoutDashboard
    },
    {
        id: 'mobile',
        name: 'Soutrali Deals – Application Mobile',
        badge: 'Android & iOS',
        badgeBgColor: 'bg-gold-premium/10',
        badgeTextColor: 'text-gold-premium',
        iconBgColor: 'bg-gold-premium/10',
        iconColor: 'text-gold-premium',
        checkColor: 'text-gold-premium',
        image: mobileImage,
        description: 'L\'application mobile Soutrali Deals est conçue pour permettre aux utilisateurs de trouver rapidement un service ou un prestataire, où qu\'ils soient.',
        objective: 'Expérience utilisateur fluide avec accès rapide aux services locaux, pensée pour le marché africain.',
        features: [
            'Recherche intelligente de services',
            'Prestataires à proximité (géolocalisation)',
            'Catégories Métiers & Freelance',
            'Chat, commandes et suivi',
            'Portefeuille numérique (SoutraPay)',
            'Assistant IA intégré'
        ],
        technologies: ['Flutter', 'Dart', 'Firebase', 'Mobile Money APIs'],
        valueProps: [
            'Expérience utilisateur fluide',
            'Accès rapide aux services locaux',
            'Pensée pour le marché africain'
        ],
        icon: Smartphone
    },
    {
        id: 'web',
        name: 'Soutrali Deals – Application Web (Marketplace)',
        badge: 'Web',
        badgeBgColor: 'bg-primary-blue/10',
        badgeTextColor: 'text-primary-blue',
        iconBgColor: 'bg-primary-blue/10',
        iconColor: 'text-primary-blue',
        checkColor: 'text-primary-blue',
        image: webImage,
        description: 'La version web est la vitrine publique de Soutrali Deals. Elle permet aux utilisateurs de découvrir les métiers, services, prestataires et de passer commande directement en ligne.',
        objective: 'Visibilité maximale des prestataires avec accessibilité sans application et image professionnelle.',
        features: [
            'Marketplace de services',
            'Pages métiers & catégories',
            'Recherche avancée',
            'Inscription / Connexion',
            'Onboarding prestataire',
            'Compatible desktop & mobile'
        ],
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
        valueProps: [
            'Visibilité maximale des prestataires',
            'Accessibilité sans application',
            'Image professionnelle et crédible'
        ],
        icon: Globe
    },
    {
        id: 'recensement',
        name: 'Soutrali Recensement – Application d\'identification terrain',
        badge: 'Terrain',
        badgeBgColor: 'bg-primary-green/10',
        badgeTextColor: 'text-primary-green',
        iconBgColor: 'bg-primary-green/10',
        iconColor: 'text-primary-green',
        checkColor: 'text-primary-green',
        image: recensementImage,
        description: 'Soutrali Recensement est une application dédiée aux agents terrain pour identifier, recenser et structurer les prestataires, freelances et vendeurs informels.',
        objective: 'Formalisation de l\'informel avec données fiables et structurées grâce à la gamification.',
        features: [
            'Création de fiches prestataires',
            'Système de niveaux, points et badges',
            'Historique des actions',
            'Travail par zone/région',
            'Synchronisation avec la plateforme centrale',
            'Mode hors ligne'
        ],
        technologies: ['Flutter', 'Dart', 'SQLite', 'Sync API'],
        valueProps: [
            'Formalisation de l\'informel',
            'Données fiables et structurées',
            'Gamification pour motiver les agents'
        ],
        icon: Users
    }
];

export const ProjectsGrid = () => {
    return (
        <SectionWrapper id="projects-grid" bg="dark">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Les <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">4 Projets</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Découvrez chaque composant de notre écosystème digital complet
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {projects.map((project, index) => {
                        const Icon = project.icon;
                        const isEven = index % 2 === 0;
                        
                        return (
                            <motion.div
                                key={project.id}
                                id={`project-${project.id}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="scroll-mt-24"
                            >
                                <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                                    {/* Image */}
                                    <motion.div
                                        className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-dark-border">
                                            <img
                                                src={project.image}
                                                alt={project.name}
                                                className="w-full h-auto"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`w-12 h-12 rounded-xl ${project.iconBgColor} flex items-center justify-center`}>
                                                <Icon className={`w-6 h-6 ${project.iconColor}`} />
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${project.badgeBgColor} ${project.badgeTextColor} border ${project.badgeTextColor}/20`}>
                                                {project.badge}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl md:text-4xl font-heading font-bold mb-4 text-white">
                                            {project.name}
                                        </h3>

                                        <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="bg-dark-card border border-dark-border rounded-xl p-4 mb-6">
                                            <p className="text-sm font-medium text-white mb-1">Objectif principal</p>
                                            <p className="text-text-secondary text-sm">{project.objective}</p>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="font-bold text-white mb-3">Fonctionnalités clés</h4>
                                            <ul className="space-y-2">
                                                {project.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-text-secondary text-sm">
                                                        <Check className={`w-5 h-5 ${project.checkColor} shrink-0 mt-0.5`} />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="font-bold text-white mb-3">Technologies</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 rounded-lg bg-dark-card border border-dark-border text-text-secondary text-xs font-mono"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-r from-dark-card to-dark-bg border border-dark-border rounded-xl p-4">
                                            <h4 className="font-bold text-white mb-2">Valeur ajoutée</h4>
                                            <ul className="space-y-2">
                                                {project.valueProps.map((value, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                                                        <span className="text-primary-green">👉</span>
                                                        <span>{value}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
};
