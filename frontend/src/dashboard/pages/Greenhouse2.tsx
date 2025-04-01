import * as React from "react";
import { MetricCard } from "../components/MetricCard";
import { PlantCard } from "../components/PlantCard";
import { MainLayout } from '../../navigationBar/MainLayout';
import "../styles/Greenhouse.css";


export const Greenhouse: React.FC = () => {
  const metrics = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/a2ba965b4dc6229d32c2e9f3375f5f9615ebb270d6240100d1e85e0a1792fd1b?apiKey=ed943c9eefda4aba883f53911d041e92&",
      value: "18°C",
      label: "Temperature",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/c6b02dcbcb81a28e3a9bd9cefce4da63c4e30e7eeff261b3a00f356b290557fd?apiKey=ed943c9eefda4aba883f53911d041e92&",
      value: "23%",
      label: "Humidity",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/e0e2ef1895b969c67337d57051942107c7264d9c30229f42ba58121b4fe37197?apiKey=ed943c9eefda4aba883f53911d041e92&",
      value: "ON",
      label: "Light",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/5565a9a167e14631897ffdbba9fb0e2aca38ee08c3f1dcda25ea0250fe77b34f?apiKey=ed943c9eefda4aba883f53911d041e92&",
      value: "2 days",
      label: "Until next watering",
    },
  ];

  return (
    <MainLayout currentPage="dashboard">
      <div className="greenhouse-container">
          <header className="greenhouse-header">
          <div className="greenhouse-title">
            My Greenhouse
          </div>
        </header>
        <div className="greenhouse-content">
          <PlantCard
            image="https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/a1e1c1baad151dad0adb3968b480a06365d812ac098c1eb9bc3aca17aadfbacb?apiKey=ed943c9eefda4aba883f53911d041e92&"
            title="Cactus"
            description="Cactus description"
          />

          <div className="metrics-row">
            {metrics.slice(0, 2).map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          <div className="metrics-row">
            {metrics.slice(2, 4).map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
