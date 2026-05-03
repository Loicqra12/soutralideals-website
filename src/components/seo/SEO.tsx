import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const DEFAULT_SITE_URL = 'https://www.soutralideals.com';

function normalizeSiteUrl(url: string): string {
  return url.replace(/\/$/, '');
}

function absoluteUrl(siteUrl: string, pathOrUrl: string): string {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }
  const base = normalizeSiteUrl(siteUrl);
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${path}`;
}

interface SEOProps {
  title: string;
  description: string;
  /** URL absolue ou chemin commençant par / (optionnel : défaut = page courante) */
  canonical?: string;
  /** Image OG absolue ou chemin /... (défaut : /og-default.png, généré au build si absent) */
  ogImage?: string;
  noIndex?: boolean;
}

export const SEO = ({ title, description, canonical, ogImage, noIndex }: SEOProps) => {
  const { pathname } = useLocation();
  const siteTitle = 'Soutrali Deals';
  const fullTitle = `${title} | ${siteTitle}`;

  const siteUrl = normalizeSiteUrl(
    (import.meta.env.VITE_SITE_URL as string | undefined) || DEFAULT_SITE_URL
  );
  const canonicalHref = canonical
    ? absoluteUrl(siteUrl, canonical)
    : `${siteUrl}${pathname === '/' ? '' : pathname}`;
  const ogImageUrl = absoluteUrl(siteUrl, ogImage ?? '/og-default.png');

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <link rel="canonical" href={canonicalHref} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalHref} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:locale" content="fr_FR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Helmet>
  );
};
