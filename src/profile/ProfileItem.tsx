import * as React from "react";
import { ProfileItemProps } from "./types";
import "./Profile.css";

export const ProfileItem: React.FC<ProfileItemProps> = ({ text, imageSrc, alt, onClick }) => {
  return (
    <button 
      className="profile-button"
      onClick={onClick}
      aria-label={text}
    >
      <div className="profile-item-text">
        {text}
      </div>
      <img
        loading="lazy"
        src={imageSrc}
        alt={alt}
        className="profile-item-icon"
      />
    </button>
  );
}