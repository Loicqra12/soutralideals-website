import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES_HUB_EXPERTISE } from './servicesHubContent';
import { ServicesHighlight, servicesSurface } from './servicesHubUi';

const PER_PAGE = 3;

export function ServicesHubExpertiseCarousel() {
  const reduced = useReducedMotion();
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(SERVICES_HUB_EXPERTISE.length / PER_PAGE);
  const start = page * PER_PAGE;
  const visible = SERVICES_HUB_EXPERTISE.slice(start, start + PER_PAGE);

  const go = (dir: -1 | 1) => {
    setPage((p) => (p + dir + totalPages) % totalPages);
  };

  return (
    <section className={`${servicesSurface} border-t border-primary-green/10 py-20 md:py-24`}>
      <div className="container-custom">
        <motion.header
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12"
        >
          <h2 className="font-heading text-3xl font-bold text-[#111] md:text-4xl">
            Quelques-unes de nos <ServicesHighlight>expertises</ServicesHighlight>
          </h2>
          <p className="mt-3 max-w-2xl text-[#555]">
            Parcourez nos domaines d’intervention — chaque carte mène à une page détaillée.
          </p>
        </motion.header>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={reduced ? false : { opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.35 }}
              className="grid gap-5 md:grid-cols-3"
            >
              {visible.map((item) => {
                const Icon = item.Icon;
                return (
                  <article
                    key={item.id}
                    className="flex h-full flex-col rounded-2xl border border-primary-green/12 bg-white p-6 shadow-sm transition hover:border-primary-green/30 hover:shadow-md"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-green/12 text-primary-green">
                      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-bold text-[#111]">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[#666]">{item.description}</p>
                    <Link
                      to={item.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-green hover:gap-2.5 transition-all"
                    >
                      En savoir plus
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </article>
                );
              })}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-green/20 bg-white text-[#111] transition hover:border-primary-green hover:bg-primary-green/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green"
              aria-label="Expertises précédentes"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-xs font-bold uppercase tracking-widest text-[#888]">
              Expertise {page + 1} / {totalPages}
            </span>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-green/20 bg-white text-[#111] transition hover:border-primary-green hover:bg-primary-green/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green"
              aria-label="Expertises suivantes"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
