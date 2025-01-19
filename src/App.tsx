import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./login/pages/LoginPage";
import { RegisterPage } from "./registration/pages/RegisterPage";
import { Greenhouse } from "./dashboard/pages/Greenhouse2";
import { PlantsView } from "./myPlants/pages/PlantsView";
import { AddPlant } from "./addPlant/components/addPlant";
import { Profile } from "./profile/Profile";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/greenhouse" element={<Greenhouse />} />
          <Route path="/plantsView" element={<PlantsView />} />
          <Route path="/addPlant" element={<AddPlant />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
