import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import { FinalCTA } from '../components/sections/FinalCTA';
import {
  Mail,
  MapPin,
  Clock,
  Phone,
  Send,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  AlertCircle,
  Check,
  Instagram,
  Linkedin,
  Twitter,
  ExternalLink,
} from 'lucide-react';
import contactHeroBanner from '../assets/images/contact_hero_banner.png';

// ── Types ─────────────────────────────────────────────────────────────────────
interface ContactForm {
  name: string;
  email: string;
  phone: string;
  website: string;
  subject: string;
  message: string;
  consent: boolean;
}

const INITIAL_FORM: ContactForm = {
  name: '',
  email: '',
  phone: '',
  website: '',
  subject: '',
  message: '',
  consent: false,
};

const SUBJECTS = [
  'Demande de devis',
  'Proposition de partenariat',
  'Support technique',
  'Renseignements généraux',
  'Autre',
] as const;

const STEPS = [
  { id: 1, label: 'Coordonnées' },
  { id: 2, label: 'Message' },
] as const;

// ── Styles partagés — thème clair ─────────────────────────────────────────────
const fieldClass =
  'w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-500 transition-colors focus:border-primary-green focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-green/30';

const selectStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23555555' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat' as const,
  backgroundPosition: 'right 1rem center' as const,
  paddingRight: '2.5rem',
};

// ── Validation ────────────────────────────────────────────────────────────────
function validateStep(step: number, form: ContactForm): string | null {
  if (step === 1) {
    if (!form.name.trim() || form.name.trim().length < 2)
      return 'Votre nom complet est requis (2 caractères minimum).';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return 'Veuillez saisir une adresse email valide.';
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 8)
      return 'Un numéro de téléphone / WhatsApp valide est requis.';
  }
  if (step === 2) {
    if (!form.subject) return 'Veuillez sélectionner un sujet.';
    if (!form.message.trim() || form.message.trim().length < 20)
      return 'Votre message doit contenir au moins 20 caractères.';
    if (!form.consent)
      return "Vous devez accepter notre politique de confidentialité pour envoyer votre message.";
  }
  return null;
}

