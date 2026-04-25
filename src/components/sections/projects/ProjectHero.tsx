import { motion } from 'framer-motion';
import { SectionWrapper } from '../../ui/SectionWrapper';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '../../ui/Button';
import interconnecterImage from '../../../assets/images/project/interconnecter.png';

export const ProjectHero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects-overview');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadPitchDeck = () => {
    const link = document.createElement('a');
    link.href = '/pitch-deck-soutrali-deals.pdf';
    link.download = 'Pitch-Deck-Soutrali-Deals.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <SectionWrapper id="project-hero" bg="dark" className="relative overflow-hidden">
      {/* Background Gradient Animated */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-green/10 via-primary-blue/5 to-gold-premium/10 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-primary-green/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-premium/10 border border-gold-premium/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-gold-premium animate-pulse"></span>
                <span className="text-sm font-bold text-gold-premium uppercase tracking-wider">Écosystème Digital Complet</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight">
                Nos projets : de l'idée à <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green via-primary-blue to-gold-premium">
                  l'impact réel
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-12 max-w-3xl mx-auto lg:mx-0">
                Chez Soutrali Deals, nous concevons des solutions digitales complètes, pensées pour répondre aux réalités locales.
                De la conception à la mise en production, chaque projet est développé avec une vision claire : <strong className="text-white">créer de la valeur, structurer l'informel</strong> et connecter les talents aux opportunités.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button
                  onClick={scrollToProjects}
                  className="bg-gradient-to-r from-gold-premium to-yellow-600 text-white hover:scale-105 transition-transform shadow-lg shadow-gold-premium/20 rounded-full px-8 py-4 font-bold text-lg"
                >
                  Découvrir l'écosystème
                  <ArrowDown className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  onClick={downloadPitchDeck}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-4 font-bold text-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger le pitch deck
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right: Hero Image */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-dark-border group">
              <img
                src={interconnecterImage}
                alt="Écosystème interconnecté Soutrali Deals - Les 4 plateformes connectées"
                className="w-full h-auto transform group-hover:scale-[1.01] transition-transform duration-500"
                loading="eager"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>

              {/* Floating glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-green/5 via-primary-blue/5 to-gold-premium/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};
