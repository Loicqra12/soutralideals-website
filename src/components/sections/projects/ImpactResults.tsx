import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '../../ui/SectionWrapper';
import { ArrowUpRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { IMPACT_INTRO_POINTS, IMPACT_PILLARS } from './impactData';
import impactImage from '../../../assets/images/impact.png';

const TOTAL = IMPACT_PILLARS.length;

export const ImpactResults = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = useReducedMotion();

  const goPrev = () => setActiveIndex((i) => (i === 0 ? TOTAL - 1 : i - 1));
  const goNext = () => setActiveIndex((i) => (i === TOTAL - 1 ? 0 : i + 1));

  return (
    <SectionWrapper id="impact" bg="white" className="!bg-[#f8f4e8] text-[#1a1a1a]">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <div className="text-center lg:text-left">
          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl font-bold leading-tight md:text-5xl"
          >
            Impact &{' '}
            <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
              Résultats
            </span>
          </motion.h2>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#4a4a4a] md:text-lg lg:mx-0"
          >
            Des résultats concrets qui transforment l&apos;écosystème entrepreneurial ivoirien — une
            plateforme pensée pour structurer, connecter et faire grandir les talents locaux.
          </motion.p>

          <motion.ul
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-8 flex max-w-3xl flex-col gap-3 text-left lg:mx-0"
          >
            {IMPACT_INTRO_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-green/15"
                  aria-hidden
                >
                  <Check className="h-3.5 w-3.5 text-primary-green" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-[#333] md:text-base">{point}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.5 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <img
            src={impactImage}
            alt="Impact de la plateforme Soutrali sur l'écosystème entrepreneurial ivoirien"
            className="h-auto w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>

      {/* Carousel — cartes étapes */}
      <div
        className="relative mt-14 md:mt-16"
        role="region"
        aria-roledescription="carousel"
        aria-label="Piliers d'impact"
      >
        <div className="overflow-hidden px-1 sm:px-2">
          <motion.div
            className="flex"
            animate={reduced ? undefined : { x: `-${activeIndex * 100}%` }}
            transition={{ type: 'spring', stiffness: 280, damping: 32 }}
            aria-live="polite"
          >
            {IMPACT_PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              const isActive = i === activeIndex;
              return (
                <article
                  key={pillar.id}
                  className="min-w-full flex-shrink-0 px-2 sm:px-3"
                  id={`impact-pillar-${pillar.id}`}
                  {...(isActive ? {} : { 'aria-hidden': 'true' })}
                >
                  <div
                    className={`h-full rounded-2xl border border-[#e8e2d4] bg-[#fffef9] p-6 transition-all duration-300 md:p-8 ${
                      isActive
                        ? 'shadow-[0_12px_40px_rgba(0,0,0,0.08)]'
                        : 'opacity-60 shadow-none md:opacity-50'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${pillar.iconBg}`}
                      >
                        <Icon className={`h-6 w-6 ${pillar.accent}`} strokeWidth={2} aria-hidden />
                      </span>
                      <div className="min-w-0 text-left">
                        <p className="text-xs font-bold uppercase tracking-widest text-[#888]">
                          Pilier {i + 1}
                        </p>
                        <h3 className="mt-1 font-heading text-xl font-bold text-[#1a1a1a] md:text-2xl">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-5 text-left text-sm leading-relaxed text-[#555] md:text-base">
                      {pillar.description}
                    </p>
                    <ul className="mt-6 space-y-3 text-left">
                      {pillar.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 text-sm text-[#444]">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-primary-green"
                            strokeWidth={2.5}
                            aria-hidden
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4cfc0] bg-white text-[#333] shadow-sm transition hover:border-primary-green/40 hover:bg-[#fffef9]"
            aria-label="Pilier précédent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <p className="min-w-[7rem] text-center text-sm font-bold uppercase tracking-wider text-[#1a1a1a]">
            Pilier {activeIndex + 1} / {TOTAL}
          </p>
          <button
            type="button"
            onClick={goNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4cfc0] bg-white text-[#333] shadow-sm transition hover:border-primary-green/40 hover:bg-[#fffef9]"
            aria-label="Pilier suivant"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Indicateurs */}
        <div className="mt-5 flex justify-center gap-2">
          {IMPACT_PILLARS.map((pillar, i) => (
            <button
              key={pillar.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === activeIndex ? 'w-8 bg-primary-green' : 'w-2 bg-[#d4cfc0] hover:bg-[#bbb]'
              }`}
              aria-label={`Afficher le pilier ${i + 1} : ${pillar.title}`}
              {...(i === activeIndex ? { 'aria-current': 'step' } : {})}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mt-14 max-w-3xl rounded-2xl border border-[#e8e2d4] bg-white p-8 text-center md:mt-16 md:p-10"
      >
        <h3 className="font-heading text-xl font-bold text-[#1a1a1a] md:text-2xl">
          Rejoignez la transformation
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#555] md:text-base">
          Ensemble, construisons un écosystème digital fort qui valorise les talents locaux et
          transforme l&apos;économie informelle.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-green px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-green/90"
        >
          Nous contacter
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </SectionWrapper>
  );
};
