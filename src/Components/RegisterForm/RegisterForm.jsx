import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaUser } from 'react-icons/fa';
import { GrMailOption } from 'react-icons/gr';
import axios from 'axios';
import { ZeroBounceSDK } from '@zerobounce/zero-bounce-sdk';
import emailVerification from '../EmailVerification';
import ZeroBounceApi from '../ZeroBounceApi/ZeroBounceApi';
import App from '../../App';
// import fetch from 'node-fetch';
const apiKey = "9a2629c2e27e4af59f08e4a2ca959991";

function RegisterForm() {
  const navigate = useNavigate();

  // ZeroBounceApi.init("9a2629c2e27e4af59f08e4a2ca959991");
  const ZeroBounceSDK = require('@zerobounce/zero-bounce-sdk')

  const zeroBounce = new ZeroBounceSDK();
  zeroBounce.init("9a2629c2e27e4af59f08e4a2ca959991");

// where data from reg. form is fetched
  useEffect(() => {
    document.title = 'Register';
  }, []);
// where data from reg. form gets stored
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    verifyPassword: '',
  });

  const [errors, setErrors] = useState({});
  // const [status, setStatus] = useState({
  //   value: "",
  //   hasError: false,
  // })
  const [status, setStatus] = useState("");

  const { username, email, password, verifyPassword } = user;
  const errorRef = useRef(null);

  useEffect(() => {
    if (errorRef.current) {
      const errorMessageHeight = errorRef.current.clientHeight;
      const newMargin = 30 + errorMessageHeight;
      document.documentElement.style.setProperty('--error-margin-register', `${newMargin}px`);
    }
  }, [errors]);

  

  const onInputChange = (e) => {
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: undefined }));
    setUser({ ...user, [e.target.name]: e.target.value });
  };

// const validEmail = async() =>{
//   const ZeroBounceSDK = require("@zerobounce/zero-bounce-sdk");
//   const zeroBounce = new ZeroBounceSDK();
//   zeroBounce.init("9a2629c2e27e4af59f08e4a2ca959991");
//   emailVerification(email);
// };

const [endPoint, setEndPoints] = useState('');
const [container, setContainer] = useState([]);
// put the whole json object into this "data" array


// const onChangeHandler =async (e) => {
//   setEndPoints(e.target.value);
// }


  
  // Promise
  const handleSubmit = async (e) => {
    e.preventDefault();


    
    try {
      await axios.post('http://localhost:8080/register', user, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
      });

      setErrors({});
      navigate('/login');

    } catch (error) {
      console.error('Registration error:', error);

      if (error.response && error.response.data) {
        const serverErrors = error.response.data;

        if (serverErrors.error) {
          setErrors({ ...errors, verifyPassword: serverErrors.error });
        } else if (serverErrors.errors) {
          setErrors({
            username: serverErrors.errors.username,
            email: serverErrors.errors.email,
            password: serverErrors.errors.password,
            verifyPassword: serverErrors.errors.verifyPassword,
          });
        }
      } else {
        console.error('Unexpected error:', error);
        console.log('Response:', error.response);
      }
    }

    if (status == "invalid") {
      setInputError('This is not a vaild email')
      console.error('This is not a valid email address')
    }
  };

  console.log(endPoint);
  console.log(email);

// const zeroemail = email; // The email address you want to validate
// const ip_address = "99.110.204.1"; // The IP Address the email signed up from (Optional)

// try {
//   const response =  zeroBounce.validateEmail(zeroemail, ip_address);
// } catch (error) {
//   console.error(error);
// }
const zeroCheck = async (e) => {
// async function zeroCheck(email) {
  
  try {
    const credits = await zeroBounce.getCredits();
    console.log(credits);

  } catch (error) {
    console.error(error);
  }
  const zemail = email; // The email address you want to validate
  const ip_address = "99.110.204.1"; // The IP Address the email signed up from (Optional)

  try {
    const response = await zeroBounce.validateEmail(zemail, ip_address);
    console.log(response);
    setStatus(response.status);

    console.log(response.status);
    console.log(status);
    return status;

  } catch (error) {
    console.error(error);
  }

 }
console.log(zeroCheck(email));
console.log(status);

