import * as React from "react";
import { PlantCardProps } from "../types";
import "../styles/Greenhouse.css";

export const PlantCard: React.FC<PlantCardProps> = ({ 
  image, 
  title, 
  description 
}) => {
  return (
    <div className="plant-card">
      <div className="plant-image-container">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src={image}
          alt=""
          className="object-contain w-full aspect-[2.79] min-h-[120px]"
        />
      </div>
      <div className="plant-details">
        <div className="flex flex-col w-full">
          <div className="plant-title">{title}</div>
          <div className="plant-description">{description}</div>
        </div>
      </div>
    </div>
  );
};