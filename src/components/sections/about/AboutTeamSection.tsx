import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { FOUNDING_TEAM, type TeamMember } from './aboutTeamData';

const TOP_ROW = FOUNDING_TEAM.slice(0, 3);
const BOTTOM_ROW = FOUNDING_TEAM.slice(3, 5);

function isValidUrl(url?: string): url is string {
  return Boolean(url?.trim() && /^https?:\/\//i.test(url.trim()));
}

function TeamSocialLinks({ social, name }: { social: TeamMember['social']; name: string }) {
  const github = isValidUrl(social.github) ? social.github.trim() : null;
  const linkedin = isValidUrl(social.linkedin) ? social.linkedin.trim() : null;

  const hasGithub = social.github !== undefined;
  const hasLinkedin = social.linkedin !== undefined;

  if (!hasGithub && !hasLinkedin) return null;

  const iconClass =
    'flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-primary-green/50 hover:text-primary-green focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green/40';

  return (
    <div className="mt-3 flex justify-center gap-2">
      {hasGithub &&
        (github ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={iconClass}
            aria-label={`GitHub de ${name}`}
          >
            <Github className="h-4 w-4" aria-hidden />
          </a>
        ) : (
          <span
            className={`${iconClass} cursor-default opacity-35`}
            title="Profil GitHub à venir"
            aria-label={`GitHub de ${name} (à venir)`}
          >
            <Github className="h-4 w-4" aria-hidden />
          </span>
        ))}
      {hasLinkedin &&
        (linkedin ? (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={iconClass}
            aria-label={`LinkedIn de ${name}`}
          >
            <Linkedin className="h-4 w-4" aria-hidden />
          </a>
        ) : (
          <span
            className={`${iconClass} cursor-default opacity-35`}
            title="Profil LinkedIn à venir"
            aria-label={`LinkedIn de ${name} (à venir)`}
          >
            <Linkedin className="h-4 w-4" aria-hidden />
          </span>
        ))}
    </div>
  );
}

type TeamMemberCardProps = {
  member: TeamMember;
  index: number;
  className?: string;
};

function TeamMemberCard({ member, index, className = '' }: TeamMemberCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.06 }}
      className={`flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#e8e8e8] shadow-lg ${className}`}
    >
      <div className="aspect-[4/5] w-full overflow-hidden">
        <img
          src={member.photo}
          alt={`Portrait de ${member.name}`}
          className="h-full w-full object-cover object-top grayscale transition duration-500 hover:grayscale-0"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-1 flex-col bg-dark-card px-5 py-5 text-center">
        <h3 className="font-heading text-lg font-bold text-white md:text-xl">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold text-primary-green">{member.role}</p>
        {member.description ? (
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">{member.description}</p>
        ) : null}
        <TeamSocialLinks social={member.social} name={member.name} />
      </div>
    </motion.article>
  );
}

export function AboutTeamSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="equipe"
      className="border-b border-white/5 bg-dark-bg py-20 md:py-24"
      aria-labelledby="about-team-title"
    >
      <div className="container-custom">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-left md:mb-16"
        >
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary-green">
            Équipe fondatrice et stratégique
          </span>
          <h2 id="about-team-title" className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Une équipe expérimentée pour piloter Soutrali Deals vers le succès
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-secondary">
            Chez Soutrali Deals, notre force repose sur une équipe pluridisciplinaire combinant
            expertise technologique, vision stratégique, marketing digital, finance et gestion
            communautaire.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            Chaque membre joue un rôle clé dans le développement de notre plateforme et dans
            l&apos;atteinte de nos ambitions panafricaines.
          </p>
        </motion.div>

        {/* Mobile & tablette */}
        <div className="grid gap-6 sm:grid-cols-2 lg:hidden">
          {FOUNDING_TEAM.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Desktop : 3 en haut, 2 en bas centrés dans les intervalles */}
        <div className="mx-auto hidden max-w-6xl lg:grid lg:grid-cols-6 lg:gap-x-5 lg:gap-y-8 xl:gap-x-6">
          {TOP_ROW.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              index={index}
              className="col-span-2"
            />
          ))}
          {BOTTOM_ROW.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              index={index + 3}
              className={`col-span-2 ${index === 0 ? 'col-start-2' : 'col-start-4'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
