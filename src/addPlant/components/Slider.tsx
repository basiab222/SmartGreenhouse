import React from 'react';
import { SliderProps } from '../types';

export function Slider({ value, onChange, min, max, label, unit }: SliderProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="slider-container">
      <div className="slider-header">
        <span className="slider-label">{label}</span>
        <span className="slider-value">{value}{unit}</span>
      </div>
      <div className="slider-track">
        <div 
          className="slider-fill" 
          style={{ width: `${percentage}%` }} 
          role="presentation"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="slider-input"
          aria-label={`${label} slider`}
        />
      </div>
    </div>
  );
}