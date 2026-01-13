import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { Users, Briefcase, ShoppingBag, ArrowRight } from 'lucide-react';

export const Community = () => {
    return (
        <SectionWrapper id="communaute" bg="gradient-brand" className="relative">
            {/* Transition Elements */}
            <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-dark-bg/20 to-transparent pointer-events-none"></div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-lg">
                        <Users className="w-4 h-4 text-white" />
                        <span className="text-sm font-bold text-white">La Force du Nombre</span>
                    </div>

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
                        <Button className="bg-white text-primary-blue hover:bg-gray-100 px-8 rounded-full shadow-xl font-bold transition-transform hover:scale-105">
                            Rejoindre le groupe WhatsApp
                        </Button>
                        <Button variant="outline" className="rounded-full border-white text-white hover:bg-white/20 backdrop-blur-sm">
                            Découvrir les avantages
                        </Button>
                    </div>

                    <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
                        <div className="backdrop-blur-sm bg-white/5 rounded-xl p-3 border border-white/10">
                            <div className="text-3xl font-bold text-white mb-1">400+</div>
                            <div className="text-sm text-white/80">Membres Actifs</div>
                        </div>
                        <div className="backdrop-blur-sm bg-white/5 rounded-xl p-3 border border-white/10">
                            <div className="text-3xl font-bold text-white mb-1">50+</div>
                            <div className="text-sm text-white/80">Partenariats</div>
                        </div>
                        <div className="backdrop-blur-sm bg-white/5 rounded-xl p-3 border border-white/10">
                            <div className="text-3xl font-bold text-white mb-1">24/7</div>
                            <div className="text-sm text-white/80">Entraide</div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Cards Composition */}
                <div className="relative">
                    {/* Background decoration */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/10 rounded-full blur-[80px] pointer-events-none"></div>

                    <div className="relative grid gap-6">
                        {/* Card 1: Freelances */}
                        <motion.div
                            className="bg-white/90 backdrop-blur-md border border-white/50 p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 cursor-pointer group shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue group-hover:scale-110 transition-transform">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 group-hover:text-primary-blue transition-colors">Pour les Freelances</h4>
                                <p className="text-sm text-gray-600">Développeurs, Graphistes, Rédacteurs...</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-primary-blue transition-colors group-hover:translate-x-1" />
                        </motion.div>

                        {/* Card 2: Artisans */}
                        <motion.div
                            className="bg-white/90 backdrop-blur-md border border-white/50 p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 cursor-pointer group shadow-xl hover:shadow-2xl hover:-translate-y-1 ml-8"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center text-primary-green group-hover:scale-110 transition-transform">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 group-hover:text-primary-green transition-colors">Pour les Artisans</h4>
                                <p className="text-sm text-gray-600">Plombiers, Mécaniciens, Coiffeurs...</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-primary-green transition-colors group-hover:translate-x-1" />
                        </motion.div>

                        {/* Card 3: Vendeurs */}
                        <motion.div
                            className="bg-white/90 backdrop-blur-md border border-white/50 p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 cursor-pointer group shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary-orange/10 flex items-center justify-center text-primary-orange group-hover:scale-110 transition-transform">
                                <ShoppingBag className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 group-hover:text-primary-orange transition-colors">Pour les Commerçants</h4>
                                <p className="text-sm text-gray-600">E-commerçants, Boutiques...</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-primary-orange transition-colors group-hover:translate-x-1" />
                        </motion.div>
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};
