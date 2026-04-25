import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';

export const NotFoundPage = () => {
  return (
    <>
      <SEO title="Page introuvable" description="La page demandée est introuvable." />
      <section className="pt-32 pb-24 min-h-[70vh] flex items-center">
        <div className="container-custom text-center">
          <p className="text-gold-premium font-bold mb-3">Erreur 404</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Page introuvable
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto mb-10">
            Le lien que vous avez suivi n'existe pas ou a été déplacé.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-gold-premium text-black hover:opacity-90 transition-opacity"
          >
            Retour à l'accueil
          </Link>
        </div>
      </section>
    </>
  );
};
