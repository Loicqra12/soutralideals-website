import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Smartphone, Globe, LayoutDashboard, QrCode } from 'lucide-react';

export const ProjectPresentation = () => {
    return (
        <SectionWrapper id="projet" bg="dark">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-orange/10 border border-primary-orange/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary-orange animate-pulse"></span>
                        <span className="text-sm font-bold text-primary-orange">Solution Complète</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        La Technologie au Service <br />
                        de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-gold-premium">L'Informel</span>
                    </h2>

                    <p className="text-lg text-text-secondary leading-relaxed mb-8">
                        SOUTRALI DEALS n'est pas juste une application. C'est une suite d'outils interconnectés
                        conçue pour digitaliser, sécuriser et propulser les activités des indépendants en Côte d'Ivoire.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary-orange/10 flex items-center justify-center text-primary-orange shrink-0">
                                <Smartphone className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">App Mobile</h4>
                                <p className="text-sm text-text-muted">Pour les utilisateurs et prestataires</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center text-primary-blue shrink-0">
                                <Globe className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Plateforme Web</h4>
                                <p className="text-sm text-text-muted">Marketplace et gestion avancée</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary-green/10 flex items-center justify-center text-primary-green shrink-0">
                                <LayoutDashboard className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Dashboard Admin</h4>
                                <p className="text-sm text-text-muted">Pilotage et statistiques</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-gold-premium/10 flex items-center justify-center text-gold-premium shrink-0">
                                <QrCode className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">App Identification</h4>
                                <p className="text-sm text-text-muted">Vérification et confiance</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Abstract Tech Visualization */}
                <motion.div
                    className="relative h-[400px] bg-dark-card border border-dark-border rounded-3xl overflow-hidden flex items-center justify-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-primary-blue/5"></div>

                    {/* Center Circle */}
                    <div className="w-32 h-32 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center z-20 shadow-2xl relative">
                        <img src="/logo.png" alt="Soutrali" className="w-16 h-16 object-contain opacity-80" onError={(e) => e.currentTarget.src = 'https://placehold.co/64x64/orange/white?text=SD'} />

                        {/* Orbiting Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-12 h-12 bg-dark-card border border-primary-orange/30 rounded-xl flex items-center justify-center text-primary-orange shadow-lg">
                                <Smartphone className="w-6 h-6" />
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-12 h-12 bg-dark-card border border-primary-blue/30 rounded-xl flex items-center justify-center text-primary-blue shadow-lg">
                                <Globe className="w-6 h-6" />
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-12 h-12 bg-dark-card border border-primary-green/30 rounded-xl flex items-center justify-center text-primary-green shadow-lg">
                                <LayoutDashboard className="w-6 h-6" />
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-12 h-12 bg-dark-card border border-gold-premium/30 rounded-xl flex items-center justify-center text-gold-premium shadow-lg">
                                <QrCode className="w-6 h-6" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 400 400">
                        <circle cx="200" cy="200" r="80" fill="none" stroke="currentColor" strokeWidth="1" className="text-text-muted" strokeDasharray="4 4" />
                        <circle cx="200" cy="200" r="130" fill="none" stroke="currentColor" strokeWidth="1" className="text-text-muted" strokeDasharray="4 4" />
                    </svg>

                </motion.div>
            </div>
        </SectionWrapper>
    );
};
