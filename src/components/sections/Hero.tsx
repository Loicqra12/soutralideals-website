import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Smartphone, Apple, Play } from 'lucide-react';
import heroBg from '../../assets/images/hero.png';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-primary-green">

      {/* Background Gradient/Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={heroBg}
          alt="Soutrali Deals Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-green/90 via-primary-green/80 to-transparent"></div>
      </motion.div>

      <div className="container-custom relative z-10 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-8 text-white pt-8 md:pt-10">

          {/* Badge Premium */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit hover:bg-white/20 transition-colors cursor-default"
          >
            <span className="text-base">🇨🇮</span>
            <span className="text-xs font-bold text-white tracking-wide">L'ÉCOSYSTÈME 100% IVOIRIEN</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-heading font-bold leading-snug"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transformez <br />
            Votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-gold-premium to-yellow-200 drop-shadow-[0_0_25px_rgba(234,179,8,0.3)]">Avenir Digital !</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 font-medium max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            La plateforme tout-en-un pour propulser les indépendants, artisans et entrepreneurs ivoiriens vers le succès.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              className="text-dark-bg border-none rounded-full px-6 py-4 font-bold text-base hover:scale-105 transition-transform shadow-glow-gold hover:shadow-glow-gold-hover focus:outline-none focus:ring-2 focus:ring-gold-premium focus:ring-offset-2 focus:ring-offset-transparent"
              style={{
                background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #CFB53B 100%)',
              }}
              onClick={() => scrollToSection('services')}
            >
              Découvrir nos services
            </Button>
            <Button
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full px-6 py-4 font-bold text-base hover:bg-white/20 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
              onClick={() => scrollToSection('communaute')}
            >
              Rejoindre la communauté
            </Button>
          </motion.div>

          <motion.div
            className="pt-6 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-4 opacity-80">
              <div className="h-px w-8 bg-white/30"></div>
              <span className="text-xs font-medium text-white/80 uppercase tracking-widest">Disponible sur mobile</span>
              <div className="h-px w-8 bg-white/30"></div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                className="text-dark-bg rounded-full px-5 py-2.5 font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg text-sm"
                style={{
                  background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #CFB53B 100%)',
                }}
                onClick={() => scrollToSection('projet')}
              >
                <Smartphone className="w-4 h-4" />
                App Mobile
              </Button>

              <div className="flex gap-2">
                <motion.button
                  className="bg-black/40 backdrop-blur-md border border-white/10 text-white px-3 py-2 rounded-xl flex items-center gap-2 hover:bg-black/60 transition-all hover:scale-105 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Télécharger sur App Store"
                >
                  <Apple className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs opacity-70 leading-tight">Télécharger sur</div>
                    <div className="font-bold text-sm leading-tight mt-0.5">App Store</div>
                  </div>
                </motion.button>
                <motion.button
                  className="bg-black/40 backdrop-blur-md border border-white/10 text-white px-3 py-2 rounded-xl flex items-center gap-2 hover:bg-black/60 transition-all hover:scale-105 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Télécharger sur Google Play"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <div className="text-left">
                    <div className="text-xs opacity-70 leading-tight">DISPONIBLE SUR</div>
                    <div className="font-bold text-sm leading-tight mt-0.5">Google Play</div>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Animated Icons Floating */}
        <motion.div
          className="relative hidden md:block h-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Floating animation for visible icons in image */}
        </motion.div>

      </div>

      {/* Scroll Indicator Premium */}
      <motion.div
        className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
      >
        <button
          onClick={() => scrollToSection('ecosysteme')}
          className="flex flex-col items-center gap-4 group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg p-2"
          aria-label="Défiler vers le bas"
        >
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2 backdrop-blur-sm group-hover:border-white/60 transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full bg-gradient-to-b from-white to-white/50"
            />
          </div>
          <span className="text-xs font-medium text-white/60 tracking-wide uppercase group-hover:text-white transition-colors">Défiler</span>
        </button>
      </motion.div>

      {/* Bottom Curve Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" className="fill-dark-bg w-full h-auto block">
          <path d="M0,32L80,42.7C160,53,320,75,480,80C640,85,800,75,960,64C1120,53,1280,43,1360,37.3L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};
