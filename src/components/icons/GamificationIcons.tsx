import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const TrophyIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => {
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
        d="M16 8H32M20 8V6C20 5.44772 20.4477 5 21 5H27C27.5523 5 28 5.44772 28 6V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 8H36V16C36 20.4183 32.4183 24 28 24H26V32H36M12 32H22V24H20C15.5817 24 12 20.4183 12 16V8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path
        d="M18 32H30M20 36H28M22 40H26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="18" r="2" fill="currentColor" />
    </svg>
  );
};

export const StarsIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => {
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
        d="M24 4L28 16L40 16L30 24L34 36L24 28L14 36L18 24L8 16L20 16L24 4Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M12 20L16 24L20 20M28 20L32 24L36 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
};

export const QuoteIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => {
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
        d="M16 20C16 18.8954 16.8954 18 18 18H22C23.1046 18 24 18.8954 24 20V28C24 29.1046 23.1046 30 22 30H18C16.8954 30 16 29.1046 16 28V20Z"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path
        d="M16 20C16 18.8954 16.8954 18 18 18H22C23.1046 18 24 18.8954 24 20V28C24 29.1046 23.1046 30 22 30H18C16.8954 30 16 29.1046 16 28V20Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20 22C20 22 19 24 20 26M20 22C20 22 21 24 20 26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M24 20C24 18.8954 24.8954 18 26 18H30C31.1046 18 32 18.8954 32 20V28C32 29.1046 31.1046 30 30 30H26C24.8954 30 24 29.1046 24 28V20Z"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path
        d="M24 20C24 18.8954 24.8954 18 26 18H30C31.1046 18 32 18.8954 32 20V28C32 29.1046 31.1046 30 30 30H26C24.8954 30 24 29.1046 24 28V20Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M28 22C28 22 27 24 28 26M28 22C28 22 29 24 28 26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
