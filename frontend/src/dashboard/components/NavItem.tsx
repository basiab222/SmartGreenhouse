import React from 'react';
import { NavItemProps } from '../types';
import '../styles/Greenhouse.css';

export const NavItem: React.FC<NavItemProps> = ({ imageSrc, imageAlt, isActive }) => {
  return (
    <div className="nav-item">
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className={`nav-item-image ${isActive ? 'active' : ''}`}
      />
    </div>
  );
};