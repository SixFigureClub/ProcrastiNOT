import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaUser } from 'react-icons/fa';
import { GrMailOption } from 'react-icons/gr';
import axios from 'axios';

const RegisterForm = () => {
  // React Router hook for navigation
  const navigate = useNavigate();

  // useEffect to set the document title when the component mounts
  useEffect(() => {
    document.title = 'Register';
  }, []);

  // State for user input and errors
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    verifyPassword: '',
  });

  const [errors, setErrors] = useState({});

  // useRef to calculate and set the margin for error messages dynamically
  const errorRef = useRef(null);

  useEffect(() => {
    // Dynamically adjust margin for error messages based on their height
    if (errorRef.current) {
      const errorMessageHeight = errorRef.current.clientHeight;
      const newMargin = 30 + errorMessageHeight;
      document.documentElement.style.setProperty('--error-margin-register', `${newMargin}px`);
    }
  }, [errors]);

  // Handle input changes and clear related errors
  const onInputChange = (e) => {
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: undefined }));
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Make a POST request to register the user
      await axios.post('http://localhost:8080/register', user, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
      });
  
      // Clear errors and navigate to login page on successful registration
      setErrors({});
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data) {
        const serverErrors = error.response.data;
  
        if (serverErrors.error) {
          // Set error for password verification
          setErrors({ ...errors, verifyPassword: serverErrors.error });
        } else if (serverErrors.errors) {
          // Set detailed errors for each input field
          setErrors({
            username: serverErrors.errors.username,
            email: serverErrors.errors.email,
            password: serverErrors.errors.password,
            verifyPassword: serverErrors.errors.verifyPassword,
          });
        }
      } else {
        console.error('Unexpected error during registration:', error);
      }
    }
  };
  

  // JSX structure for the registration form
  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {/* Input field for username */}
        <div className="input-box" style={{ marginBottom: 'var(--error-margin-register)' }}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={user.username}
            onChange={(e) => onInputChange(e)}
          />
          <FaUser className="icon" />
          {/* Display username error message if exists */}
          {errors.username && (
            <div className="error-message" ref={errorRef}>
              {errors.username}
            </div>
          )}
        </div>

        {/* Input field for email */}
        <div className="input-box" style={{ marginBottom: 'var(--error-margin-register)' }}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            value={user.email}
            onChange={(e) => onInputChange(e)}
          />
          <GrMailOption className="icon" />
          {/* Display email error message if exists */}
          {errors.email && (
            <div className="error-message" ref={errorRef}>
              {errors.email}
            </div>
          )}
        </div>

        {/* Input field for password */}
        <div className="input-box" style={{ marginBottom: 'var(--error-margin-register)' }}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={user.password}
            onChange={(e) => onInputChange(e)}
          />
          <FaLock className="icon" />
          {/* Display password error message if it exists */}
          {errors.password && (
            <div className="error-message" ref={errorRef}>
              {errors.password}
            </div>
          )}
        </div>

        {/* Input field for password verification */}
        <div className="input-box" style={{ marginBottom: 'var(--error-margin-register)' }}>
          <input
            type="password"
            name="verifyPassword"
            placeholder="Verify Password"
            required
            value={user.verifyPassword}
            onChange={(e) => onInputChange(e)}
          />
          <FaLock className="icon" />
          {/* Display password verification error message if exists */}
          {errors.verifyPassword && (
            <div className="error-message" ref={errorRef}>
              {errors.verifyPassword}
            </div>
          )}
        </div>

        {/* Submit button */}
        <button type="submit">Register</button>

        {/* Link to login page */}
        <div className="register-link">
          <p>
            Already have an account? <Link to="/login">Login!</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;