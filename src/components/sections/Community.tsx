import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { Users, Briefcase, ShoppingBag, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

// Floating Particles Component
const FloatingParticles = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/20 rounded-full"
                    initial={{
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%',
                    }}
                    animate={{
                        x: [null, Math.random() * 100 + '%'],
                        y: [null, Math.random() * 100 + '%'],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                />
            ))}
        </div>
    );
};

export const Community = () => {
    const whatsappLink = "https://chat.whatsapp.com/JnPGnE5qAFPLTg5foFozm5";

    return (
        <SectionWrapper id="communaute" bg="gradient-brand" className="relative overflow-hidden">
            {/* Floating Particles Background */}
            <FloatingParticles />

            {/* Transition Elements */}
            <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-dark-bg/20 to-transparent pointer-events-none"></div>

            {/* Animated Glow Effect */}
            <motion.div
                className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold-premium/20 rounded-full blur-[120px] pointer-events-none"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <Users className="w-4 h-4 text-white" />
                        <span className="text-sm font-bold text-white">La Force du Nombre</span>
                        <Sparkles className="w-4 h-4 text-gold-premium animate-pulse" />
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white text-shadow-sm">
                        Rejoignez la famille <br />
                        <span className="text-white underline decoration-gold-premium decoration-4 underline-offset-4">Les Soutraliens</span>
                    </h2>

                    <p className="text-lg text-white/90 leading-relaxed mb-8 font-medium">
                        Bien plus qu'un réseau, nous sommes une famille. Que vous soyez développeur, coiffeur,
                        mécanicien ou vendeur en ligne, vous avez votre place parmi nous.
                        Entraide, partage d'affaires et montée en compétence sont nos maîtres-mots.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* WhatsApp Button with Brand Color */}
                        <motion.a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 rounded-full shadow-xl font-bold transition-all hover:shadow-2xl hover:shadow-[#25D366]/50 flex items-center justify-center gap-2">
                                <MessageCircle className="w-5 h-5" />
                                Rejoindre le groupe WhatsApp
                            </Button>
                        </motion.a>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/communaute">
                                <Button variant="outline" className="w-full rounded-full border-white text-white hover:bg-white/20 backdrop-blur-sm transition-all hover:border-white/60">
                                    Découvrir les avantages
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Stats with Hover Effects */}
                    <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
                        <motion.div
                            className="backdrop-blur-sm bg-white/5 rounded-xl p-3 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                            whileHover={{ y: -5, scale: 1.05 }}
                        >
                            <div className="text-3xl font-bold text-white mb-1">400+</div>
                            <div className="text-sm text-white/80">Membres Actifs</div>
                        </motion.div>
                        <motion.div
                            className="backdrop-blur-sm bg-white/5 rounded-xl p-3 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                            whileHover={{ y: -5, scale: 1.05 }}
                        >
                            <div className="text-3xl font-bold text-white mb-1">50+</div>
                            <div className="text-sm text-white/80">Partenariats</div>
                        </motion.div>
                        <motion.div
                            className="backdrop-blur-sm bg-white/5 rounded-xl p-3 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                            whileHover={{ y: -5, scale: 1.05 }}
                        >
                            <div className="text-3xl font-bold text-white mb-1">24/7</div>
                            <div className="text-sm text-white/80">Entraide</div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right: Cards Composition */}
                <div className="relative">
                    {/* Enhanced Background decoration */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/10 rounded-full blur-[80px] pointer-events-none"></div>

                    <div className="relative grid gap-6">
                        {/* Card 1: Freelances */}
                        <Link to="/communaute#freelances">
                            <motion.div
                                className="bg-white/95 backdrop-blur-md border border-white/60 p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 cursor-pointer group shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:border-primary-blue/50 relative overflow-hidden"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/0 via-primary-blue/5 to-primary-blue/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue group-hover:scale-110 group-hover:bg-primary-blue/20 transition-all relative z-10">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <div className="relative z-10">
                                    <h4 className="font-bold text-lg text-gray-900 group-hover:text-primary-blue transition-colors">Pour les Freelances</h4>
                                    <p className="text-sm text-gray-600">Développeurs, Graphistes, Rédacteurs...</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-primary-blue transition-all group-hover:translate-x-2 relative z-10" />
                            </motion.div>
                        </Link>

                        {/* Card 2: Artisans */}
                        <Link to="/communaute#artisans">
                            <motion.div
                                className="bg-white/95 backdrop-blur-md border border-white/60 p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 cursor-pointer group shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:border-primary-green/50 ml-8 relative overflow-hidden"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-green/0 via-primary-green/5 to-primary-green/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center text-primary-green group-hover:scale-110 group-hover:bg-primary-green/20 transition-all relative z-10">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div className="relative z-10">
                                    <h4 className="font-bold text-lg text-gray-900 group-hover:text-primary-green transition-colors">Pour les Artisans</h4>
                                    <p className="text-sm text-gray-600">Plombiers, Mécaniciens, Coiffeurs...</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-primary-green transition-all group-hover:translate-x-2 relative z-10" />
                            </motion.div>
                        </Link>

                        {/* Card 3: Vendeurs */}
                        <Link to="/communaute#commercants">
                            <motion.div
                                className="bg-white/95 backdrop-blur-md border border-white/60 p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 cursor-pointer group shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:border-gold-premium/50 relative overflow-hidden"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-gold-premium/0 via-gold-premium/5 to-gold-premium/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="w-12 h-12 rounded-xl bg-gold-premium/10 flex items-center justify-center text-gold-premium group-hover:scale-110 group-hover:bg-gold-premium/20 transition-all relative z-10">
                                    <ShoppingBag className="w-6 h-6" />
                                </div>
                                <div className="relative z-10">
                                    <h4 className="font-bold text-lg text-gray-900 group-hover:text-gold-premium transition-colors">Pour les Commerçants</h4>
                                    <p className="text-sm text-gray-600">E-commerçants, Boutiques...</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-gold-premium transition-all group-hover:translate-x-2 relative z-10" />
                            </motion.div>
                        </Link>
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};
