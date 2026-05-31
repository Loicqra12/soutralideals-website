import { motion, useReducedMotion } from 'framer-motion';
import {
  Smartphone,
  Search,
  MapPin,
  MessageCircle,
  Wallet,
  Layers,
  Sparkles,
} from 'lucide-react';
import { MobileAppShowcase } from './MobileAppShowcase';

const STEPS = [
  {
    n: '01',
    title: 'Trouvez un pro',
    desc: 'Recherche intelligente et prestataires à proximité.',
    Icon: Search,
  },
  {
    n: '02',
    title: 'Commandez sereinement',
    desc: 'Chat, suivi et catégories métiers & freelance.',
    Icon: MessageCircle,
  },
  {
    n: '03',
    title: 'Payez en un geste',
    desc: 'SoutraPay et Mobile Money intégrés.',
    Icon: Wallet,
  },
] as const;

const BENTO = [
  { label: 'Recherche', Icon: Search },
  { label: 'Géolocalisation', Icon: MapPin },
  { label: 'Métiers', Icon: Layers },
  { label: 'Messagerie', Icon: MessageCircle },
  { label: 'SoutraPay', Icon: Wallet },
  { label: 'Assistant IA', Icon: Sparkles },
] as const;

const TECH = ['Flutter', 'Dart', 'Firebase', 'Mobile Money'];

export function MobileProjectSection() {
  const reduced = useReducedMotion();

  return (
    <motion.article
      id="project-mobile"
      initial={reduced ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className="scroll-mt-24"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-14 xl:gap-20 lg:min-h-[min(560px,72vh)]">
        {/* Visuels — même hauteur que le bloc texte */}
        <div className="order-2 flex items-center justify-center lg:order-1 lg:min-h-[500px]">
          <MobileAppShowcase className="w-full max-w-xl lg:max-w-none" />
        </div>

        {/* Texte épuré — colonne Yango : titre, 3 étapes, grille compacte, tech */}
        <div className="order-1 flex flex-col justify-between gap-8 lg:order-2 lg:min-h-[500px] lg:py-2">
          <header>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-premium/15 text-gold-premium">
                <Smartphone className="h-5 w-5" strokeWidth={2.2} aria-hidden />
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-premium/90">
                Application Mobile
              </span>
            </div>

            <h3 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-white md:text-4xl lg:text-[2.65rem] lg:leading-[1.08]">
              Tirez le meilleur parti de Soutrali Deals, dès maintenant
            </h3>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[#b4bec8] md:text-lg">
              Une expérience fluide pour trouver des services locaux, partout en Côte d&apos;Ivoire.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-3 sm:gap-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                className="relative sm:px-1"
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i, duration: 0.4 }}
              >
                {i < STEPS.length - 1 && (
                  <span
                    className="absolute -right-2 top-5 hidden h-px w-4 bg-white/10 sm:block lg:-right-3 lg:w-6"
                    aria-hidden
                  />
                )}
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] font-heading text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="font-heading text-base font-bold text-white">{step.title}</p>
                <p className="mt-1.5 text-sm leading-snug text-[#9aa8b8]">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              En un coup d&apos;œil
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {BENTO.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="group flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 transition-colors hover:border-gold-premium/30 hover:bg-gold-premium/[0.06]"
                  initial={reduced ? false : { opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.04 * i, duration: 0.35 }}
                  whileHover={reduced ? undefined : { y: -2 }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-gold-premium transition-colors group-hover:bg-gold-premium/15">
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
      </div>
    </motion.article>
  );
}
