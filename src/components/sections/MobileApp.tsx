import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { MapPin, ShieldCheck, MessageSquare, Star } from 'lucide-react';
import { Button } from '../ui/Button';
import mobileImage from '../../assets/images/project/project_mobile_app.png';

const features = [
    {
        icon: <MapPin className="w-6 h-6 text-gold-premium" />,
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

                {/* Left: Mobile App Image */}
                <motion.div
                    className="relative flex justify-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-dark-border group">
                        <img
                            src={mobileImage}
                            alt="Application Mobile Soutrali Deals - Android et iOS"
                            className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Background Blobs */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-gold-premium/20 blur-[100px] -z-10 rounded-full"></div>
                </motion.div>

                {/* Right: Features List */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
                        L'Application <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-premium via-gold-premium to-yellow-400">Tout-en-Un</span>
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

                    <div className="mt-8 pt-8 border-t border-dark-border flex gap-4">
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
