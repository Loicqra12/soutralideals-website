import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  // Gestion de la fermeture du menu mobile lors du changement de route
  useEffect(() => {
    window.scrollTo(0, 0);
    // On laisse le changement de route fermer le menu via l'état si nécessaire, 
    // mais ici on le force pour être sûr. Pour éviter le warning, on pourrait le faire dans un event handler
    // mais le pattern courant est acceptable. Pour calmer le linter, on peut ignorer la ligne ou changer la logique.
    // Une meilleure approche est d'utiliser un layout effect ou de laisser le composant Link gérer ça.
    // Ici, on va simplement supprimer l'appel direct si possible ou le masquer car c'est un faux positif courant pour ce cas d'usage précis (reset UI on navigation).
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Écosystème", path: "/ecosysteme" },
    { name: "Services", path: "/services" },
    { name: "Réalisations", path: "/realisations" },
    { name: "Communauté", path: "/communaute" },
    { name: "Le Projet", path: "/le-projet" },
    { name: "À propos", path: "/a-propos" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-gradient-to-r from-primary-green/95 to-primary-blue/95 backdrop-blur-md border-b border-white/10 py-4 shadow-lg'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Soutrali Deals"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-heading font-bold text-xl tracking-wide transition-colors">
            {/* Toujours blanc sur fond coloré (gradient ou transparent vert) */}
            <span className="text-white group-hover:text-white/90">SOUTRALI DEALS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className={`hidden lg:flex items-center gap-1 p-1 rounded-full border backdrop-blur-md transition-colors duration-300 ${isScrolled
          ? 'bg-white/10 border-white/20'
          : 'bg-white/10 border-white/10'
          }`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative
                ${isActive
                  ? 'text-white font-bold'
                  : 'text-white/80 hover:text-white'
                }
              `}
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Premium CTA Button - Or Mat Élégant */}
        <div className="hidden lg:block">
          <NavLink
            to="/contact"
            className="relative px-8 py-3 rounded-full overflow-hidden group transition-all duration-300 hover:scale-110 flex items-center gap-2"
            style={{
              background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #CFB53B 100%)',
              boxShadow: '0 0 30px rgba(184, 134, 11, 0.4)',
              color: '#1a1a1a'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 50px rgba(184, 134, 11, 0.7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(184, 134, 11, 0.4)';
            }}
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

            <span className="relative flex items-center gap-2 font-bold">
              <Sparkles className="w-4 h-4" />
              Demander un Devis
            </span>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-[72px] bg-white/98 backdrop-blur-2xl border-t border-gray-200"
          >
            <div className="container-custom py-8 h-full overflow-y-auto">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) => `
                      text-xl font-medium py-4 px-6 rounded-xl hover:bg-gray-50 transition-colors border-l-4
                      ${isActive ? 'text-primary-blue border-[#B8860B] bg-blue-50/50' : 'text-gray-600 border-transparent'}
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}

                {/* Mobile CTA Button - Or Mat */}
                <NavLink
                  to="/contact"
                  className="mt-6 w-full text-center px-8 py-4 font-bold rounded-full flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #CFB53B 100%)',
                    boxShadow: '0 0 30px rgba(184, 134, 11, 0.5)',
                    color: '#1a1a1a'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Sparkles className="w-5 h-5" />
                  Demander un Devis
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
