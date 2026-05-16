import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ComponentType } from 'react';
import {
  IllPrestataires,
  IllFreelances,
  IllEmarche,
  IllSoutraliId,
  IllSoutraPay,
  IllCommunaute,
  IllDigital,
} from './super-app/SuperAppIllustrations';

type ServiceItem = {
  title: string;
  description: string;
  to: string;
  Illustration: ComponentType<{ className?: string }>;
};

const SERVICES: ServiceItem[] = [
  {
    title: 'Prestataires & métiers',
    description: 'Plombiers, coiffeurs, techniciens — un pro près de chez vous.',
    to: '/ecosysteme',
    Illustration: IllPrestataires,
  },
  {
    title: 'Freelances & missions',
    description: 'Développeurs, designers, consultants — missions qualifiées.',
    to: '/communaute',
    Illustration: IllFreelances,
  },
  {
    title: 'E-marché local',
    description: 'Boutiques, artisans, produits du quotidien en ligne.',
    to: '/ecosysteme',
    Illustration: IllEmarche,
  },
  {
    title: 'Soutrali ID',
    description: 'Identité vérifiée pour prestataires et vendeurs.',
    to: '/le-projet',
    Illustration: IllSoutraliId,
  },
  {
    title: 'SoutraPay',
    description: 'Paiement simple, traçable et sécurisé.',
    to: '/le-projet',
    Illustration: IllSoutraPay,
  },
  {
    title: 'Communauté',
    description: 'Entraide, événements — rejoignez les Soutraliens.',
    to: '/communaute',
    Illustration: IllCommunaute,
  },
  {
    title: 'Services digitaux',
    description: 'Web, mobile, design — l’équipe Soutrali pour vous.',
    to: '/services',
    Illustration: IllDigital,
  },
];

const cardMotion = (reduced: boolean | null, index: number) =>
  reduced
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-50px' as const },
        transition: { duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] as const },
      };

export const SuperAppServices = () => {
  const reduced = useReducedMotion();

  return (
    <section
      id="plateforme"
      className="bg-white py-16 md:py-24 lg:py-28 xl:py-32"
      aria-labelledby="super-app-heading"
    >
      {/*
        Yango : titre ~30 % à gauche, grille ~70 % à droite, pleine largeur utile (≈1440px).
        On évite container-custom (max-w-7xl) qui écrasait les cartes à ~240px de large.
      */}
      <motion.div
        className="mx-auto grid w-full max-w-[1520px] grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,32%)_minmax(0,68%)] lg:gap-8 xl:gap-10 2xl:px-12"
        initial={reduced ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="lg:sticky lg:top-24 lg:max-w-[420px] xl:max-w-[460px]"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            id="super-app-heading"
            className="font-heading text-[2rem] font-extrabold leading-[1.06] tracking-[-0.035em] text-[#111] sm:text-[2.35rem] lg:text-[2.75rem] xl:text-[3.125rem]"
          >
            Tous les services du quotidien dans une seule plateforme
          </h2>
        </motion.div>

        <motion.div
          className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
        >
          {SERVICES.map(({ title, description, to, Illustration }, index) => (
            <motion.div key={title} className="min-w-0" {...cardMotion(reduced, index)}>
              <Link
                to={to}
                className="group relative flex h-full min-h-[156px] w-full flex-col overflow-hidden rounded-[20px] bg-[#f5f5f5] p-5 transition-colors duration-200 hover:bg-[#ececec] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111]/15 focus-visible:ring-offset-2 sm:min-h-[168px] sm:p-6 md:min-h-[176px] lg:min-h-[184px] xl:min-h-[192px]"
              >
                <h3 className="max-w-[62%] text-[1.0625rem] font-bold leading-[1.25] tracking-[-0.02em] text-[#111] sm:max-w-[65%] sm:text-lg lg:text-[1.125rem]">
                  {title}{' '}
                  <span
                    className="inline-block font-normal transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden
                  >
                    →
                  </span>
                </h3>
                <p className="mt-2 max-w-[58%] text-[13px] leading-[1.45] text-[#8e8e8e] sm:mt-2.5 sm:text-sm sm:leading-[1.5]">
                  {description}
                </p>

                <div
                  className="pointer-events-none absolute bottom-0 right-0 flex h-[54%] w-[52%] max-h-[150px] max-w-[180px] min-h-[100px] min-w-[120px] items-end justify-end select-none transition-transform duration-300 ease-out group-hover:scale-[1.03] sm:max-h-[162px] sm:max-w-[196px] lg:max-h-[172px] lg:max-w-[210px]"
                  aria-hidden
                >
                  <Illustration className="h-full w-full" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
