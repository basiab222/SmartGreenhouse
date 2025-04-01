import * as React from "react";
import { InputField } from "./InputField";
import { Header } from "./Header";
import { FormData, FormErrors } from "./types";
import { useNavigate } from 'react-router-dom';
import "./Profile.css";

export const EditProfile: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    name: "Lucas Scott",
    email: "lucas.scott@email.com",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const navigate = useNavigate();

  const handleInputChange = (field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (formData.password !== formData.confirmPassword) {
      newErrors.password = "The passwords do not match";
      newErrors.confirmPassword = "The passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
    console.log(formData);
    navigate('/profile');
    }
  };

  const handleCancel = () => {
    console.log("Editing cancelled");
    navigate('/profile');
  };

  return (
    <div className="edit-profile-container">
      {/* <Header onCancel={handleCancel} onSave={handleSave} /> */}
      {/* <form onSubmit={handleSave} className="form-container"> */}
      <div className="form-container">
      <header className="header">
            <button className="header-button" onClick={handleCancel}>Cancel</button>
            <h1 className="header-title">Add New Plant</h1>
            <button className="header-button" onClick={handleSubmit}>Save</button>
          </header>
        <div className="form-content">
          <InputField
            id="name"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleInputChange("name")}
          />
          <div className="field-spacing">
            <InputField
              id="email"
              name="email"
              label="Email Address"
              value={formData.email}
              onChange={handleInputChange("email")}
            />
          </div>
          <div className="field-spacing">
            <InputField
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleInputChange("password")}
              error={errors.password}
              hasError={!!errors.password}
            />
          </div>
          <div className="field-spacing">
            <InputField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange("confirmPassword")}
              error={errors.confirmPassword}
              hasError={!!errors.confirmPassword}
            />
          </div>
        </div>
      {/* </form> */}
    </div>
    </div>
  );
};