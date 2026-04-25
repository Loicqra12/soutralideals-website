import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
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
        bgColor: 'bg-primary-green/10',
        borderColor: 'border-primary-green/20',
        icon: BadgeDebutant
    },
    {
        name: 'Intermédiaire',
        description: 'Expérience acquise, plus de visibilité',
        progress: 50,
        color: 'text-primary-blue',
        bgColor: 'bg-primary-blue/10',
        borderColor: 'border-primary-blue/20',
        icon: StarsIcon
    },
    {
        name: 'Expert',
        description: 'Réputation établie, accès aux missions premium',
        progress: 75,
        color: 'text-gold-premium',
        bgColor: 'bg-gold-premium/10',
        borderColor: 'border-gold-premium/20',
        icon: BadgeExpert
    },
    {
        name: 'Ambassadeur',
        description: 'Leader communautaire, avantages exclusifs',
        progress: 100,
        color: 'text-gold-premium',
        bgColor: 'bg-gold-premium/10',
        borderColor: 'border-gold-premium/20',
        icon: BadgeAmbassadeur
    }
];

const advantages = [
    'Accès prioritaire aux nouvelles missions',
    'Taux de commission réduits',
    'Badges visibles sur le profil',
    'Accès à des événements exclusifs',
    'Support prioritaire'
];

export const CommunityGamification = () => {
    return (
        <SectionWrapper id="gamification" bg="dark">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gold-premium/10 border border-gold-premium/20 mb-6">
                        <TrophyIcon size={40} className="text-gold-premium" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Votre engagement <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-premium to-primary-green">récompensé</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Plus vous contribuez, plus vous gagnez en visibilité, crédibilité et opportunités. Notre système de gamification récompense chaque action : missions complétées, avis clients positifs, formations suivies, contributions communautaires.
                    </p>
                </motion.div>
            </div>

            {/* Levels Section */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">Système de Niveaux</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {levels.map((level, index) => {
                        const LevelIcon = level.icon;
                        return (
                            <motion.div
                                key={level.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-primary-green/50 transition-all group"
                            >
                                <div className="flex flex-col items-center text-center mb-4">
                                    {typeof LevelIcon === 'function' && LevelIcon.name.includes('Badge') ? (
                                        <LevelIcon size={64} className="mb-4" />
                                    ) : (
                                        <div 
                                            className="w-16 h-16 rounded-xl border flex items-center justify-center mb-4"
                                            style={{
                                                backgroundColor: level.color === 'text-primary-green' ? 'rgba(34, 197, 94, 0.1)' :
                                                               level.color === 'text-primary-blue' ? 'rgba(59, 130, 246, 0.1)' :
                                                               'rgba(184, 134, 11, 0.1)',
                                                borderColor: level.color === 'text-primary-green' ? 'rgba(34, 197, 94, 0.2)' :
                                                            level.color === 'text-primary-blue' ? 'rgba(59, 130, 246, 0.2)' :
                                                            'rgba(184, 134, 11, 0.2)'
                                            }}
                                        >
                                            <LevelIcon 
                                                size={32} 
                                                style={{
                                                    color: level.color === 'text-primary-green' ? '#22C55E' :
                                                           level.color === 'text-primary-blue' ? '#3B82F6' :
                                                           '#B8860B'
                                                }}
                                            />
                                        </div>
                                    )}
                                    <h4 
                                        className="text-xl font-bold mb-2"
                                        style={{
                                            color: level.color === 'text-primary-green' ? '#22C55E' :
                                                   level.color === 'text-primary-blue' ? '#3B82F6' :
                                                   '#B8860B'
                                        }}
                                    >{level.name}</h4>
                                    <p className="text-sm text-text-secondary mb-4">{level.description}</p>
                                </div>
                                <ProgressBar progress={level.progress} height={8} showLabel={true} />
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Levels Illustration */}
            <div className="mb-16">
                <GamificationLevelsIllustration />
            </div>

            {/* Badges Collection */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">Collection de Badges</h3>
                <GamificationBadgesCollection />
            </div>

            {/* Advantages */}
            <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-8 text-center">Avantages par Niveau</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 bg-dark-card border border-dark-border rounded-xl p-4 hover:border-primary-green/50 transition-colors"
                        >
                            <div className="w-8 h-8 rounded-lg bg-primary-green/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-primary-green font-bold">✓</span>
                            </div>
                            <span className="text-text-secondary">{advantage}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
