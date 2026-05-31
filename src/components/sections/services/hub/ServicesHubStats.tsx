import { motion, useReducedMotion } from 'framer-motion';
import { SERVICES_HUB_STATS } from './servicesHubContent';
import { servicesSurface } from './servicesHubUi';

export function ServicesHubStats() {
  const reduced = useReducedMotion();

  return (
    <section className={`${servicesSurface} pb-16 md:pb-20`} aria-label="Chiffres clés">
      <div className="container-custom">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-primary-green/15 bg-white/80 shadow-sm backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 divide-y divide-primary-green/10 md:grid-cols-4 md:divide-x md:divide-y-0">
            {SERVICES_HUB_STATS.map((stat) => (
              <div
                key={stat.value}
                className="flex flex-col items-center justify-center px-4 py-8 text-center md:py-10"
              >
                <p className="font-heading text-2xl font-bold text-primary-green md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 whitespace-pre-line text-xs leading-snug text-[#666] md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
