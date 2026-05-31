import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { EcosystemPlatform } from './ecosystemPlatforms';

type EcosystemStageCardProps = {
  platform: EcosystemPlatform;
  index: number;
  onSelect: (id: EcosystemPlatform['id']) => void;
};

export function EcosystemStageCard({ platform, index, onSelect }: EcosystemStageCardProps) {
  const reduced = useReducedMotion();
  const Icon = platform.icon;

  return (
    <motion.div
      className="h-full"
      initial={reduced ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.button
        type="button"
        onClick={() => onSelect(platform.id)}
        className="group relative flex h-full w-full flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080a0f]"
        whileHover={reduced ? undefined : { y: -6 }}
        whileTap={reduced ? undefined : { scale: 0.99 }}
        aria-label={`${platform.name} — ${platform.description}. Voir le détail`}
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-[border-color,box-shadow] duration-500 group-hover:border-white/20 group-hover:shadow-[0_28px_80px_rgba(0,0,0,0.45)] md:p-6">
          <div
            className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rotate-45 border ${platform.stage} opacity-40`}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden
          />

          {/* Icône 3D — perspective + vignette produit */}
          <div className="relative mx-auto mb-6 h-[148px] w-full max-w-[200px] [perspective:900px]">
            <motion.div
              className="relative h-full w-full"
              style={{ transformStyle: 'preserve-3d' }}
              animate={
                reduced
                  ? { rotateX: 14, rotateY: -10 }
                  : { rotateX: [12, 16, 12], rotateY: [-12, -8, -12], y: [0, -6, 0] }
              }
              transition={
                reduced
                  ? undefined
                  : { duration: 5 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }
              }
            >
              <div
                className={`absolute bottom-2 left-1/2 h-8 w-[72%] -translate-x-1/2 rounded-[100%] bg-black/50 blur-xl ${platform.glow}`}
                aria-hidden
              />
              <div
                className={`absolute bottom-4 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-2xl border bg-gradient-to-br ${platform.accent} shadow-lg ${platform.ring} ring-1`}
                style={{ transform: 'translateZ(24px)' }}
              >
                <Icon className="h-5 w-5 text-white drop-shadow" strokeWidth={2.2} />
              </div>
              <div
                className="absolute left-1/2 top-0 w-[88%] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/15 bg-[#0c1018] shadow-2xl"
                style={{ transform: 'translateZ(48px) rotateX(2deg)' }}
              >
                <img
                  src={platform.image}
                  alt=""
                  className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-transparent to-white/5" />
              </div>
            </motion.div>
          </div>

          <h3 className="font-heading text-lg font-bold text-white transition-colors group-hover:text-primary-green md:text-xl">
            {platform.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#a8b4c4]">{platform.description}</p>

          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-green opacity-0 transition-all duration-300 group-hover:opacity-100">
            En savoir plus
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </motion.button>
    </motion.div>
  );
}
