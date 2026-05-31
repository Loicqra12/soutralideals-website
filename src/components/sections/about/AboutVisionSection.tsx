import { motion, useReducedMotion } from 'framer-motion';
import { ABOUT_VISION } from './aboutContent';
import { ABOUT_IMAGES } from './aboutImages';

export function AboutVisionSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="vision-globale"
      className="border-b border-[#e8e8e8] bg-white py-20 md:py-24"
      aria-labelledby="about-vision-title"
    >
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary-green">
              {ABOUT_VISION.eyebrow}
            </span>
            <h2
              id="about-vision-title"
              className="font-heading text-3xl font-bold leading-tight text-[#1a1a1a] md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
            >
              {ABOUT_VISION.title}
            </h2>
            <p className="mt-5 text-lg font-semibold text-[#333]">{ABOUT_VISION.subtitle}</p>
            <div className="mt-8 space-y-5">
              {ABOUT_VISION.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-[#555] md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
              <img
                src={ABOUT_IMAGES.vision}
                alt="Vision Soutrali Deals : plateforme digitale au service des artisans, freelances et consommateurs"
                className="aspect-[4/5] w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
