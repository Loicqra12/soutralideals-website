import { motion } from 'framer-motion';
import { SectionWrapper } from '../../ui/SectionWrapper';
import { Users, Briefcase, TrendingUp, MapPin, Award, Target } from 'lucide-react';

const impacts = [
    {
        icon: Briefcase,
        title: 'Structuration des métiers informels',
        description: 'Formalisation et organisation des prestataires, freelances et vendeurs pour une meilleure visibilité et professionnalisation.',
        bgColor: 'bg-primary-green/10',
        iconColor: 'text-primary-green',
        stats: 'Prestataires formalisés'
    },
    {
        icon: Users,
        title: 'Création d\'emplois',
        description: 'Opportunités d\'emploi directes et indirectes pour les talents locaux, contribuant au développement économique.',
        bgColor: 'bg-primary-blue/10',
        iconColor: 'text-primary-blue',
        stats: 'Emplois créés'
    },
    {
        icon: TrendingUp,
        title: 'Digitalisation des services locaux',
        description: 'Transformation digitale des services traditionnels pour une meilleure accessibilité et efficacité.',
        bgColor: 'bg-gold-premium/10',
        iconColor: 'text-gold-premium',
        stats: 'Services digitalisés'
    },
    {
        icon: MapPin,
        title: 'Accès simplifié aux opportunités',
        description: 'Connexion facilitée entre clients et prestataires, élargissant les opportunités pour tous.',
        bgColor: 'bg-primary-green/10',
        iconColor: 'text-primary-green',
        stats: 'Utilisateurs actifs'
    }
];

export const ImpactResults = () => {
    return (
        <SectionWrapper id="impact" bg="dark">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Impact & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">Résultats</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Des résultats concrets qui transforment l'écosystème entrepreneurial ivoirien
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {impacts.map((impact, index) => {
                        const Icon = impact.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-dark-card border border-dark-border rounded-2xl p-8 hover:border-primary-green/50 transition-all"
                            >
                                <div className={`w-16 h-16 rounded-xl ${impact.bgColor} flex items-center justify-center mb-6`}>
                                    <Icon className={`w-8 h-8 ${impact.iconColor}`} />
                                </div>
                                <h3 className="font-bold text-white text-xl mb-4">{impact.title}</h3>
                                <p className="text-text-secondary leading-relaxed mb-4">{impact.description}</p>
                                <div className="text-text-muted text-sm font-medium">{impact.stats}</div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary-green/10 via-primary-blue/10 to-gold-premium/10 border border-primary-green/20 rounded-2xl p-8 text-center"
                >
                    <Target className="w-12 h-12 text-primary-green mx-auto mb-4" />
                    <h3 className="text-2xl font-heading font-bold text-white mb-4">
                        Rejoignez-nous dans cette transformation
                    </h3>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Ensemble, construisons un écosystème digital fort qui valorise les talents locaux et transforme l'économie informelle.
                    </p>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};
