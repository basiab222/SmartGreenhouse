import * as React from 'react';
import { Button } from './Button';
import { ModalProps } from '../types';

export const DeactivatePlantModal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  plantData 
}) => {
  if (!isOpen) return null;

  const modalConfig = {
    title: "Deactivate plant",
    description: "Are you sure you want to deactivate your plant settings?",
    primaryAction: {
      label: "Deactivate",
      variant: "primary" as const,
      onClick: () => {
        plantData.isActive = false;
        onClose();
      }
    },
    secondaryAction: {
      label: "Cancel",
      variant: "secondary" as const,
      onClick: onClose
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div 
        className="flex flex-col p-4 bg-white rounded-2xl max-w-[300px]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex flex-col p-2 w-full text-center">
          <div 
            id="modal-title"
            className="text-base font-extrabold tracking-normal text-neutral-800"
          >
            {modalConfig.title}
          </div>
          <div className="mt-2 text-xs tracking-normal leading-4 text-zinc-500">
            {modalConfig.description}
          </div>
        </div>
        <div className="flex gap-2 items-start mt-5 w-full whitespace-nowrap">
          <Button {...modalConfig.secondaryAction} />
          <Button {...modalConfig.primaryAction} />
        </div>
      </div>
    </div>
  );
};