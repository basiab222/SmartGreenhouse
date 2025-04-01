import * as React from "react";
import { InputFieldProps } from "../types/types";

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  isPassword = false,
  value,
  onChange,
  error = false,
  onFocus,
  onBlur
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    if (onFocus) onFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) onBlur();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  const borderColor = error 
    ? "border-[#d65757]" 
    : isFocused 
      ? "border-[#216607]" 
      : "border-stone-300";

  return (
    <div className="flex flex-col w-full max-w-[327px]">
      <label 
        htmlFor={label.toLowerCase()} 
        className="text-xs font-bold text-zinc-800"
      >
        {label}
      </label>
      <div 
        className={`flex overflow-hidden gap-2 items-center px-4 py-3.5 mt-2 w-full text-sm leading-none rounded-xl border border-solid ${borderColor} min-h-[48px]`}
      >
        <div className="flex flex-1 shrink gap-1.5 items-center self-stretch my-auto basis-0 min-w-[240px]">
          <input
            type={inputType}
            id={label.toLowerCase()}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`flex-1 shrink gap-px self-stretch my-auto w-full min-w-[240px] bg-transparent border-none outline-none ${
              value ? "text-[#333333]" : isFocused ? "text-[#1F2024]" : "text-neutral-400"
            }`}
            aria-label={label}
            aria-invalid={error}
          />
        </div>
        {isPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3589 13.3587C12.0252 14.4211 10.5037 15 8.00004 15C3.63638 15 0.718714 11.1667 0.718714 11.1667M0.718714 11.1667C2.05238 9.91667 5.36371 7.41667 8.00004 7.41667M0.718714 11.1667L3.63638 8.25M8.00004 7.41667C10.6364 7.41667 13.9477 9.91667 15.2814 11.1667L12.3637 8.25M8.00004 7.41667V5.91667" stroke="#216607" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99996 3.33333C11.4727 3.33333 14.6666 8 14.6666 8C14.6666 8 11.4727 12.6667 7.99996 12.6667C4.52723 12.6667 1.33329 8 1.33329 8C1.33329 8 4.52723 3.33333 7.99996 3.33333Z" stroke="#216607" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#216607" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}