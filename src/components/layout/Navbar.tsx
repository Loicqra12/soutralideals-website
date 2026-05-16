import { useState, useEffect, useRef, useId } from 'react';
import { Menu, X, ChevronDown, Code2, Building2, LineChart, Palette, Megaphone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

type NavLinkItem = { name: string; path: string };

const serviceLinks = [
  {
    name: 'Dév & Produits',
    path: '/services/developpement-produits',
    desc: 'Apps Web, Mobile & SaaS',
    Icon: Code2,
  },
  {
    name: 'Solutions Métiers',
    path: '/services/solutions-metiers',
    desc: 'ERP, CRM & Automatisation',
    Icon: Building2,
  },
  {
    name: 'Stratégie & Conseil',
    path: '/services/strategie-conseil',
    desc: 'Audit, Architecture & CTO',
    Icon: LineChart,
  },
  {
    name: 'Design & Branding',
    path: '/services/design-branding',
    desc: 'UI/UX & Identité Visuelle',
    Icon: Palette,
  },
  {
    name: 'Marketing & Formation',
    path: '/services/marketing-formation',
    desc: 'Acquisition & Compétences',
    Icon: Megaphone,
  },
];

const featuredCards = [
  {
    title: 'Soutrali ID',
    desc: 'Identité numérique pour les prestataires ivoiriens.',
    img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Produit phare',
    path: '/ecosysteme',
  },
  {
    title: 'Réalisations clients',
    desc: 'Découvrez nos projets web et mobile livrés.',
    img: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Portfolio',
    path: '/realisations',
  },
];

function ServicesMenuDesktop({
  linkClass,
  isActive,
}: {
  linkClass: (active: boolean) => string;
  isActive: boolean;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      const el = containerRef.current;
      if (el && !el.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative flex h-full items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="inline-flex items-center rounded-lg">
        <NavLink
          to="/services"
          className={({ isActive: a }) =>
            `${linkClass(a || isActive)} relative inline-flex items-center gap-1 rounded-l-lg px-3 py-2`
          }
        >
          Services
          {isActive && (
            <span className="pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-green to-primary-blue" />
          )}
        </NavLink>
        <button
          type="button"
          className={`${linkClass(isActive)} inline-flex items-center rounded-r-lg px-1.5 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40`}
          aria-expanded={open ? 'true' : 'false'}
          aria-haspopup="menu"
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setOpen(true);
            }
          }}
        >
          <span className="sr-only">Ouvrir le sous-menu Services</span>
          <ChevronDown className={`h-3.5 w-3.5 opacity-70 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            role="menu"
            aria-label="Sous-menu Services"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute left-1/2 top-full z-50 mt-3 w-[640px] -translate-x-1/3 rounded-2xl border border-white/10 bg-[#08101f] shadow-[0_24px_60px_rgba(0,0,0,0.55)] backdrop-blur-2xl ring-1 ring-white/5"
          >
            {/* top accent line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-primary-green/50 via-primary-blue/50 to-transparent" />

            <div className="grid grid-cols-[1fr_220px] gap-0">
              {/* ── Colonne gauche : liens ── */}
              <div className="p-4">
                <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                  Nos services
                </p>
                <div className="flex flex-col gap-0.5">
                  {serviceLinks.map((sub) => (
                    <Link
                      key={sub.path}
                      role="menuitem"
                      to={sub.path}
                      className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/[0.06] focus:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                      onClick={() => setOpen(false)}
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white/55 transition group-hover:border-white/25 group-hover:bg-white/10 group-hover:text-white">
                        <sub.Icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-white/90 group-hover:text-white">
                          {sub.name}
                        </span>
                        <span className="mt-0.5 block text-xs text-white/40 group-hover:text-white/60">
                          {sub.desc}
                        </span>
                      </span>
                      <ArrowRight className="ml-auto h-3.5 w-3.5 shrink-0 opacity-0 transition group-hover:opacity-40" />
                    </Link>
                  ))}
                </div>

                <div className="mt-3 border-t border-white/8 pt-3 px-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-green/80 hover:text-primary-green transition"
                    onClick={() => setOpen(false)}
                  >
                    Demander un devis <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* ── Colonne droite : cartes image ── */}
              <div className="border-l border-white/8 p-3 flex flex-col gap-2.5">
                <p className="px-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                  À découvrir
                </p>
                {featuredCards.map((card) => (
                  <Link
                    key={card.path}
                    to={card.path}
                    className="group relative overflow-hidden rounded-xl border border-white/10 transition hover:border-white/25"
                    onClick={() => setOpen(false)}
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="h-24 w-full object-cover brightness-75 transition duration-500 group-hover:scale-105 group-hover:brightness-90"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06101e]/90 via-[#06101e]/30 to-transparent" />
                    <div className="absolute bottom-2 left-2.5 right-2.5">
                      <span className="mb-1 inline-block rounded-full border border-primary-green/30 bg-primary-green/15 px-2 py-0.5 text-[10px] font-bold text-primary-green">
                        {card.tag}
                      </span>
                      <p className="text-xs font-semibold leading-tight text-white">{card.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavItem({ link }: { link: NavLinkItem }) {
  const location = useLocation();
  const isActive =
    location.pathname === link.path ||
    (link.path === '/services' && location.pathname.startsWith('/services'));

  const linkClass = (active: boolean) =>
    [
      'relative inline-flex text-sm font-medium px-3 py-2 rounded-lg transition-colors',
      active ? 'text-white' : 'text-white/65 hover:text-white',
    ].join(' ');

  if (link.name === 'Services') {
    return <ServicesMenuDesktop linkClass={linkClass} isActive={isActive} />;
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

        <div className="hidden items-center justify-center justify-self-center lg:flex">
          <div className="flex items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.04] px-1.5 py-1 backdrop-blur-sm">
            {navLinks.map((link) => (
              <NavItem key={link.path} link={link} />
            ))}
          </div>
        </div>

        <div className="hidden justify-self-end lg:block">
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0a0a0a] shadow-sm transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#060912]"
          >
            Demander un devis
          </NavLink>
        </div>

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
