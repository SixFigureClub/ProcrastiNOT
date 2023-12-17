import React from 'react'
import './RegisterForm.css';
import { FaLock, FaUser } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const RegisterForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>
                    <FaUser className='icon'/>
                </div>

                <div className="input-box">
                    <input type="text" placeholder='Email' required/>
                    <TfiEmail className='icon'/>
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
            </form>
        </div>
    );
};

export default RegisterForm;