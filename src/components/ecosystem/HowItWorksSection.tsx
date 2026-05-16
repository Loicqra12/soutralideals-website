import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Chip, EcosystemContainer } from './shared';
import { IconConnect, IconInscription, IconMission, IconShieldId } from './icons';

const STEPS = [
  {
    num: '01',
    Icon: IconInscription,
    title: 'Inscription',
    desc: 'Créez votre profil en quelques minutes sur la plateforme.',
  },
  {
    num: '02',
    Icon: IconShieldId,
    title: 'Vérification ID',
    desc: 'Votre identité est validée par nos équipes terrain.',
  },
  {
    num: '03',
    Icon: IconConnect,
    title: 'Mise en relation',
    desc: 'Connectez-vous à des clients, missions et opportunités.',
  },
  {
    num: '04',
    Icon: IconMission,
    title: 'Mission accomplie',
    desc: 'Transaction sécurisée, évaluation et fidélisation.',
  },
];

export function HowItWorksSection({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#060e1a] py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(59,130,246,0.07),transparent)]" />
      <EcosystemContainer>
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-14 text-center md:mb-16"
        >
          <Chip color="blue">Comment ça marche</Chip>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-4xl">
            De l&apos;inscription à la{' '}
            <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
              mission accomplie
            </span>
          </h2>
        </motion.div>

        <div className="relative grid gap-10 md:grid-cols-4 md:gap-6">
          <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px overflow-hidden md:block">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-primary-green/50 via-primary-blue/50 to-gold-premium/50"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.3, delay: 0.4, ease: 'easeInOut' }}
            />
          </div>

          {STEPS.map(({ num, Icon, title, desc }, i) => (
            <motion.div
              key={num}
              initial={reduced ? false : { opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.16 }}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-[#0b1528] text-white/80"
                whileHover={reduced ? {} : { scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 280, damping: 18 }}
              >
                <Icon className="h-7 w-7" />
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border border-white/20 bg-[#060e1a] text-[9px] font-bold text-white/40">
                  {num}
                </span>
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-primary-blue/30"
                  initial={{ opacity: 0, scale: 1 }}
                  animate={inView ? { opacity: [0, 0.5, 0], scale: [1, 1.4, 1] } : {}}
                  transition={{ duration: 1, delay: 0.6 + i * 0.16 }}
                />
              </motion.div>
              <h3 className="mb-2 text-base font-bold text-white md:text-lg">{title}</h3>
              <p className="max-w-[220px] text-sm leading-relaxed text-text-secondary">{desc}</p>
            </motion.div>
          ))}
        </div>
      </EcosystemContainer>
    </section>
  );
}
