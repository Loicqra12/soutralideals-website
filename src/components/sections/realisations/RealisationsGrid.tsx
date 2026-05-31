import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import {
  REALISATIONS,
  DELIVERABLE_FILTERS,
  type DeliverableType,
  type Realisation,
} from '../../../data/realisations';

type Filter = 'Tous' | DeliverableType;

const RealisationRow = ({ project, reverse = false }: { project: Realisation; reverse?: boolean }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group"
    >
      <Link
        to={`/realisations/${project.id}`}
        className={`flex flex-col items-center gap-8 rounded-3xl border border-white/[0.08] bg-dark-card/50 p-6 transition-all duration-300 hover:border-primary-green/35 hover:bg-dark-card sm:p-8 md:items-center md:gap-12 md:p-10 lg:gap-16 lg:p-12 ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg`}
      >
        {/* Bannière logo — bloc indépendant, aéré */}
        <div className="relative shrink-0">
          <div className="relative flex aspect-square w-40 items-center justify-center overflow-hidden rounded-2xl bg-white p-7 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.45)] sm:w-44 md:w-48 lg:w-52 lg:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,hsla(142,71%,45%,0.12),transparent_65%)]" />
            <img
              src={project.logo}
              alt={`Logo ${project.client}`}
              className="relative z-[1] h-auto w-[78%] max-h-[76%] object-contain transition-transform duration-500 group-hover:scale-[1.05]"
            />
          </div>
        </div>

        {/* Texte — face à la bannière */}
        <div className="flex min-w-0 flex-1 flex-col justify-center md:py-2 lg:max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-green">
            {project.projectType}
          </p>
          <h3 className="mt-3 font-heading text-2xl font-bold leading-snug text-white transition-colors group-hover:text-primary-green md:text-3xl">
            {project.client}
          </h3>
          <p className="mt-5 max-w-xl text-base leading-[1.75] text-white/65">
            {project.tagline}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-[1.7] text-white/45 line-clamp-2">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 md:mt-10">
            <span className="text-sm font-medium text-white/40">{project.year}</span>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-white/85 transition-colors group-hover:text-primary-green">
              Voir le projet
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export const RealisationsGrid = () => {
  const [filter, setFilter] = useState<Filter>('Tous');

  const filtered = useMemo(() => {
    const list = filter === 'Tous' ? REALISATIONS : REALISATIONS.filter((r) => r.types.includes(filter));
    return [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [filter]);

  const countFor = (f: Filter) =>
    f === 'Tous' ? REALISATIONS.length : REALISATIONS.filter((r) => r.types.includes(f)).length;

  return (
    <section className="bg-dark-bg pb-24 pt-4 md:pb-32">
      <div className="container-custom">
        <div
          className="mb-14 flex flex-wrap items-center justify-center gap-3 md:mb-16"
          role="group"
          aria-label="Filtrer par type de livrable"
        >
          {DELIVERABLE_FILTERS.map((f) => {
            const isActive = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                {...(isActive ? { 'aria-pressed': 'true' } : { 'aria-pressed': 'false' })}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'border-primary-green bg-primary-green text-[#062013]'
                    : 'border-white/15 bg-white/[0.03] text-white/70 hover:border-white/30 hover:text-white'
                }`}
              >
                {f}
                <span
                  className={`rounded-full px-1.5 text-[11px] font-bold ${
                    isActive ? 'bg-[#062013]/15 text-[#062013]' : 'bg-white/10 text-white/50'
                  }`}
                >
                  {countFor(f)}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="flex flex-col gap-10 md:gap-14 lg:gap-20">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <RealisationRow key={project.id} project={project} reverse={index % 2 === 1} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
