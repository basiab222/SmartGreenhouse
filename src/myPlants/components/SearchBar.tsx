import * as React from 'react';
import { SearchBarProps } from '../types';
import '../MyPlants.css';

export const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="searchBarContainer">
      <form onSubmit={handleSubmit} className="searchForm">
        <div className="searchInputWrapper">
          <div className="searchIconContainer">
            <div className="searchCircle" />
            <div className="searchLine" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search plant"
            className="searchInput"
            aria-label="Search plants"
          />
        </div>
        <button
          type="button"
          onClick={onClose}
          className="closeSearchButton"
          aria-label="Close search"
        >
          ✕
        </button>
      </form>
    </div>
  );
};