import React from 'react';
import { PasswordFieldProps } from '../types/AuthTypes';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import '../styles/auth.css';

export const PasswordField: React.FC<PasswordFieldProps> = ({
  placeholder,
  value,
  onChange,
  name,
  error
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="flex flex-col w-full max-w-[327px]">
      <div className={`input-field ${error ? 'error' : ''}`}>
        <div className="input-wrapper">
          <label className="sr-only" htmlFor={`input-${name}`}>
            {placeholder}
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id={`input-${name}`}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="input-base"
            placeholder={placeholder}
            aria-invalid={error}
          />
        </div>
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="password-toggle"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            <EyeSlashIcon className="w-4 h-4 text-gray-500" />
          ) : (
            <EyeIcon className="w-4 h-4 text-gray-500" />
          )}
        </button>
      </div>
    </div>
  );
};