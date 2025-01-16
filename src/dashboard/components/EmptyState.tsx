import React from 'react';
import { EmptyStateProps } from '../types';
import '../styles/Greenhouse.css';

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  imageSrc,
  imageAlt
}) => {
  return (
    <div className="empty-state-container">
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className="empty-state-image"
      />
      <div className="empty-state-content">
        <div className="empty-state-title">
          {title}
        </div>
        <div className="empty-state-description">
          {description}
        </div>
      </div>
      <button className="empty-state-button">
        My plants
      </button>
    </div>
  );
};