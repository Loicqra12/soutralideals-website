import { motion, useReducedMotion } from 'framer-motion';
import { ServicesHighlight, servicesSurface } from './servicesHubUi';

export function ServicesHubPolesIntro() {
  const reduced = useReducedMotion();

  return (
    <section className={`${servicesSurface} border-t border-primary-green/10 pt-20 md:pt-24`}>
      <div className="container-custom">
        <motion.header
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-green">
            Sur mesure
          </p>
          <h2 className="font-heading text-3xl font-bold text-[#111] md:text-4xl">
            Expertises <ServicesHighlight>à la carte</ServicesHighlight>
          </h2>
          <p className="mt-4 text-[#555]">
            Au-delà des forfaits, cinq pôles pour les projets ambitieux — chacun avec une page dédiée.
          </p>
        </motion.header>
      </div>
    </section>
  );
}
