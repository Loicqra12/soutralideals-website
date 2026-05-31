import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import {
  Globe,
  Smartphone,
  LayoutGrid,
  BarChart3,
  Palette,
  Zap,
  Check,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  HelpCircle,
  Send,
  CheckCircle2,
  MessageCircle,
  Mail,
  AlertCircle,
} from 'lucide-react';
import devisOgImage from '../assets/images/services_hero_growth.png';

// ── Types ─────────────────────────────────────────────────────────────────────
type ProjectTypeId = 'vitrine' | 'mobile' | 'plateforme' | 'dashboard' | 'design' | 'pack';

interface FormState {
  // Étape 1
  name: string;
  email: string;
  phone: string;
  company: string;
  sector: string;
  // Étape 2
  projectType: ProjectTypeId | '';
  // Étape 3
  features: string[];
  designLevel: string;
  deadline: string;
  budget: string;
  // Étape 4
  message: string;
  consent: boolean;
}

// ── Données ───────────────────────────────────────────────────────────────────
const STEPS = [
  { id: 1, label: 'Coordonnées' },
  { id: 2, label: 'Projet' },
  { id: 3, label: 'Périmètre' },
  { id: 4, label: 'Validation' },
] as const;

const PROJECT_TYPES = [
  {
    id: 'vitrine' as const,
    label: 'Site vitrine',
    desc: 'Présence web professionnelle',
    icon: Globe,
    price: 'à partir de 300 000 FCFA',
    color: 'text-primary-green',
    border: 'border-primary-green',
    bg: 'bg-primary-green/10',
  },
  {
    id: 'mobile' as const,
    label: 'Application mobile',
    desc: 'App iOS & Android sur mesure',
    icon: Smartphone,
    price: 'à partir de 800 000 FCFA',
    color: 'text-primary-blue',
    border: 'border-primary-blue',
    bg: 'bg-primary-blue/10',
  },
  {
    id: 'plateforme' as const,
    label: 'Plateforme / Marketplace',
    desc: 'Écosystème multi-acteurs complet',
    icon: LayoutGrid,
    price: 'à partir de 2 000 000 FCFA',
    color: 'text-gold-premium',
    border: 'border-gold-premium',
    bg: 'bg-gold-premium/10',
  },
  {
    id: 'dashboard' as const,
    label: 'Dashboard / Outil métier',
    desc: 'Interface de gestion et de pilotage',
    icon: BarChart3,
    price: 'à partir de 1 500 000 FCFA',
    color: 'text-primary-blue',
    border: 'border-primary-blue',
    bg: 'bg-primary-blue/10',
  },
  {
    id: 'design' as const,
    label: 'Design & Branding',
    desc: 'Identité visuelle, UI/UX, charte graphique',
    icon: Palette,
    price: 'à partir de 200 000 FCFA',
    color: 'text-primary-green',
    border: 'border-primary-green',
    bg: 'bg-primary-green/10',
  },
  {
    id: 'pack' as const,
    label: 'Pack complet',
    desc: 'Web + Mobile + Dashboard + Design',
    icon: Zap,
    price: 'à partir de 3 500 000 FCFA',
    color: 'text-gold-premium',
    border: 'border-gold-premium',
    bg: 'bg-gold-premium/10',
  },
] as const;

const FEATURES = [
  'Formulaire de contact',
  'Paiement Mobile Money',
  'Espace membre / Auth',
  'Blog / Articles',
  'Galerie / Portfolio',
  'SEO optimisé',
  'Chat / Support en ligne',
  'Système de réservation',
  'Géolocalisation',
  'Dashboard administrateur',
  'API / Intégrations',
  'Multilingue',
  'Notifications push',
  'Module e-commerce',
] as const;

const DESIGN_LEVELS = [
  { id: 'template', label: 'Basique', desc: 'Template adapté' },
  { id: 'custom', label: 'Personnalisé', desc: 'Design sur charte', badge: 'Populaire' },
  { id: 'premium', label: 'Premium', desc: 'Unique & sur-mesure' },
] as const;

