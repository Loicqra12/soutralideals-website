import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Scan, CheckCircle, Database, ArrowUpRight } from 'lucide-react';
import recensementImage from '../../assets/images/project/project_recensement.png';

const SecurityBadgeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M12 3.25L18.5 5.75V11.5C18.5 15.62 15.79 19.17 12 20.5C8.21 19.17 5.5 15.62 5.5 11.5V5.75L12 3.25Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M9.5 11.8L11.2 13.5L14.8 9.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IdentificationApp = () => {
  const trustFeatures = [
    {
      id: '01',
      title: 'Scan instantane',
      description: "Verifiez l'identite et la reputation en une seconde.",
      Icon: Scan,
    },
    {
      id: '02',
      title: 'Base certifiee',
      description: "Accedez a l'historique verifie des prestataires enregistres.",
      Icon: Database,
    },
    {
      id: '03',
      title: 'Preuve securisee',
      description: 'Conservez une trace fiable de chaque intervention.',
      Icon: CheckCircle,
    },
  ];

  return (
    <SectionWrapper id="identification" bg="dark">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-dark-card to-dark-bg p-8 md:p-16">
        {/* Figures geometriques discretes, inspirees de la reference */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-16 -top-8 h-[150%] w-[45%] bg-primary-blue/14 [clip-path:polygon(0_0,72%_0,24%_100%,0_100%)]" />
          <div className="absolute right-0 top-0 h-full w-[35%] bg-primary-blue/8 [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]" />
          <div className="absolute left-[18%] top-0 h-full w-[10%] bg-[#0b2f78]/30 [clip-path:polygon(30%_0,100%_0,56%_100%,0_100%)]" />
        </div>

                {/* Abstract Background */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-full opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-blue/35 bg-primary-blue/10 px-3 py-1 text-sm font-bold text-primary-blue">
              <SecurityBadgeIcon />
              INNOVATION SECURITE
            </div>

            <h2 className="mb-6 font-heading text-3xl font-bold text-white md:text-4xl">
              App d&apos;Identification <br />
              <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">Soutrali ID</span>
            </h2>

            <p className="mb-8 text-lg text-text-secondary">
              La confiance est la base de tout echange. Notre application dediee permet d&apos;identifier
              formellement chaque prestataire via un QR Code unique et infalsifiable.
            </p>

            <div className="space-y-3">
              {trustFeatures.map(({ id, title, description, Icon }) => (
                <motion.div
                  key={id}
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0a1223]/80 px-4 py-4 transition-colors hover:border-primary-blue/40"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                >
                  <div className="mt-0.5 text-xs font-semibold tracking-[0.2em] text-white/45">{id}</div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary-blue/25 bg-primary-blue/10 text-primary-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base font-semibold text-white">{title}</h4>
                    <p className="text-sm text-text-secondary">{description}</p>
                  </div>
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-white/30 transition-colors group-hover:text-primary-blue" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recensement App Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img
                src={recensementImage}
                alt="Soutrali Recensement - Application d'identification terrain"
                className="h-auto w-full max-w-sm transform transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  );
};
