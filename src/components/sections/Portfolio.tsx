import { useState, useEffect, useRef, useId } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { ExternalLink, Github, Smartphone, Globe, LayoutDashboard, X, Calendar, Tag } from 'lucide-react';

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

const projects: Project[] = [
  {
    id: 1,
    title: 'Soutrali Deals App',
    category: 'Mobile',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    description: 'Application mobile de mise en relation pour artisans et freelances.',
    fullDescription:
      "Une application mobile complète développée avec Flutter permettant aux utilisateurs de trouver des prestataires de services locaux. Fonctionnalités incluant la géolocalisation, la messagerie instantanée et le paiement sécurisé.",
    tags: ['Flutter', 'Dart', 'Firebase'],
    date: '2024',
    client: 'Soutrali Tech',
  },
  {
    id: 2,
    title: 'Dashboard Admin',
    category: 'Dashboard',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: "Interface d'administration pour la gestion des utilisateurs et transactions.",
    fullDescription:
      "Tableau de bord complet pour les administrateurs permettant de surveiller l'activité de la plateforme, gérer les utilisateurs, modérer les contenus et analyser les revenus en temps réel.",
    tags: ['React', 'Tailwind', 'Recharts'],
    date: '2023',
    client: 'Interne',
  },
  {
    id: 3,
    title: 'E-Commerce Vendeurs',
    category: 'Web',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800',
    description: 'Plateforme web permettant aux vendeurs de gérer leurs boutiques.',
    fullDescription:
      'Solution e-commerce multi-vendeurs offrant à chaque commerçant une boutique dédiée, la gestion des stocks, des commandes et des promotions. Optimisé pour le SEO et la conversion.',
    tags: ['Next.js', 'Stripe', 'Node.js'],
    date: '2024',
    client: 'Commerçants Partenaires',
  },
  {
    id: 4,
    title: 'Soutrali Identité',
    category: 'Mobile',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    description: 'App de vérification d’identité des prestataires via QR Code.',
    fullDescription:
      'Application de sécurité permettant de vérifier l’identité et la certification des prestataires sur le terrain via un scan de QR Code sécurisé. Garantit la confiance entre clients et professionnels.',
    tags: ['Mobile', 'Security', 'QR'],
    date: '2024',
    client: 'Sécurité',
  },
];

const categories: Category[] = ['Tous', 'Web', 'Mobile', 'Dashboard'];

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.3 },
  },
};

export interface PortfolioProps {
  /** Sur la page dédiée /realisations : un seul H1 visible pour le SEO */
  standalonePage?: boolean;
}

export const Portfolio = ({ standalonePage = false }: PortfolioProps) => {
  const [activeCategory, setActiveCategory] = useState<Category>('Tous');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogTitleId = useId();

  const filteredProjects =
    activeCategory === 'Tous' ? projects : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (!selectedProject) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    document.addEventListener('keydown', onKeyDown);
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(t);
    };
  }, [selectedProject]);

  const HeadingTag = standalonePage ? 'h1' : 'h2';

  return (
    <SectionWrapper id="portfolio" bg="white" className="relative">
      <div className="pointer-events-none absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-dark-bg to-transparent opacity-10" />
      <div className="pointer-events-none absolute -left-20 top-40 h-72 w-72 rounded-full bg-gold-premium/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-40 h-72 w-72 rounded-full bg-primary-blue/5 blur-3xl" />

      <div className="relative z-10 mx-auto mb-16 max-w-4xl text-center">
        <HeadingTag className="mb-6 font-heading text-3xl font-bold text-gray-900 md:text-5xl">
          Nos <span className="text-gold-premium">Réalisations</span>
        </HeadingTag>
        <p className="text-lg text-gray-600">
          Découvrez les projets technologiques que nous développons pour l&apos;écosystème ivoirien.
        </p>
      </div>

      <div className="relative z-10 mb-12 flex flex-wrap justify-center gap-4" role="tablist" aria-label="Filtrer par catégorie">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={activeCategory === cat}
            aria-pressed={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full border px-6 py-2 text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? 'border-gold-premium bg-gold-premium text-white shadow-lg shadow-gold-premium/20'
                : 'border-gray-200 bg-gray-100 text-gray-500 hover:border-gold-premium/50 hover:text-gold-premium'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="button"
              tabIndex={0}
              aria-label={`Ouvrir les détails : ${project.title}`}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg shadow-gray-200/50 transition-all duration-300 hover:border-gold-premium/50 hover:shadow-xl hover:shadow-gold-premium/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-premium focus-visible:ring-offset-2"
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />

                <div className="absolute right-4 top-4 z-20 rounded-lg border border-white/50 bg-white/90 p-2 shadow-sm backdrop-blur-md">
                  {project.category === 'Mobile' && <Smartphone className="h-5 w-5 text-gold-premium" />}
                  {project.category === 'Web' && <Globe className="h-5 w-5 text-primary-blue" />}
                  {project.category === 'Dashboard' && <LayoutDashboard className="h-5 w-5 text-primary-green" />}
                </div>
              </div>

              <div className="relative z-20 p-6">
                <h3 className="mb-2 text-2xl font-bold text-gray-900 transition-colors group-hover:text-gold-premium">
                  {project.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-gray-500">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-gold-premium">
                    <ExternalLink className="h-4 w-4" /> Voir détails
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
            onKeyDown={(e) => e.key === 'Escape' && setSelectedProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={dialogTitleId}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/10 p-2 text-black transition-colors hover:bg-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-premium"
                aria-label="Fermer la fenêtre projet"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="relative h-64">
                <img
                  src={selectedProject.image}
                  alt=""
                  className="h-full w-full object-cover"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h2 id={dialogTitleId} className="mb-2 text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> {selectedProject.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="h-4 w-4" /> {selectedProject.client}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="mb-8 text-lg leading-relaxed text-gray-600">{selectedProject.fullDescription}</p>

                <div className="mb-8">
                  <h3 className="mb-4 font-bold text-gray-900">Technologies utilisées</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 font-mono text-sm font-medium text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 border-t border-gray-100 pt-4">
                  <button
                    type="button"
                    disabled={!selectedProject.link}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gold-premium py-3 font-bold text-white shadow-lg shadow-gold-premium/20 transition-colors hover:bg-yellow-600 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <ExternalLink className="h-5 w-5" /> Voir le site
                  </button>
                  <button
                    type="button"
                    disabled={!selectedProject.github}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-50 py-3 font-bold text-gray-700 transition-colors hover:border-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Github className="h-5 w-5" /> Code source
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
