import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

type NavLinkItem = { name: string; path: string };

const serviceLinks = [
  { name: 'Dév & Produits', path: '/services/developpement-produits', desc: 'Apps Web, Mobile & SaaS' },
  { name: 'Solutions Métiers', path: '/services/solutions-metiers', desc: 'ERP, CRM & Automatisation' },
  { name: 'Stratégie & Conseil', path: '/services/strategie-conseil', desc: 'Audit, Architecture, CTO' },
  { name: 'Design & Branding', path: '/services/design-branding', desc: 'UI/UX, Identité Visuelle' },
  { name: 'Marketing & Formation', path: '/services/marketing-formation', desc: 'Acquisition & Montée en compétence' },
];

function NavItem({ link }: { link: NavLinkItem }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive =
    location.pathname === link.path ||
    (link.path === '/services' && location.pathname.startsWith('/services'));

  const linkClass = (active: boolean) =>
    [
      'relative text-sm font-medium px-3 py-2 rounded-lg transition-colors',
      active ? 'text-white' : 'text-white/65 hover:text-white',
    ].join(' ');

  if (link.name === 'Services') {
    return (
      <div
        className="relative flex h-full items-center"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <NavLink
          to={link.path}
          className={({ isActive: a }) =>
            `${linkClass(a || isActive)} inline-flex items-center gap-1`
          }
        >
          {link.name}
          <ChevronDown className={`h-3.5 w-3.5 opacity-70 transition-transform ${open ? 'rotate-180' : ''}`} />
          {isActive && (
            <span className="pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-green to-primary-blue" />
          )}
        </NavLink>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.15 }}
              className="absolute left-1/2 top-full z-50 mt-2 w-80 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0b1020]/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl ring-1 ring-white/5"
            >
              <div className="flex flex-col gap-0.5">
                {serviceLinks.map((sub) => (
                  <Link
                    key={sub.path}
                    to={sub.path}
                    className="rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5"
                  >
                    <div className="text-sm font-semibold text-white">{sub.name}</div>
                    <div className="mt-0.5 text-xs leading-snug text-white/45">{sub.desc}</div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <NavLink to={link.path} className={({ isActive: a }) => linkClass(a)}>
      {({ isActive: a }) => (
        <>
          <span className="relative z-10">{link.name}</span>
          {a && (
            <span className="pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-green to-primary-blue" />
          )}
        </>
      )}
    </NavLink>
  );
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks: NavLinkItem[] = [
    { name: 'Accueil', path: '/' },
    { name: 'Écosystème', path: '/ecosysteme' },
    { name: 'Services', path: '/services' },
    { name: 'Réalisations', path: '/realisations' },
    { name: 'Communauté', path: '/communaute' },
    { name: 'Le Projet', path: '/le-projet' },
    { name: 'À propos', path: '/a-propos' },
  ];

  const barClass = [
    'fixed inset-x-0 top-0 z-50 border-b transition-[background,box-shadow,border-color] duration-300',
    isScrolled
      ? 'border-white/10 bg-[#060912]/90 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl'
      : 'border-transparent bg-[#060912]/75 backdrop-blur-md',
  ].join(' ');

  return (
    <nav className={barClass} aria-label="Navigation principale">
      <div className="container-custom grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-4 md:h-[72px] lg:grid-cols-[auto_1fr_auto]">
        {/* Logo */}
        <Link to="/" className="group flex w-fit items-center gap-2.5 justify-self-start">
          <img
            src={logo}
            alt="Soutrali Deals"
            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 md:h-10"
          />
          <span className="font-heading text-base font-bold tracking-tight text-white md:text-lg">
            Soutrali<span className="text-white/40"> </span>
            <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">Deals</span>
          </span>
        </Link>

        {/* Desktop — liens centrés (style agence) */}
        <div className="hidden items-center justify-center justify-self-center lg:flex">
          <div className="flex items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.04] px-1.5 py-1 backdrop-blur-sm">
            {navLinks.map((link) => (
              <NavItem key={link.path} link={link} />
            ))}
          </div>
        </div>

        {/* CTA — pill blanc type Flow Ninja */}
        <div className="hidden justify-self-end lg:block">
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0a0a0a] shadow-sm transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#060912]"
          >
            Demander un devis
          </NavLink>
        </div>

        {/* Mobile */}
        <button
          type="button"
          className="justify-self-end rounded-xl p-2.5 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 lg:hidden"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
          aria-controls="mobile-nav-panel"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            role="region"
            aria-label="Menu de navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-[#060912]/98 backdrop-blur-xl lg:hidden"
          >
            <div className="container-custom max-h-[min(70vh,560px)] overflow-y-auto py-6">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">Services</p>
                  <div className="flex flex-col gap-0.5">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.path}
                        to={s.path}
                        className="rounded-lg px-4 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <NavLink
                  to="/contact"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white py-3.5 text-center text-sm font-semibold text-[#0a0a0a] hover:bg-white/90"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Demander un devis
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
