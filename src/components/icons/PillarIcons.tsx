import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const LearnIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8Z"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path
        d="M24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 20V24L27 27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 18L20 20M30 18L28 20M18 30L20 28M30 30L28 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const CollaborateIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="16" cy="20" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
      <circle cx="32" cy="20" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
      <path
        d="M12 32C12 28 14 26 16 26C18 26 20 28 20 32M28 32C28 28 30 26 32 26C34 26 36 28 36 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 20L28 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 16V12M24 28V32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const GrowIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 40L16 28L24 32L32 20L40 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="28" r="2" fill="currentColor" />
      <circle cx="24" cy="32" r="2" fill="currentColor" />
      <circle cx="32" cy="20" r="2" fill="currentColor" />
      <circle cx="40" cy="24" r="2" fill="currentColor" />
      <path
        d="M8 40L8 36M40 24L44 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 12L16 16M36 28L40 32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const ImpactIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
      <path
        d="M24 8V12M24 36V40M8 24H12M36 24H40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 16L18 18M30 18L32 16M16 32L18 30M30 30L32 32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="4" fill="currentColor" />
      <path
        d="M20 20L28 28M28 20L20 28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
};
