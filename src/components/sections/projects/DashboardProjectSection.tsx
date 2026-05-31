import { motion, useReducedMotion } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  TrendingUp,
  BarChart3,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react';
import { DashboardShowcase } from './DashboardShowcase';

const PILLARS = [
  {
    title: 'Surveiller',
    desc: 'Activité, utilisateurs et services en temps réel.',
    Icon: BarChart3,
  },
  {
    title: 'Gérer',
    desc: 'Prestataires, commandes et modération centralisées.',
    Icon: Users,
  },
  {
    title: 'Décider',
    desc: 'CA, croissance et objectifs vs résultats.',
    Icon: TrendingUp,
  },
] as const;

const BENTO = [
  { label: 'Temps réel', Icon: LayoutDashboard },
  { label: 'Prestataires', Icon: Users },
  { label: 'Analytics', Icon: BarChart3 },
  { label: 'Classements', Icon: Sparkles },
  { label: 'Modération', Icon: Shield },
  { label: 'Vues custom', Icon: Layers },
] as const;

const TECH = ['React', 'TypeScript', 'Recharts', 'API REST'];

export function DashboardProjectSection() {
  const reduced = useReducedMotion();

  return (
    <motion.article
      id="project-dashboard"
      initial={reduced ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className="scroll-mt-24"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-14 xl:gap-20 lg:min-h-[min(560px,72vh)]">
        {/* Texte — colonne épurée */}
        <div className="flex flex-col justify-between gap-8 lg:min-h-[500px] lg:py-2">
          <header>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-green/15 text-primary-green">
                <LayoutDashboard className="h-5 w-5" strokeWidth={2.2} aria-hidden />
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-green/90">
                Back-office
              </span>
            </div>

            <h3 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-white md:text-4xl lg:text-[2.65rem] lg:leading-[1.08]">
              Pilotez tout l&apos;écosystème, en un seul regard
            </h3>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[#b4bec8] md:text-lg">
              Le centre de contrôle Soutrali Deals pour gérer services, membres et performances.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-3 sm:gap-4">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                className="relative sm:px-1"
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i, duration: 0.4 }}
              >
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-primary-green/25 bg-primary-green/10 font-heading text-sm font-bold text-primary-green">
                  {i + 1}
                </span>
                <p className="font-heading text-base font-bold text-white">{pillar.title}</p>
                <p className="mt-1.5 text-sm leading-snug text-[#9aa8b8]">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Modules clés
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {BENTO.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="group flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 transition-colors hover:border-primary-green/35 hover:bg-primary-green/[0.06]"
                  initial={reduced ? false : { opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.04 * i, duration: 0.35 }}
                  whileHover={reduced ? undefined : { y: -2 }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-primary-green transition-colors group-hover:bg-primary-green/15">
                    <item.Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-[#d8dee8]">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <footer className="flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
            <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-white/35">
              Stack
            </span>
            {TECH.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-[#a8b4c4]"
              >
                {t}
              </span>
            ))}
          </footer>
        </div>

        {/* Visuel — image pleine, sans cadre */}
        <div className="flex items-center justify-center lg:min-h-[500px]">
          <DashboardShowcase className="w-full" />
        </div>
      </div>
    </motion.article>
  );
}
