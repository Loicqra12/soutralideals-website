import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceCategoryCard } from './services/ServiceCategoryCard';
import { SERVICE_PACKAGES } from '../../data/servicePackages';

export const Services = () => {
  const reduced = useReducedMotion();

  return (
    <section id="services" className="bg-white py-20 md:py-28" aria-labelledby="services-heading">
      <div className="container-custom">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-green">
            Agence digitale Soutrali
          </p>
          <h2
            id="services-heading"
            className="font-heading text-[2rem] font-extrabold tracking-[-0.03em] text-[#111] sm:text-4xl md:text-5xl"
          >
            Ce que nous construisons pour vous
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6b6b6b] md:text-lg">
            Sites, e-commerce et solutions complètes — forfaits clairs pour entrepreneurs et PME en
            Côte d&apos;Ivoire. Détail et expertises sur la page services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 xl:grid-cols-4">
          {SERVICE_PACKAGES.map((category, index) => (
            <ServiceCategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        <motion.p
          className="mt-10 text-center text-sm text-[#888] md:mt-12"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Tarifs indicatifs · Devis personnalisé sur{' '}
          <Link to="/devis" className="font-semibold text-primary-green underline-offset-2 hover:underline">
            demande
          </Link>
        </motion.p>

        <div className="mt-6 text-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary-green transition hover:text-primary-green/80"
          >
            <span className="border-b border-transparent pb-0.5 group-hover:border-primary-green">
              Tous nos services et expertises
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
};
