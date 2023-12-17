import React from 'react'
import { Link } from 'react-router-dom';
import './LoginForm.css'
import { FaLock, FaUser } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action="post">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>
                    <FaUser className='icon'/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <Link to="/register">Register!</Link></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;