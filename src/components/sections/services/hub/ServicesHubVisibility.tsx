import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SERVICES_HUB_VISIBILITY } from './servicesHubContent';
import { servicesSurface } from './servicesHubUi';

export function ServicesHubVisibility() {
  const reduced = useReducedMotion();
  const { title, paragraphs, inbound, offers } = SERVICES_HUB_VISIBILITY;

  return (
    <section className={`${servicesSurface} py-20 md:py-24`}>
      <div className="container-custom">
        <motion.header
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl"
        >
          <h2 className="font-heading text-3xl font-bold text-[#111] md:text-4xl">{title}</h2>
          <div className="mt-5 space-y-4 text-[#555]">
            {paragraphs.map((p) => (
              <p key={p} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </motion.header>

        <div className="mb-12 grid gap-5 md:grid-cols-3">
          {offers.map((offer, index) => {
            const Icon = offer.Icon;
            return (
              <motion.article
                key={offer.title}
                initial={reduced ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl border border-primary-green/12 bg-white p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-green/12 text-primary-green">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-[#111]">{offer.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#666]">{offer.description}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-primary-green/12 bg-white p-8"
          >
            <span className="inline-block rounded-full border border-primary-green/25 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-green">
              {inbound.tag}
            </span>
            <h3 className="mt-4 font-heading text-2xl font-bold text-[#111]">{inbound.title}</h3>
            <p className="mt-3 leading-relaxed text-[#555]">{inbound.description}</p>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-2xl border border-primary-green/12 bg-white p-8"
          >
            <ul className="space-y-4">
              {inbound.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-[#444] md:text-base">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-green/15">
                    <Check className="h-3.5 w-3.5 text-primary-green" strokeWidth={2.5} aria-hidden />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
