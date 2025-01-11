import * as React from 'react';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import { LoginFormData } from '../types/types';

export const LoginPage: React.FC = () => {
    const [formData, setFormData] = React.useState<LoginFormData>({
        email: '',
        password: ''
    });

    const handleInputChange = (field: keyof LoginFormData) => (value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const handleForgotPassword = () => {
    };

    const handleRegister = () => {
    };

    return (
        <div className="flex overflow-hidden flex-col pb-36 bg-white max-w-[375px]">
            <div className="flex relative flex-col items-center justify-center px-16 pt-56 w-full text-3xl tracking-wide whitespace-nowrap aspect-[1.399] text-neutral-100">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e8c5c5beaf9074a31daa5d843f65df419ca7bf8bab753a7cf7aa1c8684e3420?placeholderIfAbsent=true&apiKey=ed943c9eefda4aba883f53911d041e92"
                    alt="TerraSmart Logo"
                    className="object-cover absolute inset-0 size-full"
                />
                <span className="relative z-10">TerraSmart</span>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col px-6 py-10 w-full">
                <div className="flex flex-col max-w-full w-[327px]">
                    <div className="flex flex-col w-full text-sm leading-none text-neutral-400">
                        <InputField
                            placeholder="Email Address"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange('email')}
                            name="email"
                            required
                            autoComplete="email"
                        />
                        <div className="mt-4">
                            <InputField
                                placeholder="Password"
                                type="password"
                                value={formData.password}
                                onChange={handleInputChange('password')}
                                name="password"
                                required
                                autoComplete="current-password"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleForgotPassword}
                            className="mt-4 text-xs font-semibold text-lime-900 hover:underline focus:outline-none focus:ring-2 focus:ring-[#216607] focus:ring-offset-2 rounded"
                        >
                            Forgot password?
                        </button>
                    </div>
                    <div className="flex flex-col mt-6 w-full text-xs font-semibold max-w-[327px]">
                        <Button type="submit" variant="primary">
                            Login
                        </Button>
                        <div className="self-start mt-4 tracking-normal text-center">
              <span className="tracking-normal leading-4 text-zinc-500">
                Not a member?
              </span>{" "}
                            <button
                                type="button"
                                onClick={handleRegister}
                                className="text-lime-900 hover:underline focus:outline-none focus:ring-2 focus:ring-[#216607] focus:ring-offset-2 rounded"
                            >
                                Register now
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};