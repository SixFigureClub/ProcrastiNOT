import React from 'react'

// import './LoginForm.css';
import { Link } from 'react-router-dom';
import "./LoginForm.css";

// export default function LogIn() {



  // return (
    // <div>

const LoginForm = () => {
    return ( 
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' />
                    {/* <FaUser className='icon'/> */}
                </div>

                <div className="input-box">
                    <input type="password" placeholder='Password' />
                    {/* <FaLock className='icon'/> */}
                </div>

                <Link type="submit" to='/'>Log in</Link>

                <div className="register-link">
                    <p>Don't have an account? <a href="/component/register">Register!</a></p>
                </div>
            </form>
        </div>
      
    )
}

export default LoginForm;



