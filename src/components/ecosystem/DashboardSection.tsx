import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedNum, Chip, EcosystemContainer } from './shared';
import { IconChart, IconGlobe, IconLock, IconProfiles } from './icons';

const DASH_STATS = [
  { Icon: IconChart, label: 'Disponibilité', desc: 'Analytics temps réel', value: 99, suffix: '%' },
  { Icon: IconProfiles, label: 'Profils validés', desc: 'Vérification terrain', value: 400, suffix: '+' },
  { Icon: IconGlobe, label: 'Zones actives', desc: 'Présence géographique', value: 10, suffix: '' },
  { Icon: IconLock, label: 'Sécurité', desc: 'Données cryptées', value: 256, suffix: '-bit' },
];

export function DashboardSection({
  reduced,
  dashboardImage,
}: {
  reduced: boolean;
  dashboardImage: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative overflow-hidden border-t border-white/5 bg-[#070d1c] py-20 md:py-24">
      <EcosystemContainer className="mb-12 lg:mb-14">
        <div className="grid items-center gap-12 md:gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-xl lg:max-w-[34rem] lg:pr-6 xl:pr-10"
          >
            <Chip color="gold">Le moteur invisible</Chip>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[2.5rem]">
              Dashboard{' '}
              <span className="bg-gradient-to-r from-gold-premium to-primary-blue bg-clip-text text-transparent">
                &amp; Backend
              </span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-text-secondary md:text-base">
              Tout l&apos;écosystème est piloté depuis notre interface d&apos;administration centralisée. Une vue
              360° pour les investisseurs et partenaires.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-muted md:text-[0.9375rem]">
              Depuis ce back-office, l&apos;équipe supervise les services, les utilisateurs, les prestataires et les
              commandes — avec des indicateurs et des tableaux de bord actualisés en continu pour piloter la
              croissance de la plateforme.
            </p>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="flex justify-center lg:justify-end lg:pl-6 xl:pl-10"
          >
            <img
              src={dashboardImage}
              alt="Dashboard Soutrali Deals"
              className="h-auto w-full max-w-[min(100%,400px)] object-contain sm:max-w-[420px] md:max-w-[460px] lg:max-w-[min(100%,420px)] xl:max-w-[460px]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </EcosystemContainer>

      <EcosystemContainer>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {DASH_STATS.map(({ Icon, label, desc, value, suffix }, i) => (
            <motion.div
              key={label}
              initial={reduced ? false : { opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.42, delay: 0.35 + i * 0.1 }}
              whileHover={reduced ? {} : { y: -4 }}
              className="group rounded-2xl border border-white/10 bg-[#0b1528] p-5 md:p-6"
            >
              <Icon className="mb-3 h-6 w-6 text-white/35 transition-colors group-hover:text-white/70" />
              <div className="mb-1 font-heading text-3xl font-black text-white">
                <AnimatedNum value={value} suffix={suffix} />
              </div>
              <p className="text-sm font-semibold text-white/70">{label}</p>
              <p className="text-xs text-text-muted">{desc}</p>
            </motion.div>
          ))}
        </div>
      </EcosystemContainer>
    </section>
  );
}
