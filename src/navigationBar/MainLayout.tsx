import React from 'react';
import { NavigationBar } from './NavigationBar';
import './NavigationBar.css';

interface MainLayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, currentPage }) => {
  return (
    <div className="layout">
      {children}
      <NavigationBar currentPage={currentPage} />
    </div>
  );
};