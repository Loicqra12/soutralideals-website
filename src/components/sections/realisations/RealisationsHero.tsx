import { motion } from 'framer-motion';
import { REALISATIONS } from '../../../data/realisations';

const stats = [
  { value: String(REALISATIONS.length), label: 'Projets livrés' },
  { value: '7', label: 'Secteurs' },
  { value: String(REALISATIONS.filter((r) => r.types.length >= 3).length), label: 'Solutions complètes' },
  { value: '2023', label: 'Depuis' },
];

export const RealisationsHero = () => {
  return (
    <section className="relative overflow-hidden bg-dark-bg pb-10 pt-8 md:pb-14 md:pt-12">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 h-64 w-[40rem] max-w-[90vw] -translate-x-1/2 rounded-full bg-primary-green/15 blur-[140px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary-green">
            Portfolio Soutrali Deals
          </p>

          <h1 className="font-heading text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            Quelques projets{' '}
            <span className="relative inline-block whitespace-nowrap rounded-lg bg-primary-green px-2.5 py-0.5 text-[#062013]">
              réalisés
            </span>
            <br className="hidden sm:block" /> pour nos clients
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            Des sites vitrines aux plateformes complètes web + mobile + dashboard : découvrez comment
            nous digitalisons des secteurs entiers, du marketplace à l’immobilier.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
          className="mx-auto mt-9 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="relative flex items-center">
              {i > 0 && (
                <span className="absolute -left-4 h-8 w-px bg-white/10 sm:-left-6" aria-hidden />
              )}
              <div className="text-center">
                <p className="font-heading text-2xl font-black text-white md:text-3xl">{s.value}</p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/45 md:text-xs">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
