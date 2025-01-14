export interface InputFieldProps {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  name: string;
  error?: boolean;
  className?: string;
}

export interface PasswordFieldProps extends InputFieldProps {
  onToggleVisibility?: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}