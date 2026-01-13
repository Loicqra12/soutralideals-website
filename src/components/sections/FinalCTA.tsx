import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Smartphone, Mail, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FinalCTA = () => {
    return (
        <SectionWrapper id="contact" bg="dark">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
                    Prêt à <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">Passer à l'Action ?</span>
                </h2>
                <p className="text-xl text-text-secondary">
                    Rejoignez la révolution digitale en Côte d'Ivoire. Une seule plateforme pour tous vos besoins.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* 1. Devis (Priorité Conversion) */}
                <Link to="/contact">
                    <motion.div
                        className="group relative bg-gradient-to-br from-dark-card to-dark-bg border border-dark-border p-8 rounded-2xl overflow-hidden hover:border-primary-blue/50 transition-all cursor-pointer h-full"
                        whileHover={{ y: -10 }}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Mail className="w-24 h-24 text-primary-blue" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-primary-blue/20 rounded-xl flex items-center justify-center text-primary-blue mb-6 group-hover:scale-110 transition-transform">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Demander un Devis</h3>
                            <p className="text-sm text-text-secondary mb-6">Un projet web, mobile ou marketing ? Parlons-en.</p>
                            <div className="flex items-center text-primary-blue font-bold text-sm gap-2 mt-auto">
                                Estimer mon projet <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </motion.div>
                </Link>

                {/* 2. Communauté (Engagement) */}
                <Link to="/communaute">
                    <motion.div
                        className="group relative bg-gradient-to-br from-dark-card to-dark-bg border border-dark-border p-8 rounded-2xl overflow-hidden hover:border-primary-green/50 transition-all cursor-pointer h-full"
                        whileHover={{ y: -10 }}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Users className="w-24 h-24 text-primary-green" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-primary-green/20 rounded-xl flex items-center justify-center text-primary-green mb-6 group-hover:scale-110 transition-transform">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Rejoindre le Réseau</h3>
                            <p className="text-sm text-text-secondary mb-6">Intégrez la famille des Soutraliens.</p>
                            <div className="flex items-center text-primary-green font-bold text-sm gap-2 mt-auto">
                                Je m'inscris <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </motion.div>
                </Link>

                {/* 3. App Mobile (Produit) */}
                <Link to="/le-projet">
                    <motion.div
                        className="group relative bg-gradient-to-br from-dark-card to-dark-bg border border-dark-border p-8 rounded-2xl overflow-hidden hover:border-gold-premium/50 transition-all cursor-pointer h-full"
                        whileHover={{ y: -10 }}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Smartphone className="w-24 h-24 text-gold-premium" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-gold-premium/20 rounded-xl flex items-center justify-center text-gold-premium mb-6 group-hover:scale-110 transition-transform">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Télécharger l'App</h3>
                            <p className="text-sm text-text-secondary mb-6">Accédez à tous les services depuis votre poche.</p>
                            <div className="flex items-center text-gold-premium font-bold text-sm gap-2 mt-auto">
                                C'est parti <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </motion.div>
                </Link>

                {/* 4. Contact (Support) */}
                <Link to="/contact">
                    <motion.div
                        className="group relative bg-gradient-to-br from-dark-card to-dark-bg border border-dark-border p-8 rounded-2xl overflow-hidden hover:border-gold-premium/50 transition-all cursor-pointer h-full"
                        whileHover={{ y: -10 }}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Mail className="w-24 h-24 text-gold-premium" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-gold-premium/20 rounded-xl flex items-center justify-center text-gold-premium mb-6 group-hover:scale-110 transition-transform">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Nous Contacter</h3>
                            <p className="text-sm text-text-secondary mb-6">Une question ? Notre équipe est là 24/7.</p>
                            <div className="flex items-center text-gold-premium font-bold text-sm gap-2 mt-auto">
                                Envoyer un message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </motion.div>
                </Link>

            </div>
        </SectionWrapper>
    );
};
