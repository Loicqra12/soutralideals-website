export const STORAGE_SITE_LANG_KEY = 'sd-site-lang-v1';
export const STORAGE_SITE_CURRENCY_KEY = 'sd-site-currency-v1';
export const SITE_LANG_EVENT = 'sd-site-lang-changed';
export const SITE_CURRENCY_EVENT = 'sd-site-currency-changed';

export type SiteLang = 'fr' | 'en';
export type SiteCurrency = 'XOF' | 'EUR';

function dispatchLang(lang: SiteLang) {
  window.dispatchEvent(new CustomEvent<SiteLang>(SITE_LANG_EVENT, { detail: lang }));
}

function dispatchCurrency(currency: SiteCurrency) {
  window.dispatchEvent(new CustomEvent<SiteCurrency>(SITE_CURRENCY_EVENT, { detail: currency }));
}

export function readSiteLang(): SiteLang {
  try {
    const v = localStorage.getItem(STORAGE_SITE_LANG_KEY)?.trim().toLowerCase();
    return v === 'en' ? 'en' : 'fr';
  } catch {
    return 'fr';
  }
}

export function writeSiteLang(lang: SiteLang): void {
  try {
    localStorage.setItem(STORAGE_SITE_LANG_KEY, lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'fr';
    dispatchLang(lang);
  } catch {
    /* ignore quota / private mode */
  }
}

export function readSiteCurrency(): SiteCurrency {
  try {
    const v = localStorage.getItem(STORAGE_SITE_CURRENCY_KEY)?.trim().toUpperCase();
    return v === 'EUR' ? 'EUR' : 'XOF';
  } catch {
    return 'XOF';
  }
}

export function writeSiteCurrency(currency: SiteCurrency): void {
  try {
    localStorage.setItem(STORAGE_SITE_CURRENCY_KEY, currency);
    dispatchCurrency(currency);
  } catch {
    /* ignore */
  }
}

export function syncDocumentLangFromStorage(): void {
  document.documentElement.lang = readSiteLang() === 'en' ? 'en' : 'fr';
}
