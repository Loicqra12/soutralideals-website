import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export const SEO = ({ title, description, canonical }: SEOProps) => {
  const siteTitle = 'Soutrali Deals';
  const fullTitle = `${title} | ${siteTitle}`;

  // Déterminer l'URL canonique (par défaut l'URL courante si non fournie, mais ici simplifiée)
  // Dans une vraie app, on utiliserait window.location.href ou une prop

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      {/* <meta property="og:image" content="/og-image.jpg" />  TODO: Ajouter une image OG par défaut */}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content="/og-image.jpg" /> */}

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};