// const changeHandler = (e) => {
//   console.log("value changed: ", e.target.value);
//   console.log(status);
//   // console.log
//   const inputValue = e.target.value.trim().toLowerCase()
//   let hasError = false
//     if (
//       !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
//         inputValue
//       )
//     ) {
//       hasError = true
//     }
//     const response =  zeroBounce.validateEmail(email);
//     console.log(response);
//     setStatus(currentValue => ({
//       ...currentValue,
//       value: e.target.value,
//       hasError,
//     }))
// }

const blurHandler = () => {
  console.log("input blurred");
}

// const emailInputChange = (e) => {
//   console.log("value changed: ", e.target.value);
//   console.log(status);
//   let hasError = false;
//   // if (status == "invalid") {
//   //   hasError = true;
//   //   setStatusError('Please enter a valid email address');
//   // } else {
//   //   setStatusError('');
//   // }
//   const response =  zeroBounce.validateEmail(email);
//   console.log(response);
//   setStatus(currentValue => ({
//     ...currentValue,
//     value: e.target.value,
//     hasError,
//   }))
//   // setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: undefined }));
//   setUser({ ...user, [e.target.name]: e.target.value });
// };

console.log(status);
console.log(typeof(status));

// EMAIL STATUS ERROR ATTEMPT
const [inputValue, setInputValue] = useState('');
const [inputError, setInputError] = useState(null);

  function handleInputChange(e) {
    const value = e.target.value;
    setInputValue(value);
    console.log(value)
    console.log(inputValue)
    console.log(status);
    console.log(email)
    const response =  zeroBounce.validateEmail(email);
    console.log(response);
    setStatus(currentValue => ({
      ...currentValue,
      value: e.target.value,
      // hasError,
    }))
    // setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: undefined }));
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(status)
    if (status == "invalid") {
      setInputError('This email address is invalid!');
    } else {
      setInputError(null);
    }
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   if (inputValue.length >= 5) {
  //     // submit form
  //   } else {
  //     setInputError('Input must be at least 5 characters');
  //   }
  // }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="input-box" style={{ marginBottom: 'var(--error-margin-register)' }}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => onInputChange(e)} />
          <FaUser className="icon" />
          {errors.username && (
            <div className="error-message" ref={errorRef}>
              {errors.username}
            </div>
          )}
        </div>
        {/* where my email input is */}
        <div className="input-box" style={{ marginBottom: 'var(--error-margin-register)' }}>
          <label>
            <input
            type="text"
            name="email"
            placeholder="Email"
            required
            value={email.value}
            // onChange={(e) => onInputChange(e)}
            // onChange={(e) => emailInputChange(e)}
            // onChange={changeHandler}
            onChange={(e) => handleInputChange(e)}
            onBlur={blurHandler} />
          <GrMailOption className="icon" />
          {/* {errors.email && (
            <div className="error-message" ref={errorRef}>
              {errors.email}
            </div>
          )} */}
            {/* helperText={email} */}
           {/* {email.hasError && <div>Please enter a valid email</div>} */}
           </label>
           {inputError && <div style = {{ color: 'red' }}>{username}, {inputError}</div>}
        </div>



      



        <div className="input-box" style={{ marginBottom: 'var(--error-margin-register)' }}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => onInputChange(e)} />
          <FaLock className="icon" />
          {errors.password && (
            <div className="error-message" ref={errorRef}>
              {errors.password}
            </div>
          )}
        </div>

        <div className="input-box" style={{ marginBottom: 'var(--error-margin-register)' }}>
          <input
            type="password"
            name="verifyPassword"
            placeholder="Verify Password"
            required
            value={verifyPassword}
            onChange={(e) => onInputChange(e)} />
          <FaLock className="icon" />
          {errors.verifyPassword && (
            <div className="error-message" ref={errorRef}>
              {errors.verifyPassword}
            </div>
          )}
        </div>

        <button type="submit">Register</button>

        <div className="register-link">
          <p>
            Already have an account? <Link to="/login">Login!</Link>
          </p>
        </div>
      </form>
      


      <form>
        
        <div className="input-box" style={{ marginBottom: 'var(--error-margin-register)' }}>
          {/* <input
            type="text"
            name="email"
            placeholder="Email"
            required
            value={endPoint}
            // require that the returned value of response.status = "valid"
            onChange={onChangeHandler} /> */}
          {/* <GrMailOption className="icon" /> */}
          {/* {errors.email && (
            <div className="error-message" ref={errorRef}>
              {errors.email}
            </div>
          )} */}
        </div>
      </form>
    </div>
  );
  
}



export default RegisterForm;