import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogoutButton.css';
import axios from 'axios';

const LogoutButton = () => {
  // Hook to enable navigation in response to user actions
  const navigate = useNavigate();

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      // Make a GET request to logout the user with credentials
      await axios.get("http://localhost:8080/logout", { withCredentials: true });
      // Navigate to the login page after successful logout
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle any unexpected errors during logout
    }
  };

  // Render a button that triggers the logout function on click
  return (
    <button className="logout-button" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;


