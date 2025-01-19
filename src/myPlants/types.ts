export interface SearchBarProps {
  onClose: () => void;
}

export interface PlantData {
  id: string;
  name: string;
  description: string;
  temperature: number;
  humidity: number;
  lightStart: string;
  lightEnd: string;
  imageSrc: string;
  isActive: boolean;
}

export interface PlantCardProps extends PlantData {
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
}

export interface NavigationItemProps {
  iconSrc: string;
  alt: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface HeaderIconProps {
  iconSrc: string;
  alt: string;
  onClick?: () => void;
}

export interface HeaderProps {
  onSearchClick: () => void;
}