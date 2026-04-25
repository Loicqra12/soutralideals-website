import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { LearnIcon, CollaborateIcon, GrowIcon, ImpactIcon } from '../icons';
import { LearnIllustration, CollaborateIllustration, GrowIllustration, ImpactIllustration } from '../illustrations';

const pillars = [
    {
        id: 'learn',
        title: 'Apprendre ensemble, grandir ensemble',
        description: 'Formations pratiques, mentorat personnalisé et partage d\'expérience entre pairs. Accédez à des guides pratiques, conseils business & techniques, et bénéficiez de l\'assistance de notre IA Assistant Soutrali pour répondre à toutes vos questions.',
        icon: LearnIcon,
        illustration: LearnIllustration,
        color: 'primary-blue',
        gradient: 'from-primary-blue to-primary-green'
    },
    {
        id: 'collaborate',
        title: 'Travailler ensemble sur des projets réels',
        description: 'Rejoignez des missions freelance, créez des partenariats stratégiques et collaborez au sein d\'équipes projet multidisciplinaires. La force du collectif pour des résultats exceptionnels.',
        icon: CollaborateIcon,
        illustration: CollaborateIllustration,
        color: 'primary-green',
        gradient: 'from-primary-green to-gold-premium'
    },
    {
        id: 'grow',
        title: 'Évoluer professionnellement et économiquement',
        description: 'Système de niveaux progressif, badges de compétence et réputation qui s\'acquiert au fil de vos contributions. Plus vous vous engagez, plus vous accédez à des opportunités exclusives et à une meilleure visibilité.',
        icon: GrowIcon,
        illustration: GrowIllustration,
        color: 'gold-premium',
        gradient: 'from-gold-premium to-primary-blue'
    },
    {
        id: 'impact',
        title: 'Développer localement et créer de l\'inclusion',
        description: 'Valorisation des métiers informels, digitalisation des services traditionnels et impact social mesurable. Ensemble, nous transformons l\'économie locale et créons des opportunités durables pour tous.',
        icon: ImpactIcon,
        illustration: ImpactIllustration,
        color: 'primary-green',
        gradient: 'from-primary-green via-primary-blue to-gold-premium'
    }
];

export const CommunityPillars = () => {
    return (
        <SectionWrapper id="piliers" bg="dark">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Les Piliers de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">Communauté</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Ce qui rend la communauté Soutrali unique et puissante
                    </p>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {pillars.map((pillar, index) => {
                    const Icon = pillar.icon;
                    const Illustration = pillar.illustration;
                    
                    return (
                        <motion.div
                            key={pillar.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group"
                        >
                            <div className="bg-dark-card border border-dark-border rounded-2xl p-8 hover:border-primary-green/50 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                                {/* Background gradient effect */}
                                <div 
                                    className="absolute top-0 right-0 w-64 h-64 opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500"
                                    style={{
                                        background: pillar.gradient === 'from-primary-blue to-primary-green' ? 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.3), rgba(34, 197, 94, 0.3))' :
                                                     pillar.gradient === 'from-primary-green to-gold-premium' ? 'linear-gradient(to bottom right, rgba(34, 197, 94, 0.3), rgba(184, 134, 11, 0.3))' :
                                                     pillar.gradient === 'from-gold-premium to-primary-blue' ? 'linear-gradient(to bottom right, rgba(184, 134, 11, 0.3), rgba(59, 130, 246, 0.3))' :
                                                     'linear-gradient(to bottom right, rgba(34, 197, 94, 0.3), rgba(59, 130, 246, 0.3), rgba(184, 134, 11, 0.3))'
                                    }}
                                ></div>

                                {/* Icon */}
                                <div className="mb-6 relative z-10">
                                    <div 
                                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 border`}
                                        style={{
                                            backgroundColor: pillar.color === 'primary-blue' ? 'rgba(59, 130, 246, 0.1)' :
                                                           pillar.color === 'primary-green' ? 'rgba(34, 197, 94, 0.1)' :
                                                           'rgba(184, 134, 11, 0.1)',
                                            borderColor: pillar.color === 'primary-blue' ? 'rgba(59, 130, 246, 0.2)' :
                                                        pillar.color === 'primary-green' ? 'rgba(34, 197, 94, 0.2)' :
                                                        'rgba(184, 134, 11, 0.2)'
                                        }}
                                    >
                                        <Icon 
                                            size={32} 
                                            style={{
                                                color: pillar.color === 'primary-blue' ? '#3B82F6' :
                                                       pillar.color === 'primary-green' ? '#22C55E' :
                                                       '#B8860B'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 relative z-10">
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-green transition-colors">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-text-secondary leading-relaxed mb-6">
                                        {pillar.description}
                                    </p>
                                </div>

                                {/* Illustration */}
                                <div className="mt-6 relative z-10">
                                    <Illustration className="w-full" />
                                </div>

                                {/* Decorative line */}
                                <div 
                                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: pillar.gradient === 'from-primary-blue to-primary-green' ? 'linear-gradient(to right, #3B82F6, #22C55E)' :
                                                     pillar.gradient === 'from-primary-green to-gold-premium' ? 'linear-gradient(to right, #22C55E, #B8860B)' :
                                                     pillar.gradient === 'from-gold-premium to-primary-blue' ? 'linear-gradient(to right, #B8860B, #3B82F6)' :
                                                     'linear-gradient(to right, #22C55E, #3B82F6, #B8860B)'
                                    }}
                                ></div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
};
