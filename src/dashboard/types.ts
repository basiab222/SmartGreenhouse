export interface NavItemProps {
  imageSrc: string;
  imageAlt: string;
  isActive: boolean;
}

export interface EmptyStateProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface MetricCardProps {
  icon: string;
  value: string;
  label: string;
  iconSize?: string;
}

export interface PlantCardProps {
  image: string;
  title: string;
  description: string;
}

export interface NavigationItemProps {
  icon: string;
  alt: string;
  onClick?: () => void;
}