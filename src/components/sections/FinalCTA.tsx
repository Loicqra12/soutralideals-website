import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Smartphone, Mail, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import impactIcon from '../../assets/images/community/pillars/pillar-impact-icon.svg';
import growIcon from '../../assets/images/community/pillars/pillar-grow-icon.svg';
import starsIcon from '../../assets/images/community/gamification/gamification-stars-icon.svg';

export const FinalCTA = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const ctaItems = [
    {
      title: 'Demander un Devis',
      description: 'Un projet web, mobile ou marketing ? Parlons-en.',
      action: 'Estimer mon projet',
      to: '/devis',
      Icon: Mail,
      accent: 'text-primary-green',
      accentSoft: 'bg-primary-green/15',
    },
    {
      title: 'Rejoindre le Réseau',
      description: 'Intégrez la famille des Soutraliens.',
      action: "Je m'inscris",
      to: '/communaute',
      Icon: Users,
      accent: 'text-primary-green',
      accentSoft: 'bg-primary-green/15',
    },
    {
      title: "Télécharger l'App",
      description: 'Accédez à tous les services depuis votre poche.',
      action: "C'est parti",
      to: '/plateforme',
      Icon: Smartphone,
      accent: 'text-primary-blue',
      accentSoft: 'bg-primary-blue/15',
    },
    {
      title: 'Nous Contacter',
      description: 'Une question ? Notre équipe est là 24/7.',
      action: 'Envoyer un message',
      to: '/contact',
      Icon: Mail,
      accent: 'text-primary-blue',
      accentSoft: 'bg-primary-blue/15',
    },
  ];

  return (
    <SectionWrapper id="contact" bg="dark">
      <div
        className="relative"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
      >
        {/* Micro-animations "trail" du curseur avec mini-images */}
        <motion.div
          className="pointer-events-none absolute hidden rounded-xl border border-white/15 bg-[#0f1a31]/90 p-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm lg:block"
          animate={{ x: cursor.x - 56, y: cursor.y - 44 }}
          transition={{ type: 'spring', stiffness: 220, damping: 24, mass: 0.6 }}
          aria-hidden
        >
          <img src={impactIcon} alt="" className="h-7 w-7 opacity-90" />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute hidden rounded-xl border border-white/15 bg-[#0f1a31]/90 p-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm lg:block"
          animate={{ x: cursor.x + 12, y: cursor.y - 26 }}
          transition={{ type: 'spring', stiffness: 190, damping: 22, mass: 0.7 }}
          aria-hidden
        >
          <img src={growIcon} alt="" className="h-6 w-6 opacity-90" />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute hidden rounded-lg border border-primary-blue/30 bg-primary-blue/15 p-1.5 lg:block"
          animate={{ x: cursor.x + 56, y: cursor.y + 10 }}
          transition={{ type: 'spring', stiffness: 250, damping: 26, mass: 0.4 }}
          aria-hidden
        >
          <img src={starsIcon} alt="" className="h-4 w-4 opacity-95" />
        </motion.div>

        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-8 text-4xl font-heading font-bold md:text-6xl">
            Prêt à{' '}
            <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
              Passer à l&apos;Action ?
            </span>
          </h2>
          <p className="text-xl text-text-secondary">
            Rejoignez la révolution digitale en Côte d&apos;Ivoire. Une seule plateforme pour tous vos besoins.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ctaItems.map(({ title, description, action, to, Icon, accent, accentSoft }) => (
            <Link key={title} to={to}>
              <motion.div
                className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#0a1223] p-8 transition-all hover:border-primary-blue/40"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className={`absolute right-3 top-3 opacity-[0.08] transition-opacity group-hover:opacity-[0.14] ${accent}`}>
                  <Icon className="h-20 w-20" />
                </div>

                <div className="relative z-10">
                  <motion.div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${accentSoft} ${accent}`}
                    whileHover={{ scale: 1.08, rotate: -3 }}
                    transition={{ duration: 0.22 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
                  <p className="mb-6 text-sm text-text-secondary">{description}</p>
                  <div className={`mt-auto flex items-center gap-2 text-sm font-bold ${accent}`}>
                    {action}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
