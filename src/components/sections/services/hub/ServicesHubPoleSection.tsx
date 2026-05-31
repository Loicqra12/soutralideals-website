import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ServicePole } from './servicesHubContent';
import { ServicesIconBadge, servicesSurface } from './servicesHubUi';

type Props = {
  pole: ServicePole;
  index: number;
};

export function ServicesHubPoleSection({ pole, index }: Props) {
  const reduced = useReducedMotion();
  const reverse = pole.reverse ?? index % 2 === 1;

  return (
    <section className={`${servicesSurface} py-16 md:py-20`} aria-labelledby={`pole-${pole.id}`}>
      <div className="container-custom">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            reverse ? '' : ''
          }`}
        >
          <motion.div
            initial={reduced ? false : { opacity: 0, x: reverse ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className={reverse ? 'lg:order-2' : ''}
          >
            <div className="overflow-hidden rounded-2xl border border-primary-green/10 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <img
                src={pole.image}
                alt={pole.imageAlt}
                className="h-auto w-full rounded-xl object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, x: reverse ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className={reverse ? 'lg:order-1' : ''}
          >
            <ServicesIconBadge>
              <span className="text-xs font-bold">{pole.label.replace('Expertise ', '')}</span>
            </ServicesIconBadge>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-green">
              {pole.label}
            </p>
            <h2
              id={`pole-${pole.id}`}
              className="mt-2 font-heading text-2xl font-bold text-[#111] md:text-3xl lg:text-4xl"
            >
              {pole.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#555] md:text-lg">{pole.description}</p>
            <ul className="mt-6 space-y-2.5">
              {pole.bullets.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#444] md:text-base">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-green" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to={pole.href}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-green px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-green/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2"
            >
              {pole.cta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
