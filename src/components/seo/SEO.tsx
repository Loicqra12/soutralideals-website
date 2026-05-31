import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const DEFAULT_SITE_URL = 'https://www.soutralideals.com';
const SITE_NAME = 'Soutrali Deals';

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

export interface BreadcrumbItem {
  /** Libellé affiché */
  name: string;
  /** Chemin (/...) ou URL absolue */
  path: string;
}

interface SEOProps {
  title: string;
  description: string;
  /** URL absolue ou chemin commençant par / (optionnel : défaut = page courante) */
  canonical?: string;
  /** Image OG absolue ou chemin /... (défaut : /og-default.png, généré au build si absent) */
  ogImage?: string;
  noIndex?: boolean;
  /** Mots-clés (optionnel) */
  keywords?: string[];
  /** Type Open Graph : 'website' (défaut) ou 'article' */
  type?: 'website' | 'article';
  /** Fil d'ariane pour le JSON-LD BreadcrumbList */
  breadcrumbs?: BreadcrumbItem[];
}

export const SEO = ({
  title,
  description,
  canonical,
  ogImage,
  noIndex,
  keywords,
  type = 'website',
  breadcrumbs,
}: SEOProps) => {
  const { pathname } = useLocation();
  const fullTitle = `${title} | ${SITE_NAME}`;

  const siteUrl = normalizeSiteUrl(
    (import.meta.env.VITE_SITE_URL as string | undefined) || DEFAULT_SITE_URL,
  );
  const canonicalHref = canonical
    ? absoluteUrl(siteUrl, canonical)
    : `${siteUrl}${pathname === '/' ? '' : pathname}`;
  const ogImageUrl = absoluteUrl(siteUrl, ogImage ?? '/og-default.png');
  const isHome = pathname === '/';

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: siteUrl,
    logo: absoluteUrl(siteUrl, '/brand/logo.png'),
    description:
      'Écosystème digital ivoirien : plateforme et agence pour artisans, freelances, commerçants et entreprises en Côte d’Ivoire.',
    areaServed: 'CI',
    sameAs: [] as string[],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: siteUrl,
    inLanguage: 'fr-FR',
  };

  const breadcrumbJsonLd =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: absoluteUrl(siteUrl, item.path),
          })),
        }
      : null;

  return (
    <Helmet>
      <html lang="fr" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {noIndex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow,max-image-preview:large" />
      )}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta charSet="utf-8" />

      <link rel="canonical" href={canonicalHref} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalHref} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:alt" content={`${SITE_NAME} — ${title}`} />
      <meta property="og:locale" content="fr_FR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
      {isHome && (
        <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
      )}
      {breadcrumbJsonLd && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      )}
    </Helmet>
  );
};
