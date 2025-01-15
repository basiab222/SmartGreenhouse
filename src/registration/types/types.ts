export interface InputFieldProps {
    label: string;
    placeholder: string;
    type?: string;
    isPassword?: boolean;
    value: string;
    onChange: (value: string) => void;
    error?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
  }
  
  export interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  
  export interface ValidationErrors {
    passwordMatch?: string;
  }