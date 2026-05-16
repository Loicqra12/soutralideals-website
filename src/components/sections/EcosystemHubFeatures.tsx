import { motion } from 'framer-motion';
import type { ComponentType } from 'react';

const IconTeam = () => (
  <svg viewBox="0 0 40 40" fill="none" className="h-5 w-5" aria-hidden>
    <circle cx="20" cy="13" r="5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="8" cy="17" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="32" cy="17" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11 33c0-5 4-8 9-8s9 3 9 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconArtisan = () => (
  <svg viewBox="0 0 40 40" fill="none" className="h-5 w-5" aria-hidden>
    <path d="M8 32L22 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="22" y="8" width="10" height="6" rx="2" transform="rotate(45 22 8)" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="10" cy="30" r="3" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconTech = () => (
  <svg viewBox="0 0 40 40" fill="none" className="h-5 w-5" aria-hidden>
    <rect x="6" y="8" width="28" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M14 30h12M20 26v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M13 17l3-3 4 4 3-3 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type FeatureItem = {
  Icon: ComponentType;
  title: string;
  description: string;
  accent: string;
  bg: string;
};

const features: FeatureItem[] = [
  {
    Icon: IconTeam,
    title: 'Une équipe de professionnels',
    description:
      "Développeurs, marketeurs, communicants et gestionnaires qui conçoivent et opèrent l'écosystème au quotidien.",
    accent: 'text-primary-green',
    bg: 'bg-primary-green/10',
  },
  {
    Icon: IconArtisan,
    title: 'Artisans & freelances',
    description:
      'Des artisans, freelances et vendeurs issus du terrain, organisés en communautés et connectés à des opportunités réelles.',
    accent: 'text-gold-premium',
    bg: 'bg-gold-premium/10',
  },
  {
    Icon: IconTech,
    title: 'Une technologie au centre',
    description:
      'Une plateforme web et mobile qui connecte les talents, les clients et les services dans un même environnement.',
    accent: 'text-primary-blue',
    bg: 'bg-primary-blue/10',
  },
];

const HubCenter = ({ reduced }: { reduced: boolean | null }) => (
  <motion.div
    className="relative flex h-44 w-44 shrink-0 items-center justify-center md:h-52 md:w-52"
    initial={reduced ? false : { opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    <motion.div
      className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(56,189,248,0.45),rgba(34,197,94,0.22)_42%,rgba(168,85,247,0.15)_58%,transparent_72%)]"
      animate={reduced ? {} : { scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.25),transparent_70%)]"
      animate={reduced ? {} : { rotate: [0, 8, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden
    />
    <motion.div
      className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/35 bg-[#0b1528]/85 shadow-[0_0_24px_rgba(56,189,248,0.25)] backdrop-blur-sm"
      animate={reduced ? {} : { y: [0, -3, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-white" aria-hidden>
        <path
          d="M12 3c-3.2 0-5.8 2.4-5.8 5.4 0 4.1 5.8 11.6 5.8 11.6s5.8-7.5 5.8-11.6C17.8 5.4 15.2 3 12 3z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M12 6.5l.9 1.8 2 .3-1.45 1.4.35 2L12 11.2l-1.8.95.35-2L9.1 8.6l2-.3L12 6.5z" fill="currentColor" />
      </svg>
    </motion.div>
  </motion.div>
);

function FeatureNode({
  feature,
  side,
  reduced,
  delay,
  stacked = false,
}: {
  feature: FeatureItem;
  side: 'left' | 'right';
  reduced: boolean | null;
  delay: number;
  stacked?: boolean;
}) {
  const { Icon, title, description, accent, bg } = feature;
  const isLeft = side === 'left';

  const textBlock = (
    <motion.div
      className={`min-w-0 flex-1 ${stacked ? 'text-center' : isLeft ? 'text-right' : 'text-left'}`}
      initial={reduced ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
    >
      <h3 className="text-lg font-bold text-white md:text-xl">{title}</h3>
      <div
        className={`my-3 h-px ${
          stacked
            ? 'mx-auto w-24 bg-gradient-to-r from-transparent via-white/35 to-transparent'
            : isLeft
              ? 'ml-auto w-full max-w-[220px] bg-gradient-to-l from-white/35 to-transparent'
              : 'w-full max-w-[220px] bg-gradient-to-r from-white/35 to-transparent'
        }`}
        aria-hidden
      />
      <p className="text-sm leading-relaxed text-text-muted md:text-[0.9375rem]">{description}</p>
    </motion.div>
  );

  const iconNode = (
    <motion.div
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-[#0a1528] ${bg} ${accent}`}
      initial={reduced ? false : { opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: delay + 0.08 }}
    >
      <Icon />
    </motion.div>
  );

  if (stacked) {
    return (
      <div className="flex w-full max-w-sm flex-col items-center gap-5">
        {textBlock}
        {iconNode}
      </div>
    );
  }

  return (
    <motion.div
      className={`flex max-w-[340px] items-center gap-4 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}
      initial={reduced ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {textBlock}
      {iconNode}
    </motion.div>
  );
}

const ConnectorLines = () => (
  <svg
    className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
    viewBox="0 0 1000 500"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden
  >
    <path
      d="M 248 118 Q 360 165 420 228"
      stroke="rgba(255,255,255,0.22)"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M 248 382 Q 360 335 420 272"
      stroke="rgba(255,255,255,0.22)"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M 752 250 L 580 250 L 500 250"
      stroke="rgba(255,255,255,0.22)"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

export const EcosystemHubFeatures = ({ reduced }: { reduced: boolean | null }) => (
  <motion.div
    className="relative mx-auto w-full max-w-5xl py-8 md:py-14 lg:max-w-6xl"
    initial={reduced ? false : { opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <ConnectorLines />

    <motion.div className="relative hidden min-h-[480px] md:grid md:grid-cols-[1fr_auto_1fr] md:grid-rows-2 md:items-center md:gap-x-0">
      <div className="row-start-1 justify-self-end pr-2 lg:pr-8">
        <FeatureNode feature={features[0]} side="left" reduced={reduced} delay={0.12} />
      </div>

      <div className="row-span-2 row-start-1 flex items-center justify-center px-4">
        <HubCenter reduced={reduced} />
      </div>

      <motion.div className="row-span-2 row-start-1 flex items-center justify-self-start pl-2 lg:pl-8">
        <FeatureNode feature={features[2]} side="right" reduced={reduced} delay={0.32} />
      </motion.div>

      <div className="row-start-2 justify-self-end pr-2 lg:pr-8">
        <FeatureNode feature={features[1]} side="left" reduced={reduced} delay={0.22} />
      </div>
    </motion.div>

    <div className="flex flex-col items-center gap-14 md:hidden">
      <HubCenter reduced={reduced} />
      {features.map((f, i) => (
        <FeatureNode
          key={f.title}
          feature={f}
          side="left"
          reduced={reduced}
          delay={0.1 + i * 0.08}
          stacked
        />
      ))}
    </div>
  </motion.div>
);
