import type { ReactNode } from 'react';
import { SEO } from '../components/seo/SEO';
import { Link } from 'react-router-dom';

function LegalSection({
  id,
  title,
  accent,
  children,
}: {
  id: string;
  title: string;
  accent?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-b border-dark-border bg-dark-bg py-14 last:border-b-0">
      <div className="container-custom max-w-3xl">
        <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">
          {accent ? (
            <>
              {title} <span className="text-gold-premium">{accent}</span>
            </>
          ) : (
            title
          )}
        </h2>
        <div className="space-y-4 text-text-secondary leading-relaxed">{children}</div>
      </div>
    </section>
  );
}

export const InformationsLegalesPage = () => {
  return (
    <>
      <SEO
        title="Informations légales"
        description="Mentions légales, politique de confidentialité, cookies, CGV, CGU et autres documents Soutrali Deals."
        breadcrumbs={[
          { name: 'Accueil', path: '/' },
          { name: 'Informations légales', path: '/informations-legales' },
        ]}
      />
      <div className="border-b border-dark-border bg-gradient-to-b from-dark-card to-dark-bg pt-24 pb-12">
        <div className="container-custom max-w-3xl">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-blue/80">Légal</p>
          <h1 id="informations-legales" className="scroll-mt-28 font-heading text-4xl font-bold text-white md:text-5xl">
            Informations <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">légales</span>
          </h1>
          <p className="mt-4 max-w-2xl text-text-secondary leading-relaxed">
            Retrouvez ici les informations relatives à l&apos;éditeur du site, à la protection des données, aux cookies
            et aux conditions d&apos;utilisation des services présentés sur soutralideals.com.
          </p>
          <p className="mt-3 text-sm text-text-muted">
            Ces contenus sont fournis à titre informatif et pourront être mis à jour. Pour toute demande, utilisez la{' '}
            <Link to="/contact" className="font-semibold text-primary-blue underline-offset-4 hover:underline">
              page Contact
            </Link>
            .
          </p>
        </div>
      </div>

      <LegalSection id="mentions-legales" title="Mentions" accent="légales">
        <p>
          <strong className="text-white">Éditeur du site :</strong> Soutrali Deals (informations société à compléter :
          forme juridique, capital social, siège social, RCS, TVA intracommunautaire).
        </p>
        <p>
          <strong className="text-white">Directeur de la publication :</strong> à compléter.
        </p>
        <p>
          <strong className="text-white">Hébergement :</strong> à compléter (prestataire, adresse, contact).
        </p>
        <p>
          <strong className="text-white">Contact :</strong>{' '}
          <Link to="/contact" className="font-semibold text-primary-blue underline-offset-4 hover:underline">
            formulaire de contact
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection id="politique-confidentialite" title="Politique de" accent="confidentialité">
        <p>
          Soutrali Deals s&apos;engage à traiter vos données personnelles dans le respect du RGPD et de la législation
          applicable. Les finalités de traitement, les bases légales, les durées de conservation et vos droits
          (accès, rectification, effacement, limitation, opposition, portabilité, réclamation auprès d&apos;une autorité
          de contrôle) seront détaillés dans une version complète de cette politique.
        </p>
        <p>
          Pour exercer vos droits :{' '}
          <Link to="/contact" className="font-semibold text-primary-blue underline-offset-4 hover:underline">
            nous écrire via la page Contact
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection id="politique-cookies" title="Politique de" accent="cookies">
        <p>
          Les cookies nous permettent de faire fonctionner le site (cookies strictement nécessaires), d&apos;en
          mesurer l&apos;audience et, avec votre accord, d&apos;améliorer votre expérience (fonctionnalité, mesure,
          marketing).
        </p>
        <p>
          Vous pouvez à tout moment modifier vos choix via le lien &laquo; Gérer mes cookies &raquo; en pied de page ou
          via les paramètres de votre navigateur.
        </p>
      </LegalSection>

      <LegalSection id="cgv" title="Conditions" accent="générales de vente (CGV)">
        <p>
          Les présentes CGV encadrent les relations contractuelles entre Soutrali Deals et ses clients pour les
          prestations et offres commercialisées sur la plateforme. Une version détaillée (commande, prix, paiement,
          livrance, rétractation, litiges) sera publiée ici.
        </p>
      </LegalSection>

      <LegalSection id="conditions-utilisation" title="Conditions" accent={"d'utilisation"}>
        <p>
          L&apos;accès et l&apos;utilisation du site impliquent l&apos;acceptation des présentes conditions. Elles
          définissent les règles d&apos;usage des contenus, des comptes utilisateurs le cas échéant, et les limitations
          de responsabilité applicables.
        </p>
      </LegalSection>

      <LegalSection id="cgu" title="Conditions" accent={"générales d'utilisation (CGU)"}>
        <p>
          Les CGU complètent les conditions d&apos;utilisation pour les services numériques proposés par Soutrali
          Deals (création de compte, obligations des utilisateurs, suspension de compte, propriété des contenus
          publiés par les utilisateurs, etc.).
        </p>
      </LegalSection>

      <LegalSection id="propriete-intellectuelle" title="Propriété" accent="intellectuelle">
        <p>
          L&apos;ensemble des éléments du site (textes, visuels, logos, charte graphique, structure, code) est protégé
          par le droit de la propriété intellectuelle. Toute reproduction ou représentation non autorisée est
          interdite.
        </p>
      </LegalSection>

      <LegalSection id="accessibilite" title="Déclaration" accent={"d'accessibilité"}>
        <p>
          Soutrali Deals vise à rendre ses services numériques accessibles au plus grand nombre. Une déclaration
          conforme au référentiel en vigueur (RGAA / WCAG) sera publiée ici, avec les éventuelles non-conformités et
          les alternatives proposées.
        </p>
      </LegalSection>

      <LegalSection id="contact-reclamation" title="Contact" accent="/ réclamation">
        <p>
          Pour toute question, réclamation ou demande relative à vos données :{' '}
          <Link to="/contact" className="font-semibold text-primary-blue underline-offset-4 hover:underline">
            page Contact
          </Link>
          .
        </p>
      </LegalSection>
    </>
  );
};
