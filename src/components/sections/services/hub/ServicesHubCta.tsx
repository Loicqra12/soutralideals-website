import { motion, useReducedMotion } from 'framer-motion';
import { SERVICES_HUB_WHY } from './servicesHubContent';
import { ServicesPillButton, servicesSurface } from './servicesHubUi';

export function ServicesHubCta() {
  const reduced = useReducedMotion();

  return (
    <section className={`${servicesSurface} border-t border-primary-green/10 pb-24 pt-8 md:pb-28`}>
      <div className="container-custom">
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {SERVICES_HUB_WHY.map((item, index) => {
            const Icon = item.Icon;
            return (
              <motion.div
                key={item.title}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl border border-primary-green/12 bg-white p-6 text-center"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-green/12 text-primary-green">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <p className="mt-3 font-semibold text-[#111]">{item.title}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-primary-green/15 bg-white px-6 py-12 text-center shadow-sm md:px-12 md:py-14"
        >
          <h2 className="font-heading text-3xl font-bold text-[#111] md:text-4xl">
            Un projet ou une idée à concrétiser ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#555]">
            Parlons de vos objectifs : nous vous proposons le forfait ou l’expertise adaptée, avec un devis
            clair.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ServicesPillButton to="/devis">Demander un devis</ServicesPillButton>
            <ServicesPillButton to="/realisations" variant="secondary">
              Voir nos réalisations
            </ServicesPillButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
