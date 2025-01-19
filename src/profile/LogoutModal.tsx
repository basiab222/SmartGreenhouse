//LogoutModal.tsx
import * as React from 'react';
import { Button } from './Button';
import { LogoutModalProps } from './types';
import './Profile.css';

export const LogoutModal: React.FC<LogoutModalProps> = ({ 
    onCancel, 
    onLogout, 
    isOpen 
  }) => {
    if (!isOpen) return null;
  
    return (
      <div 
        className="modal-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="logout-title"
      >
        <div className="modal-container">
          <div className="modal-content">
            <div 
              className="modal-title"
              id="logout-title"
            >
              Log out
            </div>
            <div className="modal-description">
              Are you sure you want to log out? You'll need to login again to use
              the app.
            </div>
          </div>
          <div className="button-container">
            <Button 
              label="Cancel"
              variant="secondary"
              onClick={onCancel}
              ariaLabel="Cancel logout"
            />
            <Button 
              label="Log out"
              variant="primary"
              onClick={onLogout}
              ariaLabel="Confirm logout"
            />
          </div>
        </div>
      </div>
    );
  };