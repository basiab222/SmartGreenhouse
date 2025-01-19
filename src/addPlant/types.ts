export interface PlantFormData {
  name: string;
  description: string;
  temperature: number;
  humidity: number;
  waterAmount: number;
  waterFrequency: number;
  lightFrom: string;
  lightTo: string;
  photo: File | null;
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
  photo: File | null;
  onPhotoChange: (file: File) => void;
}