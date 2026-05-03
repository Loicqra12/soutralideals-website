import { SEO } from '../components/seo/SEO';
import { Link } from 'react-router-dom';

type SiteLink = { to: string; label: string };

const groups: { title: string; links: SiteLink[] }[] = [
  {
    title: 'Général',
    links: [
      { to: '/', label: 'Accueil' },
      { to: '/ecosysteme', label: 'Écosystème' },
      { to: '/realisations', label: 'Réalisations' },
      { to: '/communaute', label: 'Communauté' },
      { to: '/le-projet', label: 'Le projet' },
      { to: '/a-propos', label: 'À propos' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { to: '/services', label: 'Tous les services' },
      { to: '/services/developpement-produits', label: 'Développement produits' },
      { to: '/services/solutions-metiers', label: 'Solutions métiers' },
      { to: '/services/strategie-conseil', label: 'Stratégie & conseil' },
      { to: '/services/design-branding', label: 'Design & branding' },
      { to: '/services/marketing-formation', label: 'Marketing & formation' },
    ],
  },
  {
    title: 'Légal & transparence',
    links: [
      { to: '/informations-legales', label: 'Informations légales' },
      { to: '/informations-legales#politique-cookies', label: 'Politique de cookies' },
      { to: '/plan-du-site', label: 'Plan du site' },
    ],
  },
];

export const PlanDuSitePage = () => {
  return (
    <>
      <SEO
        title="Plan du site"
        description="Toutes les pages principales du site Soutrali Deals, classées par thématique."
      />
      <div className="border-b border-dark-border bg-gradient-to-b from-dark-card to-dark-bg pt-24 pb-16">
        <div className="container-custom">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-blue/80">Navigation</p>
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
            Plan du <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">site</span>
          </h1>
          <p className="mt-4 max-w-2xl text-text-secondary leading-relaxed">
            Accédez rapidement aux pages du site. Les ancres légales mènent aux sections détaillées sur la page
            Informations légales.
          </p>

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-dark-border bg-dark-bg/80 p-6 shadow-lg shadow-black/20"
              >
                <h2 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-blue/70">
                  {group.title}
                </h2>
                <ul className="space-y-3 text-sm text-white/70">
                  {group.links.map((item) => (
                    <li key={item.to + item.label}>
                      <Link
                        to={item.to}
                        className="transition hover:text-white hover:underline hover:decoration-primary-blue/60 hover:underline-offset-4"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
