import * as React from 'react';
import { HeaderIconProps } from '../types';
import '../MyPlants.css';

export const HeaderIcon: React.FC<HeaderIconProps> = ({ iconSrc, alt, onClick }) => (
  <button
    onClick={onClick}
    aria-label={alt}
    className="headerIcon"
  >
    <img
      loading="lazy"
      src={iconSrc}
      alt={alt}
      className="headerIcon"
    />
  </button>
);