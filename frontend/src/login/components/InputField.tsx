import React from 'react';
import { InputFieldProps } from '../types/AuthTypes';
import '../styles/auth.css';

export const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  type = 'text',
  value,
  onChange,
  name,
  error
}) => {
  return (
    <div className="flex flex-col w-full max-w-[327px]">
      <div className={`input-field ${error ? 'error' : ''}`}>
        <div className="input-wrapper">
          <label className="sr-only" htmlFor={`input-${name}`}>
            {placeholder}
          </label>
          <input
            type={type}
            id={`input-${name}`}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="input-base"
            placeholder={placeholder}
            aria-invalid={error}
          />
        </div>
      </div>
    </div>
  );
};