import * as React from "react";
import { MetricCard } from "../components/MetricCard";
import { PlantCard } from "../components/PlantCard";
import { NavItem } from "../components/NavItem";
import "../styles/Greenhouse.css";

const navItems = [
    { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/f560d7516179a8cf92657358b41f47f380ba15c8b7b5fb3731488335279dcc9c?apiKey=ed943c9eefda4aba883f53911d041e92&', imageAlt: 'Navigation item 1', isActive: true },
    { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/c17a2369fa84909206416c6c230c2bf413c13c95b6bd59b23437b1d6c8365405?apiKey=ed943c9eefda4aba883f53911d041e92&', imageAlt: 'Navigation item 2', isActive: false },
    { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/53fa4a82882b5b5ec12872b79689334dd5206c143ada684d68bbdab6ed2a01eb?apiKey=ed943c9eefda4aba883f53911d041e92&', imageAlt: 'Navigation item 3', isActive: false },
    { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/be0f861f2bdd4f7a5f1d220c36f33cb359a09c95389f162342e90682a59efbe6?apiKey=ed943c9eefda4aba883f53911d041e92&', imageAlt: 'Navigation item 4', isActive: false }
  ];

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
      <div className="navigation-container">
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            isActive={item.isActive}
          />
        ))}
      </div>
    </div>
  );
};
