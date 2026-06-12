import { SEO } from '../components/seo/SEO';
import { Link } from 'react-router-dom';
import { Scale, FileText, ShieldAlert, Cookie, ShieldCheck, Accessibility, ArrowRight } from 'lucide-react';

const legalCards = [
  {
    title: 'Mentions légales',
    path: '/mentions-legales',
    icon: Scale,
    description: "Identité de l'éditeur, direction de la publication, coordonnées et informations sur l'hébergement de nos serveurs."
  },
  {
    title: "Conditions Générales d'Utilisation (CGU)",
    path: '/cgu',
    icon: FileText,
    description: "Règles d'utilisation de la plateforme numérique et responsabilités liées à la mise en relation entre membres."
  },
  {
    title: 'Conditions Générales de Vente (CGV)',
    path: '/cgv',
    icon: ShieldCheck,
    description: "Conditions contractuelles pour la commande et l'achat de nos prestations de services numériques professionnelles."
  },
  {
    title: 'Politique de confidentialité',
    path: '/confidentialite',
    icon: ShieldAlert,
    description: "Règles de traitement de vos données personnelles et modalités d'exercice de vos droits d'accès et de suppression."
  },
  {
    title: 'Politique de cookies',
    path: '/cookies',
    icon: Cookie,
    description: "Gestion des traceurs et préférences d'affichage des cookies indispensables et optionnels déposés sur le navigateur."
  },
  {
    title: "Déclaration d'accessibilité",
    path: '/accessibilite',
    icon: Accessibility,
    description: "Notre engagement et nos mesures d'optimisation pour rendre la plateforme accessible aux personnes en situation de handicap."
  }
];

export const InformationsLegalesPage = () => {
  return (
    <>
      <SEO
        title="Informations légales"
        description="Mentions légales, politique de confidentialité, cookies, CGV, CGU et autres documents Soutrali Deals."
        breadcrumbs={[
          { name: 'Accueil', path: '/' },
          { name: 'Informations légales', path: '/informations-legales' },
        ]}
      />
      <div className="border-b border-dark-border bg-gradient-to-b from-dark-card to-dark-bg pt-24 pb-16">
        <div className="container-custom">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-blue/80">Légal</p>
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
            Informations <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">légales</span>
          </h1>
          <p className="mt-4 max-w-2xl text-text-secondary leading-relaxed">
            Consultez les informations réglementaires de l&apos;écosystème Soutrali Deals. Sélectionnez le document juridique de votre choix ci-dessous.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {legalCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.path}
                  to={card.path}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 shadow-lg transition-all duration-300 hover:border-primary-blue/30 hover:bg-white/[0.08] hover:-translate-y-1"
                >
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-primary-blue transition-colors group-hover:bg-primary-blue/15 group-hover:text-primary-blue">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mb-3 text-lg font-bold text-white group-hover:text-primary-blue transition-colors">
                      {card.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-primary-blue opacity-80 group-hover:opacity-100">
                    Consulter le document <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
