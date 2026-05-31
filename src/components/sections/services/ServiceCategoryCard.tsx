import { useState, type MouseEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Check } from 'lucide-react';
import type { ComponentType } from 'react';

export type ServiceCategory = {
  id: string;
  title: string;
  tagline: string;
  examples: string[];
  price: string;
  priceNote: string;
  features: string[];
  popular?: boolean;
  Illustration: ComponentType<{ className?: string }>;
};

type Props = {
  category: ServiceCategory;
  index: number;
};

export const ServiceCategoryCard = ({ category, index }: Props) => {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const { title, tagline, examples, price, priceNote, features, popular, Illustration } = category;

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className={`flex h-full flex-col overflow-hidden rounded-[22px] bg-[#f3f4f6] transition-colors hover:bg-[#ebecef] ${
        popular ? 'ring-2 ring-primary-green/40 ring-offset-2 ring-offset-white' : ''
      }`}
    >
      <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden bg-[#e8eaef]">
        <Illustration className="h-full w-full object-cover" />
        {popular && (
          <span className="absolute right-3 top-3 rounded-full bg-primary-green px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            Populaire
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold tracking-tight text-[#111]">{title}</h3>
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#555]">
          {tagline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#6b6b6b]">{examples.join(' · ')}</p>

        <details
          open={open}
          className="mt-5 border-t border-[#ddd] [&_summary::-webkit-details-marker]:hidden"
        >
          <summary
            onClick={(event: MouseEvent<HTMLElement>) => {
              event.preventDefault();
              setOpen((value) => !value);
            }}
            className="flex cursor-pointer list-none items-center justify-between pt-4 text-left text-sm font-semibold text-[#111] transition-colors hover:text-primary-green focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green"
          >
            Caractéristiques
            <ChevronDown
              className={`h-4 w-4 shrink-0 text-[#888] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              aria-hidden
            />
          </summary>

          <motion.div
            initial={false}
            animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="space-y-2.5 pb-1 pt-3">
              {features.map((feat) => (
                <li key={feat} className="flex gap-2 text-sm text-[#555]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-green" aria-hidden />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <p className="border-t border-[#e5e5e5] pt-3 text-sm text-[#888]">
              <span className="font-bold text-[#111]">{price}</span>
              <span className="mx-1.5">·</span>
              {priceNote}
            </p>
          </motion.div>
        </details>

        <Link
          to={`/services#${category.id}`}
          className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-primary-green/25 bg-white px-4 py-2.5 text-sm font-semibold text-primary-green transition hover:border-primary-green hover:bg-primary-green/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green/40"
        >
          Voir le détail
        </Link>
      </div>
    </motion.article>
  );
};
