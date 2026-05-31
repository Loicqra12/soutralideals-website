import type { LucideIcon } from 'lucide-react';
import { Check } from 'lucide-react';

export type ProjectFeature = {
  text: string;
  Icon: LucideIcon;
};

type ProjectDetailContentProps = {
  title: string;
  HeaderIcon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
  checkColor: string;
  description: string;
  objective: string;
  features: ProjectFeature[];
  technologies: string[];
  valueProps: string[];
  showBadge?: boolean;
  badge?: string;
  badgeBgColor?: string;
  badgeTextColor?: string;
};

export function ProjectDetailContent({
  title,
  HeaderIcon,
  iconBgColor,
  iconColor,
  checkColor,
  description,
  objective,
  features,
  technologies,
  valueProps,
  showBadge = true,
  badge,
  badgeBgColor,
  badgeTextColor,
}: ProjectDetailContentProps) {
  return (
    <>
      <div className="mb-5 flex items-center gap-3">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${iconBgColor}`}
        >
          <HeaderIcon className={`h-6 w-6 ${iconColor}`} strokeWidth={2.2} />
        </div>
        {showBadge && badge && badgeBgColor && badgeTextColor && (
          <span
            className={`rounded-full border px-3 py-1 text-xs font-bold ${badgeBgColor} ${badgeTextColor} ${badgeTextColor}/20`}
          >
            {badge}
          </span>
        )}
      </div>

      <h3 className="font-heading text-2xl font-bold text-white md:text-4xl">{title}</h3>

      <p className="mt-4 text-lg leading-relaxed text-text-secondary">{description}</p>

      <div className="mt-6 rounded-xl border border-dark-border bg-dark-card p-4">
        <p className="mb-1 text-sm font-medium text-white">Objectif principal</p>
        <p className="text-sm text-text-secondary">{objective}</p>
      </div>

      <div className="mt-6">
        <h4 className="mb-3 font-bold text-white">Fonctionnalités clés</h4>
        <ul className="space-y-3">
          {features.map(({ text, Icon }) => (
            <li key={text} className="flex items-start gap-3 text-sm text-text-secondary">
              <span
                className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] ${iconColor}`}
              >
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <span className="pt-1 leading-relaxed">{text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="mb-3 font-bold text-white">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-dark-border bg-dark-card px-3 py-1 font-mono text-xs text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-dark-border bg-gradient-to-r from-dark-card to-dark-bg p-4">
        <h4 className="mb-2 font-bold text-white">Valeur ajoutée</h4>
        <ul className="space-y-2">
          {valueProps.map((value) => (
            <li key={value} className="flex items-start gap-2 text-sm text-text-secondary">
              <Check className={`mt-0.5 h-4 w-4 shrink-0 ${checkColor}`} aria-hidden />
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
