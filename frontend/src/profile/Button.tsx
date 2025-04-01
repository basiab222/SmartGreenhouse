

//Button.tsx
import * as React from 'react';
import { ButtonProps } from './types';
import './Profile.css';

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  variant, 
  onClick, 
  ariaLabel 
}) => {
  return (
    <button 
      className={`button-base button-${variant}`}
      onClick={onClick}
      type="button"
      aria-label={ariaLabel || label}
    >
      {label}
    </button>
  );
};