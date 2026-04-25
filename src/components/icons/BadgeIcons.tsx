import React from 'react';

interface BadgeProps {
  className?: string;
  size?: number;
}

export const BadgeDebutant: React.FC<BadgeProps> = ({ className = '', size = 64 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="30" fill="#22C55E" fillOpacity="0.2" stroke="#22C55E" strokeWidth="2" />
      <path
        d="M32 16L36 28L48 28L38 36L42 48L32 40L22 48L26 36L16 28L28 28L32 16Z"
        fill="#22C55E"
        opacity="0.3"
      />
      <circle cx="32" cy="32" r="12" fill="#22C55E" />
      <text x="32" y="38" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">D</text>
    </svg>
  );
};

export const BadgeExpert: React.FC<BadgeProps> = ({ className = '', size = 64 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="30" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="2" />
      <path
        d="M32 12L38 26L52 26L40 34L46 48L32 38L18 48L24 34L12 26L26 26L32 12Z"
        fill="#3B82F6"
        opacity="0.3"
      />
      <circle cx="32" cy="32" r="12" fill="#3B82F6" />
      <text x="32" y="38" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">E</text>
    </svg>
  );
};

export const BadgeAmbassadeur: React.FC<BadgeProps> = ({ className = '', size = 64 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="30" fill="#B8860B" fillOpacity="0.2" stroke="#B8860B" strokeWidth="2" />
      <path
        d="M32 8L40 24L56 24L44 36L52 52L32 40L12 52L20 36L8 24L24 24L32 8Z"
        fill="#B8860B"
        opacity="0.3"
      />
      <circle cx="32" cy="32" r="12" fill="#B8860B" />
      <text x="32" y="38" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">A</text>
    </svg>
  );
};
