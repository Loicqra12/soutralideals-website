import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SERVICES_HUB_HERO } from './servicesHubContent';
import { ServicesHighlight, ServicesPillButton, servicesSurface } from './servicesHubUi';

export function ServicesHubHero() {
  const reduced = useReducedMotion();

  return (
    <section className={`${servicesSurface} border-b border-primary-green/10 pt-8 pb-16 md:pb-20`}>
      <div className="container-custom">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-green">
            {SERVICES_HUB_HERO.eyebrow}
          </p>
          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-[#111] md:text-5xl lg:text-6xl">
            {SERVICES_HUB_HERO.titleBefore}{' '}
            <ServicesHighlight>{SERVICES_HUB_HERO.titleHighlight}</ServicesHighlight>{' '}
            {SERVICES_HUB_HERO.titleAfter}
          </h1>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[#555] md:text-lg">
            {SERVICES_HUB_HERO.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-2">
            {SERVICES_HUB_HERO.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[#444] md:text-base">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary-green" strokeWidth={2.5} aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <ServicesPillButton to="/devis">Demander un devis</ServicesPillButton>
            <ServicesPillButton to="#forfaits" variant="secondary">
              Voir les forfaits
            </ServicesPillButton>
          </div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-primary-green/15 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
        >
          <img
            src={SERVICES_HUB_HERO.heroImage}
            alt="Accompagnement digital Soutrali : de l’idée à la mise en ligne"
            className="h-auto w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
}
