import * as React from 'react';
import { NavigationItemProps } from '../types';
import '../MyPlants.css';

export const NavigationItem: React.FC<NavigationItemProps> = ({
  iconSrc,
  alt,
  isActive,
  onClick
}) => (
  <button
    className={`navItem ${isActive ? 'active' : ''}`}
    onClick={onClick}
    aria-label={alt}
    aria-pressed={isActive}
  >
    <img
      loading="lazy"
      src={iconSrc}
      alt={alt}
      className="navIcon"
      style={{ filter: isActive ? 'invert(27%) sepia(93%) saturate(1096%) hue-rotate(91deg) brightness(94%) contrast(105%)' : 'none' }}
    />
  </button>
);