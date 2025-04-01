import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigationBar.css';

interface NavigationItem {
  id: string;
  icon: string;
  label: string;
  path: string;
}

interface NavigationBarProps {
  currentPage: string;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ currentPage }) => {
  const navigate = useNavigate();

  const navItems: NavigationItem[] = [
    { id: 'dashboard', icon: 'https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/ebb1bcca10c8996d4d429eda5f17ac149107aa7c5a065572a824557970395309?apiKey=ed943c9eefda4aba883f53911d041e92&', label: 'Dashboard', path: '/greenhouse' },
    { id: 'myPlants', icon: 'https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/c17a2369fa84909206416c6c230c2bf413c13c95b6bd59b23437b1d6c8365405?apiKey=ed943c9eefda4aba883f53911d041e92&', label: 'MyPlants', path: '/plantsView' },
    { id: 'history', icon: 'https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/53fa4a82882b5b5ec12872b79689334dd5206c143ada684d68bbdab6ed2a01eb?apiKey=ed943c9eefda4aba883f53911d041e92&', label: 'History', path: '/history' },
    { id: 'profile', icon: 'https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/be0f861f2bdd4f7a5f1d220c36f33cb359a09c95389f162342e90682a59efbe6?apiKey=ed943c9eefda4aba883f53911d041e92&', label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="navigation" aria-label="Main navigation">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`navigation__item ${currentPage === item.id ? 'navigation__item--active' : ''}`}
          onClick={() => navigate(item.path)}
          aria-label={item.label}
          aria-current={currentPage === item.id ? 'page' : undefined}
        >
          <img src={item.icon} alt="" />
        </button>
      ))}
    </nav>
  );
};