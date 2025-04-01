
//TimeInput.tsx
import React from 'react';
import { TimePickerProps } from '../types';

export function TimePicker({ value, onChange, label }: TimePickerProps) {
    return (
      <div className="time-picker-container">
        <label className="time-picker-label">
          {label}
          <div className="time-input-wrapper">
            <input
              type="time"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="time-input"
              aria-label={`${label} time`}
            />
          </div>
        </label>
      </div>
    );
  }