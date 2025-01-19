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