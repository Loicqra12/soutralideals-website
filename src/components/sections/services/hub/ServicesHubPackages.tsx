import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICE_PACKAGES } from '../../../../data/servicePackages';
import { ServiceCategoryCard } from '../ServiceCategoryCard';
import { servicesSurface } from './servicesHubUi';

export function ServicesHubPackages() {
  const reduced = useReducedMotion();

  return (
    <section id="forfaits" className={`${servicesSurface} border-t border-primary-green/10 py-20 md:py-24`}>
      <div className="container-custom">
        <motion.header
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-14"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-green">
            Forfaits clairs
          </p>
          <h2 className="font-heading text-3xl font-bold text-[#111] md:text-4xl">
            Choisissez votre point de départ
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#555] md:text-lg">
            Des packs tout inclus pour entrepreneurs et PME — évolutifs vers des solutions sur mesure.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
          {SERVICE_PACKAGES.map((category, index) => (
            <ServiceCategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[#777]">
          Tarifs indicatifs · Devis personnalisé sur{' '}
          <Link to="/devis" className="font-semibold text-primary-green underline-offset-2 hover:underline">
            demande
          </Link>
        </p>
      </div>
    </section>
  );
}
