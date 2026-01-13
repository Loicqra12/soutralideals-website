import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Users, Layout, ShieldCheck } from 'lucide-react';
import ecosystemImage from '../../assets/images/ecosysteme.png';

export const Ecosystem = () => {
  return (
    <SectionWrapper id="ecosysteme" bg="dark">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Mobile: Image First */}
        {/* Desktop: Image Right (Order-2) -> Wait, user asked: Desktop [TEXT] | [IMAGE]. Mobile [IMAGE] [TEXT]. 
                    So on Mobile: Image first. On Desktop: Text first.
                    Implementation: 
                    Mobile default: Flex col. Image first? Or Grid.
                    Let's use Flex col-reverse on mobile for Text first? No user said MOBILE: [ILLUSTRATION] then [TEXT].
                    DESKTOP: [TEXT] | [ILLUSTRATION].
                    
                    So:
                    <div className="flex flex-col lg:grid lg:grid-cols-2">
                        <div className="order-2 lg:order-1"> TEXT </div>
                        <div className="order-1 lg:order-2"> IMAGE </div>
                    </div>
                */}

        {/* Left Column (Desktop) / Bottom (Mobile) - Content */}
        <div className="order-2 lg:order-1 space-y-8">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-green/10 border border-primary-green/20"
          >
            <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse"></span>
            <span className="text-xs font-bold tracking-wider text-primary-green uppercase">🌍 Écosystème 100 % ivoirien</span>
          </motion.div>

          {/* Main Title & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              <span className="break-words">L'Écosystème</span> <br />
              <span className="gradient-text">Soutrali Deals</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              SOUTRALI DEALS est un écosystème digital complet qui réunit une <strong className="text-white">équipe de professionnels</strong>,
              une <strong className="text-white">communauté de talents</strong> et une <strong className="text-white">plateforme technologique</strong> pensée
              pour connecter, structurer et faire grandir les activités en Côte d’Ivoire.
            </p>
          </motion.div>

          {/* Feature Blocks */}
          <div className="space-y-8 pt-4">
            {/* Block 1 */}
            <motion.div
              className="flex gap-4 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center group-hover:border-primary-green/50 transition-colors">
                <Users className="w-6 h-6 text-primary-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-green transition-colors">Une équipe de professionnels</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Développeurs, marketeurs, communicants et gestionnaires qui conçoivent et opèrent l’écosystème au quotidien.
                </p>
              </div>
            </motion.div>

            {/* Block 2 */}
            <motion.div
              className="flex gap-4 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center group-hover:border-gold-premium/50 transition-colors">
                <ShieldCheck className="w-6 h-6 text-gold-premium" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-premium transition-colors">Artisans & freelances</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Des artisans, freelances et vendeurs issus du terrain, organisés en communautés et connectés à des opportunités réelles.
                </p>
              </div>
            </motion.div>

            {/* Block 3 */}
            <motion.div
              className="flex gap-4 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center group-hover:border-primary-blue/50 transition-colors">
                <Layout className="w-6 h-6 text-primary-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-blue transition-colors">Une technologie au centre</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Une plateforme web et mobile qui connecte les talents, les clients et les services dans un même environnement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column (Desktop) / Top (Mobile) - Central Illustration */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          {/* Background Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-hero opacity-10 blur-[80px] rounded-full pointer-events-none"></div>

          <motion.div
            className="relative z-10 w-full max-w-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={ecosystemImage}
              alt="Écosystème Soutrali Deals"
              className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>

      </div>
    </SectionWrapper>
  );
};
