import { useState, useEffect, useRef, useId, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { ExternalLink, Github, X, Calendar, Tag, ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  label: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Soutrali Deals App',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    description: 'Application mobile de mise en relation pour artisans et freelances.',
    fullDescription:
      "Une application mobile complète développée avec Flutter permettant aux utilisateurs de trouver des prestataires de services locaux. Fonctionnalités incluant la géolocalisation, la messagerie instantanée et le paiement sécurisé.",
    tags: ['Flutter', 'Dart', 'Firebase'],
    date: '2024',
    client: 'Soutrali Tech',
    label: 'APPLICATION MOBILE',
  },
  {
    id: 2,
    title: 'Dashboard Admin',
    category: 'Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: "Interface d'administration pour la gestion des utilisateurs et transactions.",
    fullDescription:
      "Tableau de bord complet pour les administrateurs permettant de surveiller l'activité de la plateforme, gérer les utilisateurs, modérer les contenus et analyser les revenus en temps réel.",
    tags: ['React', 'Tailwind', 'Recharts'],
    date: '2023',
    client: 'Interne',
    label: 'DASHBOARD',
  },
  {
    id: 3,
    title: 'E-Commerce Vendeurs',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800',
    description: 'Plateforme web permettant aux vendeurs de gérer leurs boutiques.',
    fullDescription:
      'Solution e-commerce multi-vendeurs offrant à chaque commerçant une boutique dédiée, la gestion des stocks, des commandes et des promotions. Optimisé pour le SEO et la conversion.',
    tags: ['Next.js', 'Stripe', 'Node.js'],
    date: '2024',
    client: 'Commerçants Partenaires',
    label: 'PLATEFORME WEB',
  },
  {
    id: 4,
    title: 'Soutrali Identité',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    description: 'App de vérification d\'identité des prestataires via QR Code.',
    fullDescription:
      "Application de sécurité permettant de vérifier l'identité et la certification des prestataires sur le terrain via un scan de QR Code sécurisé. Garantit la confiance entre clients et professionnels.",
    tags: ['Mobile', 'Security', 'QR'],
    date: '2024',
    client: 'Sécurité',
    label: 'SÉCURITÉ',
  },
];

const INTERVAL_MS = 2800;

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
};

export interface PortfolioProps {
  standalonePage?: boolean;
}

export const Portfolio = ({ standalonePage = false }: PortfolioProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogTitleId = useId();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCycle = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);

    setProgress(0);
    const step = 100 / (INTERVAL_MS / 50);

    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + step, 100));
    }, 50);

    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % projects.length);
      setProgress(0);
    }, INTERVAL_MS);
  }, []);

  useEffect(() => {
    startCycle();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [startCycle]);

  const goTo = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    startCycle();
  };

  useEffect(() => {
    if (!selectedProject) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedProject(null); };
    document.addEventListener('keydown', onKey);
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
      window.clearTimeout(t);
    };
  }, [selectedProject]);

  const HeadingTag = standalonePage ? 'h1' : 'h2';
  const active = projects[activeIndex];

  return (
    <SectionWrapper id="portfolio" bg="dark" className="relative overflow-hidden">
      {/* Fond décoratif discret */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 top-0 h-full w-[35%] bg-primary-blue/10 [clip-path:polygon(0_0,70%_0,30%_100%,0_100%)]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-primary-green/10 blur-[100px]" />
      </div>

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">

        {/* GAUCHE — texte éditorial */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-blue/35 bg-primary-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-blue">
            <Layers className="h-3.5 w-3.5" />
            Notre approche
          </div>

          <HeadingTag className="mb-6 font-heading text-3xl font-black leading-tight text-white md:text-5xl">
            Des réalisations pensées pour{' '}
            <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
              performer
            </span>
            , pas juste pour exister.
          </HeadingTag>

          <p className="mb-5 text-base leading-relaxed text-white/70">
            Chez Soutrali Deals, chaque projet est unique et mérite une attention particulière.
          </p>
          <p className="mb-5 text-base leading-relaxed text-white/70">
            Notre processus inclut l&apos;analyse de vos besoins, la conception sur mesure, le développement responsive et l&apos;accompagnement post-lancement.
          </p>
          <p className="mb-8 text-base leading-relaxed text-white/70">
            Nous adaptons nos solutions à votre secteur pour garantir des résultats concrets.
          </p>

          {/* Projet actif info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mb-8 rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary-blue">{active.label}</p>
              <h3 className="mb-1 text-lg font-bold text-white">{active.title}</h3>
              <p className="text-sm text-white/60">{active.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/15 px-2.5 py-0.5 text-xs text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
              {/* Barre de progression */}
              <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary-green to-primary-blue"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-wrap gap-3">
            <Link to="/realisations">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#060912] transition hover:bg-white/90"
              >
                Voir tous les projets <ArrowRight className="h-4 w-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* DROITE — carousel mockups inclinés */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative flex h-[480px] items-center justify-center"
        >
          {projects.map((project, i) => {
            const offset = i - activeIndex;
            const isActive = i === activeIndex;
            const rotations = [-8, -4, 0, 4];
            const translateXs = [-160, -80, 0, 80];
            const translateYs = [20, 10, 0, 10];
            const scales = [0.78, 0.88, 1, 0.88];
            const zIndexes = [1, 2, 10, 2];
            const opacities = [0.45, 0.7, 1, 0.7];

            const posIndex = ((offset % projects.length) + projects.length) % projects.length;

            return (
              <motion.div
                key={project.id}
                className="absolute cursor-pointer overflow-hidden rounded-2xl border border-white/20 shadow-2xl"
                style={{ width: 220, height: 320 }}
                animate={{
                  x: translateXs[posIndex],
                  y: translateYs[posIndex],
                  rotate: rotations[posIndex],
                  scale: scales[posIndex],
                  zIndex: zIndexes[posIndex],
                  opacity: opacities[posIndex],
                }}
                transition={{ type: 'spring', stiffness: 180, damping: 22 }}
                onClick={() => { goTo(i); if (isActive) setSelectedProject(project); }}
                whileHover={isActive ? { scale: 1.04 } : { scale: scales[posIndex] * 1.03 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-primary-green">{project.label}</p>
                  <p className="truncate text-sm font-bold text-white">{project.title}</p>
                </div>
                {isActive && (
                  <div className="absolute right-2 top-2 rounded-full border border-primary-blue/40 bg-primary-blue/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                    Actif
                  </div>
                )}
              </motion.div>
            );
          })}

          {/* Dots de navigation */}
          <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-8 bg-primary-green'
                    : 'w-1.5 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Voir projet ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal projet */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={dialogTitleId}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/15 bg-[#0a1223] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue"
                aria-label="Fermer"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="relative h-64">
                <img src={selectedProject.image} alt="" className="h-full w-full object-cover" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1223]/95 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h2 id={dialogTitleId} className="mb-2 text-3xl font-bold text-white">{selectedProject.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {selectedProject.date}</span>
                    <span className="flex items-center gap-1"><Tag className="h-4 w-4" /> {selectedProject.client}</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="mb-8 text-base leading-relaxed text-white/75">{selectedProject.fullDescription}</p>
                <div className="mb-8">
                  <h3 className="mb-4 font-bold text-white">Technologies utilisées</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-mono text-sm text-white/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 border-t border-white/10 pt-4">
                  <button
                    type="button"
                    disabled={!selectedProject.link}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-3 font-bold text-[#060912] transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ExternalLink className="h-5 w-5" /> Voir le site
                  </button>
                  <button
                    type="button"
                    disabled={!selectedProject.github}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3 font-bold text-white/80 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
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
