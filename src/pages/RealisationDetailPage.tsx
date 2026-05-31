import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  ArrowUpRight,
  Check,
  Code2,
  X,
} from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import {
  getRealisation,
  getOtherRealisations,
  galleryImages,
} from '../data/realisations';
import { DeviceShowcaseFrame } from '../components/sections/realisations/DeviceShowcaseFrame';

const AccordionItem = ({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) => (
  <details
    open={defaultOpen}
    className="group rounded-2xl border border-white/10 bg-white/[0.03] transition-colors open:border-primary-green/30 open:bg-white/[0.05]"
  >
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-heading text-base font-bold text-white [&::-webkit-details-marker]:hidden">
      {title}
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/60 transition-transform duration-300 group-open:rotate-45 group-open:border-primary-green group-open:text-primary-green">
        <span className="text-lg leading-none">+</span>
      </span>
    </summary>
    <div className="px-5 pb-5 text-sm leading-relaxed text-white/65">{children}</div>
  </details>
);

export const RealisationDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getRealisation(slug) : undefined;
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [lightbox]);

  if (!project) {
    return <Navigate to="/realisations" replace />;
  }

  const gallery = galleryImages(project);
  const others = getOtherRealisations(project.id, 3);

  return (
    <>
      <SEO
        title={`${project.client} — Réalisation`}
        description={project.tagline}
        ogImage={project.images.web ?? project.cover}
        type="article"
        keywords={[project.client, project.sector, project.projectType, 'réalisation Soutrali Deals']}
        breadcrumbs={[
          { name: 'Accueil', path: '/' },
          { name: 'Réalisations', path: '/realisations' },
          { name: project.client, path: `/realisations/${project.id}` },
        ]}
      />

      <div className="bg-dark-bg pt-24">
        {/* HERO DÉTAIL */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-primary-green/10 blur-[120px]" />
          </div>

          <div className="container-custom relative z-10 py-10 md:py-14">
            <Link
              to="/realisations"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux réalisations
            </Link>

            <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
              {/* Gauche : texte */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-black/5 bg-white p-1.5">
                    <img src={project.logo} alt={`Logo ${project.client}`} className="h-full w-full object-contain" />
                  </span>
                  <span className="text-sm font-semibold text-white/50">{project.sector}</span>
                </div>

                <h1 className="font-heading text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                  <span className="bg-primary-green box-decoration-clone px-2 py-0.5 text-[#062013]">
                    {project.client}
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65">{project.tagline}</p>

                {/* Méta */}
                <div className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40">Développement</p>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-white">
                      <Code2 className="h-4 w-4 text-primary-green" /> Sur-mesure
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40">Période</p>
                    <p className="mt-1 text-sm font-bold text-white">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40">Type de projet</p>
                    <p className="mt-1 text-sm font-bold text-white">{project.projectType}</p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary-green px-5 py-3 text-sm font-bold text-[#062013] transition hover:bg-primary-green/90"
                    >
                      Voir le site <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/40">
                      Bientôt en ligne
                    </span>
                  )}
                </div>
              </motion.div>

              {/* Droite : visuel principal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
                className="relative flex items-center justify-center py-4 lg:py-6"
              >
                <DeviceShowcaseFrame
                  frame={project.coverFrame}
                  src={project.cover}
                  alt={`Visuel principal ${project.client}`}
                  priority
                  className="w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CONTENU : accordéons + résultats */}
        <section className="container-custom grid gap-10 py-12 lg:grid-cols-[1.3fr_1fr] md:py-16">
          <div className="space-y-3">
            <AccordionItem title="Présentation & enjeu" defaultOpen>
              <p className="mb-3">{project.description}</p>
              <p>{project.challenge}</p>
            </AccordionItem>

            <AccordionItem title="Notre solution">
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-green" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-white/40">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-white/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="Résultats & impact">
              <ul className="space-y-2">
                {project.results.map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-green" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </AccordionItem>
          </div>

          {/* Carte résumé */}
          <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="font-heading text-lg font-bold text-white">En bref</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                <dt className="text-white/45">Client</dt>
                <dd className="text-right font-semibold text-white">{project.client}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                <dt className="text-white/45">Secteur</dt>
                <dd className="text-right font-semibold text-white">{project.sector}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                <dt className="text-white/45">Livrables</dt>
                <dd className="text-right font-semibold text-white">{project.types.join(' · ')}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-white/45">Période</dt>
                <dd className="text-right font-semibold text-white">{project.year}</dd>
              </div>
            </dl>
            <Link
              to="/devis"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-green px-5 py-3 text-sm font-bold text-[#062013] transition hover:bg-primary-green/90"
            >
              Lancer un projet similaire <ArrowUpRight className="h-4 w-4" />
            </Link>
          </aside>
        </section>

        {/* GALERIE */}
        {gallery.length > 0 && (
          <section className="container-custom pb-14 md:pb-20">
            <div className="mb-6 flex items-end justify-between">
              <h2 className="font-heading text-2xl font-black text-white md:text-3xl">Galerie du projet</h2>
              <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                {gallery.length} visuel{gallery.length > 1 ? 's' : ''}
              </span>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((g) => (
                <button
                  key={g.type}
                  type="button"
                  onClick={() => setLightbox(g.src)}
                  aria-label={`Agrandir le visuel ${g.type} — ${project.client}`}
                  className="group flex items-center justify-center bg-transparent p-0 transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
                >
                  <DeviceShowcaseFrame
                    frame={g.frame}
                    src={g.src}
                    alt=""
                    className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </button>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="container-custom pb-14 md:pb-20">
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-primary-green/30 bg-gradient-to-br from-primary-green/15 to-transparent p-8 md:flex-row md:items-center md:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary-green">Nouveau projet</p>
              <h2 className="mt-2 font-heading text-2xl font-black text-white md:text-3xl">
                Vous voulez le même niveau d’exécution ?
              </h2>
            </div>
            <Link
              to="/devis"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#062013] transition hover:bg-white/90"
            >
              Demander un devis <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* AUTRES PROJETS */}
        <section className="container-custom pb-20 md:pb-28">
          <p className="text-xs font-bold uppercase tracking-widest text-white/40">Autres projets</p>
          <h2 className="mt-2 font-heading text-2xl font-black text-white md:text-3xl">
            Découvrez d’autres réalisations
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.id}
                to={`/realisations/${o.id}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-dark-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-green/50"
              >
                <div className="flex aspect-[16/10] items-center justify-center bg-white p-8">
                  <img
                    src={o.logo}
                    alt={o.client}
                    loading="lazy"
                    className="max-h-16 w-auto max-w-[75%] object-contain transition-transform duration-500 group-hover:scale-105 md:max-h-20"
                  />
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-heading font-bold text-white group-hover:text-primary-green">{o.client}</h3>
                    <p className="text-xs text-white/40">{o.year}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/40 transition-colors group-hover:text-primary-green" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
            role="presentation"
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              aria-label="Fermer"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              src={lightbox}
              alt=""
              className="max-h-[90vh] max-w-5xl rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
