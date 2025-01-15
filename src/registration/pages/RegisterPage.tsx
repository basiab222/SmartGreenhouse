import * as React from "react";
import { RegisterForm } from "../components/RegisterForm";

export const RegisterPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-56 bg-white max-w-[375px]">
      <div className="flex flex-col px-6 pt-6 w-full min-h-[552px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/b864ace660108c90dd05a6ff891943dcfa299040e646477601969a7d66201928?apiKey=ed943c9eefda4aba883f53911d041e92&"
          alt="Logo"
          className="object-contain w-6 aspect-square fill-white"
        />
        <div className="flex flex-col mt-6 max-w-full w-[327px]">
          <h1 className="text-base font-extrabold tracking-normal text-neutral-800">
            Register
          </h1>
          <p className="mt-2 text-xs tracking-normal leading-none text-zinc-500">
            Create an account to get started
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}