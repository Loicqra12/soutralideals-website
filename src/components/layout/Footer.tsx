import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const columnTitle = 'text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-blue/70';

export const Footer = () => {
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
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Soutrali Deals"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/55 transition hover:border-primary-blue/40 hover:text-primary-blue"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Soutrali Deals"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/55 transition hover:border-white/30 hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Soutrali Deals"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/55 transition hover:border-gold-premium/50 hover:text-gold-premium"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Soutrali Deals"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/55 transition hover:border-primary-blue/50 hover:text-primary-blue"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Liens */}
          <div className="lg:col-span-5">
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <h4 className={`${columnTitle} mb-5`}>Nos services</h4>
                <ul className="space-y-3 text-sm text-white/55">
                  <li>
                    <Link to="/services/developpement-produits" className="transition hover:text-white">
                      Développement Web & Mobile
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/marketing-formation" className="transition hover:text-white">
                      Marketing Digital
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/design-branding" className="transition hover:text-white">
                      Design UI/UX
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/strategie-conseil" className="transition hover:text-white">
                      Conseil stratégique
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="transition hover:text-white">
                      Pack startups & offres
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
            </div>
          </div>

          {/* Bloc type “audit” Flow — newsletter */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-primary-blue/15 via-[#0b1020] to-dark-card p-6 shadow-xl shadow-black/20">
              <h4 className="mb-1 text-lg font-bold text-white">Restez informés</h4>
              <p className="mb-5 text-sm leading-relaxed text-white/50">
                Actualités produit, événements et opportunités — une fois par mois, pas de spam.
              </p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="votre@email.com"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-primary-blue/60 focus:ring-1 focus:ring-primary-blue/40"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-white py-3 text-sm font-semibold text-[#0a0a0a] transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1020]"
                >
                  S&apos;abonner
                </button>
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

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Soutrali Deals. Tous droits réservés.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/a-propos" className="transition hover:text-white">
              Mentions légales
            </Link>
            <Link to="/a-propos" className="transition hover:text-white">
              CGU
            </Link>
            <Link to="/a-propos" className="transition hover:text-white">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
