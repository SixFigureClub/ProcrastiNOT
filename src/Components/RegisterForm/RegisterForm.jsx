import React from 'react'
import { Link } from 'react-router-dom';
import { FaLock, FaUser } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";

const RegisterForm = () => {
    return (
        <div className="wrapper">
            <form action="post">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>
                    <FaUser className='icon'/>
                </div>

                <div className="input-box">
                    <input type="text" placeholder='Email' required/>
                    <GrMailOption className='icon'/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder='Verify Password' required/>
                    <FaLock className='icon'/>
                </div>

                <button type="submit">Register</button>

                <div className="register-link">
                    <p>Already have an account? <Link to="/login">Login!</Link></p>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;