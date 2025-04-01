import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlantCard } from '../components/PlantCard';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { PlantData } from '../types';
import { MainLayout } from '../../navigationBar/MainLayout';
import { DeactivatePlantModal } from '../components/DeactivatePlantModel';
import { AddPlant } from '/Users/basia/SmartGreenhouse/SmartGreenhouse/src/addPlant/components/addPlant';
import '../MyPlants.css';

const initialPlants: PlantData[] = [
  {
    id: '1',
    name: 'Cactus',
    description: 'Cactus description',
    temperature: 18,
    humidity: 23,
    waterAmount: 50,
    waterFrequency: 7,
    lightFrom: '00:00',
    lightTo: '12:45',
    photo: 'https://i.pinimg.com/736x/6b/38/a9/6b38a98f473810e595415fca7e996676.jpg',
    isActive: false
  },
  {
    id: '2',
    name: 'Orchid',
    description: 'Orchid description',
    temperature: 22,
    humidity: 55,
    waterAmount: 10,
    waterFrequency: 3,
    lightFrom: '18:00',
    lightTo: '6:00',
    photo: 'https://i.pinimg.com/736x/2e/1d/7a/2e1d7abc35df5dea420be892bf73bcd9.jpg',
    isActive: false
  },
  {
    id: '3',
    name: 'Tomato',
    description: 'Tomato description',
    temperature: 25,
    humidity: 15,
    waterAmount: 150,
    waterFrequency: 2,
    lightFrom: '11:00',
    lightTo: '16:00',
    photo: 'https://i.pinimg.com/736x/8d/6b/1c/8d6b1cc238993183b86a7b072965d615.jpg',
    isActive: false
  }
];

interface PlantsViewProps {
  plantData: PlantData[];
}

export const PlantsView: React.FC<PlantsViewProps> = ({ plantData }) => {
  const navigate = useNavigate();
  const [plants, setPlants] = React.useState<PlantData[]>(initialPlants);
  const [isSearchVisible, setIsSearchVisible] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedPlant, setSelectedPlant] = React.useState<PlantData | null>(null);
  const [localPlantData, setLocalPlantData] = React.useState<PlantData[]>([]);

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
  const handleEdit = (plant: PlantData) => {
    navigate("/editPlant", { state: plant });
  };

  const getNextId = () => {
    const lastPlant = plants[plants.length - 1];
    return (parseInt(lastPlant.id) + 1).toString(); // Get next available ID
  };

  const addNewPlant = (newPlant: PlantData) => {
    const newId = getNextId(); // Get the next available ID
    const plantWithId = { ...newPlant, id: newId }; // Add the new ID to the plant
    setPlants((prevData) => [...prevData, plantWithId]); // Add the plant to the state
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
              onEdit={() => handleEdit(plant)}
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
      {/* <AddPlant addNewPlant={addNewPlant} /> */}
    </MainLayout>
  );
};