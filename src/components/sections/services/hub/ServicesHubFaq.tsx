import { useState, type MouseEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SERVICES_HUB_FAQ } from './servicesHubContent';
import { ServicesHighlight, servicesSurface } from './servicesHubUi';

export function ServicesHubFaq() {
  const reduced = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleSummaryClick = (index: number) => (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className={`${servicesSurface} border-t border-primary-green/10 py-20 md:py-24`}>
      <div className="container-custom max-w-3xl">
        <motion.header
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-12"
        >
          <h2 className="font-heading text-3xl font-bold text-[#111] md:text-4xl">
            Vos <ServicesHighlight>questions</ServicesHighlight>
          </h2>
        </motion.header>

        <ul className="space-y-3">
          {SERVICES_HUB_FAQ.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <li key={item.question}>
                <details
                  open={isOpen}
                  className="group rounded-2xl border border-primary-green/12 bg-white [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary
                    onClick={handleSummaryClick(index)}
                    className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2"
                  >
                    <span className="font-semibold text-[#111]">{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary-green transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden
                    />
                  </summary>
                  <motion.div
                    initial={reduced ? false : { opacity: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="px-5 pb-4 pt-0 text-sm leading-relaxed text-[#555] md:text-base">
                      {item.answer}
                    </p>
                  </motion.div>
                </details>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
