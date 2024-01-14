import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaUser } from 'react-icons/fa';
import axios from 'axios';
import './LoginForm.css';

const LoginForm = () => {
  // React hook to enable navigation
  const navigate = useNavigate();

  // Set document title when the component mounts
  useEffect(() => {
    document.title = 'Login';
  }, []);

  // State to manage user input and errors
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const { username, password } = user;
  const errorRef = useRef(null);

  // Adjust margin dynamically based on error message height
  useEffect(() => {
    if (errorRef.current) {
      const errorMessageHeight = errorRef.current.clientHeight;
      const newMargin = 30 + errorMessageHeight;
      document.documentElement.style.setProperty('--error-margin-login', `${newMargin}px`);
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
      // Send login request to the server
      await axios.post('http://localhost:8080/login', user, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
      });

      // Clear errors and navigate to home page on successful login
      setErrors({});
      navigate('/');
    } catch (error) {
      // Handle errors from the server response
      if (error.response && error.response.data && error.response.data.errors) {
        const serverErrors = error.response.data.errors;

        if (Array.isArray(serverErrors) && serverErrors.length > 0) {
          // Handle specific field errors
          const fieldErrors = {};
          serverErrors.forEach((error) => {
            fieldErrors[error.field] = error.defaultMessage;
          });

          // Check for specific error cases
          if (fieldErrors.password) {
            fieldErrors.password = 'Incorrect password';
          } else if (fieldErrors.username) {
            fieldErrors.general = '';
          }

          setErrors(fieldErrors);
        } else if (typeof serverErrors === 'object') {
          // Handle different response structure
          const fieldErrors = {};
          for (const field in serverErrors) {
            fieldErrors[field] = serverErrors[field];
          }

          // Check for specific error cases
          if (fieldErrors.password === 'Invalid password') {
            fieldErrors.password = 'Incorrect password';
          } else if (fieldErrors.username === 'The given username does not exist') {
            fieldErrors.general = '';
          }

          setErrors(fieldErrors);
        } else if (typeof serverErrors === 'string') {
          // Handle general errors
          setErrors({ general: serverErrors });
        }
      }
    }
  };

  // Render the login form
  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        {/* Username input */}
        <div className="input-box" style={{ marginBottom: 'var(--error-margin-login)' }}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => onInputChange(e)}
          />
          <FaUser className="icon" />
          {/* Display username-related errors */}
          {errors.username && (
            <div className="error-message" ref={errorRef}>
              {errors.username}
            </div>
          )}
        </div>

        {/* Password input */}
        <div className="input-box" style={{ marginBottom: 'var(--error-margin-login)' }}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => onInputChange(e)}
          />
          <FaLock className="icon" />
          {/* Display password-related errors */}
          {errors.password && (
            <div className="error-message" ref={errorRef}>
              {errors.password}
            </div>
          )}
        </div>

        {/* Display general errors */}
        {errors.general && (
          <div className="error-message" ref={errorRef}>
            {errors.general}
          </div>
        )}

        {/* Submit button */}
        <button type="submit">Login</button>

        {/* Link to registration page */}
        <div className="register-link">
          <p>
            Don't have an account? <Link to="/register">Register!</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
