import { motion, useReducedMotion } from 'framer-motion';
import { SOUTRALI_VALUES } from './aboutContent';
import { ABOUT_IMAGES } from './aboutImages';

const ORBIT_COUNT = SOUTRALI_VALUES.length;
/** Rayon de l’orbite (% du demi-conteneur) — les lettres sont sur ce cercle */
const ORBIT_RADIUS = 46;

function orbitPosition(index: number) {
  const angle = (index / ORBIT_COUNT) * 2 * Math.PI - Math.PI / 2;
  const x = Math.cos(angle) * ORBIT_RADIUS;
  const y = Math.sin(angle) * ORBIT_RADIUS;
  return { x, y, angle };
}

function labelPlacement(x: number, y: number) {
  if (y < -12) return 'label-above' as const;
  if (y > 12) return 'label-below' as const;
  if (x < -12) return 'label-left' as const;
  if (x > 12) return 'label-right' as const;
  return 'label-below' as const;
}

const labelPlacementClasses = {
  'label-above':
    'bottom-full left-1/2 mb-2 w-[7.5rem] -translate-x-1/2 text-center',
  'label-below':
    'top-full left-1/2 mt-2 w-[7.5rem] -translate-x-1/2 text-center',
  'label-left':
    'right-full top-1/2 mr-2 w-[6.5rem] -translate-y-1/2 text-right',
  'label-right':
    'left-full top-1/2 ml-2 w-[6.5rem] -translate-y-1/2 text-left',
} as const;

export function AboutValuesSoutraliSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="valeurs-soutrali"
      className="border-b border-white/5 bg-dark-card py-20 md:py-24"
      aria-labelledby="about-values-title"
    >
      <div className="container-custom">
        <motion.header
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-left md:mb-14"
        >
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary-green">
            ADN de marque
          </span>
          <h2
            id="about-values-title"
            className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            L&apos;ADN <span className="text-primary-green">SOUTRALI</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Huit valeurs portées par chaque lettre de notre nom — le fil conducteur de la plateforme
            et de la communauté.
          </p>
        </motion.header>

        {/* Orbite : image centrée géométriquement, lettres sur le cercle */}
        <div className="relative mx-auto hidden w-full max-w-4xl sm:block">
          <div className="relative mx-auto aspect-square w-full max-w-[38rem]">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary-green/20"
              aria-hidden
            />

            {/* Hub central — flex garantit le vrai centre */}
            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
              <motion.div
                initial={reduced ? false : { opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-[34%] min-w-[7.5rem] max-w-[11.5rem] shrink-0"
              >
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-white shadow-[0_16px_48px_rgba(0,0,0,0.35)] ring-2 ring-primary-green/20">
                  <img
                    src={ABOUT_IMAGES.values}
                    alt="Infographie des huit valeurs SOUTRALI"
                    className="h-auto w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.div>
            </div>

            {SOUTRALI_VALUES.map((value, index) => {
              const { x, y } = orbitPosition(index);
              const placement = labelPlacement(x, y);

              return (
                <motion.div
                  key={value.letter}
                  initial={reduced ? false : { opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 + index * 0.06, type: 'spring', stiffness: 220, damping: 20 }}
                  className="absolute z-20 h-0 w-0"
                  style={{
                    left: `calc(50% + ${x}%)`,
                    top: `calc(50% + ${y}%)`,
                  }}
                >
                  <div
                    className="group relative"
                    title={`${value.title} — ${value.acronym}`}
                  >
                    <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary-green bg-dark-bg font-heading text-xl font-bold text-primary-green shadow-[0_0_20px_hsl(var(--primary-green)/0.25)] transition group-hover:scale-105 group-hover:bg-primary-green group-hover:text-white md:h-16 md:w-16 md:text-2xl">
                      {value.letter}
                    </div>

                    <div
                      className={`absolute ${labelPlacementClasses[placement]}`}
                    >
                      <p className="text-[10px] font-semibold leading-tight text-white md:text-xs">
                        {value.title}
                      </p>
                      <p className="mt-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-primary-green md:text-[10px]">
                        {value.acronym}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="sm:hidden">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-8 max-w-xs overflow-hidden rounded-2xl border border-white/10 bg-white"
          >
            <img
              src={ABOUT_IMAGES.values}
              alt="Infographie des huit valeurs SOUTRALI"
              className="h-auto w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <ul className="grid grid-cols-2 gap-3">
            {SOUTRALI_VALUES.map((value, index) => (
              <motion.li
                key={value.letter}
                initial={reduced ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="flex flex-col items-center rounded-xl border border-white/10 bg-dark-bg/80 px-2 py-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-green font-heading text-lg font-bold text-primary-green">
                  {value.letter}
                </span>
                <span className="mt-2 text-center text-xs font-semibold leading-tight text-white">
                  {value.title}
                </span>
                <span className="mt-1 font-mono text-[10px] font-bold uppercase tracking-wide text-primary-green">
                  {value.acronym}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <ul className="sr-only">
          {SOUTRALI_VALUES.map((value) => (
            <li key={value.letter}>
              {value.letter} — {value.title} ({value.acronym}) : {value.desc}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
