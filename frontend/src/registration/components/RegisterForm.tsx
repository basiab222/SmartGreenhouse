import * as React from "react";
import { InputField } from "./InputField";
import { FormData, ValidationErrors } from "../types/types";

export const RegisterForm: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = React.useState<ValidationErrors>({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.passwordMatch = "The passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (isSubmitted) {
      validateForm();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    if (validateForm()) {
      console.log("Form submitted successfully");
    }
  };

  const inputFields = [
    { 
      label: "Name", 
      placeholder: "Enter full name",
      value: formData.name,
      onChange: handleChange("name")
    },
    { 
      label: "Email Address", 
      placeholder: "name@email.com", 
      type: "email",
      value: formData.email,
      onChange: handleChange("email")
    },
    { 
      label: "Password", 
      placeholder: "Create a password", 
      isPassword: true,
      value: formData.password,
      onChange: handleChange("password"),
      error: isSubmitted && !!errors.passwordMatch
    },
    { 
      label: "Confirm Password", 
      placeholder: "Confirm password", 
      isPassword: true,
      value: formData.confirmPassword,
      onChange: handleChange("confirmPassword"),
      error: isSubmitted && !!errors.passwordMatch
    }
  ];

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex flex-col mt-6 max-w-full w-[327px]"
      noValidate
    >
      {inputFields.map((field, index) => (
        <div key={field.label} className={index > 0 ? "mt-4" : ""}>
          <InputField {...field} />
          {index === 3 && errors.passwordMatch && (
            <p className="mt-2 text-[12px] font-inter text-[#d65757]" role="alert">
              {errors.passwordMatch}
            </p>
          )}
        </div>
      ))}
      <div className="flex flex-col mt-6 w-full text-xs font-semibold max-w-[327px]">
        <button 
          type="submit"
          className="overflow-hidden gap-2 self-stretch px-4 py-4 w-full text-white bg-lime-900 rounded-xl min-h-[48px] hover:bg-[#216607] transition-colors focus:outline-none focus:ring-2 focus:ring-[#216607] focus:ring-offset-2"
        >
          Sign Up
        </button>
        <div className="self-start mt-4 tracking-normal text-center text-lime-900">
          <span className="tracking-normal leading-4 text-zinc-500">
            Already have an account?
          </span>{" "}
          <a 
            href="/login" 
            className="text-lime-900 hover:underline focus:outline-none focus:ring-2 focus:ring-[#216607] focus:ring-offset-2 rounded-sm" 
            tabIndex={0}
          >
            Sign In
          </a>
        </div>
      </div>
    </form>
  );
}