const DEADLINES = [
  { id: 'urgent', label: 'Urgent', desc: "Moins d'1 mois" },
  { id: 'normal', label: 'Standard', desc: '1 à 3 mois' },
  { id: 'flexible', label: 'Flexible', desc: '3 à 6 mois' },
  { id: 'none', label: 'Pas de contrainte', desc: 'À définir ensemble' },
] as const;

const BUDGET_RANGES = [
  'Moins de 500 000 FCFA',
  '500 000 – 1 500 000 FCFA',
  '1 500 000 – 5 000 000 FCFA',
  'Plus de 5 000 000 FCFA',
  'À définir ensemble',
] as const;

const SECTORS = [
  'Commerce / Retail',
  'Immobilier',
  'Transport / Livraison',
  'Santé',
  'Éducation / Formation',
  'Restauration / Food',
  'Beauté / Bien-être',
  'Finance / Fintech',
  'Agriculture',
  'Media / Contenu',
  'Associatif / ONG',
  'Autre',
] as const;

// ── State initial ─────────────────────────────────────────────────────────────
const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  sector: '',
  projectType: '',
  features: [],
  designLevel: '',
  deadline: '',
  budget: '',
  message: '',
  consent: false,
};

// ── Validation par étape ──────────────────────────────────────────────────────
function validateStep(step: number, form: FormState): string | null {
  if (step === 1) {
    if (!form.name.trim() || form.name.trim().length < 2)
      return 'Votre nom complet est requis (2 caractères minimum).';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return 'Veuillez saisir une adresse email valide.';
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 8)
      return 'Un numéro de téléphone / WhatsApp valide est requis.';
  }
  if (step === 2 && !form.projectType)
    return 'Veuillez sélectionner un type de projet.';
  if (step === 4 && !form.consent)
    return "Vous devez accepter d'être recontacté pour envoyer votre demande.";
  return null;
}

// ── Styles partagés ───────────────────────────────────────────────────────────
const fieldClass =
  'w-full rounded-xl border border-dark-border bg-dark-bg px-4 py-3.5 text-sm text-white placeholder:text-white/25 transition-colors focus:border-primary-green focus:outline-none focus:ring-2 focus:ring-primary-green/30';

// Flèche SVG inline pour les <select>
const selectStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff55' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat' as const,
  backgroundPosition: 'right 1rem center' as const,
  paddingRight: '2.5rem',
};

