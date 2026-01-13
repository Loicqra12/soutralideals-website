import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { ExternalLink, Github, Smartphone, Globe, LayoutDashboard, X, Calendar, Tag } from 'lucide-react';

// Types
type Category = 'Tous' | 'Web' | 'Mobile' | 'Dashboard';

interface Project {
    id: number;
    title: string;
    category: Omit<Category, 'Tous'>;
    image: string;
    description: string;
    fullDescription: string;
    tags: string[];
    link?: string;
    github?: string;
    date: string;
    client: string;
}

// Data Examples
const projects: Project[] = [
    {
        id: 1,
        title: "Soutrali Deals App",
        category: "Mobile",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
        description: "Application mobile de mise en relation pour artisans et freelances.",
        fullDescription: "Une application mobile complète développée avec Flutter permettant aux utilisateurs de trouver des prestataires de services locaux. Fonctionnalités incluant la géolocalisation, la messagerie instantanée et le paiement sécurisé.",
        tags: ["Flutter", "Dart", "Firebase"],
        date: "2024",
        client: "Soutrali Tech"
    },
    {
        id: 2,
        title: "Dashboard Admin",
        category: "Dashboard",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        description: "Interface d'administration pour la gestion des utilisateurs et transactions.",
        fullDescription: "Tableau de bord complet pour les administrateurs permettant de surveiller l'activité de la plateforme, gérer les utilisateurs, modérer les contenus et analyser les revenus en temps réel.",
        tags: ["React", "Tailwind", "Recharts"],
        date: "2023",
        client: "Interne"
    },
    {
        id: 3,
        title: "E-Commerce Vendeurs",
        category: "Web",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
        description: "Plateforme web permettant aux vendeurs de gérer leurs boutiques.",
        fullDescription: "Solution e-commerce multi-vendeurs offrant à chaque commerçant une boutique dédiée, la gestion des stocks, des commandes et des promotions. Optimisé pour le SEO et la conversion.",
        tags: ["Next.js", "Stripe", "Node.js"],
        date: "2024",
        client: "Commerçants Partenaires"
    },
    {
        id: 4,
        title: "Soutrali Identité",
        category: "Mobile",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
        description: "App de vérification d'identité des prestataires via QR Code.",
        fullDescription: "Application de sécurité permettant de vérifier l'identité et la certification des prestataires sur le terrain via un scan de QR Code sécurisé. Garantit la confiance entre clients et professionnels.",
        tags: ["Mobile", "Security", "QR"],
        date: "2024",
        client: "Sécurité"
    }
];

const categories: Category[] = ['Tous', 'Web', 'Mobile', 'Dashboard'];

const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4 }
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        transition: { duration: 0.3 }
    }
};

export const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('Tous');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = activeCategory === 'Tous'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <SectionWrapper id="portfolio" bg="white" className="relative">
            {/* Transition Elements (Floating Shapes) */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-dark-bg to-transparent opacity-10 pointer-events-none"></div>
            <div className="absolute -left-20 top-40 w-72 h-72 bg-primary-orange/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -right-20 bottom-40 w-72 h-72 bg-primary-blue/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-gray-900">
                    Nos <span className="text-primary-orange">Réalisations</span>
                </h2>
                <p className="text-lg text-gray-600">
                    Découvrez les projets technologiques que nous développons pour l'écosystème ivoirien.
                </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex justify-center flex-wrap gap-4 mb-12 relative z-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                            ? 'bg-primary-orange text-white border-primary-orange shadow-lg shadow-primary-orange/20'
                            : 'bg-gray-100 text-gray-500 border-gray-200 hover:border-primary-orange/50 hover:text-primary-orange'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <motion.div
                layout
                className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 relative z-10"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-primary-orange/50 transition-all duration-300 cursor-pointer shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-primary-orange/10"
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Overlay Icon */}
                                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md p-2 rounded-lg border border-white/50 shadow-sm">
                                    {project.category === 'Mobile' && <Smartphone className="w-5 h-5 text-primary-orange" />}
                                    {project.category === 'Web' && <Globe className="w-5 h-5 text-primary-blue" />}
                                    {project.category === 'Dashboard' && <LayoutDashboard className="w-5 h-5 text-primary-green" />}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 relative z-20">
                                <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-primary-orange transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-600 font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <button className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-primary-orange transition-colors">
                                        <ExternalLink className="w-4 h-4" /> Voir détails
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white border border-gray-200 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-black/10 rounded-full text-black hover:bg-black/20 transition-colors z-10"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="h-64 relative">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-300">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" /> {selectedProject.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Tag className="w-4 h-4" /> {selectedProject.client}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                    {selectedProject.fullDescription}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-gray-900 font-bold mb-4">Technologies utilisées</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map(tag => (
                                            <span key={tag} className="px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 text-gray-700 font-mono text-sm font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                                    <button className="flex-1 bg-primary-orange hover:bg-orange-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary-orange/20">
                                        <ExternalLink className="w-5 h-5" /> Voir le site
                                    </button>
                                    <button className="flex-1 bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-700 font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                                        <Github className="w-5 h-5" /> Code Source
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </SectionWrapper>
    );
};
