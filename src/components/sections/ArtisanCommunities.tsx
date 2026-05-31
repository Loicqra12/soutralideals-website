import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, Store, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Button } from '../ui/Button';
import prestatairesImage from '../../assets/images/community/members/members-prestataires-category.png';
import freelancesImage from '../../assets/images/community/members/members-freelances-category.png';
import vendeursImage from '../../assets/images/community/members/members-vendeurs-category.png';
import agentsImage from '../../assets/images/community/members/members-agents-category.png';

const WHATSAPP_URL = 'https://chat.whatsapp.com/JnPGnE5qAFPLTg5foFozm5';

const jobs = {
  Artisans: {
    jobs: [
      'Plombier',
      'Électricien',
      'Menuisier',
      'Mécanicien',
      'Peintre',
      'Coiffeur',
      'Couturier',
      'Maçon',
      'Frigoriste',
      'Vitrier',
    ],
    image: prestatairesImage,
    label: 'Prestataires & Artisans',
    metiersCount: '250',
    metiersLabel: 'métiers prestataires & artisans',
    description:
      "Plombiers, électriciens, mécaniciens, coiffeurs, couturiers… Professionnalisez votre activité et développez votre clientèle sur la plateforme.",
    accent: 'from-primary-green to-emerald-600',
    icon: Briefcase,
  },
  Freelances: {
    jobs: [
      'Développeur Web',
      'Graphiste',
      'Rédacteur',
      'Community Manager',
      'Photographe',
      'Monteur Vidéo',
      'Traducteur',
      'Consultant',
      'Coach',
      'Architecte',
    ],
    image: freelancesImage,
    label: 'Freelances IT & Créatifs',
    metiersCount: '170',
    metiersLabel: 'métiers freelance',
    description:
      'Développeurs, designers, marketeurs et consultants collaborent sur des projets innovants et montent en compétences au sein du réseau.',
    accent: 'from-primary-blue to-cyan-500',
    icon: Sparkles,
  },
  Commerce: {
    jobs: [
      'Vendeur Mode',
      'Électronique',
      'Cosmétique',
      'Alimentation',
      'Immobilier',
      'Véhicules',
      'Mobilier',
      'Accessoires',
      'Livreur',
      'Grossiste',
    ],
    image: vendeursImage,
    label: 'Vendeurs & Entrepreneurs',
    metiersCount: '120+',
    metiersLabel: 'métiers commerce & vente',
    description:
      'E-commerçants et boutiques créent leur vitrine, gèrent leurs ventes et développent leur business avec nos outils intégrés.',
    accent: 'from-gold-premium to-amber-600',
    icon: Store,
  },
} as const;

type Category = keyof typeof jobs;

const HASH_TO_TAB: Record<string, Category> = {
  artisans: 'Artisans',
  freelances: 'Freelances',
  commercants: 'Commerce',
};

const TAB_ORDER: Category[] = ['Artisans', 'Freelances', 'Commerce'];

const TAB_IDS: Record<Category, string> = {
  Artisans: 'membres-tab-artisans',
  Freelances: 'membres-tab-freelances',
  Commerce: 'membres-tab-commerce',
};

const MEMBRES_PANEL_ID = 'membres-tabpanel';
const PROFILE_CYCLE_MS = 7000;

/** Attributs tab pour analyseurs statiques (valeurs littérales true/false) */
function membresTabA11y(selected: boolean, tabId: string) {
  return selected
    ? ({
        id: tabId,
        'aria-selected': 'true',
        'aria-controls': MEMBRES_PANEL_ID,
        tabIndex: 0,
      } as const)
    : ({
        id: tabId,
        'aria-selected': 'false',
        'aria-controls': MEMBRES_PANEL_ID,
        tabIndex: -1,
      } as const);
}

/** Texte secondaire lisible sur #080a0f (~5:1+) */
const TEXT_MUTED = 'text-[#b8c2d0]';
const TEXT_BODY = 'text-[#d8dee8]';

function getTabFromHash(): Category {
  if (typeof window === 'undefined') return 'Artisans';
  const tab = HASH_TO_TAB[window.location.hash.replace('#', '')];
  return tab ?? 'Artisans';
}

