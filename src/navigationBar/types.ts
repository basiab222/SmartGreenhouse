// export interface NavigationItemProps {
//     icon: string;
//     alt: string;
//     onClick?: () => void;
//   }

//   export interface NavItemProps {
//     imageSrc: string;
//     imageAlt: string;
//     isActive: boolean;
//   }

export interface NavigationItem {
    src: string;
    alt: string;
    path: string;
  }
  
  export interface NavigationIconProps extends NavigationItem {
    isActive: boolean;
  }