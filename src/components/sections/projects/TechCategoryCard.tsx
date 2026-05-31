import { motion, useReducedMotion } from 'framer-motion';
import { TechBrandIcon } from './TechBrandIcon';
import type { TechCategory } from './techStackData';

type TechCategoryCardProps = {
  category: TechCategory;
  index: number;
  className?: string;
};

export function TechCategoryCard({ category, index, className = '' }: TechCategoryCardProps) {
  const reduced = useReducedMotion();
  const isWide = category.layout === 'wide';

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className={`rounded-2xl border border-dark-border bg-dark-card p-6 md:p-7 ${className}`}
    >
      <div className={`flex flex-col gap-5 ${isWide ? 'md:flex-row md:items-start md:justify-between md:gap-10' : ''}`}>
        <div className={isWide ? 'md:max-w-md' : ''}>
          <h3 className="font-heading text-xl font-bold text-white md:text-2xl">{category.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#9aa8b8]">{category.summary}</p>
        </div>

        <ul
          className={`flex flex-wrap gap-2 ${isWide ? 'md:max-w-xl md:justify-end' : ''}`}
          aria-label={`Technologies ${category.title}`}
        >
          {category.technologies.map((tech) => (
            <li key={tech.label}>
              <span className="inline-flex items-center gap-2 rounded-lg border border-dark-border bg-dark-bg px-3 py-2">
                {tech.icon ? (
                  <TechBrandIcon icon={tech.icon} size={16} />
                ) : null}
                <span className="text-sm text-[#c5cdd8]">{tech.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
