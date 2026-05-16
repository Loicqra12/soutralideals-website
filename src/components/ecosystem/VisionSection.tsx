import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EcosystemContainer } from './shared';
import { IconVisionGlobe } from './icons';
import { VisionMapBackground } from './VisionMapBackground';

export function VisionSection({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const words = "Construire l'Infrastructure Numérique des Économies Locales".split(' ');

  return (
    <section
      ref={ref}
      className="relative flex min-h-[60vh] items-center overflow-hidden border-t border-white/5 bg-[#070d1c] py-28 md:py-32"
    >
      <VisionMapBackground reduced={reduced} />

      <EcosystemContainer className="relative z-10 text-center">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5"
        >
          <IconVisionGlobe className="text-primary-green" />
          <span className="text-xs font-bold uppercase tracking-widest text-white/80">Vision 2030</span>
        </motion.div>

        <h2 className="mx-auto mb-8 max-w-4xl font-heading text-4xl font-bold leading-tight text-white md:text-6xl">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={reduced ? false : { opacity: 0, y: 22, filter: 'blur(5px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.42, delay: 0.25 + i * 0.075 }}
              className="mr-3 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mx-auto mb-10 max-w-2xl text-xl text-text-secondary"
        >
          Structurer l&apos;économie locale. Digitaliser les métiers.
          <br />
          Créer des opportunités là où il n&apos;y en avait pas.
        </motion.p>

        <motion.blockquote
          initial={reduced ? false : { opacity: 0, scale: 0.94 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.55, delay: 1.3 }}
          className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#0b1528]/80 p-8 backdrop-blur-sm"
        >
          <p className="text-xl font-bold italic text-white md:text-2xl">
            &ldquo;Soutrali Deals n&apos;est pas une app.{' '}
            <span className="text-primary-green">C&apos;est une infrastructure numérique</span> pour les économies
            locales.&rdquo;
          </p>
        </motion.blockquote>
      </EcosystemContainer>
    </section>
  );
}
