import * as React from 'react';
import { HeaderProps } from '../types';
import { useNavigate } from 'react-router-dom';
import { HeaderIcon } from './HeaderIcon';
import '../MyPlants.css';

export const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/addPlant'); // Change this to your desired route
  };
  return (
    <div className="header">
      <div className="headerContent">
        <div className="title">My Plants</div>
        <div className="headerIcons">
          <HeaderIcon
            iconSrc="https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/e684128581a28bc43122641eb34bd4fa08faab8c0c4f552c115f452b0c7d8f48?apiKey=ed943c9eefda4aba883f53911d041e92&"
            alt="Search"
            onClick={onSearchClick}
          />
          <HeaderIcon
            iconSrc="https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/0f83006432f1d3b016862440e49571167c06add54f554b3e56d7920b01200f39?apiKey=ed943c9eefda4aba883f53911d041e92&"
            alt="Add"
            onClick={handleAddClick}
          />
        </div>
      </div>
    </div>
  );
};