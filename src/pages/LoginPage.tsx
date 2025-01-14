import React from 'react';
import { InputField } from '../components/InputField';
import { PasswordField } from '../components/PasswordField';
import { Button } from '../components/Button';
import { LoginFormData } from '../types/AuthTypes';
import '../styles/auth.css';

export const LoginPage: React.FC = () => {
  const [formData, setFormData] = React.useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [error, setError] = React.useState(false);

  const handleInputChange = (field: keyof LoginFormData) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(true);
  };

  return (
    <div className="auth-container">
      <div className="header-container">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e8c5c5beaf9074a31daa5d843f65df419ca7bf8bab753a7cf7aa1c8684e3420?placeholderIfAbsent=true&apiKey=ed943c9eefda4aba883f53911d041e92"
          alt=""
          className="header-image"
        />
        <span className="header-text">TerraSmart</span>
      </div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-inner">
          <div className="input-section">
            <InputField
              placeholder="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              error={error}
            />
            <div className="mt-4">
              <PasswordField
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange('password')}
                error={error}
              />
            </div>
            {error && (
              <div className="error-message">
                Incorrect email address or password.
              </div>
            )}
            <button type="button" className="forgot-password">
              Forgot password?
            </button>
          </div>
          <div className="button-section">
            <Button type="submit">Login</Button>
            <div className="register-text">
              <span className="text-zinc-500">Not a member?</span>{" "}
              <button type="button" className="register-link">
                Register now
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};