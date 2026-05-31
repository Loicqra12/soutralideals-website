import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '../../ui/SectionWrapper';
import { ECOSYSTEM_PLATFORMS } from './ecosystemPlatforms';
import { EcosystemStageCard } from './EcosystemStageCard';
import { EcosystemFlowConnector } from './EcosystemFlowConnector';

const PIPELINE_STAGES = [
  'hsl(199, 89%, 48%)',
  'hsl(168, 76%, 42%)',
  'hsl(142, 71%, 45%)',
  'hsl(48, 96%, 53%)',
  'hsl(27, 96%, 55%)',
];

function PipelineBackdrop() {
  const reduced = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 justify-center gap-3 opacity-[0.14] lg:flex"
      aria-hidden
    >
      {PIPELINE_STAGES.map((color, i) => (
        <motion.div
          key={color}
          className="h-36 w-14 origin-center border border-black/20 shadow-lg"
          style={{
            background: `linear-gradient(165deg, ${color}ee, ${color}99)`,
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
          initial={reduced ? false : { opacity: 0, scale: 0.85, rotateY: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          animate={reduced ? undefined : { y: [0, -4, 0] }}
          transition={
            reduced
              ? { delay: 0.05 * i, duration: 0.5 }
              : {
                  delay: 0.05 * i,
                  duration: 0.5,
                  y: {
                    duration: 4 + i * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.55 + i * 0.05,
                  },
                }
          }
        />
      ))}
    </div>
  );
}

export const EcosystemOverview = () => {
  const reduced = useReducedMotion();

  const scrollToProject = (id: string) => {
    document.getElementById(`project-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <SectionWrapper id="projects-overview" bg="dark" className="relative">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,hsl(142,71%,45%)/0.08,transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,hsl(217,91%,60%)/0.06,transparent_50%)]"
        aria-hidden
      />

      <motion.div
        initial={reduced ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative z-10 mx-auto mb-14 max-w-3xl text-center md:mb-20"
      >
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-primary-green/90">
          Flux interconnecté
        </p>
        <h2 className="font-heading text-3xl font-bold text-white md:text-5xl">
          Vue d&apos;ensemble de{' '}
          <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
            l&apos;écosystème
          </span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-[#b8c2d0] md:text-lg">
          Soutrali Deals est un écosystème interconnecté composé de plateformes web, mobiles et d&apos;outils
          terrain, tous reliés par une même vision.
        </p>
      </motion.div>

      <div className="relative z-10">
        <PipelineBackdrop />

        {/* Desktop : pipeline horizontal + connecteurs animés */}
        <ul className="hidden list-none items-stretch lg:flex">
          {ECOSYSTEM_PLATFORMS.map((platform, index) => (
            <li key={platform.id} className="contents">
              <div className="min-w-0 flex-1">
                <EcosystemStageCard
                  platform={platform}
                  index={index}
                  onSelect={scrollToProject}
                />
              </div>
              {index < ECOSYSTEM_PLATFORMS.length - 1 && (
                <div
                  className="flex w-10 shrink-0 items-center self-center px-0.5 xl:w-14"
                  aria-hidden
                >
                  <EcosystemFlowConnector />
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile / tablette : grille + connecteur vertical */}
        <ol className="grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:hidden">
          {ECOSYSTEM_PLATFORMS.map((platform, index) => (
            <li key={platform.id} className="flex flex-col">
              <EcosystemStageCard
                platform={platform}
                index={index}
                onSelect={scrollToProject}
              />
              {index < ECOSYSTEM_PLATFORMS.length - 1 && (
                <div className="flex justify-center py-2 sm:hidden">
                  <EcosystemFlowConnector className="h-10 w-8 rotate-90" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </SectionWrapper>
  );
};
