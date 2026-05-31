import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ABOUT_ROADMAP } from './aboutContent';
import { ABOUT_IMAGES } from './aboutImages';
import { ROADMAP_PHASES } from './aboutRoadmapPhases';

const listStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
};

const itemFade: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AboutRoadmapSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="roadmap"
      className="border-b border-white/5 bg-dark-bg py-20 md:py-24"
      aria-labelledby="about-roadmap-title"
    >
      <div className="container-custom">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div>
            <motion.header
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary-green">
                {ABOUT_ROADMAP.eyebrow}
              </span>
              <h2
                id="about-roadmap-title"
                className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
              >
                {ABOUT_ROADMAP.title}
              </h2>
              <p className="mt-3 text-lg font-semibold text-primary-green">{ABOUT_ROADMAP.subtitle}</p>
              <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
                {ABOUT_ROADMAP.intro}
              </p>
            </motion.header>

            <div className="mt-12 space-y-12 md:space-y-14">
              {ROADMAP_PHASES.map((phase, phaseIndex) => {
                const PhaseIcon = phase.Icon;

                return (
                  <motion.article
                    key={phase.id}
                    initial={reduced ? false : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: phaseIndex * 0.06 }}
                    className="border-t border-white/10 pt-10 first:border-t-0 first:pt-0"
                  >
                    <div className="flex gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-green/15 text-primary-green"
                        aria-hidden
                      >
                        <PhaseIcon className="h-6 w-6" strokeWidth={2} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                          {phase.label}
                        </p>
                        <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="font-heading text-2xl font-bold text-primary-green">
                            {phase.number}
                          </span>
                          <h3 className="font-heading text-xl font-bold text-white md:text-2xl">
                            {phase.title}
                          </h3>
                        </div>
                        <p className="mt-2 text-sm font-semibold text-primary-green">
                          Objectif : {phase.objective}
                        </p>
                        <p className="mt-2 text-base leading-relaxed text-text-secondary">
                          {phase.summary}
                        </p>
                      </div>
                    </div>

                    <motion.ul
                      className="mt-5 space-y-3 md:pl-16"
                      variants={listStagger}
                      initial={reduced ? false : 'hidden'}
                      whileInView={reduced ? undefined : 'visible'}
                      viewport={{ once: true, margin: '-30px' }}
                    >
                      {phase.items.map((item) => {
                        const ItemIcon = item.Icon;

                        return (
                          <motion.li
                            key={item.text}
                            variants={itemFade}
                            className="flex items-start gap-3 rounded-lg py-1"
                          >
                            <span
                              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-green/10 text-primary-green"
                              aria-hidden
                            >
                              <ItemIcon className="h-4 w-4" strokeWidth={2.25} />
                            </span>
                            <span className="pt-1 text-sm leading-relaxed text-text-secondary md:text-base">
                              {item.text}
                            </span>
                          </motion.li>
                        );
                      })}
                    </motion.ul>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={reduced ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center lg:sticky lg:top-28"
          >
            <img
              src={ABOUT_IMAGES.roadmapLaptop}
              alt="Feuille de route Soutrali Deals : digitalisation, terrain et logistique"
              className="h-auto w-full max-w-lg object-contain lg:max-w-none"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
