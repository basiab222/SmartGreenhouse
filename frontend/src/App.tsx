import * as React from "react";
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./login/pages/LoginPage";
import { RegisterPage } from "./registration/pages/RegisterPage";
import { Greenhouse } from "./dashboard/pages/Greenhouse2";
import { PlantsView } from "./myPlants/pages/PlantsView";
import { AddPlant } from "./addPlant/components/addPlant";
import { EditPlant } from "./addPlant/components/EditPlant";
import { Profile } from "./profile/Profile";
import { EditProfile } from "./profile/EditProfile";
import { PlantData } from './myPlants/types';

function App() {
  const [plantData, setPlantData] = useState<PlantData[]>([]);

  const addNewPlant = (newPlant: PlantData) => {
    setPlantData((prevData) => [...prevData, newPlant]);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/greenhouse" element={<Greenhouse />} />
          <Route path="/plantsView" element={<PlantsView plantData={plantData} />} />
          <Route path="/addPlant" element={<AddPlant addNewPlant={addNewPlant} />} />
          <Route path="/editPlant" element={<EditPlant />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editProfile" element={<EditProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
