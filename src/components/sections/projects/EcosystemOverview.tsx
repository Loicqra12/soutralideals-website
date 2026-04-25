import { motion } from 'framer-motion';
import { SectionWrapper } from '../../ui/SectionWrapper';
import { Smartphone, Globe, LayoutDashboard, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 'dashboard',
        name: 'Dashboard Admin',
        icon: LayoutDashboard,
        bgColor: 'bg-primary-green/10',
        iconColor: 'text-primary-green',
        description: 'Centre de pilotage de l\'écosystème'
    },
    {
        id: 'mobile',
        name: 'App Mobile',
        icon: Smartphone,
        bgColor: 'bg-gold-premium/10',
        iconColor: 'text-gold-premium',
        description: 'Application tout-en-un pour utilisateurs'
    },
    {
        id: 'web',
        name: 'Marketplace Web',
        icon: Globe,
        bgColor: 'bg-primary-blue/10',
        iconColor: 'text-primary-blue',
        description: 'Vitrine publique et marketplace'
    },
    {
        id: 'recensement',
        name: 'Soutrali Recensement',
        icon: Users,
        bgColor: 'bg-primary-green/10',
        iconColor: 'text-primary-green',
        description: 'App d\'identification terrain'
    }
];

export const EcosystemOverview = () => {
    const scrollToProject = (id: string) => {
        const element = document.getElementById(`project-${id}`);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <SectionWrapper id="projects-overview" bg="dark">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Vue d'ensemble de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">l'écosystème</span>
                    </h2>
                    <p className="text-lg text-text-secondary leading-relaxed">
                        Soutrali Deals est un écosystème interconnecté composé de plateformes web, mobiles et d'outils terrain, tous reliés par une même vision.
                    </p>
                </motion.div>

                {/* Visual Ecosystem Schema */}
                <div className="relative mb-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {projects.map((project, index) => {
                            const Icon = project.icon;
                            return (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => scrollToProject(project.id)}
                                    className="group cursor-pointer"
                                >
                                    <div className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-primary-green/50 transition-all hover:scale-105 h-full">
                                        <div className={`w-16 h-16 rounded-xl ${project.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                            <Icon className={`w-8 h-8 ${project.iconColor}`} />
                                        </div>
                                        <h3 className="font-bold text-white text-lg mb-2 group-hover:text-primary-green transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-sm text-text-secondary mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex items-center text-primary-green text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                            En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Connecting Lines (SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden lg:block" viewBox="0 0 800 200">
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="currentColor" className="text-primary-green" />
                            </marker>
                        </defs>
                        <path
                            d="M 200 100 Q 400 50 600 100"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                            className="text-primary-green"
                            markerEnd="url(#arrowhead)"
                        />
                        <path
                            d="M 200 100 Q 400 150 600 100"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                            className="text-primary-blue"
                            markerEnd="url(#arrowhead)"
                        />
                    </svg>
                </div>
            </div>
        </SectionWrapper>
    );
};
