import { motion } from 'framer-motion';
import { Building2, Users, Heart, Award, Target, Shield, Code, Smartphone, TrendingUp, MapPin, CheckCircle2, Globe, Lightbulb, Handshake, Sparkles } from 'lucide-react';
import { FinalCTA } from '../components/sections/FinalCTA';
import { SEO } from '../components/seo/SEO';

/**
 * AboutPage - Page dédiée "À propos"
 * 
 * Structure complète avec storytelling impactant
 */
export const AboutPage = () => {
    const teamMembers = [
        {
            name: 'Christ',
            role: 'Fondateur / Vision Produit',
            description: 'Passionné par la technologie et l\'impact social.',
            avatar: 'https://ui-avatars.com/api/?name=Christ&background=22c55e&color=fff&size=200'
        },
        {
            name: 'Divine',
            role: 'Co-Fondateur / Stratégie',
            description: 'Expert en développement business et partenariats.',
            avatar: 'https://ui-avatars.com/api/?name=Divine&background=3b82f6&color=fff&size=200'
        },
        {
            name: 'Kouamé',
            role: 'Lead Développeur',
            description: 'Architecte des solutions techniques innovantes.',
            avatar: 'https://ui-avatars.com/api/?name=Kouame&background=d4af37&color=fff&size=200'
        }
    ];

    return (
        <>
            <SEO
                title="À Propos de Nous"
                description="Notre histoire, nos valeurs et notre mission. Soutrali Deals s'engage pour la réussite des entrepreneurs ivoiriens."
            />
            <div className="pt-24">
                {/* 1. Hero Section - Notre Histoire AMÉLIORÉE */}
                <section className="relative py-20 overflow-hidden bg-gradient-to-b from-dark-card to-dark-bg">
                    <div className="container-custom relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center max-w-4xl mx-auto mb-16"
                        >
                            <span className="text-gold-premium font-bold tracking-widest uppercase mb-4 block">Notre Histoire</span>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white">
                                Plus qu'une plateforme, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">
                                    Une Mission de Vie
                                </span>
                            </h1>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-heading font-bold text-white mb-6">
                                    Un Constat Simple
                                </h2>
                                <p className="text-text-secondary mb-4 leading-relaxed text-lg">
                                    <strong className="text-white">SOUTRALI DEALS est né d'un constat simple :</strong> en Côte d'Ivoire, des milliers de talents travaillent chaque jour sans visibilité, sans outils digitaux et sans accès à des opportunités structurées.
                                </p>
                                <p className="text-text-secondary mb-4 leading-relaxed text-lg">
                                    Nous sommes nous-mêmes des prestataires de services – développeurs, marketeurs, communicants, gestionnaires – confrontés aux mêmes réalités.
                                </p>
                                <p className="text-text-secondary leading-relaxed text-lg">
                                    <strong className="text-primary-green">C'est de cette expérience qu'est né SOUTRALI DEALS :</strong> une plateforme pensée par des prestataires, pour des prestataires.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-2 gap-6"
                            >
                                <div className="bg-dark-card border border-dark-border p-6 rounded-2xl text-center hover:border-primary-green/50 transition-all">
                                    <Building2 className="w-12 h-12 text-primary-green mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-2">2024</h3>
                                    <p className="text-text-muted text-sm">Année de création</p>
                                </div>
                                <div className="bg-dark-card border border-dark-border p-6 rounded-2xl text-center hover:border-primary-blue/50 transition-all">
                                    <Users className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-2">400+</h3>
                                    <p className="text-text-muted text-sm">Membres actifs</p>
                                </div>
                                <div className="bg-dark-card border border-dark-border p-6 rounded-2xl text-center hover:border-gold-premium/50 transition-all">
                                    <Heart className="w-12 h-12 text-gold-premium mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
                                    <p className="text-text-muted text-sm">Ivoirien</p>
                                </div>
                                <div className="bg-dark-card border border-dark-border p-6 rounded-2xl text-center hover:border-gold-premium/50 transition-all">
                                    <Award className="w-12 h-12 text-gold-premium mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-2">10</h3>
                                    <p className="text-text-muted text-sm">Zones Abidjan</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2. CE QUE NOUS FAISONS - 3 BLOCS */}
                <section className="py-20 bg-dark-bg">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                                Ce Que Nous <span className="text-gold-premium">Faisons</span>
                            </h2>
                            <p className="text-text-secondary max-w-3xl mx-auto text-lg">
                                SOUTRALI DEALS, c'est <strong className="text-white">3 piliers complémentaires</strong> pour transformer l'écosystème entrepreneurial ivoirien.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Bloc 1 - Prestations */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-dark-card border border-primary-green/20 p-8 rounded-2xl hover:border-primary-green/50 transition-all"
                            >
                                <div className="w-16 h-16 bg-primary-green/10 rounded-xl flex items-center justify-center mb-6">
                                    <Code className="w-8 h-8 text-primary-green" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Prestations Professionnelles</h3>
                                <p className="text-text-secondary mb-6">
                                    Nous accompagnons entreprises, startups et indépendants avec des services en :
                                </p>
                                <ul className="space-y-3 text-text-secondary">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                                        <span>Développement web & mobile</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                                        <span>Marketing & communication</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                                        <span>Gestion & comptabilité</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Bloc 2 - Plateforme */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-dark-card border border-primary-blue/20 p-8 rounded-2xl hover:border-primary-blue/50 transition-all"
                            >
                                <div className="w-16 h-16 bg-primary-blue/10 rounded-xl flex items-center justify-center mb-6">
                                    <Smartphone className="w-8 h-8 text-primary-blue" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Plateforme Digitale</h3>
                                <p className="text-text-secondary mb-6">
                                    Nous développons une plateforme tout-en-un qui permet de :
                                </p>
                                <ul className="space-y-3 text-text-secondary">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-primary-blue shrink-0 mt-0.5" />
                                        <span>Trouver des prestataires géolocalisés</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-primary-blue shrink-0 mt-0.5" />
                                        <span>Commander des services</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-primary-blue shrink-0 mt-0.5" />
                                        <span>Vendre des produits</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-primary-blue shrink-0 mt-0.5" />
                                        <span>Gérer des activités professionnelles</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Bloc 3 - Communauté */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-dark-card border border-gold-premium/20 p-8 rounded-2xl hover:border-gold-premium/50 transition-all"
                            >
                                <div className="w-16 h-16 bg-gold-premium/10 rounded-xl flex items-center justify-center mb-6">
                                    <Users className="w-8 h-8 text-gold-premium" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Communauté</h3>
                                <p className="text-text-secondary mb-6">
                                    Nous animons une communauté appelée <strong className="text-gold-premium">Les SOUTRALIENS</strong>, regroupant :
                                </p>
                                <ul className="space-y-3 text-text-secondary">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-gold-premium shrink-0 mt-0.5" />
                                        <span>Artisans (plombiers, mécaniciens...)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-gold-premium shrink-0 mt-0.5" />
                                        <span>Freelances (développeurs, designers...)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-gold-premium shrink-0 mt-0.5" />
                                        <span>Vendeurs (e-commerçants, boutiques...)</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 3. NOTRE VISION */}
                <section className="py-20 bg-gradient-to-br from-dark-card via-dark-bg to-dark-card relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 opacity-5">
                        <Globe className="absolute top-10 right-10 w-64 h-64 text-primary-green" />
                        <MapPin className="absolute bottom-10 left-10 w-48 h-48 text-primary-blue" />
                    </div>

                    <div className="container-custom relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-premium/10 border border-gold-premium/20 mb-6">
                                <Lightbulb className="w-5 h-5 text-gold-premium" />
                                <span className="text-sm font-bold text-gold-premium">Vision 2030</span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">
                                Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green via-primary-blue to-gold-premium">Ambition</span>
                            </h2>

                            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-6">
                                Notre ambition est de devenir <strong className="text-white">la référence digitale des métiers informels et indépendants en Afrique de l'Ouest.</strong>
                            </p>

                            <p className="text-lg text-text-secondary leading-relaxed">
                                Nous croyons que la technologie peut <span className="text-primary-green font-semibold">structurer l'économie informelle</span>, <span className="text-primary-blue font-semibold">créer de la confiance</span> et <span className="text-gold-premium font-semibold">générer de nouvelles opportunités durables</span>.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* 4. NOS VALEURS - 4 VALEURS */}
                <section className="py-20 bg-dark-bg">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                                Nos <span className="text-gold-premium">Valeurs</span>
                            </h2>
                            <p className="text-text-secondary max-w-2xl mx-auto">
                                Notre ADN en <strong className="text-white">4 principes fondamentaux</strong>
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: 'Impact Local',
                                    description: 'Priorité aux talents ivoiriens et à l\'économie locale.',
                                    icon: <MapPin className="w-8 h-8 text-primary-green" />,
                                    color: 'border-primary-green/20 bg-primary-green/5 hover:border-primary-green/50'
                                },
                                {
                                    title: 'Transparence',
                                    description: 'Clarté totale des services, prix et processus.',
                                    icon: <Shield className="w-8 h-8 text-primary-blue" />,
                                    color: 'border-primary-blue/20 bg-primary-blue/5 hover:border-primary-blue/50'
                                },
                                {
                                    title: 'Communauté',
                                    description: 'Entraide et collaboration au cœur de tout.',
                                    icon: <Handshake className="w-8 h-8 text-gold-premium" />,
                                    color: 'border-gold-premium/20 bg-gold-premium/5 hover:border-gold-premium/50'
                                },
                                {
                                    title: 'Innovation Utile',
                                    description: 'Technologie au service du réel, pas l\'inverse.',
                                    icon: <Sparkles className="w-8 h-8 text-primary-green" />,
                                    color: 'border-primary-green/20 bg-primary-green/5 hover:border-primary-green/50'
                                }
                            ].map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`p-6 rounded-2xl border ${value.color} text-center transition-all duration-300`}
                                >
                                    <div className="mb-4 flex justify-center">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                                    <p className="text-text-secondary text-sm">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. L'ÉQUIPE */}
                <section className="py-20 bg-dark-card">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                                L'Équipe Derrière <span className="text-gold-premium">Soutrali Deals</span>
                            </h2>
                            <p className="text-text-secondary max-w-2xl mx-auto">
                                Des passionnés engagés pour transformer l'écosystème entrepreneurial ivoirien
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={member.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-dark-bg border border-dark-border p-6 rounded-2xl text-center hover:border-gold-premium/50 transition-all group"
                                >
                                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-dark-border group-hover:border-gold-premium/50 transition-all">
                                        <img
                                            src={member.avatar}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-sm text-gold-premium font-semibold mb-3">{member.role}</p>
                                    <p className="text-text-secondary text-sm italic">"{member.description}"</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. POURQUOI NOUS FAIRE CONFIANCE */}
                <section className="py-20 bg-gradient-to-b from-dark-bg to-dark-card">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                                Pourquoi Nous <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">Faire Confiance ?</span>
                            </h2>
                            <p className="text-text-secondary max-w-2xl mx-auto">
                                Des garanties concrètes pour votre sérénité
                            </p>
                        </motion.div>

                        <div className="max-w-3xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { text: 'Équipe issue du terrain', icon: Users },
                                    { text: 'Projet 100% ivoirien', icon: Heart },
                                    { text: 'Prestataires vérifiés', icon: Shield },
                                    { text: 'Solutions concrètes', icon: TrendingUp },
                                    { text: 'Vision long terme', icon: Target },
                                    { text: 'Transparence totale', icon: CheckCircle2 }
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.text}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-4 bg-dark-card border border-dark-border p-6 rounded-xl hover:border-primary-green/50 transition-all"
                                    >
                                        <div className="w-12 h-12 bg-primary-green/10 rounded-full flex items-center justify-center shrink-0">
                                            <item.icon className="w-6 h-6 text-primary-green" />
                                        </div>
                                        <p className="text-white font-semibold text-lg">{item.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <FinalCTA />
            </div>
        </>
    );
};
