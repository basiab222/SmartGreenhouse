import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlantFormData } from '../types';
import { Slider } from './Slider';
import { TimePicker } from './TimeInput';
import { PhotoUpload } from './PhotoUpload';
import './addPlant.css';

export function AddPlant() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<PlantFormData>({
    name: '',
    description: '',
    temperature: 0,
    humidity: 0,
    waterAmount: 0,
    waterFrequency: 0,
    lightFrom: '00:00',
    lightTo: '00:00',
    photo: null
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handlePhotoChange = (file: File) => {
    setFormData(prev => ({
      ...prev,
      photo: file
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
    navigate('/plantsView');
  };

  const handleCancel = () => {
    navigate('/plantsView');
  };
  

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <header className="header">
          <button className="header-button" onClick={handleCancel}>Cancel</button>
          <h1 className="header-title">Add New Plant</h1>
          <button className="header-button" onClick={handleSubmit}>Save</button>
        </header>

        <PhotoUpload photo={formData.photo} onPhotoChange={handlePhotoChange} />

        <div className="input-container">
          <label className="input-label" htmlFor="name">Plant name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="text-input"
            value={formData.name}
            onChange={handleInputChange}
            aria-label="Plant name"
          />
        </div>

        <div className="input-container">
          <label className="input-label" htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            className="textarea-input"
            value={formData.description}
            onChange={handleInputChange}
            aria-label="Plant description"
          />
        </div>

        <Slider
          value={formData.temperature}
          onChange={(value) => setFormData(prev => ({ ...prev, temperature: value }))}
          min={0}
          max={40}
          label="Temperature"
          unit="°C"
        />

        <Slider
          value={formData.humidity}
          onChange={(value) => setFormData(prev => ({ ...prev, humidity: value }))}
          min={0}
          max={100}
          label="Humidity"
          unit="%"
        />

        <div className="input-container">
          <h2 className="input-label">Watering</h2>
          <Slider
            value={formData.waterAmount}
            onChange={(value) => setFormData(prev => ({ ...prev, waterAmount: value }))}
            min={0}
            max={500}
            label="Amount"
            unit="ml"
          />
          <Slider
            value={formData.waterFrequency}
            onChange={(value) => setFormData(prev => ({ ...prev, waterFrequency: value }))}
            min={0}
            max={7}
            label="Frequency"
            unit="/ week"
          />
        </div>

        <div className="light-section">
          <h2 className="input-label">Light</h2>
          <div className="light-container">
            <TimePicker
              value={formData.lightFrom}
              onChange={(value) => setFormData(prev => ({ ...prev, lightFrom: value }))}
              label="From"
            />
            <TimePicker
              value={formData.lightTo}
              onChange={(value) => setFormData(prev => ({ ...prev, lightTo: value }))}
              label="To"
            />
          </div>
        </div>
      </div>
    </div>
  );
}