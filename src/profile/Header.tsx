import * as React from "react";
import { HeaderProps } from "./types";
import "./Profile.css";

export const Header: React.FC<HeaderProps> = ({ onCancel, onSave }) => {
  return (
    <div className="header-container">
      <button
        type="button"
        className="button-base"
        onClick={onCancel}
        aria-label="Cancel editing profile"
      >
        Cancel
      </button>
      <h1 className="header-title">Edit Profile</h1>
      <button
        type="button"
        className="button-base"
        onClick={onSave}
        aria-label="Save profile changes"
      >
        Save
      </button>
    </div>
  );
};