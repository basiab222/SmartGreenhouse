import * as React from 'react';
import { InputFieldProps } from './types';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export const InputField: React.FC<InputFieldProps> = ({
                                                          placeholder,
                                                          type = 'text',
                                                          value,
                                                          onChange,
                                                          name,
                                                          required = false,
                                                          autoComplete
                                                      }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);
    const inputType = type === 'password' && showPassword ? 'text' : type;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-col w-full max-w-[327px]">
            <div className={`flex overflow-hidden gap-2 items-center px-4 py-3.5 w-full rounded-xl border border-solid ${isFocused ? 'border-[#216607]' : 'border-stone-300'} h-[48px]`}>
                <div className="flex flex-1 shrink gap-1.5 items-center self-stretch my-auto w-full basis-0 min-w-[240px]">
                    <label className="sr-only" htmlFor={`input-${name}`}>
                        {placeholder}
                    </label>
                    <input
                        type={inputType}
                        id={`input-${name}`}
                        name={name}
                        className="flex-1 shrink gap-px self-stretch my-auto w-full min-w-[240px] bg-transparent outline-none text-[#1F2024] placeholder-neutral-400"
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        required={required}
                        autoComplete={autoComplete}
                        aria-label={placeholder}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                </div>
                {type === 'password' && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        {showPassword ? (
                            <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                        ) : (
                            <EyeIcon className="h-5 w-5 text-gray-500" />
                        )}
                    </button>
                )}
            </div>
        </div>
    );
};