import { motion } from 'framer-motion';
import { Ecosystem } from '../components/sections/Ecosystem';
import { FinalCTA } from '../components/sections/FinalCTA';
import { SEO } from '../components/seo/SEO';
import { Check, Users, Code, ShoppingCart, Shield, CreditCard, BarChart3, Globe } from 'lucide-react';

// Import generated images
import ecosystemSchema from '../assets/images/ecosystem_schema_circular_1768488702781.png';
import artisansImage from '../assets/images/pilier_1_artisans_1768488740726.png';
import freelancesImage from '../assets/images/pilier_2_freelances_1768488774447.png';
import marketplaceImage from '../assets/images/pilier_3_marketplace_1768488828674.png';
import sdealsIdImage from '../assets/images/sdeals_id_verification_1768488864696.png';
import soutrapayImage from '../assets/images/soutrapay_payment_1768488897962.png';
import dashboardImage from '../assets/images/dashboard_admin_interface_1768490337922.png';
import visionImage from '../assets/images/vision_africa_network_1768490375643.png';

export const EcosystemPage = () => {
    // Fonction pour l'effet Spotlight
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <>
            <SEO
                title="Notre Écosystème"
                description="Découvrez comment Freelances, Artisans, Commerçants et Startups collaborent au sein de l'écosystème Soutrali Deals."
            />
            <div className="pt-24">
                {/* Hero Section - Existing Ecosystem component */}
                <Ecosystem pageHero />

                {/* 2. Schéma Global de l'Écosystème */}
                <section className="py-20 bg-dark-bg relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-green/5 to-transparent"></div>

                    <div className="container-custom relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                                Comment <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">Fonctionne</span> l'Écosystème ?
                            </h2>
                            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                                Chaque brique fonctionne seule, mais <strong className="text-white">prend toute sa puissance quand elle est connectée aux autres</strong>.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-5xl mx-auto"
                        >
                            <img
                                src={ecosystemSchema}
                                alt="Schéma de l'écosystème Soutrali Deals"
                                className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* 3. Les 3 Piliers de l'Écosystème */}
                <section className="py-20 bg-dark-card">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                                Les 3 <span className="text-gold-premium">Piliers</span> Fondamentaux
                            </h2>
                        </motion.div>

                        <div className="space-y-20">
                            {/* Pilier 1 - Métiers & Prestataires */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="grid lg:grid-cols-2 gap-12 items-center"
                            >
                                <div className="order-2 lg:order-1">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/10 border border-primary-green/20 mb-6">
                                        <Users className="w-5 h-5 text-primary-green" />
                                        <span className="text-sm font-bold text-primary-green">PILIER 1</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                                        Métiers & Prestataires
                                    </h3>
                                    <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                                        Artisans, techniciens, services de proximité – tous organisés par catégories, métiers et services.
                                        La géolocalisation permet de trouver le bon prestataire autour de soi.
                                    </p>
                                    <div className="inline-block px-6 py-3 bg-primary-green/10 border-l-4 border-primary-green rounded">
                                        <p className="text-white font-bold italic">
                                            "Nous structurons l'informel sans le compliquer."
                                        </p>
                                    </div>
                                </div>
                                <div className="order-1 lg:order-2">
                                    <img
                                        src={artisansImage}
                                        alt="Artisans et prestataires ivoiriens"
                                        className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </motion.div>

                            {/* Pilier 2 - Freelance & Services Numériques */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="grid lg:grid-cols-2 gap-12 items-center"
                            >
                                <div>
                                    <img
                                        src={freelancesImage}
                                        alt="Freelances et services numériques"
                                        className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/10 border border-primary-blue/20 mb-6">
                                        <Code className="w-5 h-5 text-primary-blue" />
                                        <span className="text-sm font-bold text-primary-blue">PILIER 2</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                                        Freelance & Services Numériques
                                    </h3>
                                    <p className="text-lg text-text-secondary mb-4 leading-relaxed">
                                        <strong className="text-white">Oui, Soutrali Deals est aussi prestataire</strong>, MAIS aussi une plateforme de mise en relation.
                                    </p>
                                    <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                                        Les services IT, design, marketing peuvent être :
                                    </p>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-primary-green/20 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-4 h-4 text-primary-green" />
                                            </div>
                                            <span className="text-text-secondary">Réalisés par <strong className="text-white">l'équipe interne</strong></span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-primary-blue/20 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-4 h-4 text-primary-blue" />
                                            </div>
                                            <span className="text-text-secondary">Ou par des <strong className="text-white">freelances référencés</strong></span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Pilier 3 - E-marché & Vendeurs */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="grid lg:grid-cols-2 gap-12 items-center"
                            >
                                <div className="order-2 lg:order-1">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-premium/10 border border-gold-premium/20 mb-6">
                                        <ShoppingCart className="w-5 h-5 text-gold-premium" />
                                        <span className="text-sm font-bold text-gold-premium">PILIER 3</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                                        E-marché & Vendeurs
                                    </h3>
                                    <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                                        Soutrali Deals va plus loin que les services. Nous connectons également les boutiques locales,
                                        produits artisanaux, alimentaires et bien plus encore.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-gold-premium shrink-0 mt-1" />
                                            <span className="text-text-secondary">Boutiques locales référencées</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-gold-premium shrink-0 mt-1" />
                                            <span className="text-text-secondary">Commandes + livraison + paiement</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-gold-premium shrink-0 mt-1" />
                                            <span className="text-text-secondary">Commerce local digitalisé</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="order-1 lg:order-2">
                                    <img
                                        src={marketplaceImage}
                                        alt="E-marché et vendeurs locaux"
                                        className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 4. SDeals Identification */}
                <section className="py-20 bg-gradient-to-b from-dark-bg to-dark-card">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/10 border border-primary-green/20 mb-6">
                                    <Shield className="w-5 h-5 text-primary-green" />
                                    <span className="text-sm font-bold text-primary-green">DIFFÉRENCIATEUR CLÉ</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                                    🆔 SDeals Identification
                                </h2>
                                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                                    Application de <strong className="text-white">recensement terrain</strong> qui collecte les données de prestataires,
                                    freelances, vendeurs et clients.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-primary-green shrink-0 mt-1" />
                                        <span className="text-text-secondary">Identité, métier, photo, GPS</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-primary-green shrink-0 mt-1" />
                                        <span className="text-text-secondary">Validation et vérification</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-primary-green shrink-0 mt-1" />
                                        <span className="text-text-secondary">Base de données fiable</span>
                                    </li>
                                </ul>
                                <div className="bg-primary-green/10 border-l-4 border-primary-green px-6 py-4 rounded">
                                    <p className="text-white font-bold text-lg">
                                        💡 Pas de plateforme solide sans base de données fiable.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <img
                                    src={sdealsIdImage}
                                    alt="SDeals Identification"
                                    className="w-full h-auto rounded-2xl shadow-2xl"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 5. SoutraPay */}
                <section className="py-20 bg-dark-card">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <img
                                    src={soutrapayImage}
                                    alt="SoutraPay - Paiement sécurisé"
                                    className="w-full h-auto rounded-2xl shadow-2xl"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/10 border border-primary-blue/20 mb-6">
                                    <CreditCard className="w-5 h-5 text-primary-blue" />
                                    <span className="text-sm font-bold text-primary-blue">INCLUSION FINANCIÈRE</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                                    💳 SoutraPay
                                </h2>
                                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                                    Notre outil de <strong className="text-white">paiement sécurisé interne</strong> (pas une banque,
                                    juste un système de paiement intégré).
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-primary-blue shrink-0 mt-1" />
                                        <span className="text-text-secondary">Paiement simple et traçable</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-primary-blue shrink-0 mt-1" />
                                        <span className="text-text-secondary">Historique des transactions</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-primary-blue shrink-0 mt-1" />
                                        <span className="text-text-secondary">À terme : réputation, scoring, opportunités</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 6. Dashboard & Backend */}
                <section className="py-20 bg-dark-bg">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-premium/10 border border-gold-premium/20 mb-6">
                                    <BarChart3 className="w-5 h-5 text-gold-premium" />
                                    <span className="text-sm font-bold text-gold-premium">LE MOTEUR INVISIBLE</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                                    📊 Dashboard & Backend
                                </h2>
                                <p className="text-xl text-text-secondary leading-relaxed">
                                    Tout l'écosystème est piloté intelligemment depuis notre interface d'administration centralisée.
                                    Une vue à 360° pour les investisseurs et partenaires.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary-green via-primary-blue to-gold-premium opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>
                                <img
                                    src={dashboardImage}
                                    alt="Tableau de bord administrateur Soutrali Deals"
                                    className="relative w-full h-auto rounded-xl shadow-2xl border border-white/10"
                                />
                            </motion.div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: BarChart3, title: 'Statistiques', desc: 'Analytics en temps réel', color: 'primary-green' },
                                { icon: Users, title: 'Validation profils', desc: 'Vérification manuelle', color: 'primary-blue' },
                                { icon: Globe, title: 'Expansion', desc: 'Zones géographiques', color: 'gold-premium' },
                                { icon: Shield, title: 'Sécurité', desc: 'Données cryptées', color: 'primary-green' }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-dark-card border border-dark-border p-6 rounded-2xl hover:border-white/20 transition-all group"
                                >
                                    <item.icon className="w-10 h-10 text-text-secondary group-hover:text-white transition-colors mb-4" />
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-text-muted">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. Qui Bénéficie ? */}
                <section className="py-20 bg-dark-card">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                                Qui <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">Bénéficie</span> de l'Écosystème ?
                            </h2>
                            <p className="text-xl text-text-secondary">Tout le monde gagne.</p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: '👨‍🔧 Prestataire', benefits: ['Visibilité accrue', 'Plus de clients', 'Badge vérifié'], color: '#22c55e' },
                                { title: '💻 Freelance', benefits: ['Missions qualifiées', 'Crédibilité', 'Portfolio'], color: '#3b82f6' },
                                { title: '🛒 Vendeur', benefits: ['Ventes en ligne', 'Paiement sécurisé', 'Livraison'], color: '#D4AF37' },
                                { title: '👥 Utilisateur', benefits: ['Services fiables', 'Géolocalisation', 'Confiance'], color: '#22c55e' }
                            ].map((profile, index) => {
                                return (
                                    <div
                                        key={profile.title}
                                        className="relative group h-full"
                                        onMouseMove={handleMouseMove}
                                    >
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-green to-primary-blue rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.02, rotate: [0, 1, -1, 0] }}
                                            className="relative bg-dark-bg border border-dark-border p-6 rounded-2xl h-full flex flex-col justify-between overflow-hidden"
                                        >
                                            {/* Spotlight Effect Layer */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                                style={{
                                                    background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${profile.color}15, transparent 40%)`
                                                }}
                                            />

                                            <div className="relative z-10">
                                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                                    {profile.title.split(' ')[0]}
                                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                                        {profile.title.split(' ').slice(1).join(' ')}
                                                    </span>
                                                </h3>
                                                <ul className="space-y-4">
                                                    {profile.benefits.map((benefit) => (
                                                        <motion.li
                                                            key={benefit}
                                                            className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                                                            whileHover={{ x: 5 }}
                                                        >
                                                            <div className="relative mt-1">
                                                                <div className="absolute inset-0 bg-current blur-sm opacity-50" style={{ color: profile.color }}></div>
                                                                <Check className="w-5 h-5 relative z-10" style={{ color: profile.color }} />
                                                            </div>
                                                            <span className="text-text-secondary text-sm font-medium group-hover:text-white transition-colors">{benefit}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Bottom Decorative Line */}
                                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-50 transition-all duration-500" style={{ color: profile.color }}></div>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* 8. Vision Long Terme */}
                <section className="py-32 bg-dark-bg relative overflow-hidden flex items-center min-h-[60vh]">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src={visionImage}
                            alt="Vision Expansion Afrique"
                            className="w-full h-full object-cover opacity-30"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-transparent to-dark-bg"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-transparent to-dark-bg/80"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-premium/10 border border-gold-premium/20 mb-8">
                                <Globe className="w-5 h-5 text-gold-premium" />
                                <span className="text-sm font-bold text-gold-premium">VISION 2030</span>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight">
                                Construire l'Infrastructure Numérique des <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green via-primary-blue to-gold-premium">Économies Locales</span>
                            </h2>

                            <p className="text-xl md:text-2xl text-text-secondary mb-6 leading-relaxed">
                                Structurer l'économie locale. Digitaliser les métiers. <br />
                                Créer des opportunités là où il n'y en avait pas.
                            </p>

                            <div className="bg-dark-card/50 backdrop-blur-md border border-gold-premium/20 p-8 rounded-2xl mt-12">
                                <p className="text-2xl md:text-3xl font-bold text-white italic leading-relaxed">
                                    "Soutrali Deals n'est pas une app. <br />
                                    <span className="text-gold-premium">C'est une infrastructure numérique</span> pour les économies locales."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <FinalCTA />
            </div>
        </>
    );
};
