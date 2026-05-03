import { AnimatePresence, motion } from 'framer-motion';
import { Cookie, Settings2, Sparkles } from 'lucide-react';
import { useCallback, useEffect, useId, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  COOKIE_BANNER_OPEN_EVENT,
  COOKIE_CONSENT_STORAGE_KEY,
  hasConsentBeenSet,
  readStoredConsent,
  writeConsent,
  type CookieConsentPreferences,
} from '../../lib/cookieConsent';

const defaultOptional = (): Pick<CookieConsentPreferences, 'functional' | 'analytics' | 'marketing'> => ({
  functional: false,
  analytics: false,
  marketing: false,
});

export const CookieBanner = () => {
  const panelId = useId();
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [prefs, setPrefs] = useState(defaultOptional);

  useEffect(() => {
    setVisible(!hasConsentBeenSet());
  }, []);

  const closeAll = useCallback(() => {
    setSettingsOpen(false);
    setVisible(false);
  }, []);

  const applyRefuse = useCallback(() => {
    writeConsent(defaultOptional());
    setPrefs(defaultOptional());
    closeAll();
  }, [closeAll]);

  const applyAcceptAll = useCallback(() => {
    writeConsent({ functional: true, analytics: true, marketing: true });
    setPrefs({ functional: true, analytics: true, marketing: true });
    closeAll();
  }, [closeAll]);

  const applyCustom = useCallback(() => {
    writeConsent(prefs);
    closeAll();
  }, [closeAll, prefs]);

  const hydrateFromStorage = useCallback(() => {
    const stored = readStoredConsent();
    if (stored) {
      setPrefs({
        functional: stored.preferences.functional,
        analytics: stored.preferences.analytics,
        marketing: stored.preferences.marketing,
      });
    }
  }, []);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === COOKIE_CONSENT_STORAGE_KEY) {
        setVisible(!hasConsentBeenSet());
        hydrateFromStorage();
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [hydrateFromStorage]);

  useEffect(() => {
    const onOpen = () => {
      hydrateFromStorage();
      setVisible(true);
      setSettingsOpen(true);
    };
    window.addEventListener(COOKIE_BANNER_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(COOKIE_BANNER_OPEN_EVENT, onOpen);
  }, [hydrateFromStorage]);

  const optionalCategories: {
    key: keyof Pick<CookieConsentPreferences, 'functional' | 'analytics' | 'marketing'>;
    label: string;
    description: string;
  }[] = [
    {
      key: 'functional',
      label: 'Fonctionnalité',
      description: 'Mémorisation de vos choix et confort de navigation.',
    },
    {
      key: 'analytics',
      label: "Mesure d'audience",
      description: 'Statistiques anonymisées pour améliorer le site.',
    },
    {
      key: 'marketing',
      label: 'Marketing',
      description: 'Contenus et offres plus pertinents pour vous.',
    },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex justify-center px-4 pb-6 pt-10 sm:px-6">
          <motion.div
            layout
            initial={{ y: 48, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 32, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 380, damping: 32, mass: 0.9 }}
            className="pointer-events-auto relative w-full max-w-5xl overflow-hidden rounded-2xl border border-gold-premium/35 bg-gradient-to-br from-[hsl(45,48%,96%)] via-white to-[hsl(217,55%,97%)] shadow-[0_25px_80px_-20px_rgba(0,0,0,0.35),0_0_0_1px_rgba(212,175,55,0.12)]"
            role="dialog"
            aria-modal="false"
            aria-labelledby="cookie-banner-title"
            aria-describedby="cookie-banner-desc"
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary-blue/15 blur-3xl"
              animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-primary-green/15 blur-3xl"
              animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.08, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative p-5 sm:p-6 md:p-7">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                <div className="min-w-0 flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-premium/50 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-premium shadow-sm">
                      <Cookie className="h-3.5 w-3.5" aria-hidden />
                      Cookies
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-primary-blue/20 bg-primary-blue/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-blue">
                      <Sparkles className="h-3 w-3" aria-hidden />
                      Soutrali Deals
                    </span>
                  </div>

                  <h2 id="cookie-banner-title" className="font-heading text-lg font-bold text-dark-bg sm:text-xl">
                    Respect de votre vie privée
                  </h2>
                  <p id="cookie-banner-desc" className="max-w-2xl text-sm leading-relaxed text-dark-bg/80">
                    Nous utilisons des cookies <strong className="text-dark-bg">essentiels</strong> et, avec votre
                    accord, des cookies de <strong className="text-dark-bg">fonctionnalité</strong>, de{' '}
                    <strong className="text-dark-bg">mesure d&apos;audience</strong> et de{' '}
                    <strong className="text-dark-bg">marketing</strong>.
                  </p>
                  <Link
                    to="/informations-legales#politique-cookies"
                    className="inline-flex text-sm font-semibold text-primary-blue underline decoration-primary-blue/40 underline-offset-4 transition hover:text-primary-green hover:decoration-primary-green/50"
                  >
                    Lire la politique de cookies
                  </Link>
                </div>

                <div className="flex w-full shrink-0 flex-col gap-3 sm:max-w-md lg:w-[min(100%,380px)]">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={applyRefuse}
                      className="rounded-full border-2 border-dark-bg/90 bg-transparent px-4 py-2.5 text-sm font-semibold text-dark-bg transition hover:border-primary-green hover:text-primary-green focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(45,45%,96%)]"
                    >
                      Refuser
                    </motion.button>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSettingsOpen((o) => !o)}
                      aria-expanded={settingsOpen}
                      aria-controls={panelId}
                      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-blue/70 bg-white/90 px-4 py-2.5 text-sm font-semibold text-primary-blue shadow-sm transition hover:bg-primary-blue/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(45,45%,96%)]"
                    >
                      <Settings2 className="h-4 w-4 shrink-0" aria-hidden />
                      Paramétrer
                    </motion.button>
                  </div>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={applyAcceptAll}
                    className="w-full rounded-full bg-gradient-to-r from-primary-green to-primary-blue px-5 py-3 text-sm font-bold text-white shadow-glow-green transition hover:shadow-glow-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-premium focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(45,45%,96%)]"
                  >
                    Accepter tout
                  </motion.button>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {settingsOpen && (
                  <motion.div
                    id={panelId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 space-y-3 border-t border-gold-premium/25 pt-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gold-premium">
                        Préférences détaillées
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-4 rounded-xl border border-dark-border/10 bg-white/60 px-4 py-3 backdrop-blur-sm">
                          <div>
                            <p className="text-sm font-semibold text-dark-bg">Strictement nécessaires</p>
                            <p className="mt-0.5 text-xs text-text-muted">
                              Indispensables au fonctionnement du site (toujours actifs).
                            </p>
                          </div>
                          <span
                            className="relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border border-primary-green/40 bg-primary-green/90 opacity-90"
                            aria-label="Toujours activé"
                          >
                            <span className="inline-block h-5 w-5 translate-x-6 transform rounded-full bg-white shadow" />
                          </span>
                        </div>
                        {optionalCategories.map(({ key, label, description }) => (
                          <div
                            key={key}
                            className="flex items-start justify-between gap-4 rounded-xl border border-dark-border/10 bg-white/60 px-4 py-3 backdrop-blur-sm"
                          >
                            <div>
                              <p className="text-sm font-semibold text-dark-bg">{label}</p>
                              <p className="mt-0.5 text-xs text-text-muted">{description}</p>
                            </div>
                            <button
                              type="button"
                              role="switch"
                              aria-checked={prefs[key]}
                              onClick={() => setPrefs((p) => ({ ...p, [key]: !p[key] }))}
                              className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(45,45%,96%)] ${
                                prefs[key]
                                  ? 'border-primary-green/40 bg-primary-green/90'
                                  : 'border-dark-border/40 bg-white'
                              }`}
                            >
                              <span
                                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                                  prefs[key] ? 'translate-x-6' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          </div>
                        ))}
                      </div>
                      <p className="text-[11px] text-text-muted">
                        Les cookies essentiels ne peuvent pas être désactivés. Vous pouvez modifier vos choix à tout
                        moment en effaçant les données du site pour ce domaine dans votre navigateur.
                      </p>
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={applyCustom}
                        className="w-full rounded-full border border-gold-premium/60 bg-gold-premium/15 px-5 py-2.5 text-sm font-bold text-dark-bg transition hover:bg-gold-premium/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-premium focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(45,45%,96%)]"
                      >
                        Enregistrer mes choix
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