// ── Barre de progression ──────────────────────────────────────────────────────
function StepProgress({ current }: { current: number }) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-green">
          Étape {current} / {STEPS.length}
        </span>
        <span className="text-xs font-semibold text-gray-700">
          {STEPS[current - 1].label}
        </span>
      </div>
      <div className="relative h-1 w-full overflow-hidden rounded-full bg-gray-100">
        {/* Gradient conservé — écriture mélangée intentionnelle */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary-green to-primary-blue"
          initial={false}
          animate={{ width: `${(current / STEPS.length) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      </div>
      <div className="mt-3 flex gap-2">
        {STEPS.map((s) => (
          <div
            key={s.id}
            className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold transition-all duration-300 ${
              s.id < current
                ? 'bg-primary-green text-[#062013]'
                : s.id === current
                  ? 'border-2 border-primary-green text-primary-green'
                  : 'border border-gray-200 text-gray-600 font-semibold'
            }`}
          >
            {s.id < current ? <Check className="h-3 w-3" /> : s.id}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Étape 1 — Coordonnées ─────────────────────────────────────────────────────
function Step1({
  form,
  onChange,
}: {
  form: ContactForm;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-heading text-xl font-bold text-gray-900">Vos coordonnées</h3>
        <p className="mt-1 text-sm text-gray-700 font-medium">
          Uniquement pour vous répondre. Aucun démarchage.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="c-name" className="text-sm font-medium text-gray-600">
            Nom complet <span className="text-primary-green">*</span>
          </label>
          <input
            id="c-name" name="name" type="text" required
            value={form.name} onChange={onChange}
            className={fieldClass} autoComplete="name"
            placeholder="Jean-Baptiste Koné"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="c-email" className="text-sm font-medium text-gray-600">
            Email <span className="text-primary-green">*</span>
          </label>
          <input
            id="c-email" name="email" type="email" required
            value={form.email} onChange={onChange}
            className={fieldClass} autoComplete="email"
            placeholder="jean@entreprise.ci"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="c-phone" className="text-sm font-medium text-gray-600">
            WhatsApp / Téléphone <span className="text-primary-green">*</span>
          </label>
          <input
            id="c-phone" name="phone" type="tel" required
            value={form.phone} onChange={onChange}
            className={fieldClass} autoComplete="tel"
            placeholder="+225 07 00 00 00 00"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="c-website" className="text-sm font-medium text-gray-600">
            Site internet{' '}
            <span className="text-gray-500 font-medium">(facultatif)</span>
          </label>
          <input
            id="c-website" name="website" type="url"
            value={form.website} onChange={onChange}
            className={fieldClass} autoComplete="url"
            placeholder="https://votresite.ci"
          />
        </div>
      </div>
    </div>
  );
}

// ── Étape 2 — Message ─────────────────────────────────────────────────────────
function Step2({
  form,
  onChange,
  onChangeSelect,
  onToggleConsent,
}: {
  form: ContactForm;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onToggleConsent: () => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-heading text-xl font-bold text-gray-900">Votre message</h3>
        <p className="mt-1 text-sm text-gray-700 font-medium">
          Décrivez votre projet ou votre demande avec le maximum de détails.
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="c-subject" className="text-sm font-medium text-gray-600">
          Sujet <span className="text-primary-green">*</span>
        </label>
        <select
          id="c-subject" name="subject" required
          value={form.subject} onChange={onChangeSelect}
          className={`${fieldClass} appearance-none`}
          style={selectStyle}
        >
          <option value="">Sélectionnez un sujet</option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="c-message" className="text-sm font-medium text-gray-600">
          Message <span className="text-primary-green">*</span>
        </label>
        <textarea
          id="c-message" name="message" rows={5} required
          value={form.message} onChange={onChange}
          className={`${fieldClass} resize-none`}
          placeholder="Décrivez votre projet, vos besoins ou vos questions…"
        />
        <p className="text-right text-xs text-gray-600 font-medium">
          {form.message.length} caractère{form.message.length > 1 ? 's' : ''} · 20 minimum
        </p>
      </div>

      {/* Consentement RGPD */}
      <label className="flex cursor-pointer items-start gap-3">
        <button
          type="button"
          role="checkbox"
          aria-checked={form.consent}
          aria-required="true"
          onClick={onToggleConsent}
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green/60 ${
            form.consent
              ? 'border-primary-green bg-primary-green'
              : 'border-gray-300 bg-transparent hover:border-gray-500'
          }`}
        >
          {form.consent && <Check className="h-3 w-3 text-[#062013]" />}
        </button>
        <span className="text-sm leading-relaxed text-gray-800 font-medium">
          J&apos;accepte d&apos;être recontacté(e) par Soutrali Deals concernant ma demande.{' '}
          <Link
            to="/informations-legales#politique-confidentialite"
            className="text-primary-green underline-offset-2 hover:underline font-semibold"
          >
            Politique de confidentialité
          </Link>{' '}
          <span className="text-primary-green">*</span>
        </span>
      </label>
    </div>
  );
}

// ── Écran de succès ───────────────────────────────────────────────────────────
function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center py-10 text-center"
    >
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-green/20">
        <CheckCircle2 className="h-10 w-10 text-primary-green" />
      </div>
      <h3 className="font-heading text-2xl font-black text-gray-900">Message envoyé !</h3>
      <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-800 font-medium">
        Notre équipe analyse votre demande et vous répond sous{' '}
        <strong className="text-gray-955 font-black">24 à 48 h ouvrées</strong>.
        Pensez à vérifier vos spams si vous ne recevez pas de réponse.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="https://wa.me/2250700000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#25D366]/90"
        >
          <MessageCircle className="h-4 w-4" /> Discuter sur WhatsApp
        </a>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-gray-400 hover:text-gray-950 hover:bg-gray-50"
        >
          Nouveau message
        </button>
      </div>
    </motion.div>
  );
}

// ── Composant principal ───────────────────────────────────────────────────────
export const ContactPage = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleField = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setError(null);
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    [],
  );

  const goNext = useCallback(() => {
    const err = validateStep(step, form);
    if (err) { setError(err); return; }
    setError(null);
    setDirection(1);
    setStep((s) => Math.min(s + 1, STEPS.length));
  }, [step, form]);

  const goPrev = useCallback(() => {
    setError(null);
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  }, []);

  const handleSubmit = useCallback(async () => {
    const err = validateStep(2, form);
    if (err) { setError(err); return; }
    setIsSubmitting(true);
    /*
     * TODO: Connecter à l'API backend (Firebase Function / EmailJS / Endpoint custom)
     * Exemple : await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) });
     */
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  }, [form]);

  const handleReset = useCallback(() => {
    setIsSubmitted(false);
    setForm(INITIAL_FORM);
    setStep(1);
    setError(null);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  };

  return (
    <>
      <SEO
        title="Contactez-nous"
        description="Contactez l'équipe Soutrali Deals — agence digitale ivoirienne. Réponse sous 24 à 48 h ouvrées. Formulaire, WhatsApp, email ou en personne à Abidjan, Cocody Riviera 2."
        keywords={[
          "contact agence digitale Abidjan",
          "devis site web Côte d'Ivoire",
          'Soutrali Deals contact',
          'agence digitale Côte Ivoire',
        ]}
        breadcrumbs={[
          { name: 'Accueil', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
      />

      {/* Bouton WhatsApp flottant */}
      <a
        href="https://wa.me/2250700000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter sur WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/40 transition hover:scale-110 hover:shadow-[#25D366]/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </a>

      {/* ── PAGE — fond blanc ── */}
      <div className="min-h-screen bg-white pt-24">

        {/* ── HERO ── */}
        <div className="border-b border-gray-100 bg-gray-50">
          <div className="container-custom py-16">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-block rounded-full border border-primary-green/30 bg-primary-green/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-green">
                Réponse sous 48 h ouvrées · WhatsApp disponible
              </span>
              <h1 className="mt-3 font-heading text-5xl font-black leading-tight text-gray-900 md:text-6xl">
                Contactez-{' '}
                {/* Gradient conservé — écriture mélangée */}
                <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
                  nous !
                </span>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-800 font-medium">
                Une question, une idée, un partenariat ?{' '}
                Nous sommes à votre écoute.
              </p>

              {/* Info contact inspirées de la Capture 1 */}
              <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-gray-900">
                <a
                  href="tel:+2250700000000"
                  className="flex items-center gap-3 font-semibold transition hover:text-primary-green"
                >
                  <Phone className="h-5 w-5 text-black shrink-0" />
                  <span className="text-base text-black transition hover:text-primary-green font-bold">+225 07 00 00 00 00</span>
                </a>

                <ChevronRight className="hidden md:block h-5 w-5 text-gray-400 shrink-0" />

                <a
                  href="mailto:contact@soutralideals.com"
                  className="flex items-center gap-3 font-semibold transition hover:text-primary-green"
                >
                  <Mail className="h-5 w-5 text-black shrink-0" />
                  <span className="text-base text-black transition hover:text-primary-green font-bold">contact@soutralideals.com</span>
                </a>

                <ChevronRight className="hidden md:block h-5 w-5 text-gray-400 shrink-0" />

                <a
                  href="#localisation"
                  className="flex items-center gap-3 font-semibold transition hover:text-primary-green text-center md:text-left"
                >
                  <MapPin className="h-5 w-5 text-black shrink-0" />
                  <span className="text-base text-black transition hover:text-primary-green font-bold">Abidjan, Cocody Riviera 2</span>
                </a>
              </div>

              {/* CTA */}
              <div className="mt-7">
                <a
                  href="#formulaire"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-green px-7 py-3.5 text-sm font-bold text-[#062013] shadow-glow-green transition hover:-translate-y-0.5 hover:bg-primary-green/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green/50"
                >
                  Planifier une consultation gratuite
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bannière image hero */}
          <div className="container-custom pb-0">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-t-3xl">
              <img
                src={contactHeroBanner}
                alt="Équipe Soutrali Deals en bureaux à Abidjan"
                className="h-64 w-full object-cover md:h-80"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-50 to-transparent" />
            </div>
          </div>
        </div>

        {/* ── Pour nous joindre ── */}
        <div className="border-b border-gray-100 bg-white py-16">
          <div className="container-custom max-w-6xl">
            <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
              <div className="max-w-lg">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-green">
                  Pour nous joindre
                </span>
                <h2 className="mt-3 font-heading text-3xl font-black text-gray-900 md:text-4xl">
                  Nous sommes là{' '}
                  {/* Gradient conservé — écriture mélangée */}
                  <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
                    pour vous
                  </span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-800 font-medium">
                  Vous souhaitez nous rencontrer, nous proposer un partenariat,
                  soumettre un projet ou tout simplement entrer en relation avec nous ?
                  Remplissez le formulaire ou contactez-nous directement.
                </p>
              </div>
              {/* Indicateurs stats */}
              <div className="hidden grid-cols-2 gap-4 md:grid">
                {[
                  { value: '48h', label: 'Délai de réponse', accent: true },
                  { value: '100%', label: 'Gratuit & sans engagement', accent: false },
                  { value: '3+', label: "Années d'expérience", accent: false },
                  { value: 'CI', label: 'Expertise locale ivoirienne', accent: true },
                ].map(({ value, label, accent }) => (
                  <div
                    key={label}
                    className={`rounded-2xl border px-5 py-4 text-center transition ${
                      accent
                        ? 'border-primary-green/20 bg-primary-green/5 text-primary-green'
                        : 'border-gray-100 bg-gray-50 text-gray-900'
                    }`}
                  >
                    <p className="font-heading text-2xl font-black">{value}</p>
                    <p className="mt-1 text-[11px] font-semibold text-gray-700">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── FORMULAIRE + SIDEBAR ── */}
        <div id="formulaire" className="bg-white py-16 md:py-24">
          <div className="container-custom">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_320px]">

              {/* Colonne formulaire */}
              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
                <div className="mb-8">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-600">
                    Formulaire de contact
                  </p>
                  <h2 className="mt-2 font-heading text-2xl font-black text-gray-900">
                    Envoyez-nous un message
                  </h2>
                  <p className="mt-1 text-sm text-gray-700 font-medium">
                    Le formulaire est traité par notre équipe sous 24 à 48 h ouvrées.
                  </p>
                </div>

                {isSubmitted ? (
                  <SuccessState onReset={handleReset} />
                ) : (
                  <>
                    <StepProgress current={step} />

                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={step}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.22, ease: 'easeInOut' }}
                      >
                        {step === 1 && (
                          <Step1 form={form} onChange={handleField} />
                        )}
                        {step === 2 && (
                          <Step2
                            form={form}
                            onChange={handleField}
                            onChangeSelect={handleField}
                            onToggleConsent={() => {
                              setError(null);
                              setForm((p) => ({ ...p, consent: !p.consent }));
                            }}
                          />
                        )}
                      </motion.div>
                    </AnimatePresence>

                    {/* Message d'erreur */}
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-6 flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-500"
                          role="alert"
                        >
                          <AlertCircle className="h-4 w-4 shrink-0" />
                          {error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className={`mt-8 flex ${step > 1 ? 'justify-between' : 'justify-end'}`}>
                      {step > 1 && (
                        <button
                          type="button"
                          onClick={goPrev}
                          className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-850 transition hover:border-gray-400 hover:text-gray-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-200"
                        >
                          <ChevronLeft className="h-4 w-4" /> Précédent
                        </button>
                      )}

                      {step < STEPS.length ? (
                        <button
                          type="button"
                          onClick={goNext}
                          className="inline-flex items-center gap-2 rounded-full bg-primary-green px-6 py-3 text-sm font-bold text-[#062013] shadow-glow-green transition hover:-translate-y-0.5 hover:bg-primary-green/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green/50"
                        >
                          Suivant <ChevronRight className="h-4 w-4" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          className="inline-flex items-center gap-2 rounded-full bg-primary-green px-7 py-3.5 text-sm font-bold text-[#062013] transition hover:-translate-y-0.5 hover:bg-primary-green/90 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green/50"
                        >
                          {isSubmitting ? (
                            <>
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                className="block h-4 w-4 rounded-full border-2 border-[#062013]/30 border-t-[#062013]"
                              />
                              Envoi en cours…
                            </>
                          ) : (
                            <>
                              Envoyer le message <Send className="h-4 w-4" />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* ── Sidebar ── */}
              <aside className="space-y-4">

                {/* Horaires */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-green/15">
                      <Clock className="h-4 w-4 text-primary-green" />
                    </div>
                    <p className="text-sm font-bold text-gray-900">Horaires d&apos;ouverture</p>
                  </div>
                  <ul className="space-y-2.5 text-sm">
                    {[
                      { day: 'Lundi – Vendredi', hours: '08h00 – 18h00', open: true },
                      { day: 'Samedi', hours: '09h00 – 13h00', open: true },
                      { day: 'Dimanche', hours: 'Fermé', open: false },
                    ].map(({ day, hours, open }) => (
                      <li key={day} className="flex items-center justify-between border-b border-gray-100 pb-2.5 last:border-0 last:pb-0">
                        <span className="text-gray-800 font-medium">{day}</span>
                        <span className={`text-xs font-bold ${open ? 'text-gray-900' : 'text-gray-500'}`}>
                          {hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-[11px] text-gray-600 font-medium">
                    WhatsApp disponible en dehors des horaires.
                  </p>
                </div>

                {/* Contact direct */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-gray-500">
                    Contact direct
                  </p>
                  <a
                    href="https://wa.me/2250700000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-xl bg-[#25D366]/15 px-4 py-3 text-sm font-bold text-[#25D366] transition hover:bg-[#25D366]/25"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Discuter sur WhatsApp
                  </a>
                  <a
                    href="mailto:contact@soutralideals.com"
                    className="mt-2 flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm text-gray-800 font-semibold transition hover:bg-gray-50 hover:text-gray-950"
                  >
                    <Mail className="h-4 w-4 text-gray-900" />
                    contact@soutralideals.com
                  </a>
                </div>

                {/* Réseaux sociaux */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-gray-500">
                    Nos réseaux sociaux
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      {
                        icon: Instagram,
                        label: 'Instagram',
                        href: 'https://www.instagram.com/soutrali_deals/',
                        hover: 'hover:border-pink-200 hover:bg-pink-50 hover:text-pink-500',
                      },
                      {
                        icon: Linkedin,
                        label: 'LinkedIn',
                        href: 'https://ci.linkedin.com/company/soutrali-deals',
                        hover: 'hover:border-primary-green/30 hover:bg-primary-green/10 hover:text-primary-green',
                      },
                      {
                        icon: Twitter,
                        label: 'Twitter/X',
                        href: 'https://x.com/SoutraliDeals',
                        hover: 'hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900',
                      },
                    ].map(({ icon: Icon, label, href, hover }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className={`flex flex-col items-center gap-1.5 rounded-xl border border-gray-200 bg-gray-50 py-3 text-gray-800 transition-all duration-200 ${hover}`}
                      >
                        <Icon className="h-5 w-5 text-gray-900" />
                        <span className="text-[10px] font-bold text-gray-800">{label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Engagement / Garanties */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-gray-500">
                    Nos engagements
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      'Réponse sous 24 à 48 h ouvrées',
                      'Consultation initiale gratuite',
                      'Confidentialité garantie',
                      'Expertise locale ivoirienne',
                    ].map((g) => (
                      <li key={g} className="flex items-center gap-2 text-sm text-gray-800 font-semibold">
                        <Check className="h-3.5 w-3.5 shrink-0 text-primary-green" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* ── SECTION MAPS ── */}
        <div id="localisation" className="border-t border-gray-100 bg-gray-50 py-16 md:py-24">
          <div className="container-custom max-w-6xl">

            {/* En-tête */}
            <div className="mb-12 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-green">
                Localisation
              </span>
              <h2 className="mt-3 font-heading text-3xl font-black text-gray-900 md:text-4xl">
                Nous trouver
              </h2>
              <p className="mt-4 text-base text-gray-800 font-medium">
                Nos bureaux sont situés à Abidjan dans un quartier facilement accessible.
              </p>
            </div>

            {/* Carte + Adresse */}
            <div className="grid gap-6 lg:grid-cols-[1fr_320px]">

              {/* Google Maps iframe */}
              <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
                <iframe
                  title="Soutrali Deals — Abidjan, Cocody Riviera 2"
                  src="https://maps.google.com/maps?q=Riviera+2+Cocody+Abidjan+Côte+d'Ivoire&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="h-96 w-full lg:h-full"
                  style={{ border: 0, minHeight: '380px' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {/* Carte d'adresse — fond sombre pour le contraste */}
              <div className="flex flex-col justify-between rounded-3xl bg-gray-900 p-8">
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-green/20">
                    <MapPin className="h-6 w-6 text-primary-green" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white">Notre adresse</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    Abidjan, Cocody Riviera 2<br />
                    Côte d&apos;Ivoire
                  </p>
                  <div className="mt-6 space-y-2 text-sm text-white/75">
                    <div className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 shrink-0 text-primary-green" />
                      +225 07 00 00 00 00
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 shrink-0 text-primary-green" />
                      contact@soutralideals.com
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 shrink-0 text-primary-green" />
                      Lun – Ven : 08h00 – 18h00
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <a
                    href="https://maps.google.com/?q=Cocody+Riviera+2+Abidjan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-between rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-primary-green hover:bg-primary-green/10 hover:text-primary-green"
                  >
                    Ouvrir Google Maps
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://waze.com/ul?q=Cocody+Riviera+2+Abidjan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-between rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-primary-green hover:bg-primary-green/10 hover:text-primary-green"
                  >
                    Ouvrir Waze
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FinalCTA />
      </div>
    </>
  );
};
