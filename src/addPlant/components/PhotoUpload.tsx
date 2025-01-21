//PhotoUpload.tsx
import React, { useRef } from "react";
import { PhotoUploadProps } from "../types";

export function PhotoUpload({ photo, onPhotoChange }: PhotoUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onPhotoChange(file);
    }
  };

  return (
    <button
      className="photo-upload"
      onClick={handleClick}
      aria-label="Upload plant photo"
      type="button"
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
        aria-hidden="true"
      />
      {photo ? (
        <img
          src={URL.createObjectURL(photo as File)}
          alt="Plant preview"
          className="photo-preview"
        />
      ) : (
        <>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/aaf8c46332d7c97ab7a3db3d0bca8127156aec358ce0e49115222e064b81e2b6?apiKey=ed943c9eefda4aba883f53911d041e92&"
            alt=""
            className="default-photo-icon"
          />
          <span className="upload-text">Click to add photo</span>
        </>
      )}
    </button>
  );
}
