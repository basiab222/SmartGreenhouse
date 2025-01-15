import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./login/pages/LoginPage";
import { RegisterPage } from "./registration/pages/RegisterPage";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
