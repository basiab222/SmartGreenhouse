export interface PlantData {
  id: string;
  name: string;
  description: string;
  temperature: number;
  humidity: number;
  waterAmount: number;
  waterFrequency: number;
  lightFrom: string;
  lightTo: string;
  photo: string | File | null;
  isActive: boolean;
}

export interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  label: string;
  unit: string;
}

export interface TimePickerProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export interface PhotoUploadProps {
  photo: string | File | null;
  onPhotoChange: (file: File) => void;
}