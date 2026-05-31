import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '../../ui/SectionWrapper';
import { ArrowRight, Quote } from 'lucide-react';
import { METHODOLOGY_STEPS, METHODOLOGY_STATS } from './methodologySteps';
import { MethodologyRadial } from './MethodologyRadial';

export const Methodology = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = useReducedMotion();
  const active = METHODOLOGY_STEPS[activeIndex];
  const ActiveIcon = active.Icon;

  return (
    <SectionWrapper id="methodology" bg="dark" className="relative overflow-hidden">
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(142,71%,45%)/0.06,transparent_55%)]"
        aria-hidden
      />

      <div className="container-custom relative z-10">
        {/* En-tête — Passionfroot */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold md:text-5xl">
            Notre approche projet{' '}
            <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
              de A à Z
            </span>
          </h2>
          <p className="mt-5 text-lg text-text-secondary">
            Une méthodologie éprouvée pour transformer vos idées en produits digitaux performants
          </p>
        </motion.div>

        {/* Stats — Passionfroot */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-8 md:gap-14"
        >
          {METHODOLOGY_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={reduced ? undefined : { y: -2 }}
            >
              <p className="font-heading text-4xl font-bold text-white md:text-5xl">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-[#d8dee8]">{stat.label}</p>
              <p className="text-xs italic text-[#8a96a8]">{stat.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Onglets — Jasper */}
        <div
          className="mt-12 flex justify-center overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Étapes de la méthodologie"
        >
          <motion.div
            className="inline-flex gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-sm"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            {METHODOLOGY_STEPS.map((step, i) => {
              const isSelected = activeIndex === i;

              return (
                <button
                  key={step.id}
                  type="button"
                  role="tab"
                  {...(isSelected ? { 'aria-selected': 'true' } : { 'aria-selected': 'false' })}
                  aria-controls={`methodology-panel-${step.id}`}
                  id={`methodology-tab-${step.id}`}
                  onClick={() => setActiveIndex(i)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-all md:px-5 ${
                    isSelected
                      ? 'bg-primary-green text-white shadow-lg shadow-primary-green/25'
                      : 'text-[#a8b4c4] hover:bg-white/[0.06] hover:text-white'
                  }`}
                >
                  {step.tab}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Contenu actif : radial + bento — mix 2/3/4 */}
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <MethodologyRadial activeIndex={activeIndex} />

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              id={`methodology-panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`methodology-tab-${active.id}`}
              initial={reduced ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? undefined : { opacity: 0, x: -12 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col gap-5"
            >
              <motion.div
                className="flex items-start gap-4"
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${active.bentoBg} ${active.accent}`}
                >
                  <ActiveIcon className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">{active.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-[#b4bec8]">{active.description}</p>
                </div>
              </motion.div>

              {/* Bento — Jasper / capture 3 */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div
                  className={`rounded-2xl border p-4 ${active.bentoBg} ${active.bentoBorder} sm:col-span-1`}
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/45">Livrable</p>
                  <p className={`mt-1 font-heading text-lg font-bold ${active.accent}`}>{active.deliverable}</p>
                </div>
                <motion.div
                  className={`rounded-2xl border p-4 ${active.bentoBg} ${active.bentoBorder}`}
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/45">Durée</p>
                  <p className="mt-1 font-heading text-lg font-bold text-white">{active.duration}</p>
                </motion.div>
                <motion.div
                  className={`rounded-2xl border p-4 ${active.bentoBg} ${active.bentoBorder}`}
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/45">Focus</p>
                  <p className="mt-1 font-heading text-lg font-bold text-white">{active.focus}</p>
                </motion.div>
              </div>

              <motion.div
                className={`flex gap-3 rounded-2xl border p-4 ${active.bentoBorder} bg-white/[0.03]`}
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Quote className={`mt-0.5 h-5 w-5 shrink-0 ${active.accent}`} aria-hidden />
                <p className="text-sm italic leading-relaxed text-[#c5cdd8]">&ldquo;{active.quote}&rdquo;</p>
              </motion.div>

              <div className="flex items-center gap-2 text-sm font-medium text-primary-green">
                <span>Étape {activeIndex + 1} sur 6</span>
                {activeIndex < METHODOLOGY_STEPS.length - 1 && (
                  <button
                    type="button"
                    onClick={() => setActiveIndex((i) => i + 1)}
                    className="inline-flex items-center gap-1 rounded-full border border-primary-green/30 px-3 py-1 transition hover:bg-primary-green/10"
                  >
                    Suivant
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bento global — vue d’ensemble des 6 étapes */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {METHODOLOGY_STEPS.map((step, i) => {
            const Icon = step.Icon;
            const isActive = i === activeIndex;
            return (
              <motion.button
                key={step.id}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`group flex items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                  isActive
                    ? `${step.bentoBg} ${step.bentoBorder} ring-1 ring-primary-green/30`
                    : 'border-white/[0.08] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]'
                }`}
                whileHover={reduced ? undefined : { y: -3 }}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${step.bentoBg} ${step.accent}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-white/40">
                    0{i + 1}
                  </span>
                  <span className="mt-0.5 block font-heading text-sm font-bold text-white group-hover:text-primary-green">
                    {step.title}
                  </span>
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
