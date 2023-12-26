import React, { useEffect } from 'react';
import './HomePage.css';
import LogoutButton from './LogoutButton';
// import useAuth from '../../Hooks/useAuth';

const HomePage = () => {
    // useAuth()
    useEffect(() => {
      document.title = 'ProcrastiNOT';
    }, []);

  const handleLogout = () => {
    console.log('Logout logic goes here');
  };

  return (
    <div className="logout-btn">
      <LogoutButton onLogout={handleLogout} />
    </div>
  );
};

export default HomePage;
