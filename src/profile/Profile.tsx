import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ProfileItem } from "./ProfileItem";
import { LogoutButton } from "./LogoutButton";
import { MainLayout } from "../navigationBar/MainLayout";
import { LogoutModal } from "./LogoutModal";
import "./Profile.css";

export const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = React.useState(false);

  const handleManageDetails = () => {
    navigate("/personal-details");
  };

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
  };

  const handleLogoutConfirm = () => {
    setIsLogoutModalOpen(false);
    navigate("/login");
  };

  const handleLogoutCancel = () => {
    setIsLogoutModalOpen(false);
  };

  return (
    <MainLayout currentPage="profile">
      <div className="profile-container">
        <div className="profile-title">My Profile</div>
        <div className="profile-info">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/e68543d590ce5d5bb63a32360a63d99e5b1b0341b989546b878ce49a4245f82c?apiKey=ed943c9eefda4aba883f53911d041e92&"
            alt="Profile picture"
            className="profile-image"
          />
          <div className="profile-name">Lucas Scott</div>
        </div>

        <ProfileItem
          text="Manage personal details"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/ed943c9eefda4aba883f53911d041e92/669e58de2c692f695fac781de28bf248bab56188a07cf533e526f3a741195844?apiKey=ed943c9eefda4aba883f53911d041e92&"
          alt="Manage details icon"
          onClick={handleManageDetails}
        />

        <LogoutButton onLogout={handleLogoutClick} />

        <LogoutModal
          isOpen={isLogoutModalOpen}
          onCancel={handleLogoutCancel}
          onLogout={handleLogoutConfirm}
        />
      </div>
    </MainLayout>
  );
};
