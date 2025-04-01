import * as React from "react";
import { LogoutButtonProps } from "./types";
import "./Profile.css";

export const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
    return (
      <div className="logout-container">
        <button 
          className="logout-button"
          onClick={onLogout}
          aria-label="Log out"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/43d7a28ffecea0424145b64ab3c53bdd6ea4e27ad764d72dfd24883e6f4e534b?apiKey=ed943c9eefda4aba883f53911d041e92&"
            alt="Logout icon"
            className="logout-icon"
          />
          <div className="logout-text-container">
            <div className="logout-text">
              Log out
            </div>
          </div>
        </button>
      </div>
    );
  };