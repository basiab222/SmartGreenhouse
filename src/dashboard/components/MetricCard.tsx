import * as React from "react";
import { MetricCardProps } from "../types";
import "../styles/Greenhouse.css";

export const MetricCard: React.FC<MetricCardProps> = ({ 
  icon, 
  value, 
  label, 
  iconSize = "w-[60px]" 
}) => {
  return (
    <div className="metric-card">
      <div className="metric-card-content">
        <img
          loading="lazy"
          src={icon}
          alt={label}
          className={`object-contain aspect-square ${iconSize}`}
        />
        <div className="relative flex gap-2.5 items-start self-end min-h-[44px]">
          <div className="metric-value">{value}</div>
          <div className="metric-label">{label}</div>
        </div>
      </div>
    </div>
  );
};