import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { MapPin, ShieldCheck, MessageSquare, Star } from 'lucide-react';
import { Button } from '../ui/Button';

const features = [
    {
        icon: <MapPin className="w-6 h-6 text-primary-orange" />,
        title: "Géolocalisation",
        description: "Trouvez les prestataires disponibles autour de vous en temps réel."
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-primary-green" />,
        title: "Paiement Sécurisé",
        description: "Transactions protégées via Mobile Money (Wave, Orange, MTN)."
    },
    {
        icon: <MessageSquare className="w-6 h-6 text-primary-blue" />,
        title: "Messagerie Intégrée",
        description: "Discutez, négociez et validez vos devis directement dans l'app."
    },
    {
        icon: <Star className="w-6 h-6 text-gold-premium" />,
        title: "Notes & Avis",
        description: "Consultez les retours d'autres clients pour choisir le meilleur."
    }
];

export const MobileApp = () => {
    return (
        <SectionWrapper id="mobile-app">
            <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* Left: Phone Mockup */}
                <motion.div
                    className="relative flex justify-center"
                    initial={{ opacity: 0, y: 50, rotate: -5 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Phone Frame */}
                    <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden ring-4 ring-gray-900/50">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>

                        {/* Screen Content Plder */}
                        <div className="w-full h-full bg-dark-bg relative">
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-dark-bg to-dark-card">
                                <img src="/logo.png" alt="Soutrali" className="w-20 h-20 mb-4 opacity-50 grayscale" onError={(e) => e.currentTarget.style.display = 'none'} />
                                <h3 className="text-xl font-bold text-white mb-2">Soutrali Deals</h3>
                                <p className="text-sm text-text-secondary">L'interface utilisateur sera affichée ici.</p>

                                {/* Fake UI Elements */}
                                <div className="w-full h-32 bg-dark-border/30 rounded-xl mt-8 animate-pulse"></div>
                                <div className="w-full h-16 bg-dark-border/30 rounded-xl mt-4 animate-pulse delay-100"></div>
                                <div className="w-full h-16 bg-dark-border/30 rounded-xl mt-4 animate-pulse delay-200"></div>
                            </div>

                            {/* Floating Elements Animation */}
                            <motion.div
                                className="absolute bottom-20 right-4 bg-primary-orange text-white p-3 rounded-full shadow-lg"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <MapPin className="w-6 h-6" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Background Blobs */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-primary-orange/20 blur-[100px] -z-10 rounded-full"></div>
                </motion.div>

                {/* Right: Features List */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
                        L'Application <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange via-primary-orange to-yellow-400">Tout-en-Un</span>
                    </h2>

                    <div className="space-y-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="flex gap-4"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center shrink-0 shadow-lg">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">{feature.title}</h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-10 pt-8 border-t border-dark-border flex gap-4">
                        <Button className="bg-white text-black hover:bg-gray-200 rounded-full font-bold">
                            App Store
                        </Button>
                        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full">
                            Google Play
                        </Button>
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};
