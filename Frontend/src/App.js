import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import HomePage from './Components/HomePage/HomePage';
import * as React from 'react'

function App() {
  // Render the main App component
  return (
    <Router>
      <Routes>
        {/* Route to the LoginForm component */}
        <Route path="/login" element={<LoginForm />} />
        {/* Route to the RegisterForm component */}
        <Route path="/register" element={<RegisterForm />} />
        {/* Route to the HomePage component (main application page) */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  
  );
}

export default App;
