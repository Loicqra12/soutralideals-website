import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { ABOUT_SOLUTION } from './aboutContent';
import { ABOUT_IMAGES } from './aboutImages';

export function AboutSolutionSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="solution"
      className="border-b border-[#e8e8e8] bg-white py-20 md:py-24"
      aria-labelledby="about-solution-title"
    >
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary-green">
              Plateforme
            </span>
            <h2
              id="about-solution-title"
              className="font-heading text-3xl font-bold text-[#1a1a1a] md:text-4xl"
            >
              {ABOUT_SOLUTION.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#555]">
              {ABOUT_SOLUTION.description}
            </p>
            <ul className="mt-8 space-y-3">
              {ABOUT_SOLUTION.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-[#444]">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary-green" strokeWidth={2.5} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/plateforme"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-green/90"
            >
              Voir la plateforme
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img
              src={ABOUT_IMAGES.solutionDevices}
              alt="Soutrali Deals sur ordinateur et mobile : marketplace et application"
              className="h-auto w-full max-w-xl object-contain lg:max-w-none"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
