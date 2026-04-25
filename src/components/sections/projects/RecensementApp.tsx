import { motion } from 'framer-motion';
import { SectionWrapper } from '../../ui/SectionWrapper';
import { Users, Award, TrendingUp, MapPin, Database, CheckCircle } from 'lucide-react';
import recensementImage from '../../../assets/images/project/project_recensement.png';

export const RecensementApp = () => {
    return (
        <SectionWrapper id="recensement" bg="dark">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-green/10 border border-primary-green/30 text-primary-green text-sm font-bold mb-6">
                        <Users className="w-4 h-4" />
                        APPLICATION TERRAIN
                    </div>

                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
                        Soutrali Recensement <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">
                            Identification & Structuration
                        </span>
                    </h2>

                    <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                        Soutrali Recensement est une application dédiée aux agents terrain pour identifier, recenser et structurer les prestataires, freelances et vendeurs informels.
                    </p>

                    <div className="space-y-6 mb-8">
                        <div className="flex gap-4 items-start">
                            <div className="bg-dark-card p-3 rounded-lg border border-dark-border text-primary-green">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-1">Création de Fiches</h4>
                                <p className="text-sm text-text-secondary">Enregistrement complet des prestataires avec toutes les informations nécessaires.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="bg-dark-card p-3 rounded-lg border border-dark-border text-gold-premium">
                                <Award className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-1">Gamification</h4>
                                <p className="text-sm text-text-secondary">Système de niveaux, points et badges pour motiver les agents terrain.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="bg-dark-card p-3 rounded-lg border border-dark-border text-primary-blue">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-1">Travail par Zone</h4>
                                <p className="text-sm text-text-secondary">Organisation par région et zone pour une couverture optimale du territoire.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="bg-dark-card p-3 rounded-lg border border-dark-border text-primary-green">
                                <Database className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-1">Synchronisation</h4>
                                <p className="text-sm text-text-secondary">Synchronisation automatique avec la plateforme centrale pour des données à jour.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-primary-green/10 border-l-4 border-primary-green p-4 rounded-r-lg">
                        <p className="text-white font-medium">
                            👉 Formalisation de l'informel avec données fiables et structurées grâce à la gamification.
                        </p>
                    </div>
                </motion.div>

                {/* Right: Image */}
                <motion.div
                    className="relative flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-dark-border">
                        <img
                            src={recensementImage}
                            alt="Soutrali Recensement - Application d'identification terrain"
                            className="w-full h-auto"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Floating Stats */}
                    <motion.div
                        className="absolute -bottom-6 -right-6 bg-dark-card border border-dark-border rounded-xl p-4 shadow-xl hidden lg:block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-primary-green/10 flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 text-primary-green" />
                            </div>
                            <div>
                                <div className="text-white font-bold text-lg">Structuration</div>
                                <div className="text-text-secondary text-sm">Formalisation de l'informel</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};
