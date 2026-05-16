import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Check } from 'lucide-react';
import { TrophyIcon, StarsIcon } from '../icons';
import { BadgeDebutant, BadgeExpert, BadgeAmbassadeur } from '../icons';
import { GamificationLevelsIllustration, GamificationBadgesCollection } from '../illustrations';
import { ProgressBar } from '../icons';

const levels = [
  {
    name: 'Débutant',
    description: 'Nouveau membre, accès aux bases',
    progress: 25,
    color: 'text-primary-green',
    bg: 'bg-primary-green/10',
    border: 'border-primary-green/20',
    icon: BadgeDebutant,
  },
  {
    name: 'Intermédiaire',
    description: 'Expérience acquise, plus de visibilité',
    progress: 50,
    color: 'text-primary-blue',
    bg: 'bg-primary-blue/10',
    border: 'border-primary-blue/20',
    icon: StarsIcon,
  },
  {
    name: 'Expert',
    description: 'Réputation établie, accès aux missions premium',
    progress: 75,
    color: 'text-gold-premium',
    bg: 'bg-gold-premium/10',
    border: 'border-gold-premium/20',
    icon: BadgeExpert,
  },
  {
    name: 'Ambassadeur',
    description: 'Leader communautaire, avantages exclusifs',
    progress: 100,
    color: 'text-gold-premium',
    bg: 'bg-gold-premium/10',
    border: 'border-gold-premium/20',
    icon: BadgeAmbassadeur,
  },
];

const advantages = [
  'Accès prioritaire aux nouvelles missions',
  'Taux de commission réduits',
  'Badges visibles sur le profil',
  'Accès à des événements exclusifs',
  'Support prioritaire',
];

export const CommunityGamification = () => {
  return (
    <SectionWrapper id="gamification" bg="dark">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-gold-premium/20 bg-gold-premium/10">
            <TrophyIcon size={40} className="text-gold-premium" />
          </div>
          <h2 className="mb-6 font-heading text-3xl font-bold md:text-5xl">
            Votre engagement{' '}
            <span className="bg-gradient-to-r from-gold-premium to-primary-green bg-clip-text text-transparent">
              récompensé
            </span>
          </h2>
          <p className="text-lg text-text-secondary">
            Plus vous contribuez, plus vous gagnez en visibilité, crédibilité et opportunités.
            Notre système de gamification récompense chaque action : missions complétées, avis clients
            positifs, formations suivies, contributions communautaires.
          </p>
        </motion.div>
      </div>

      {/* Niveaux */}
      <div className="mb-16">
        <h3 className="mb-8 text-center text-2xl font-bold">Système de Niveaux</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {levels.map((level, index) => {
            const LevelIcon = level.icon;
            return (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border border-dark-border bg-dark-card p-6 transition-all hover:border-primary-green/50"
              >
                <div className="mb-4 flex flex-col items-center text-center">
                  {/* Icône — className uniquement, zéro inline style */}
                  <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-xl border ${level.bg} ${level.border}`}>
                    <LevelIcon size={32} className={level.color} />
                  </div>
                  <h4 className={`mb-2 text-xl font-bold ${level.color}`}>{level.name}</h4>
                  <p className="mb-4 text-sm text-text-secondary">{level.description}</p>
                </div>
                <ProgressBar progress={level.progress} height={8} showLabel />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Illustration niveaux */}
      <div className="mb-16">
        <GamificationLevelsIllustration />
      </div>

      {/* Collection de badges */}
      <div className="mb-16">
        <h3 className="mb-8 text-center text-2xl font-bold">Collection de Badges</h3>
        <GamificationBadgesCollection />
      </div>

      {/* Avantages */}
      <div className="mx-auto max-w-3xl">
        <h3 className="mb-8 text-center text-2xl font-bold">Avantages par Niveau</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 rounded-xl border border-dark-border bg-dark-card p-4 transition-colors hover:border-primary-green/50"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-green/10">
                <Check className="h-4 w-4 text-primary-green" />
              </span>
              <span className="text-text-secondary">{advantage}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
