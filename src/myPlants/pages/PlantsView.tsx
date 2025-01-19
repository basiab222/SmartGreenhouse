import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlantCard } from '../components/PlantCard';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { PlantData } from '../types';
import { MainLayout } from '/Users/basia/SmartGreenhouse/SmartGreenhouse/src/navigationBar/MainLayout';
import { DeactivatePlantModal } from '../components/DeactivatePlantModel';
import '../MyPlants.css';

const initialPlants: PlantData[] = [
  {
    id: '1',
    name: 'Cactus',
    description: 'Cactus description',
    temperature: 18,
    humidity: 23,
    lightStart: '00:00',
    lightEnd: '12:45',
    imageSrc: 'https://i.pinimg.com/736x/6b/38/a9/6b38a98f473810e595415fca7e996676.jpg',
    isActive: false
  },
  {
    id: '2',
    name: 'Orchid',
    description: 'Orchid description',
    temperature: 22,
    humidity: 55,
    lightStart: '18:00',
    lightEnd: '6:00',
    imageSrc: 'https://i.pinimg.com/736x/2e/1d/7a/2e1d7abc35df5dea420be892bf73bcd9.jpg',
    isActive: false
  },
  {
    id: '3',
    name: 'Tomato',
    description: 'Tomato description',
    temperature: 25,
    humidity: 15,
    lightStart: '11:00',
    lightEnd: '16:00',
    imageSrc: 'https://i.pinimg.com/736x/8d/6b/1c/8d6b1cc238993183b86a7b072965d615.jpg',
    isActive: false
  }
];

export const PlantsView: React.FC = () => {
  const navigate = useNavigate();
  const [plants, setPlants] = React.useState<PlantData[]>(initialPlants);
  const [isSearchVisible, setIsSearchVisible] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedPlant, setSelectedPlant] = React.useState<PlantData | null>(null);

  const handleToggle = (id: string) => {
    const plant = plants.find(p => p.id === id);
    if (plant?.isActive) {
      setSelectedPlant(plant);
      setIsModalOpen(true);
    } else {
      setPlants(plants.map(plant => ({
        ...plant,
        isActive: plant.id === id ? !plant.isActive : false
      })));
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/plants/edit/${id}`);
  };

  return (
    <MainLayout currentPage="myPlants">
      <div className="container">
        {isSearchVisible ? (
          <SearchBar onClose={() => setIsSearchVisible(false)} />
        ) : (
          <Header onSearchClick={() => setIsSearchVisible(true)} />
        )}
        <div className="mainContent">
          {plants.map((plant) => (
            <PlantCard
              key={plant.id}
              {...plant}
              onToggle={handleToggle}
              onEdit={handleEdit}
            />
          ))}
        </div>
        {selectedPlant && (
          <DeactivatePlantModal
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setSelectedPlant(null);
            }}
            plantData={selectedPlant}
            title="Deactivate plant"
            description="Are you sure you want to deactivate your plant settings?"
            primaryAction={{
              label: "Deactivate",
              variant: "primary",
              onClick: () => {
                setPlants(plants.map(plant => ({
                  ...plant,
                  isActive: plant.id === selectedPlant.id ? false : plant.isActive
                })));
                setIsModalOpen(false);
                setSelectedPlant(null);
              }
            }}
            secondaryAction={{
              label: "Cancel",
              variant: "secondary",
              onClick: () => {
                setIsModalOpen(false);
                setSelectedPlant(null);
              }
            }}
          />
        )}
      </div>
    </MainLayout>
  );
};