
//PlantCard.tsx
import * as React from 'react';
import { PlantCardProps } from '../types';
import '../MyPlants.css';

export const PlantCard: React.FC<PlantCardProps> = ({
  id,
  name,
  description,
  temperature,
  humidity,
  lightStart,
  lightEnd,
  imageSrc,
  isActive,
  onToggle,
  onEdit
}) => (
  <div className={`card ${isActive ? 'active' : ''}`}>
    <div className="imageContainer">
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${name} plant`}
        className="plantImage"
      />
      <div className="controlsContainer">
        <button
          onClick={() => onEdit(id)}
          className="iconButton"
          aria-label={`Edit ${name}`}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/f67b3559c7ee2f67214045e15e560c372e6bb7fae152f7f17bc4fac883601002?apiKey=ed943c9eefda4aba883f53911d041e92&"
            alt="Edit"
            className="object-contain w-full aspect-square"
          />
        </button>
        <button
          onClick={() => onToggle(id)}
          className="statusIndicator"
          aria-label={`Toggle ${name} active state`}
          aria-pressed={isActive}
        >
          <div className={`statusDot ${isActive ? 'active' : ''}`}>
            <div className="flex shrink-0 w-full h-5 bg-white rounded-full" />
          </div>
        </button>
      </div>
    </div>
    <div className="content">
      <div className="plantTitle">{name}</div>
      <div className="description">{description}</div>
      <div className="stats">
        Temperature: {temperature}°C
        <br />
        Humidity: {humidity}%
        <br />
        Light: {lightStart} - {lightEnd}
      </div>
    </div>
  </div>
);