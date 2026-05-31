import { useState } from 'react';
import { Download, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { requestCookieSettingsOpen } from '../../lib/cookieConsent';
import { FooterGoogleReviews } from './FooterGoogleReviews';
import { FooterLangCurrency } from './FooterLangCurrency';

const columnTitle = 'text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-blue/70';

const iconBtnClass =
  'flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/55 transition hover:border-primary-blue/40 hover:text-primary-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50';

function socialUrl(key: 'facebook' | 'twitter' | 'instagram' | 'linkedin'): string {
  const env = import.meta.env as Record<string, string | undefined>;
  const raw =
    key === 'facebook'
      ? env.VITE_SOCIAL_FACEBOOK
      : key === 'twitter'
        ? env.VITE_SOCIAL_X
        : key === 'instagram'
          ? env.VITE_SOCIAL_INSTAGRAM
          : env.VITE_SOCIAL_LINKEDIN;
  const u = raw?.trim();
  if (u && /^https?:\/\//i.test(u)) return u;

  switch (key) {
    case 'facebook':
      return 'https://www.facebook.com/p/SoutraliDeals-61556925353967/';
    case 'twitter':
      return 'https://x.com/SoutraliDeals';
    case 'instagram':
      return 'https://www.instagram.com/soutrali_deals/';
    case 'linkedin':
      return 'https://ci.linkedin.com/company/soutrali-deals';
  }
}

const footerSocialItems = [
  { key: 'facebook' as const, Icon: Facebook, label: 'Facebook', hover: 'hover:border-primary-blue/40 hover:text-primary-blue' },
  { key: 'twitter' as const, Icon: Twitter, label: 'X (Twitter)', hover: 'hover:border-white/30 hover:text-white' },
  { key: 'instagram' as const, Icon: Instagram, label: 'Instagram', hover: 'hover:border-gold-premium/50 hover:text-gold-premium' },
  { key: 'linkedin' as const, Icon: Linkedin, label: 'LinkedIn', hover: 'hover:border-primary-blue/50 hover:text-primary-blue' },
];

export const Footer = () => {
  const [footerEmail, setFooterEmail] = useState('');
  const [footerSubmitted, setFooterSubmitted] = useState(false);

  const onFooterNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!footerEmail.trim()) return;
    setFooterSubmitted(true);
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#040814]">
      {/* Léger halo type “studio” */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-blue/40 to-transparent"
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-1/4 top-1/3 h-96 w-96 rounded-full bg-primary-blue/10 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -right-1/4 bottom-0 h-80 w-80 rounded-full bg-primary-green/10 blur-[100px]" aria-hidden />

      <div className="container-custom relative pt-20 pb-10">
        <div className="mb-16 grid gap-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Marque */}
          <div className="space-y-6 lg:col-span-4">
            <Link to="/" className="group flex w-fit items-center gap-3">
              <img
                src={logo}
                alt="Soutrali Deals Logo"
                className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-heading text-xl font-bold tracking-tight text-white md:text-2xl">
                Soutrali
                <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent"> Deals</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/55">
              L&apos;écosystème digital pour connecter talents, innovations et opportunités en Côte
              d&apos;Ivoire.
            </p>
            <p className="max-w-sm text-xs leading-relaxed text-white/45">
              Suivez-nous — les profils officiels seront publiés ici. En attendant, un clic ouvre la page contact.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {footerSocialItems.map(({ key, Icon, label, hover }) => {
                const href = socialUrl(key);
                const className = `${iconBtnClass} ${hover}`;
                if (href) {
                  return (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                      aria-label={`${label} (nouvel onglet)`}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                }
                return (
                  <Link
                    key={key}
                    to="/contact"
                    className={className}
                    title={`${label} — lien profil à venir, page contact`}
                    aria-label={`${label} : nous contacter en attendant le lien officiel`}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
            <FooterGoogleReviews />
          </div>

          {/* Liens */}
          <div className="lg:col-span-5">
            <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
              <div>
                <h4 className={`${columnTitle} mb-5`}>Nos services</h4>
                <ul className="space-y-3 text-sm text-white/55">
                  <li>
                    <Link to="/services/developpement-produits" className="transition hover:text-white">
                      Développement Web & Mobile
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/solutions-metiers" className="transition hover:text-white">
                      Solutions Métiers & Outils
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/design-branding" className="transition hover:text-white">
                      Design UI/UX
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/marketing-formation" className="transition hover:text-white">
                      Marketing & Formation
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/strategie-conseil" className="transition hover:text-white">
                      Stratégie & Conseil
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="transition hover:text-white text-primary-green font-medium">
                      Voir tous les services
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className={`${columnTitle} mb-5`}>La société</h4>
                <ul className="space-y-3 text-sm text-white/55">
                  <li>
                    <Link to="/a-propos" className="transition hover:text-white">
                      À propos
                    </Link>
                  </li>
                  <li>
                    <Link to="/communaute" className="transition hover:text-white">
                      La communauté
                    </Link>
                  </li>
                  <li>
                    <Link to="/communaute" className="transition hover:text-white">
                      Événements
                    </Link>
                  </li>
                  <li>
                    <Link to="/communaute" className="transition hover:text-white">
                      Carrières
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="transition hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h4 className={`${columnTitle} shrink`}>Informations légales</h4>
                  <Link
                    to="/informations-legales#informations-legales"
                    className="shrink-0 rounded-lg p-1.5 text-white/45 transition hover:bg-white/5 hover:text-primary-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50"
                    aria-label="Consulter les informations légales"
                    title="Informations légales"
                  >
                    <Download className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
                <ul className="space-y-3 text-sm text-white/55">
                  <li>
                    <Link to="/informations-legales#informations-legales" className="transition hover:text-white">
                      Informations légales
                    </Link>
                  </li>
                  <li>
                    <Link to="/informations-legales#politique-cookies" className="transition hover:text-white">
                      Politique de cookies
                    </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => requestCookieSettingsOpen()}
                      className="text-left transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#040814] rounded-sm"
                    >
                      Gérer mes cookies
                    </button>
                  </li>
                  <li>
                    <Link to="/informations-legales#cgv" className="transition hover:text-white">
                      CGV
                    </Link>
                  </li>
                  <li>
                    <Link to="/informations-legales#propriete-intellectuelle" className="transition hover:text-white">
                      Propriété intellectuelle
                    </Link>
                  </li>
                  <li>
                    <Link to="/informations-legales#accessibilite" className="transition hover:text-white">
                      Déclaration d&apos;accessibilité
                    </Link>
                  </li>
                  <li>
                    <Link to="/plan-du-site" className="transition hover:text-white">
                      Plan du site
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="transition hover:text-white">
                      Contact / Réclamation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bloc type “audit” Flow — newsletter */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-primary-blue/15 via-[#0b1020] to-dark-card p-6 shadow-xl shadow-black/20">
              <h4 className="mb-1 text-lg font-bold text-white">Restez informés</h4>
              <p className="mb-5 text-sm leading-relaxed text-white/50">
                Actualités produit, événements et opportunités — une fois par mois, pas de spam.
              </p>
              <form className="space-y-3" onSubmit={onFooterNewsletter} noValidate>
                <label htmlFor="footer-newsletter-email" className="sr-only">
                  Adresse e-mail pour la newsletter
                </label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={footerEmail}
                  onChange={(e) => {
                    setFooterEmail(e.target.value);
                    setFooterSubmitted(false);
                  }}
                  placeholder="votre@email.com"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-primary-blue/60 focus:ring-1 focus:ring-primary-blue/40"
                  aria-describedby="footer-newsletter-hint"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-white py-3 text-sm font-semibold text-[#0a0a0a] transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1020]"
                >
                  S&apos;abonner
                </button>
                <p id="footer-newsletter-hint" className="text-[11px] text-white/40">
                  Une fois par mois maximum. Désinscription possible à tout moment.
                </p>
                {footerSubmitted && (
                  <p className="text-sm font-medium text-primary-green" role="status">
                    Merci ! Votre inscription sera confirmée prochainement.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Marque géante — filigrane (lisible, style “studio” type Flow) */}
        <div className="relative mb-10 select-none overflow-hidden border-y border-white/15 py-8">
          <p
            className="pointer-events-none text-center font-heading text-[clamp(2.75rem,12vw,7.5rem)] font-bold leading-none tracking-tighter bg-gradient-to-r from-primary-green/70 via-primary-blue/85 to-primary-blue/70 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(59,130,246,0.25)]"
            aria-hidden
          >
            soutralideals
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-6 text-xs text-white/40 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-center lg:text-left">© {new Date().getFullYear()} Soutrali Deals. Tous droits réservés.</p>

          <div className="flex flex-col items-stretch gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-end lg:gap-8">
            <FooterLangCurrency />
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-5 sm:border-t-0 sm:pt-0 lg:border-l lg:border-t-0 lg:pl-8">
              <Link to="/informations-legales#mentions-legales" className="transition hover:text-white">
                Mentions légales
              </Link>
              <Link to="/informations-legales#cgu" className="transition hover:text-white">
                CGU
              </Link>
              <Link to="/informations-legales#politique-confidentialite" className="transition hover:text-white">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
