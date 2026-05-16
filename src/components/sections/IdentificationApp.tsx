import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import recensementImage from '../../assets/images/project/project_recensement.png';

const trustFeatures = [
  {
    id: '01',
    title: 'Scan instantané',
    description: "Vérifiez l'identité et la réputation en une seconde.",
  },
  {
    id: '02',
    title: 'Base certifiée',
    description: "Accédez à l'historique vérifié des prestataires enregistrés.",
  },
  {
    id: '03',
    title: 'Preuve sécurisée',
    description: 'Conservez une trace fiable de chaque intervention.',
  },
] as const;

export const IdentificationApp = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = useReducedMotion();

  return (
    <SectionWrapper id="identification" bg="white" className="!bg-[#f6f7f8]">
      <motion.div
        className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20"
        initial={reduced ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="lg:py-4">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#111] md:text-4xl lg:text-[2.5rem] lg:leading-tight">
            App d&apos;Identification <br />
            <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
              Soutrali ID
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#6b6b6b] md:text-lg">
            La confiance est la base de tout échange. Notre application dédiée permet d&apos;identifier
            formellement chaque prestataire via un QR Code unique et infalsifiable.
          </p>

          <ul className="mt-10 space-y-1" role="list">
            {trustFeatures.map(({ id, title, description }, index) => {
              const isActive = activeIndex === index;
              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`w-full rounded-lg py-4 pl-5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green/40 ${
                      isActive ? 'border-l-[3px] border-primary-green bg-white/60' : 'border-l-[3px] border-transparent hover:bg-white/40'
                    }`}
                    aria-expanded={isActive}
                  >
                    <span
                      className={`block text-base md:text-lg ${
                        isActive ? 'font-semibold text-[#111]' : 'font-medium text-[#b0b0b0]'
                      }`}
                    >
                      {id}. {title}
                    </span>
                    {isActive && (
                      <motion.p
                        className="mt-2 max-w-md text-sm leading-relaxed text-[#6b6b6b] md:text-base"
                        initial={reduced ? false : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        {description}
                      </motion.p>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex w-full justify-center lg:justify-end">
          <motion.img
            src={recensementImage}
            alt="Soutrali Recensement — application d'identification terrain"
            className="h-auto w-full max-w-[280px] object-contain sm:max-w-[320px] md:max-w-[360px] lg:max-w-[420px]"
            initial={reduced ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            loading="lazy"
          />
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
