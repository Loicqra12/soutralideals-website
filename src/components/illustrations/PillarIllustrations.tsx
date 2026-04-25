import React from 'react';
import { motion } from 'framer-motion';
import { LearnIcon, CollaborateIcon, GrowIcon, ImpactIcon } from '../icons/PillarIcons';

interface IllustrationProps {
  className?: string;
}

export const LearnIllustration: React.FC<IllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 to-primary-green/10 rounded-2xl blur-xl" />
      <div className="relative bg-dark-card border border-dark-border rounded-2xl p-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <LearnIcon size={80} className="text-primary-blue" />
          </motion.div>
          <div className="grid grid-cols-3 gap-4 w-full">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="h-16 bg-gradient-to-br from-primary-blue/20 to-primary-green/20 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const CollaborateIllustration: React.FC<IllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-green/10 to-gold-premium/10 rounded-2xl blur-xl" />
      <div className="relative bg-dark-card border border-dark-border rounded-2xl p-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <CollaborateIcon size={60} className="text-primary-green" />
            </motion.div>
            <div className="w-8 h-0.5 bg-primary-green" />
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <CollaborateIcon size={60} className="text-gold-premium" />
            </motion.div>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-12 h-12 bg-gradient-to-br from-primary-green/30 to-gold-premium/30 rounded-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const GrowIllustration: React.FC<IllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-gold-premium/10 to-primary-blue/10 rounded-2xl blur-xl" />
      <div className="relative bg-dark-card border border-dark-border rounded-2xl p-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <GrowIcon size={80} className="text-gold-premium" />
          <div className="w-full space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="h-4 bg-gradient-to-r from-gold-premium/20 to-primary-blue/20 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(i / 4) * 100}%` }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ImpactIllustration: React.FC<IllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-green/10 via-primary-blue/10 to-gold-premium/10 rounded-2xl blur-xl" />
      <div className="relative bg-dark-card border border-dark-border rounded-2xl p-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <ImpactIcon size={80} className="text-primary-green" />
          <div className="grid grid-cols-3 gap-3 w-full">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                className="aspect-square bg-gradient-to-br from-primary-green/20 via-primary-blue/20 to-gold-premium/20 rounded-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
