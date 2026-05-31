import { motion } from 'framer-motion';
import { FinalCTA } from '../components/sections/FinalCTA';
import { AboutTeamSection } from '../components/sections/about/AboutTeamSection';
import { AboutVisionSection } from '../components/sections/about/AboutVisionSection';
import { AboutProblemMarketSection } from '../components/sections/about/AboutProblemMarketSection';
import { AboutSolutionSection } from '../components/sections/about/AboutSolutionSection';
import { AboutRoadmapSection } from '../components/sections/about/AboutRoadmapSection';
import { AboutValuesSoutraliSection } from '../components/sections/about/AboutValuesSoutraliSection';
import { SEO } from '../components/seo/SEO';
import teamSoutraliImage from '../assets/images/team-soutrali.png';

export const AboutPage = () => {
  return (
    <>
      <SEO
        title="À Propos — Soutrali Deals"
        description="Vision, équipe et feuille de route de Soutrali Deals : écosystème digital pour l'économie informelle en Côte d'Ivoire."
        ogImage={teamSoutraliImage}
        breadcrumbs={[
          { name: 'Accueil', path: '/' },
          { name: 'À propos', path: '/a-propos' },
        ]}
      />
      <div className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 md:py-24">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <img
              src={teamSoutraliImage}
              alt=""
              className="h-full w-full scale-105 object-cover object-center blur-md md:blur-lg"
            />
            <div className="absolute inset-0 bg-dark-bg/65 md:bg-dark-bg/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/80 via-dark-bg/40 to-dark-bg/70" />
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary-green">
                Notre histoire
              </span>
              <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Plus qu&apos;une plateforme,
                <br />
                une mission de vie
              </h1>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 border-l-2 border-l-primary-green bg-black/35 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                <span className="font-heading text-lg text-white">2024</span>
                <span className="text-white/60">— Année de création</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-12 max-w-3xl"
            >
              <h2 className="mb-6 font-heading text-2xl font-bold text-white md:text-3xl">
                Un constat simple
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                <strong className="text-white">SOUTRALI DEALS est né d&apos;un constat simple :</strong>{' '}
                en Côte d&apos;Ivoire, des milliers de talents travaillent chaque jour sans visibilité,
                sans outils digitaux et sans accès à des opportunités structurées.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                Nous sommes nous-mêmes des prestataires de services — développeurs, marketeurs,
                communicants, gestionnaires — confrontés aux mêmes réalités.
              </p>
              <p className="text-lg leading-relaxed text-text-secondary">
                <strong className="text-primary-green">
                  C&apos;est de cette expérience qu&apos;est né SOUTRALI DEALS :
                </strong>{' '}
                une plateforme pensée par des prestataires, pour des prestataires.
              </p>
            </motion.div>
          </div>
        </section>

        <AboutTeamSection />
        <AboutVisionSection />
        <AboutProblemMarketSection />
        <AboutSolutionSection />
        <AboutRoadmapSection />
        <AboutValuesSoutraliSection />
        <FinalCTA />
      </div>
    </>
  );
};
