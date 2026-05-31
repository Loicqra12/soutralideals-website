import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from 'lucide-react';
import { PROJECT_TESTIMONIALS } from '../../../data/realisationsTestimonials';

const INTERVAL_MS = 6000;

export const RealisationsTestimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = PROJECT_TESTIMONIALS.length;
  const current = PROJECT_TESTIMONIALS[index];
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused || count <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, count]);

  return (
    <section
      className="border-t border-white/10 bg-dark-bg py-16 md:py-24"
      aria-labelledby="realisations-temoignages-title"
    >
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="mb-4 inline-block rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/55">
            Témoignages
          </span>
          <h2
            id="realisations-temoignages-title"
            className="font-heading text-2xl font-black leading-snug text-white md:text-4xl"
          >
            Ce que disent les équipes{' '}
            <span className="text-primary-green">de nos projets</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/50">
            Responsables techniques, fondateurs et directions métiers partagent leur expérience
            après la livraison.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <Quote
            className="pointer-events-none absolute -left-1 top-0 h-16 w-16 text-white/[0.06] md:-left-4 md:h-24 md:w-24"
            aria-hidden
          />

          <div className="relative min-h-[220px] px-2 md:min-h-[200px] md:px-14">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="text-center md:text-left"
              >
                <p className="text-lg leading-[1.75] text-white/80 md:text-xl md:leading-[1.8]">
                  « {current.quote} »
                </p>
                <footer className="mt-8">
                  <cite className="not-italic">
                    <p className="font-heading text-lg font-bold text-white">{current.name}</p>
                    <p className="mt-1 text-sm text-white/50">
                      {current.role}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary-green">
                      {current.projectName}
                    </p>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Navigation droite — style référence */}
          <button
            type="button"
            onClick={next}
            className="absolute right-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white transition hover:border-primary-green/50 hover:bg-primary-green/10 hover:text-primary-green md:flex"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={prev}
            className="absolute left-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white transition hover:border-primary-green/50 hover:bg-primary-green/10 hover:text-primary-green md:flex"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Mobile : flèches sous le texte */}
          <div className="mt-8 flex justify-center gap-3 md:hidden">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80"
              aria-label="Précédent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80"
              aria-label="Suivant"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Pagination + pause */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <div
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2"
              role="group"
              aria-label="Choisir un témoignage"
            >
              {PROJECT_TESTIMONIALS.map((t, i) => {
                const isActive = i === index;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setIndex(i)}
                    {...(isActive ? { 'aria-current': 'true' } : {})}
                    className={`rounded-full transition-all ${
                      isActive ? 'h-1.5 w-8 bg-primary-green' : 'h-1.5 w-1.5 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Témoignage ${i + 1} : ${t.name}`}
                  />
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-white/30 hover:text-white"
              aria-label={paused ? 'Reprendre le défilement' : 'Mettre en pause le défilement'}
            >
              {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
