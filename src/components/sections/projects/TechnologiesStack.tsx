import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '../../ui/SectionWrapper';
import {
  TECH_ARCHITECTURE_POINTS,
  TECH_CATEGORIES,
} from './techStackData';
import { TechCategoryCard } from './TechCategoryCard';
import { TechBrandIcon } from './TechBrandIcon';
import {
  siFirebase,
  siFlutter,
  siMapbox,
  siNodedotjs,
  siPostgresql,
  siReact,
} from 'simple-icons';

const PIPELINE_ICONS = [
  { label: 'Flutter', icon: siFlutter },
  { label: 'React', icon: siReact },
  { label: 'Node.js', icon: siNodedotjs },
  { label: 'PostgreSQL', icon: siPostgresql },
  { label: 'Firebase', icon: siFirebase },
  { label: 'Mapbox', icon: siMapbox },
] as const;

const mobile = TECH_CATEGORIES.find((c) => c.id === 'mobile')!;
const web = TECH_CATEGORIES.find((c) => c.id === 'web')!;
const backend = TECH_CATEGORIES.find((c) => c.id === 'backend')!;
const tools = TECH_CATEGORIES.find((c) => c.id === 'tools')!;

export const TechnologiesStack = () => {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper id="technologies" bg="dark" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,hsl(142,71%,45%)/0.05,transparent_60%)]"
        aria-hidden
      />

      <div className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl font-bold md:text-5xl"
          >
            Technologies &{' '}
            <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
              Compétences
            </span>
          </motion.h2>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-5 text-lg text-text-secondary"
          >
            Le stack réellement utilisé sur Soutrali : mobile Flutter, web React, API Node.js et
            données PostgreSQL — avec Firebase, Mapbox et les APIs Mobile Money.
          </motion.p>
        </div>

        {/* Pipeline produit (remplace les stats génériques) */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-2 md:gap-3"
          aria-label="Chaîne technique du produit"
        >
          {PIPELINE_ICONS.map((step, i) => (
            <span key={step.label} className="flex items-center gap-2 md:gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-dark-border bg-dark-bg px-3 py-2">
                <TechBrandIcon icon={step.icon} size={18} />
                <span className="text-sm font-medium text-[#d8dee8]">{step.label}</span>
              </span>
              {i < PIPELINE_ICONS.length - 1 ? (
                <span className="hidden text-[#5a6570] sm:inline" aria-hidden>
                  →
                </span>
              ) : null}
            </span>
          ))}
        </motion.div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-5">
          <TechCategoryCard category={mobile} index={0} className="lg:row-span-2" />
          <TechCategoryCard category={web} index={1} />
          <TechCategoryCard category={backend} index={2} />
          <TechCategoryCard category={tools} index={3} className="lg:col-span-2" />
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-dark-border bg-dark-card p-8 md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="font-heading text-xl font-bold text-white md:text-2xl">
                Architecture scalable & sécurisée
              </h3>
              <ul className="mt-6 space-y-4">
                {TECH_ARCHITECTURE_POINTS.map((point, i) => (
                  <li key={point} className="flex gap-4 text-sm leading-relaxed text-[#9aa8b8]">
                    <span className="font-mono text-xs font-bold text-primary-green/80">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-xl border border-dark-border bg-dark-bg p-5 font-mono text-xs leading-relaxed text-[#8a96a8] md:text-sm"
              aria-label="Schéma simplifié de l'architecture"
            >
              <p className="text-[#c5cdd8]">
                <span className="text-primary-green">[Mobile]</span> Flutter App
              </p>
              <p className="my-2 text-white/30">↓ HTTPS</p>
              <p className="text-[#c5cdd8]">
                <span className="text-primary-blue">[API]</span> Node.js · REST / GraphQL
              </p>
              <p className="my-2 text-white/30">↓</p>
              <p className="text-[#c5cdd8]">
                <span className="text-gold-premium">[Data]</span> PostgreSQL · MongoDB
              </p>
              <p className="my-2 text-white/30">↔</p>
              <p className="text-[#c5cdd8]">
                <span className="text-teal-400">[Services]</span> Firebase · Mapbox · Mobile Money
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
