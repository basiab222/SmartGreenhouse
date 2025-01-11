import * as React from 'react';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  variant = 'primary',
                                                  onClick,
                                                  type = 'button'
                                              }) => {
    const baseStyles = "overflow-hidden gap-2 self-stretch px-4 py-4 w-full whitespace-nowrap rounded-xl min-h-[48px] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#216607]";
    const variantStyles = variant === 'primary'
        ? "text-white bg-lime-900 hover:bg-lime-800 active:bg-lime-950"
        : "text-lime-900 hover:text-lime-800 active:text-lime-950";

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles}`}
            type={type}
        >
            {children}
        </button>
    );
};