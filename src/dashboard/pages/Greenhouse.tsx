import React from "react";
import { EmptyState } from "../components/EmptyState";
import { MainLayout } from 'C:/Users/UzytkownikML/Downloads/SmartGreenhouse/src/navigationBar/MainLayout';
import "../styles/Greenhouse.css";


export const Greenhouse: React.FC = () => {

  return (
    <MainLayout currentPage="dashboard">
      <div className="greenhouse-container">
        <header className="greenhouse-header">
          <div className="greenhouse-title">My Greenhouse</div>
        </header>

        <main className="main-content">
          <EmptyState
            title="No active plants"
            description="Search for a plant or add your own"
            imageSrc="https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/6677abcd84f8b1109bb6e5d9d60581f8bafdde3c677154422397d0363cc43cb4?apiKey=ed943c9eefda4aba883f53911d041e92&"
            imageAlt="Empty greenhouse illustration"
          />
        </main>
      </div>
    </MainLayout>
  );
};
