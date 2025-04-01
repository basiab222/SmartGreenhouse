import React from 'react';
import { ButtonProps } from '../types/AuthTypes';
import '../styles/auth.css';

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`login-button ${className || ''}`}
    >
      {children}
    </button>
  );
};