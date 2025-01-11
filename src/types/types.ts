export interface InputFieldProps {
    placeholder: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    name: string;
    required?: boolean;
    autoComplete?: string;
}

export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'link';
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export interface LoginFormData {
    email: string;
    password: string;
}