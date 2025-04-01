//Button.tsx
import * as React from 'react';
import { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = ({ label, variant, onClick }) => {
  const baseStyles = "overflow-hidden flex-1 shrink gap-2 self-stretch px-4 py-3.5 rounded-xl min-h-[40px]";
  const variantStyles = variant === 'primary' 
    ? "text-white bg-lime-900" 
    : "text-lime-900 border-2 border-lime-900 border-solid";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles}`}
      type="button"
    >
      {label}
    </button>
  );
};