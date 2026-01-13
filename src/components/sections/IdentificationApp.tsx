import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Scan, Shield, CheckCircle, Database } from 'lucide-react';

export const IdentificationApp = () => {
    return (
        <SectionWrapper id="identification" bg="dark">
            <div className="bg-gradient-to-br from-dark-card to-dark-bg border border-gold-premium/20 rounded-3xl p-8 md:p-16 overflow-hidden relative">

                {/* Abstract Background */}
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 relative z-10 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-premium/10 border border-gold-premium/30 text-gold-premium text-sm font-bold mb-6">
                            <Shield className="w-4 h-4" />
                            INNOVATION SÉCURITÉ
                        </div>

                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
                            App d'Identification <br />
                            <span className="text-gold-premium text-glow">Soutrali ID</span>
                        </h2>

                        <p className="text-text-secondary mb-8 text-lg">
                            La confiance est la base de tout échange. Notre application dédiée permet d'identifier
                            formellement chaque prestataire via un QR Code unique et infalsifiable.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="bg-dark-bg p-3 rounded-lg border border-dark-border text-gold-premium">
                                    <Scan className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Scan Instantané</h4>
                                    <p className="text-sm text-text-secondary">Vérifiez l'identité et la réputation en une seconde.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="bg-dark-bg p-3 rounded-lg border border-dark-border text-gold-premium">
                                    <Database className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Base de Données Certifiée</h4>
                                    <p className="text-sm text-text-secondary">Accès à l'historique vérifié des prestataires enregistrés.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="bg-dark-bg p-3 rounded-lg border border-dark-border text-gold-premium">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Sauvegarde & Preuve</h4>
                                    <p className="text-sm text-text-secondary">Gardez une trace sécurisée de qui est intervenu chez vous.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Scan Animation */}
                    <div className="flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 bg-black rounded-3xl border-4 border-dark-border flex items-center justify-center shadow-2xl">
                            {/* Corner Markers */}
                            <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-gold-premium rounded-tl-xl"></div>
                            <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-gold-premium rounded-tr-xl"></div>
                            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-gold-premium rounded-bl-xl"></div>
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-gold-premium rounded-br-xl"></div>

                            {/* QR Code Placeholder with Animation */}
                            <div className="w-40 h-40 bg-white p-2 rounded-lg relative overflow-hidden">
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=SoutraliID-Verified" alt="QR Code" className="w-full h-full opacity-90" />

                                {/* Scanning Line */}
                                <motion.div
                                    className="absolute top-0 left-0 w-full h-1 bg-gold-premium shadow-[0_0_15px_rgba(234,179,8,0.8)]"
                                    animate={{ top: ["0%", "100%", "0%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                            </div>

                            {/* Status Badge */}
                            <motion.div
                                className="absolute -bottom-6 bg-green-500 text-white px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                <CheckCircle className="w-4 h-4" />
                                VÉRIFIÉ
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
};