export const ArtisanCommunities = () => {
  const [activeTab, setActiveTab] = useState<Category>(getTabFromHash);
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(true);
  const reduced = useReducedMotion();
  const active = jobs[activeTab];
  const ActiveIcon = active.icon;
  const sectionRef = useRef<HTMLElement>(null);

  const selectProfile = useCallback((tab: Category) => {
    setActiveTab(tab);
  }, []);

  useEffect(() => {
    const onHashChange = () => setActiveTab(getTabFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const updateVisibility = (entry?: IntersectionObserverEntry) => {
      if (entry) {
        setIsInView(entry.isIntersecting);
        return;
      }
      const rect = node.getBoundingClientRect();
      setIsInView(rect.top < window.innerHeight && rect.bottom > 0);
    };

    const observer = new IntersectionObserver(([entry]) => updateVisibility(entry), {
      threshold: 0.1,
      rootMargin: '40px 0px',
    });
    observer.observe(node);
    updateVisibility();
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || !isInView) return;

    const startedAt = performance.now();

    const progressTimer = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;
      setProgress(Math.min((elapsed / PROFILE_CYCLE_MS) * 100, 100));
    }, 32);

    const switchTimer = window.setTimeout(() => {
      setActiveTab((current) => {
        const index = TAB_ORDER.indexOf(current);
        return TAB_ORDER[(index + 1) % TAB_ORDER.length];
      });
    }, PROFILE_CYCLE_MS);

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(switchTimer);
    };
  }, [activeTab, isInView, reduced]);

  return (
    <section
      ref={sectionRef}
      id="artisans"
      className="relative scroll-mt-28 overflow-hidden border-y border-[#1c1f28] bg-[#080a0f] py-14 md:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-primary-green/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute -right-1/4 bottom-0 h-[360px] w-[360px] rounded-full bg-primary-blue/[0.06] blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <motion.div
          className="overflow-hidden rounded-2xl border border-[#2a3140] bg-[#0c0f14] shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:rounded-3xl"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="grid lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:items-stretch">
            <aside className="flex flex-col border-b border-[#2a3140] p-6 md:p-8 lg:border-b-0 lg:border-r">
              <h2 className="font-heading text-3xl font-bold leading-[1.12] tracking-[-0.02em] text-white md:text-4xl">
                Les Membres de la{' '}
                <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
                  Communauté
                </span>
              </h2>
              <p className={`mt-4 text-base leading-relaxed md:text-lg ${TEXT_BODY}`}>
                Tous les métiers sont bienvenus. Quel que soit votre savoir-faire, il y a une place pour vous sur
                Soutrali Deals.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="sm:flex-1 lg:flex-none xl:flex-1">
                  <Button
                    variant="ghost"
                    className="h-12 w-full rounded-xl border border-[#25D366]/55 bg-gradient-to-r from-[#25D366] to-[#1fb158] text-sm font-semibold text-white hover:bg-[#20BA5A]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Rejoindre WhatsApp
                  </Button>
                </a>
                <Link to="/contact" className="sm:flex-1 lg:flex-none xl:flex-1">
                  <Button variant="outline" className="h-12 w-full rounded-xl border-white/30 text-sm text-white hover:bg-white/10">
                    Je m&apos;inscris
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <p className={`mt-6 text-sm ${TEXT_MUTED}`}>
                <span className="font-semibold text-white">420+ métiers</span> répartis sur la plateforme ·{' '}
                <span className="font-semibold text-white">400+</span> membres actifs
              </p>

              <div
                className="mt-6 flex flex-1 flex-col max-lg:flex-row max-lg:gap-0 max-lg:overflow-x-auto max-lg:pb-1 max-lg:[-ms-overflow-style:none] max-lg:[scrollbar-width:none] lg:min-h-[220px] max-lg:[&::-webkit-scrollbar]:hidden"
                role="tablist"
                aria-label="Catégories de membres"
              >
                {TAB_ORDER.map((tab) => {
                  const data = jobs[tab];
                  const Icon = data.icon;
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      {...membresTabA11y(isActive, TAB_IDS[tab])}
                      onClick={() => selectProfile(tab)}
                      className={`flex min-w-[min(100%,280px)] shrink-0 flex-col text-left transition-colors lg:min-w-0 lg:flex-1 lg:shrink ${
                        isActive ? 'text-white' : 'text-[#e2e8f0] hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-3 px-1 py-4 lg:px-0 lg:py-5">
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                            isActive
                              ? 'border-primary-green/40 bg-primary-green/15'
                              : 'border-white/12 bg-white/[0.06]'
                          }`}
                        >
                          <Icon className={`h-5 w-5 ${isActive ? 'text-primary-green' : 'text-[#9aa8b8]'}`} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className={`block text-sm font-semibold leading-snug ${isActive ? 'text-white' : ''}`}>
                            {data.label}
                          </span>
                          <span className={`mt-0.5 block text-xs ${isActive ? 'text-[#c5d4e4]' : TEXT_MUTED}`}>
                            {data.metiersCount} {data.metiersLabel}
                          </span>
                        </span>
                      </span>

                      <span className="relative block w-full" aria-hidden>
                        <span className="block h-px w-full bg-white/12" />
                        {isActive && (
                          <span className="absolute inset-x-0 top-0 block h-1.5 -translate-y-1/2 overflow-hidden bg-white/10">
                            {!reduced && (
                              <span
                                className="block h-full rounded-full bg-white"
                                style={{ width: `${progress}%` }}
                              />
                            )}
                          </span>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div
              id={MEMBRES_PANEL_ID}
              role="tabpanel"
              aria-labelledby={TAB_IDS[activeTab]}
              className="flex min-h-0 min-w-0 flex-col lg:min-h-full"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  className="flex min-h-full flex-1 flex-col"
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`border-b border-[#2a3140] bg-gradient-to-br ${active.accent} p-6 md:p-8`}>
                    <div className="flex flex-wrap items-end justify-between gap-4 rounded-xl bg-[#0a0c12]/75 p-5 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${active.accent} shadow-lg`}
                        >
                          <ActiveIcon className="h-6 w-6 text-white" />
                        </span>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#c5d0de]">
                            Profil sélectionné
                          </p>
                          <p className="text-lg font-bold text-white md:text-xl">{active.label}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-heading text-4xl font-bold text-white md:text-5xl">{active.metiersCount}</p>
                        <p className="mt-0.5 text-sm font-medium text-[#d0dae6]">{active.metiersLabel}</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative aspect-[16/9] max-h-[240px] w-full shrink-0 overflow-hidden border-b border-[#2a3140] lg:max-h-[260px]">
                    <img src={active.image} alt={active.label} className="h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f14] via-transparent to-transparent" />
                  </div>

                  <div className="border-b border-[#2a3140] px-5 py-5 md:px-7 md:py-6">
                    <p className={`text-base leading-relaxed md:text-lg ${TEXT_BODY}`}>{active.description}</p>
                  </div>

                  <div className="flex flex-1 flex-col px-5 py-5 md:px-7 md:py-6">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#9aa8b8]">
                      Exemples de métiers
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {active.jobs.map((job, index) => (
                        <motion.li
                          key={job}
                          initial={reduced ? false : { opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.02 }}
                          className="rounded-full border border-[#2f3848] bg-[#12161f] px-3.5 py-2 text-sm font-medium text-[#e2e8f0]"
                        >
                          {job}
                        </motion.li>
                      ))}
                      <li className={`rounded-full border border-dashed border-[#3a4558] px-3.5 py-2 text-sm ${TEXT_MUTED}`}>
                        et bien d&apos;autres…
                      </li>
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-col gap-3 border-t border-[#2a3140] bg-[#0a0c12]/80 px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-7">
                    <p className={`text-sm ${TEXT_MUTED}`}>
                      Vous exercez l&apos;un de ces métiers ? Rejoignez la communauté dès aujourd&apos;hui.
                    </p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="shrink-0">
                      <Button variant="secondary" size="sm" className="w-full sm:w-auto">
                        Rejoindre la communauté
                      </Button>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="border-t border-[#2a3140] bg-[#0a0c12]/60 p-6 md:p-8">
            <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-8">
              <div className="flex flex-col justify-center">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-green/30 bg-primary-green/15">
                    <MapPin className="h-5 w-5 text-primary-green" />
                  </span>
                  <h3 className="text-xl font-bold text-white">Agents de recensement</h3>
                </div>
                <p className={`text-sm leading-relaxed md:text-base ${TEXT_BODY}`}>
                  Acteurs terrain qui construisent notre base de prestataires et connectent les talents aux opportunités
                  en Côte d&apos;Ivoire.
                </p>
              </div>
              <div className="min-h-[180px] overflow-hidden rounded-xl border border-[#2a3140] md:min-h-[200px]">
                <img
                  src={agentsImage}
                  alt="Agents de recensement"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
