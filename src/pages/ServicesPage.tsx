import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Check, ChevronRight, FileText, Lightbulb, Rocket, BarChart, Users } from 'lucide-react';
import { SEO } from '../components/seo/SEO';


// Import Generated Images
import heroImage from '../assets/images/services_hero_growth.png';
import devImage from '../assets/images/services_dev_mockups.png';
import toolsImage from '../assets/images/services_dashboard_tools.png';
import strategyImage from '../assets/images/services_strategy_blueprint.png';
import specsImage from '../assets/images/services_specs_document.png';
import marketingImage from '../assets/images/services_marketing_growth.png';

export const ServicesPage = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <>
            <SEO
                title="Nos Services - Expertise Digitale 360°"
                description="De l’idée au produit final, nous accompagnons entrepreneurs et entreprises dans la conception, le développement et la croissance de leurs solutions digitales."
            />
            <div className="pt-24 bg-dark-bg min-h-screen">

                {/* 1️⃣ HERO */}
                <section className="relative py-20 lg:py-32 overflow-hidden">
                    <div className="container-custom relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeIn}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-premium/10 border border-gold-premium/20 mb-6">
                                    <Sparkles className="w-4 h-4 text-gold-premium" />
                                    <span className="text-sm font-bold text-gold-premium">PARTENAIRE STRATÉGIQUE</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                                    Des services numériques complets pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">bâtir, structurer</span> et faire grandir votre entreprise
                                </h1>
                                <p className="text-xl text-text-secondary mb-10 leading-relaxed max-w-xl">
                                    De l’idée au produit final, nous accompagnons entrepreneurs, startups et entreprises dans la conception, le développement et la croissance de leurs solutions digitales.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-gold-premium to-yellow-600 hover:scale-105 transition-transform shadow-lg shadow-gold-premium/20"
                                    >
                                        Demander un devis
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/5 transition-colors"
                                    >
                                        Parler à un expert
                                    </Link>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary-blue via-primary-green to-gold-premium opacity-20 blur-3xl rounded-full"></div>
                                <img
                                    src={heroImage}
                                    alt="Startup Evolution: Idea to Growth"
                                    className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                                />
                                {/* Overlay Cards */}
                                <div className="absolute -bottom-6 -left-6 bg-dark-card border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce-slow">
                                    <div className="w-10 h-10 rounded-full bg-primary-green/20 flex items-center justify-center">
                                        <Rocket className="w-5 h-5 text-primary-green" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">Croissance</div>
                                        <div className="text-sm text-text-muted">+150% YoY</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2️⃣ VUE D'ENSEMBLE */}
                <section className="py-20 bg-dark-card border-y border-white/5">
                    <div className="container-custom text-center max-w-4xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium text-white mb-8 leading-relaxed"
                        >
                            <span className="text-gold-premium font-bold">Soutrali Deals</span> couvre l’ensemble de l’écosystème digital : de la réflexion stratégique à la mise en œuvre technique, jusqu’à l’accompagnement et la montée en compétences.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-text-secondary"
                        >
                            Nous intervenons comme un partenaire long terme, capable de structurer, exécuter et faire évoluer vos projets.
                        </motion.p>
                    </div>
                </section>

                {/* 3️⃣ PÔLES D'EXPERTISE */}
                <section className="py-24">
                    <div className="container-custom space-y-32">

                        {/* PÔLE 1 - Dév */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                className="order-2 lg:order-1"
                            >
                                <div className="text-primary-blue font-bold tracking-wider mb-2">PÔLE 01</div>
                                <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                                    Développement & <br />Produits Digitaux
                                </h3>
                                <p className="text-xl text-text-secondary mb-8">
                                    Nous concevons des produits digitaux robustes, performants et évolutifs, adaptés aux réalités du marché et pensés pour la croissance.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {['Sites vitrines & corporate', 'Plateformes web sur mesure', 'Applications web & mobiles', 'E-commerce & Marketplaces', 'PWA & Dashboards'].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-white/80">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary-blue"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="bg-primary-blue/10 border-l-4 border-primary-blue p-4 rounded-r-lg mb-8">
                                    <span className="text-white font-medium">👉 Des produits fiables, prêts à évoluer avec votre business.</span>
                                </div>
                                <Link to="/services/developpement-produits" className="text-primary-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                    Découvrir l'expertise <ChevronRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-1 lg:order-2"
                            >
                                <img src={devImage} alt="Development Mockups" className="w-full h-auto rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
                            </motion.div>
                        </div>

                        {/* PÔLE 2 - Solutions */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <img src={toolsImage} alt="Business Tools" className="w-full h-auto rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                            >
                                <div className="text-primary-green font-bold tracking-wider mb-2">PÔLE 02</div>
                                <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                                    Solutions Digitales & <br />Outils Métiers
                                </h3>
                                <p className="text-xl text-text-secondary mb-8">
                                    Nous aidons les entreprises et organisations à digitaliser leurs processus, automatiser leurs opérations et améliorer leur efficacité.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {['CRM & outils de gestion', 'ERP légers', 'Automatisation des processus', 'Tableaux de bord & reporting', 'Systèmes internes sur mesure'].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-white/80">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary-green"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="bg-primary-green/10 border-l-4 border-primary-green p-4 rounded-r-lg mb-8">
                                    <span className="text-white font-medium">👉 Gain de temps, meilleure organisation et décisions basées sur les données.</span>
                                </div>
                                <Link to="/services/solutions-metiers" className="text-primary-green font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                    Optimiser mes opérations <ChevronRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* PÔLE 3 - Stratégie (Premium) */}
                        <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-dark-card to-dark-bg border border-gold-premium/30 overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 bg-gold-premium text-black font-bold text-xs uppercase tracking-widest rounded-bl-2xl">Premium Expert</div>
                            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeIn}
                                >
                                    <div className="text-gold-premium font-bold tracking-wider mb-2">PÔLE 03</div>
                                    <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                                        Stratégie, Conseil & <br />Structuration
                                    </h3>
                                    <p className="text-xl text-text-secondary mb-8">
                                        Nous accompagnons les porteurs de projets, startups et entreprises dans leurs décisions stratégiques, techniques et organisationnelles.
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                        {['Audit digital & technique', 'Définition de stratégie produit', 'Choix technologiques', 'Scalabilité & sécurité', 'CTO as a Service'].map(item => (
                                            <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/5">
                                                <Check className="w-4 h-4 text-gold-premium" />
                                                <span className="text-sm text-white">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-gold-premium/10 border-l-4 border-gold-premium p-4 rounded-r-lg mb-8">
                                        <span className="text-white font-medium">👉 Des décisions claires, structurées et alignées avec vos objectifs business.</span>
                                    </div>
                                    <Link to="/services/strategie-conseil" className="text-gold-premium font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                        Sécuriser mon projet <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, rotate: 5 }}
                                    whileInView={{ opacity: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <img src={strategyImage} alt="Strategic Blueprint" className="w-full h-auto rounded-2xl shadow-2xl border border-gold-premium/20" />
                                </motion.div>
                            </div>
                        </div>

                        {/* PÔLE 4 - Cahier des Charges (Différenciateur) */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <img src={specsImage} alt="Specifications Document" className="w-full h-auto rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
                                    <FileText className="w-3 h-3 text-red-500" />
                                    <span className="text-xs font-bold text-red-500 uppercase">Différenciateur Majeur</span>
                                </div>
                                <div className="text-text-muted font-bold tracking-wider mb-2">PÔLE 04</div>
                                <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                                    Cahier des Charges & <br />Structuration
                                </h3>
                                <p className="text-xl text-text-secondary mb-6">
                                    Vous avez une idée mais pas de cadre clair ?
                                    Nous transformons votre vision en un document structuré, exploitable et professionnel.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {['Cahier des charges fonctionnel', 'Spécifications techniques', 'Roadmap projet', 'Budget estimatif', 'Planning de réalisation'].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-white/80">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="p-6 rounded-xl bg-gradient-to-r from-red-900/40 to-transparent border border-red-500/30 mb-8">
                                    <p className="text-xl text-white font-heading font-bold italic">
                                        "Un projet bien structuré, c’est 50 % du succès assuré."
                                    </p>
                                </div>
                                <Link to="/services/strategie-conseil" className="text-white font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                    Structurer mon idée <ChevronRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* PÔLE 5 - Marketing */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                className="order-2 lg:order-1"
                            >
                                <div className="text-pink-500 font-bold tracking-wider mb-2">PÔLE 05</div>
                                <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                                    Marketing Digital & <br />Formation
                                </h3>
                                <p className="text-xl text-text-secondary mb-8">
                                    Nous vous aidons à rendre vos solutions visibles, à développer vos compétences internes et à assurer un accompagnement dans la durée.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {['SEO & visibilité en ligne', 'Réseaux sociaux & publicité', 'Stratégies d’acquisition', 'Formations digitales', 'Support & accompagnement continu'].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-white/80">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="bg-pink-500/10 border-l-4 border-pink-500 p-4 rounded-r-lg mb-8">
                                    <span className="text-white font-medium">👉 Croissance, autonomie et sérénité sur le long terme.</span>
                                </div>
                                <Link to="/services/marketing-formation" className="text-pink-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                    Booster ma croissance <ChevronRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-1 lg:order-2"
                            >
                                <img src={marketingImage} alt="Marketing Growth" className="w-full h-auto rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
                            </motion.div>
                        </div>

                    </div>
                </section>

                {/* 8️⃣ POURQUOI NOUS ? */}
                <section className="py-20 bg-dark-card border-t border-white/5">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Pourquoi choisir <span className="text-gold-premium">Soutrali Deals</span> ?</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                            {[
                                { icon: Lightbulb, title: "Équipe multidisplinaire" },
                                { icon: Rocket, title: "Vision business & tech" },
                                { icon: Check, title: "Expertise terrain Afrique" },
                                { icon: Users, title: "Approche humaine" },
                                { icon: BarChart, title: "Solutions évolutives" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 rounded-2xl bg-dark-bg border border-white/5 hover:border-gold-premium/30 transition-all text-center group"
                                >
                                    <div className="w-12 h-12 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-gold-premium/10 transition-colors">
                                        <item.icon className="w-6 h-6 text-white group-hover:text-gold-premium transition-colors" />
                                    </div>
                                    <h4 className="font-bold text-white group-hover:text-gold-premium transition-colors">{item.title}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 9️⃣ FINAL CTA */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-bg to-primary-blue/5"></div>
                    <div className="container-custom relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                                Un projet, une idée ou un <span className="text-gold-premium">besoin précis</span> ?
                            </h2>
                            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12">
                                Parlons-en et construisons ensemble une solution adaptée à votre vision et à votre réalité.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg text-white bg-gradient-to-r from-gold-premium to-yellow-600 hover:scale-105 transition-transform shadow-xl hover:shadow-gold-premium/30"
                                >
                                    Demander un devis
                                </Link>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                >
                                    Être accompagné
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </div>
        </>
    );
};
