import { motion } from 'framer-motion';
import { Building2, Users, Heart, Award, Target, Shield } from 'lucide-react';
import { FinalCTA } from '../components/sections/FinalCTA';
import { SEO } from '../components/seo/SEO';

/**
 * AboutPage - Page dédiée "À propos"
 * 
 * Page de crédibilité entreprise
 */
export const AboutPage = () => {
    return (
        <>
            <SEO
                title="À Propos de Nous"
                description="Notre histoire, nos valeurs et notre mission. Soutrali Deals s'engage pour la réussite des entrepreneurs ivoiriens."
            />
            <div className="pt-24">
                {/* Hero Section À Propos */}
                <section className="relative py-20 overflow-hidden bg-gradient-to-b from-dark-card to-dark-bg">
                    <div className="container-custom relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center max-w-4xl mx-auto mb-16"
                        >
                            <span className="text-gold-premium font-bold tracking-widest uppercase mb-4 block">Notre Histoire</span>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold font-heading mb-6 text-white">
                                Plus qu'une plateforme, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">
                                    Une Mission de Vie
                                </span>
                            </h1>
                            <p className="text-xl text-text-secondary leading-relaxed">
                                Né d'un constat simple en 2023 : le talent est partout en Côte d'Ivoire, mais les opportunités sont souvent difficiles à saisir. Soutrali Deals est la réponse à ce défi.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-heading font-bold text-white mb-6">
                                    Notre Genèse
                                </h2>
                                <p className="text-text-secondary mb-4 leading-relaxed">
                                    Fondé en 2024, Soutrali Deals est né d'une vision simple : créer une plateforme 100% ivoirienne
                                    qui connecte les talents locaux aux opportunités du marché digital.
                                </p>
                                <p className="text-text-secondary leading-relaxed">
                                    Nous croyons au pouvoir de la communauté et à l'impact de la technologie pour transformer
                                    l'écosystème entrepreneurial en Côte d'Ivoire.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-2 gap-6"
                            >
                                <div className="bg-dark-card border border-dark-border p-6 rounded-2xl text-center">
                                    <Building2 className="w-12 h-12 text-primary-green mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-2">2024</h3>
                                    <p className="text-text-muted text-sm">Année de création</p>
                                </div>
                                <div className="bg-dark-card border border-dark-border p-6 rounded-2xl text-center">
                                    <Users className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-2">400+</h3>
                                    <p className="text-text-muted text-sm">Membres actifs</p>
                                </div>
                                <div className="bg-dark-card border border-dark-border p-6 rounded-2xl text-center">
                                    <Heart className="w-12 h-12 text-primary-orange mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
                                    <p className="text-text-muted text-sm">Ivoirien</p>
                                </div>
                                <div className="bg-dark-card border border-dark-border p-6 rounded-2xl text-center">
                                    <Award className="w-12 h-12 text-gold-premium mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-2">10</h3>
                                    <p className="text-text-muted text-sm">Zones couvertes</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Nos Valeurs */}
                <section className="py-20 bg-dark-card">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-heading font-bold text-white mb-4">
                                Nos Valeurs
                            </h2>
                            <p className="text-text-secondary max-w-2xl mx-auto">
                                Les principes qui guident notre mission quotidienne
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Excellence',
                                    description: 'Nous visons l\'excellence dans chaque interaction et service fourni.',
                                    icon: <Target className="w-8 h-8 text-primary-green" />,
                                    color: 'border-primary-green/20 bg-primary-green/5'
                                },
                                {
                                    title: 'Communauté',
                                    description: 'Par des prestataires, pour des prestataires. La communauté au cœur de tout.',
                                    icon: <Users className="w-8 h-8 text-primary-blue" />,
                                    color: 'border-primary-blue/20 bg-primary-blue/5'
                                },
                                {
                                    title: 'Innovation',
                                    description: 'Nous adoptons les technologies modernes pour offrir la meilleure expérience.',
                                    icon: <Shield className="w-8 h-8 text-primary-orange" />, // Changed from Innovation to Shield as typical icon or keep consistent
                                    color: 'border-primary-orange/20 bg-primary-orange/5'
                                }
                            ].map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`p-8 rounded-2xl border ${value.color} text-center hover:scale-105 transition-transform duration-300`}
                                >
                                    <div className="mb-6 flex justify-center">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                    <p className="text-text-secondary">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <FinalCTA />
            </div>
        </>
    );
};
