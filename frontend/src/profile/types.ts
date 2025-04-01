export interface ProfileItemProps {
    text: string;
    imageSrc: string;
    alt: string;
    onClick: () => void;
  }
  
  export interface LogoutButtonProps {
    onLogout: () => void;
  }

  export interface ButtonProps {
    label: string;
    variant: 'primary' | 'secondary';
    onClick?: () => void;
    ariaLabel?: string;
  }
  
  export interface LogoutModalProps {
    onCancel: () => void;
    onLogout: () => void;
    isOpen: boolean;
  }

  export interface InputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    type?: string;
    id: string;
    name: string;
    hasError?: boolean;
  }
  
  export interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  
  export interface FormErrors {
    password?: string;
    confirmPassword?: string;
  }
  
  export interface HeaderProps {
    onCancel: () => void;
    onSave: (e: React.FormEvent) => void; // Update the type of onSave
  }