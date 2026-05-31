import React from 'react';
import { motion } from 'framer-motion';
import { StarsIcon } from '../icons/GamificationIcons';
import { ProgressBar } from '../icons/ProgressBar';

export const GamificationLevelsIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  const levels = [
    { name: 'Débutant', progress: 25, color: 'text-primary-green' },
    { name: 'Intermédiaire', progress: 50, color: 'text-primary-blue' },
    { name: 'Expert', progress: 75, color: 'text-gold-premium' },
    { name: 'Ambassadeur', progress: 100, color: 'text-gold-premium' },
  ];

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-gold-premium/10 to-primary-blue/10 rounded-2xl blur-xl" />
      <div className="relative bg-dark-card border border-dark-border rounded-2xl p-8">
        <div className="space-y-6">
          {levels.map((level, index) => (
            <motion.div
              key={level.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className={`font-semibold ${level.color}`}>{level.name}</span>
                <StarsIcon size={20} className={level.color} />
              </div>
              <ProgressBar progress={level.progress} height={8} showLabel={false} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const GamificationBadgesCollection: React.FC<{ className?: string }> = ({ className = '' }) => {
  const badges = [
    { name: 'Premier Projet', icon: '🎯', color: 'from-primary-green to-primary-blue' },
    { name: '100% Satisfaction', icon: '⭐', color: 'from-gold-premium to-primary-green' },
    { name: 'Mentor Actif', icon: '🤝', color: 'from-primary-blue to-gold-premium' },
    { name: 'Innovateur', icon: '💡', color: 'from-primary-green to-gold-premium' },
    { name: 'Ambassadeur', icon: '👑', color: 'from-gold-premium to-primary-blue' },
  ];

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-gold-premium/10 via-primary-blue/10 to-primary-green/10 rounded-2xl blur-xl" />
      <div className="relative bg-dark-card border border-dark-border rounded-2xl p-8">
        <div className="grid grid-cols-5 gap-4">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center space-y-2"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center text-2xl shadow-lg`}>
                {badge.icon}
              </div>
              <span className="text-xs text-text-secondary text-center">{badge.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
