import React from 'react';
import { motion } from 'framer-motion';

export const CTACommunityIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-green/20 via-primary-blue/20 to-gold-premium/20 rounded-2xl blur-2xl" />
      <div className="relative bg-dark-card border border-dark-border rounded-2xl p-12 overflow-hidden">
        <div className="grid grid-cols-4 gap-4">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="aspect-square bg-gradient-to-br from-primary-green/30 via-primary-blue/30 to-gold-premium/30 rounded-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-green/40 to-primary-blue/40 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-4xl">👥</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export const CTANetworkAnimation: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22C55E" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#B8860B" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      
      {/* Nodes */}
      {[
        { x: 100, y: 100 },
        { x: 300, y: 100 },
        { x: 200, y: 200 },
        { x: 100, y: 300 },
        { x: 300, y: 300 },
      ].map((node, i) => (
        <g key={i}>
          <circle
            cx={node.x}
            cy={node.y}
            r="20"
            fill="url(#networkGradient)"
          >
            <animate
              attributeName="r"
              values="20;25;20"
              dur="2s"
              repeatCount="indefinite"
              begin={`${i * 0.2}s`}
            />
          </circle>
          {/* Connections */}
          {i < 4 && (
            <line
              x1={node.x}
              y1={node.y}
              x2={i === 0 ? 200 : i === 1 ? 200 : i === 2 ? 100 : 300}
              y2={i === 0 ? 200 : i === 1 ? 200 : i === 2 ? 300 : 300}
              stroke="url(#networkGradient)"
              strokeWidth="2"
              opacity="0.4"
            >
              <animate
                attributeName="opacity"
                values="0.4;0.8;0.4"
                dur="2s"
                repeatCount="indefinite"
                begin={`${i * 0.2}s`}
              />
            </line>
          )}
        </g>
      ))}
    </svg>
  );
};

export const CTABackgroundGradient: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-green/30 via-primary-blue/30 to-gold-premium/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-green/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-gold-premium/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 4 }}
      />
    </div>
  );
};