// ── Barre de progression ──────────────────────────────────────────────────────
function StepProgress({ current }: { current: number }) {
  return (
    <div className="mb-10">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-green">
          Étape {current} / {STEPS.length}
        </span>
        <span className="text-xs font-medium text-white/35">
          {STEPS[current - 1].label}
        </span>
      </div>
      <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/10">
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
                  : 'border border-white/20 text-white/30'
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
  form: FormState;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-bold text-white">Vos coordonnées</h2>
        <p className="mt-1 text-sm text-white/40">
          Utilisées uniquement pour vous répondre. Aucun démarchage.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-white/65">
            Nom complet <span className="text-primary-green">*</span>
          </label>
          <input
            id="name" name="name" type="text" required
            value={form.name} onChange={onChange}
            className={fieldClass} autoComplete="name"
            placeholder="Jean-Baptiste Koné"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-white/65">
            Email <span className="text-primary-green">*</span>
          </label>
          <input
            id="email" name="email" type="email" required
            value={form.email} onChange={onChange}
            className={fieldClass} autoComplete="email"
            placeholder="jean@entreprise.ci"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-white/65">
            WhatsApp / Téléphone <span className="text-primary-green">*</span>
          </label>
          <input
            id="phone" name="phone" type="tel" required
            value={form.phone} onChange={onChange}
            className={fieldClass} autoComplete="tel"
            placeholder="+225 07 00 00 00 00"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-white/65">
            Entreprise / Organisation
          </label>
          <input
            id="company" name="company" type="text"
            value={form.company} onChange={onChange}
            className={fieldClass} autoComplete="organization"
            placeholder="Nom de votre société"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="sector" className="text-sm font-medium text-white/65">
          Secteur d&apos;activité
        </label>
        <select
          id="sector" name="sector"
          value={form.sector} onChange={onChange}
          className={`${fieldClass} appearance-none`}
          style={selectStyle}
        >
          <option value="">Sélectionnez votre secteur</option>
          {SECTORS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
    </div>
  );
}

// ── Étape 2 — Type de projet ──────────────────────────────────────────────────
function Step2({
  form,
  onSelect,
}: {
  form: FormState;
  onSelect: (id: ProjectTypeId) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-bold text-white">Type de projet</h2>
        <p className="mt-1 text-sm text-white/40">
          Sélectionnez le type qui correspond le mieux à votre besoin.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {PROJECT_TYPES.map((pt) => {
          const isSelected = form.projectType === pt.id;
          return (
            <button
              key={pt.id}
              type="button"
              onClick={() => onSelect(pt.id)}
              className={`group relative flex flex-col gap-3 rounded-2xl border p-5 text-left transition-all duration-200 ${
                isSelected
                  ? `${pt.border} ${pt.bg}`
                  : 'border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04]'
              }`}
            >
              {/* Icône */}
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all ${
                  isSelected
                    ? `${pt.border} ${pt.bg} ${pt.color}`
                    : 'border-white/10 bg-white/5 text-white/35'
                }`}
              >
                <pt.icon className="h-5 w-5" />
              </div>
              {/* Texte */}
              <div>
                <p className={`font-heading text-sm font-bold ${isSelected ? pt.color : 'text-white'}`}>
                  {pt.label}
                </p>
                <p className="mt-0.5 text-xs text-white/40">{pt.desc}</p>
              </div>
              {/* Prix */}
              <p className={`text-xs font-semibold ${isSelected ? pt.color : 'text-white/25'}`}>
                {pt.price}
              </p>
              {/* Check */}
              {isSelected && (
                <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary-green">
                  <Check className="h-3 w-3 text-[#062013]" />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Étape 3 — Périmètre ───────────────────────────────────────────────────────
function Step3({
  form,
  onToggleFeature,
  onChangeSelect,
  onSelect,
}: {
  form: FormState;
  onToggleFeature: (f: string) => void;
  onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSelect: (field: string, val: string) => void;
}) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-2xl font-bold text-white">Le périmètre</h2>
        <p className="mt-1 text-sm text-white/40">
          Affinez votre projet. Toutes les options sont facultatives.
        </p>
      </div>

      {/* Fonctionnalités — multi-select chips */}
      <div>
        <p className="mb-3 text-sm font-semibold text-white/65">Fonctionnalités souhaitées</p>
        <div className="flex flex-wrap gap-2">
          {FEATURES.map((feat) => {
            const active = form.features.includes(feat);
            return (
              <button
                key={feat}
                type="button"
                onClick={() => onToggleFeature(feat)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-150 ${
                  active
                    ? 'border-primary-green bg-primary-green/15 text-primary-green'
                    : 'border-white/15 bg-white/[0.03] text-white/50 hover:border-white/30 hover:text-white'
                }`}
              >
                {active && <Check className="h-3 w-3" />}
                {feat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Niveau de design */}
      <div>
        <p className="mb-3 text-sm font-semibold text-white/65">Niveau de design</p>
        <div className="grid gap-3 sm:grid-cols-3">
          {DESIGN_LEVELS.map((d) => {
            const active = form.designLevel === d.id;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => onSelect('designLevel', d.id)}
                className={`relative rounded-xl border p-4 text-left transition-all duration-150 ${
                  active
                    ? 'border-primary-blue bg-primary-blue/10'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/25'
                }`}
              >
                {'badge' in d && d.badge && (
                  <span className="absolute right-2 top-2 rounded-full bg-primary-blue/20 px-2 py-0.5 text-[10px] font-bold text-primary-blue">
                    {d.badge}
                  </span>
                )}
                <p className={`font-heading text-sm font-bold ${active ? 'text-primary-blue' : 'text-white'}`}>
                  {d.label}
                </p>
                <p className="mt-0.5 text-xs text-white/40">{d.desc}</p>
                {active && (
                  <span className="mt-2 block h-0.5 w-6 rounded-full bg-primary-blue" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Délai + Budget */}
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold text-white/65">Délai souhaité</p>
          <div className="space-y-2">
            {DEADLINES.map((d) => {
              const active = form.deadline === d.id;
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => onSelect('deadline', d.id)}
                  className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm transition-all duration-150 ${
                    active
                      ? 'border-primary-green bg-primary-green/10 font-semibold text-primary-green'
                      : 'border-white/10 bg-white/[0.02] text-white/50 hover:border-white/25 hover:text-white'
                  }`}
                >
                  <span>{d.label}</span>
                  <span className="text-xs opacity-60">{d.desc}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white/65">Budget estimatif</p>
          <select
            name="budget"
            value={form.budget}
            onChange={onChangeSelect}
            className={`${fieldClass} appearance-none`}
            style={selectStyle}
          >
            <option value="">Non défini</option>
            {BUDGET_RANGES.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
          <p className="mt-2 text-xs text-white/30">
            Indicatif — aucun engagement de votre part.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Étape 4 — Validation ──────────────────────────────────────────────────────
function Step4({
  form,
  selectedProject,
  onChangeTextarea,
  onToggleConsent,
}: {
  form: FormState;
  selectedProject: (typeof PROJECT_TYPES)[number] | undefined;
  onChangeTextarea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onToggleConsent: () => void;
}) {
  const selectedDeadline = DEADLINES.find((d) => d.id === form.deadline);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-bold text-white">Finalisation</h2>
        <p className="mt-1 text-sm text-white/40">
          Vérifiez votre récapitulatif, ajoutez des détails et envoyez.
        </p>
      </div>

      {/* Récapitulatif */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-white/35">
          Récapitulatif de votre projet
        </p>
        <dl className="space-y-2.5 text-sm">
          <div className="flex justify-between gap-4 border-b border-white/[0.07] pb-2.5">
            <dt className="text-white/45">Contact</dt>
            <dd className="text-right font-semibold text-white">
              {form.name} · {form.email}
            </dd>
          </div>
          {form.phone && (
            <div className="flex justify-between gap-4 border-b border-white/[0.07] pb-2.5">
              <dt className="text-white/45">WhatsApp</dt>
              <dd className="font-medium text-white">{form.phone}</dd>
            </div>
          )}
          {selectedProject && (
            <div className="flex justify-between gap-4 border-b border-white/[0.07] pb-2.5">
              <dt className="text-white/45">Projet</dt>
              <dd className={`font-bold ${selectedProject.color}`}>{selectedProject.label}</dd>
            </div>
          )}
          {form.features.length > 0 && (
            <div className="flex justify-between gap-4 border-b border-white/[0.07] pb-2.5">
              <dt className="shrink-0 text-white/45">Fonctionnalités</dt>
              <dd className="text-right text-white/75">{form.features.join(', ')}</dd>
            </div>
          )}
          {form.designLevel && (
            <div className="flex justify-between gap-4 border-b border-white/[0.07] pb-2.5">
              <dt className="text-white/45">Design</dt>
              <dd className="font-medium capitalize text-white/80">
                {DESIGN_LEVELS.find((d) => d.id === form.designLevel)?.label}
              </dd>
            </div>
          )}
          {selectedDeadline && (
            <div className="flex justify-between gap-4 border-b border-white/[0.07] pb-2.5">
              <dt className="text-white/45">Délai</dt>
              <dd className="font-medium text-white/80">{selectedDeadline.label} — {selectedDeadline.desc}</dd>
            </div>
          )}
          {form.budget && (
            <div className="flex justify-between gap-4">
              <dt className="text-white/45">Budget</dt>
              <dd className="font-semibold text-white">{form.budget}</dd>
            </div>
          )}
        </dl>
      </div>

      {/* Message optionnel */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-white/65">
          Informations complémentaires{' '}
          <span className="text-white/30">(facultatif)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={onChangeTextarea}
          className={`${fieldClass} resize-none`}
          placeholder="Références, contraintes techniques, contexte particulier…"
        />
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
              : 'border-white/30 bg-transparent hover:border-white/60'
          }`}
        >
          {form.consent && <Check className="h-3 w-3 text-[#062013]" />}
        </button>
        <span className="text-sm leading-relaxed text-white/60">
          J&apos;accepte d&apos;être recontacté(e) par Soutrali Deals concernant ce projet.{' '}
          <Link
            to="/informations-legales#politique-confidentialite"
            className="text-primary-green underline-offset-2 hover:underline"
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
      className="flex flex-col items-center rounded-3xl border border-white/10 bg-dark-card px-8 py-16 text-center"
    >
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-green/20">
        <CheckCircle2 className="h-10 w-10 text-primary-green" />
      </div>
      <h2 className="font-heading text-3xl font-black text-white">Demande envoyée !</h2>
      <p className="mt-4 max-w-md text-base leading-relaxed text-white/55">
        Notre équipe analyse votre projet et vous recontacte sous{' '}
        <strong className="text-white">24 à 48 h ouvrées</strong> avec une proposition personnalisée.
      </p>
      <p className="mt-2 text-sm text-white/35">
        Pensez à vérifier vos spams si vous ne recevez pas notre réponse.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="https://wa.me/22507XXXXXXXX" /* TODO: remplacer par le vrai numéro */
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#25D366]/90 hover:-translate-y-0.5"
        >
          <MessageCircle className="h-4 w-4" /> Nous contacter sur WhatsApp
        </a>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/65 transition hover:border-white/30 hover:text-white"
        >
          Nouvelle demande
        </button>
      </div>
    </motion.div>
  );
}

// ── FAQ Données & Composant ──────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: "Le devis est-il gratuit et sans engagement ?",
    answer: "Oui, absolument. L'établissement de votre devis et l'analyse initiale de votre projet sont 100% gratuits et sans engagement de votre part. C'est une base de discussion pour comprendre vos besoins et vous proposer la meilleure solution."
  },
  {
    question: "Comment déterminez-vous les tarifs de mon projet ?",
    answer: "Nos prix sont basés sur la complexité technique du projet, le type de design (template adapté ou création sur-mesure unique), le nombre de pages et les fonctionnalités requises (paiement Mobile Money, espace membre, synchronisation d'APIs, etc.). Chaque ligne du devis final est détaillée pour une transparence totale."
  },
  {
    question: "Quels sont vos délais moyens de réalisation ?",
    answer: "Les délais varient selon l'envergure du projet : un site vitrine professionnel est généralement livré en 2 à 4 semaines, tandis qu'une application mobile sur-mesure ou une plateforme de type marketplace nécessite entre 2 et 4 mois de développement. Un calendrier précis avec des jalons de validation est fourni au lancement."
  },
  {
    question: "Intégrez-vous des moyens de paiement Mobile Money (Wave, Orange, MTN, Moov) ?",
    answer: "Absolument. Nous maîtrisons l'intégration des passerelles de paiement les plus adaptées et populaires en Côte d'Ivoire et dans la sous-région (Wave, Orange Money, MTN MoMo, Moov Money) ainsi que les paiements par carte bancaire (Visa/Mastercard) via des solutions sécurisées comme CinetPay, Fedapay, ou Paytech."
  },
  {
    question: "Comment se passe l'accompagnement après la livraison de mon projet ?",
    answer: "Tous nos projets bénéficient d'une période de garantie et de support technique inclus (correction d'éventuels bugs). Nous proposons également des contrats de maintenance mensuelle pour gérer les mises à jour de sécurité, les sauvegardes, l'optimisation des performances et l'ajout de nouvelles fonctionnalités au fil de votre croissance."
  },
  {
    question: "Puis-je modifier mes choix après avoir envoyé cette demande de devis ?",
    answer: "Bien sûr ! Ce configurateur en ligne sert à dessiner les premiers contours de votre idée. Une fois la demande reçue, un expert technique prendra contact avec vous pour affiner vos besoins réels, et vous pourrez ajouter, retirer ou modifier n'importe quelle option à ce moment-là."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-5 last:border-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none group"
      >
        <span className="font-heading text-base font-bold text-white group-hover:text-primary-green transition-colors leading-snug">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="text-white/40 group-hover:text-primary-green ml-4 shrink-0 transition-colors"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Composant principal ───────────────────────────────────────────────────────
export const DevisPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedProject = PROJECT_TYPES.find((p) => p.id === form.projectType);

  // Handlers génériques
  const handleField = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setError(null);
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    [],
  );

  const toggleFeature = useCallback((feat: string) => {
    setForm((prev) => ({
      ...prev,
      features: prev.features.includes(feat)
        ? prev.features.filter((f) => f !== feat)
        : [...prev.features, feat],
    }));
  }, []);

  const setField = useCallback((field: string, val: string) => {
    setForm((prev) => ({ ...prev, [field]: val }));
  }, []);

  // Navigation
  const goNext = useCallback(() => {
    const err = validateStep(currentStep, form);
    if (err) { setError(err); return; }
    setError(null);
    setDirection(1);
    setCurrentStep((s) => Math.min(s + 1, STEPS.length));
  }, [currentStep, form]);

  const goPrev = useCallback(() => {
    setError(null);
    setDirection(-1);
    setCurrentStep((s) => Math.max(s - 1, 1));
  }, []);

  const handleSubmit = useCallback(async () => {
    const err = validateStep(4, form);
    if (err) { setError(err); return; }
    setIsSubmitting(true);
    /*
     * TODO: Connecter à l'API backend (Firebase Function / EmailJS / Endpoint custom)
     * Exemple : await fetch('/api/devis', { method: 'POST', body: JSON.stringify(form) });
     */
    await new Promise((r) => setTimeout(r, 1800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  }, [form]);

  const handleReset = useCallback(() => {
    setIsSubmitted(false);
    setForm(INITIAL_FORM);
    setCurrentStep(1);
    setError(null);
  }, []);

  // Variantes d'animation slide directionnel
  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 48 : -48,
    }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -48 : 48,
    }),
  };

  return (
    <>
      <SEO
        title="Demander un devis"
        description="Configurez votre projet en 4 étapes et obtenez un devis personnalisé sous 24 à 48 h ouvrées. Soutrali Deals — Côte d'Ivoire."
        ogImage={devisOgImage}
        keywords={[
          "devis site web Côte d'Ivoire",
          'devis application mobile',
          'devis agence digitale Abidjan',
        ]}
        breadcrumbs={[
          { name: 'Accueil', path: '/' },
          { name: 'Devis', path: '/devis' },
        ]}
      />

      {/* Bouton WhatsApp flottant */}
      <a
        href="https://wa.me/22507XXXXXXXX" /* TODO: remplacer par le vrai numéro */
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter sur WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/40 transition hover:scale-110 hover:shadow-[#25D366]/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </a>

      <div className="min-h-screen bg-dark-bg pt-24">

        {/* ── Hero ── */}
        <div className="border-b border-white/[0.07] bg-[#060e1a]">
          <div className="container-custom py-14">
            <div className="mx-auto max-w-2xl text-center">
              <span className="mb-4 inline-block rounded-full border border-primary-green/30 bg-primary-green/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-green">
                Devis gratuit · Réponse sous 48 h ouvrées
              </span>
              <h1 className="mt-3 font-heading text-4xl font-black leading-tight text-white md:text-5xl">
                Configurez votre{' '}
                <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
                  projet digital
                </span>
              </h1>
              <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
                4 étapes · Sans engagement · Proposition personnalisée garantie
              </p>
            </div>
          </div>
        </div>

        {/* ── Contenu principal ── */}
        <div className="container-custom py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_320px]">

            {/* ── Colonne formulaire ── */}
            <div className="order-1">
              {isSubmitted ? (
                <SuccessState onReset={handleReset} />
              ) : (
                <div className="rounded-3xl border border-white/10 bg-dark-card p-8 md:p-10">
                  <StepProgress current={currentStep} />

                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={currentStep}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      {currentStep === 1 && (
                        <Step1 form={form} onChange={handleField} />
                      )}
                      {currentStep === 2 && (
                        <Step2
                          form={form}
                          onSelect={(id) => {
                            setError(null);
                            setForm((p) => ({ ...p, projectType: id }));
                          }}
                        />
                      )}
                      {currentStep === 3 && (
                        <Step3
                          form={form}
                          onToggleFeature={toggleFeature}
                          onChangeSelect={handleField}
                          onSelect={setField}
                        />
                      )}
                      {currentStep === 4 && (
                        <Step4
                          form={form}
                          selectedProject={selectedProject}
                          onChangeTextarea={handleField}
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
                        className="mt-6 flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-400"
                        role="alert"
                      >
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        {error}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation Précédent / Suivant */}
                  <div
                    className={`mt-8 flex ${currentStep > 1 ? 'justify-between' : 'justify-end'}`}
                  >
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={goPrev}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white/65 transition hover:border-white/30 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                      >
                        <ChevronLeft className="h-4 w-4" /> Précédent
                      </button>
                    )}

                    {currentStep < STEPS.length ? (
                      <button
                        type="button"
                        onClick={goNext}
                        className="inline-flex items-center gap-2 rounded-full bg-primary-green px-6 py-3 text-sm font-bold text-[#062013] shadow-glow-green transition hover:-translate-y-0.5 hover:bg-primary-green/90 hover:shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green/50"
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
                            Envoyer ma demande <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <aside className="order-2 space-y-5">

              {/* Estimation prix dynamique */}
              <AnimatePresence mode="wait">
                {selectedProject && (
                  <motion.div
                    key={selectedProject.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="rounded-2xl border border-white/10 bg-dark-card p-6"
                  >
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-white/35">
                      Estimation indicative
                    </p>
                    <p className="font-heading text-2xl font-black text-white">
                      {selectedProject.price}
                    </p>
                    <p className="mt-1 text-xs text-white/35">
                      Fourchette indicative · Devis précis sous 48 h
                    </p>
                    <div
                      className={`mt-4 flex items-center gap-2.5 rounded-xl ${selectedProject.bg} px-3 py-2.5`}
                    >
                      <selectedProject.icon className={`h-4 w-4 ${selectedProject.color}`} />
                      <span className={`text-sm font-semibold ${selectedProject.color}`}>
                        {selectedProject.label}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Comment ça marche */}
              <div className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <h2 className="mb-4 font-heading text-sm font-bold text-white">
                  Comment ça marche
                </h2>
                <ol className="space-y-4">
                  {[
                    { n: '01', t: 'Vous configurez votre projet en 4 étapes.' },
                    { n: '02', t: 'Notre équipe analyse votre besoin sous 24 à 48 h.' },
                    { n: '03', t: 'Vous recevez un devis détaillé, sans engagement.' },
                  ].map(({ n, t }) => (
                    <li key={n} className="flex gap-3 text-sm leading-relaxed text-white/55">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-green/15 font-mono text-[10px] font-bold text-primary-green">
                        {n}
                      </span>
                      {t}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Contact direct */}
              <div className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-white/35">
                  Contact direct
                </p>
                <a
                  href="https://wa.me/22507XXXXXXXX" /* TODO: vrai numéro */
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-xl bg-[#25D366]/15 px-4 py-3 text-sm font-bold text-[#25D366] transition hover:bg-[#25D366]/25"
                >
                  <MessageCircle className="h-4 w-4" />
                  Discuter sur WhatsApp
                </a>
                <a
                  href="mailto:contact@soutralideals.com"
                  className="mt-2 flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm text-white/50 transition hover:bg-white/5 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  contact@soutralideals.com
                </a>
              </div>

              {/* Garanties */}
              <div className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-white/35">
                  Nos garanties
                </p>
                <ul className="space-y-2.5">
                  {[
                    'Réponse sous 24 à 48 h ouvrées',
                    'Devis sans engagement',
                    'Confidentialité garantie',
                    'Expertise locale ivoirienne',
                  ].map((g) => (
                    <li key={g} className="flex items-center gap-2 text-sm text-white/60">
                      <Check className="h-3.5 w-3.5 shrink-0 text-primary-green" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>

        {/* ── Section FAQ ── */}
        <div className="border-t border-white/[0.07] bg-[#060e1a]/40 py-16 md:py-24">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-blue/30 bg-primary-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-blue">
                <HelpCircle className="h-3.5 w-3.5" /> Des questions ?
              </div>
              <h2 className="mt-3 font-heading text-3xl font-black text-white md:text-4xl">
                Questions fréquemment posées
              </h2>
              <p className="mt-4 text-sm text-white/55">
                Tout ce que vous devez savoir pour démarrer votre projet digital sereinement avec Soutrali Deals.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-dark-card p-6 md:p-10">
              <div className="divide-y divide-white/10">
                {FAQ_ITEMS.map((item, idx) => (
                  <FAQItem key={idx} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
