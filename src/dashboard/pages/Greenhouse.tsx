import React from "react";
import { NavItem } from "../components/NavItem";
import { EmptyState } from "../components/EmptyState";
import "../styles/Greenhouse.css";

const navItems = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/f560d7516179a8cf92657358b41f47f380ba15c8b7b5fb3731488335279dcc9c?apiKey=ed943c9eefda4aba883f53911d041e92&",
    imageAlt: "Navigation item 1",
    isActive: true,
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/c17a2369fa84909206416c6c230c2bf413c13c95b6bd59b23437b1d6c8365405?apiKey=ed943c9eefda4aba883f53911d041e92&",
    imageAlt: "Navigation item 2",
    isActive: false,
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/53fa4a82882b5b5ec12872b79689334dd5206c143ada684d68bbdab6ed2a01eb?apiKey=ed943c9eefda4aba883f53911d041e92&",
    imageAlt: "Navigation item 3",
    isActive: false,
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/be0f861f2bdd4f7a5f1d220c36f33cb359a09c95389f162342e90682a59efbe6?apiKey=ed943c9eefda4aba883f53911d041e92&",
    imageAlt: "Navigation item 4",
    isActive: false,
  },
];

export const Greenhouse: React.FC = () => {
  return (
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

      <nav className="navigation-container">
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            isActive={item.isActive}
          />
        ))}
      </nav>
    </div>
  );
};
