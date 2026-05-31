import { motion, useReducedMotion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '../../ui/Button';
import interconnecterImage from '../../../assets/images/project/interconnecter.png';

export const ProjectHero = () => {
  const reduced = useReducedMotion();

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
    <section
      id="project-hero"
      className="relative overflow-hidden border-b border-white/10 bg-[#080a0f]"
      aria-labelledby="project-hero-title"
    >
      <div className="grid lg:min-h-[min(640px,78vh)] lg:grid-cols-2">
        {/* Colonne texte — style épuré type landing partenaire */}
        <motion.div
          className="flex flex-col justify-center px-4 py-14 sm:px-6 md:py-20 lg:px-12 xl:pl-[max(2rem,calc((100vw-72rem)/2+2rem))] xl:pr-16"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <h1
            id="project-hero-title"
            className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
          >
            Nos projets : de l&apos;idée à l&apos;impact réel
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#c5cdd8] md:text-lg md:leading-relaxed">
            Chez Soutrali Deals, nous concevons des solutions digitales complètes, pensées pour répondre aux
            réalités locales. De la conception à la mise en production, chaque projet est développé avec une
            vision claire :{' '}
            <strong className="font-semibold text-white">
              créer de la valeur, structurer l&apos;informel
            </strong>{' '}
            et connecter les talents aux opportunités.
          </p>

          <div className="mt-8 md:mt-10">
            <Button
              type="button"
              onClick={downloadPitchDeck}
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary-green px-8 text-base font-semibold text-white shadow-lg shadow-primary-green/25 transition hover:bg-[#1fb158] md:h-14 md:px-10"
            >
              <Download className="mr-2 h-5 w-5" aria-hidden />
              Télécharger le pitch deck
            </Button>
          </div>
        </motion.div>

        {/* Colonne visuelle — image pleine hauteur, bord droit */}
        <motion.div
          className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src={interconnecterImage}
            alt="Écosystème interconnecté Soutrali Deals — les 4 plateformes connectées"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080a0f] via-[#080a0f]/40 to-transparent lg:via-[#080a0f]/20"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
};
