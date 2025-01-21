import * as React from "react";
import { InputFieldProps } from "./types";
import "./Profile.css";

export const InputField: React.FC<InputFieldProps> = ({
    label,
    value,
    onChange,
    error,
    type = "text",
    id,
    name,
    hasError
  }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const inputType = type === "password" && showPassword ? "text" : type;
  
    const togglePassword = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <div className="input-field-container">
        <label htmlFor={id} className="input-label">
          {label}
        </label>
        <div className={`input-wrapper ${hasError ? "error" : ""}`}>
          <div className="input-content">
            <input
              id={id}
              name={name}
              type={inputType}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="input-field"
              aria-invalid={hasError}
              aria-describedby={error ? `${id}-error` : undefined}
            />
          </div>
          {type === "password" && (
            <button
              type="button"
              onClick={togglePassword}
              className="password-toggle"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          )}
        </div>
        {error && (
          <div id={`${id}-error`} className="error-message" role="alert">
            {error}
          </div>
        )}
      </div>
    );
  };