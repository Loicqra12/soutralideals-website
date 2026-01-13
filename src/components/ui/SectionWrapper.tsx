import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bg?: 'transparent' | 'dark' | 'glass' | 'white' | 'gradient-brand';
}

export const SectionWrapper = ({
  children,
  id,
  className = '',
  bg = 'transparent'
}: SectionWrapperProps) => {
  const bgStyles = {
    transparent: 'bg-transparent',
    dark: 'bg-dark-bg',
    glass: 'backdrop-blur-lg bg-dark-card/20',
    white: 'bg-white',
    'gradient-brand': 'bg-gradient-to-br from-primary-green to-primary-blue',
  };

  return (
    <section
      id={id}
      className={`section-padding relative overflow-hidden ${bgStyles[bg]} ${className}`}
    >
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>

      {/* Background Decor can be added here */}
    </section>
  );
};
