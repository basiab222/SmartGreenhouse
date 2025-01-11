import * as React from 'react';
import { LoginPage } from "./loginPage/LoginPage";

const App: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <LoginPage />
        </div>
    );
};

export default App;
