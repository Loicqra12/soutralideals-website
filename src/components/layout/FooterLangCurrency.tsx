import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  readSiteCurrency,
  readSiteLang,
  SITE_CURRENCY_EVENT,
  SITE_LANG_EVENT,
  STORAGE_SITE_CURRENCY_KEY,
  STORAGE_SITE_LANG_KEY,
  writeSiteCurrency,
  writeSiteLang,
  type SiteCurrency,
  type SiteLang,
} from '../../lib/localeCurrencyPreferences';

function flagSrc(lang: SiteLang): string {
  const code = lang === 'fr' ? 'fr' : 'gb';
  const base = import.meta.env.BASE_URL || '/';
  return `${base}flags/${code}.svg`;
}

const selectLangCls =
  'h-10 w-[min(100%,13.5rem)] cursor-pointer appearance-none rounded-full border border-white/12 bg-white/[0.06] py-2 pl-[2.95rem] pr-9 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/90 outline-none transition hover:border-primary-blue/40 hover:bg-white/[0.09] focus-visible:border-primary-green/45 focus-visible:ring-2 focus-visible:ring-primary-blue/35';

const selectCurrencyCls =
  'h-10 w-[min(100%,13.5rem)] cursor-pointer appearance-none rounded-full border border-white/12 bg-white/[0.06] py-2 pl-[2.95rem] pr-9 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/90 outline-none transition hover:border-primary-blue/40 hover:bg-white/[0.09] focus-visible:border-primary-green/45 focus-visible:ring-2 focus-visible:ring-primary-blue/35';

export const FooterLangCurrency = () => {
  const [lang, setLang] = useState<SiteLang>(() => readSiteLang());
  const [currency, setCurrency] = useState<SiteCurrency>(() => readSiteCurrency());

  useEffect(() => {
    const onLangEvt = () => setLang(readSiteLang());
    const onCurrEvt = () => setCurrency(readSiteCurrency());
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_SITE_LANG_KEY) setLang(readSiteLang());
      if (e.key === STORAGE_SITE_CURRENCY_KEY) setCurrency(readSiteCurrency());
    };
    window.addEventListener(SITE_LANG_EVENT, onLangEvt);
    window.addEventListener(SITE_CURRENCY_EVENT, onCurrEvt);
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener(SITE_LANG_EVENT, onLangEvt);
      window.removeEventListener(SITE_CURRENCY_EVENT, onCurrEvt);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  const langTitle = lang === 'fr' ? 'Français' : 'English (Royaume-Uni)';

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-3 sm:justify-end"
      role="group"
      aria-label="Préférences régionales"
    >
      <div className="relative inline-flex shrink-0">
        <span
          className="pointer-events-none absolute left-2 top-1/2 z-[1] flex h-[1.625rem] w-[2.125rem] -translate-y-1/2 overflow-hidden rounded border border-white/20 shadow-sm shadow-black/40"
          aria-hidden
          title={langTitle}
        >
          <img
            src={flagSrc(lang)}
            alt=""
            width={34}
            height={26}
            className="h-full w-full object-cover"
            decoding="async"
            loading="lazy"
          />
        </span>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 z-[1] h-3.5 w-3.5 -translate-y-1/2 text-white/45" aria-hidden />
        <label htmlFor="footer-site-lang" className="sr-only">
          Langue du site
        </label>
        <select
          id="footer-site-lang"
          className={selectLangCls}
          value={lang}
          onChange={(e) => {
            const v = e.target.value === 'en' ? 'en' : 'fr';
            writeSiteLang(v);
            setLang(v);
          }}
        >
          <option value="fr">FR — Français</option>
          <option value="en">EN — English</option>
        </select>
      </div>

      <div className="relative inline-flex shrink-0">
        <span
          className={`pointer-events-none absolute left-2 top-1/2 z-[1] flex h-6 -translate-y-1/2 items-center justify-center rounded border border-gold-premium/35 bg-[#0a1020]/95 shadow-sm shadow-black/30 ${
            currency === 'EUR' ? 'w-7 px-1' : 'min-w-[1.95rem] px-1.5'
          }`}
          aria-hidden
          title={currency === 'EUR' ? 'Euro' : 'Franc CFA (BCEAO)'}
        >
          {currency === 'EUR' ? (
            <span className="text-[0.9375rem] font-semibold leading-none tracking-tight text-gold-premium">€</span>
          ) : (
            <span className="font-heading text-[0.5625rem] font-bold uppercase leading-none tracking-[0.05em] text-gold-premium">
              CFA
            </span>
          )}
        </span>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 z-[1] h-3.5 w-3.5 -translate-y-1/2 text-white/45" aria-hidden />
        <label htmlFor="footer-site-currency" className="sr-only">
          Devise d&apos;affichage
        </label>
        <select
          id="footer-site-currency"
          className={selectCurrencyCls}
          value={currency}
          onChange={(e) => {
            const v = e.target.value === 'EUR' ? 'EUR' : 'XOF';
            writeSiteCurrency(v);
            setCurrency(v);
          }}
        >
          <option value="XOF">XOF — CFA</option>
          <option value="EUR">EUR — Euro</option>
        </select>
      </div>
    </div>
  );
};
