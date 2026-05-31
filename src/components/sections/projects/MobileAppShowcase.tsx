import { motion, useReducedMotion } from 'framer-motion';
import app1 from '../../../assets/images/project/app1.png';
import app2 from '../../../assets/images/project/app2.png';
import app3 from '../../../assets/images/project/app3.png';

const SCREENS = [
  {
    src: app1,
    alt: 'Écran d’accueil de l’application Soutrali Deals',
    offset: 'translate-y-10 md:translate-y-14',
    scale: 'scale-[0.92]',
    z: 'z-0',
  },
  {
    src: app2,
    alt: 'Parcours services sur l’application mobile Soutrali Deals',
    offset: '-translate-y-2 md:-translate-y-6',
    scale: 'scale-100',
    z: 'z-20',
  },
  {
    src: app3,
    alt: 'Profil et commandes sur l’application mobile Soutrali Deals',
    offset: 'translate-y-4 md:translate-y-8',
    scale: 'scale-[0.94]',
    z: 'z-10',
  },
] as const;

type MobileAppShowcaseProps = {
  className?: string;
};

export function MobileAppShowcase({ className = '' }: MobileAppShowcaseProps) {
  const reduced = useReducedMotion();

  return (
    <div
      className={`relative flex min-h-[340px] w-full items-end justify-center py-2 sm:min-h-[400px] lg:min-h-[480px] lg:py-0 ${className}`}
    >
      <div className="relative mx-auto flex w-full max-w-2xl items-end justify-center gap-3 sm:gap-5 md:max-w-none md:gap-5 lg:gap-6">
        {SCREENS.map((screen, index) => (
          <motion.figure
            key={screen.alt}
            className={`relative m-0 w-[30%] max-w-[200px] shrink-0 sm:max-w-[220px] lg:max-w-[240px] ${screen.offset} ${screen.z} ${screen.scale}`}
            initial={reduced ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            animate={reduced ? undefined : { y: [0, index === 1 ? -8 : 6, 0] }}
            transition={
              reduced
                ? { duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }
                : {
                    opacity: { duration: 0.55, delay: index * 0.12 },
                    y: {
                      duration: 4.5 + index * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.6 + index * 0.1,
                    },
                  }
            }
          >
            <img
              src={screen.src}
              alt={screen.alt}
              className="h-auto w-full object-contain drop-shadow-[0_28px_50px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:scale-[1.02]"
              loading={index === 1 ? 'eager' : 'lazy'}
            />
          </motion.figure>
        ))}
      </div>
    </div>
  );
}
