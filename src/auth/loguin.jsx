import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Navigate, useNavigate} from 'react-router-dom';
import { Home } from '../components/home';
import routes from '../utils/routes';

import './style.css';

export const Auth=()=> {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();
  // User Login info
  const database = [
    {
      username: 'user1',
      password: 'pass1',
    },
    {
      username: 'user2',
      password: 'pass2',
    },
  ];

  const errors = {
    uname: 'invalid username',
    pass: 'invalid password',
  };

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    const { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: 'pass', message: errors.pass });
      } else {
        setIsSubmitted(true);
        navigate(routes.HOME);
      }
    } else {
      // Username not found
      setErrorMessages({ name: 'uname', message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    
   return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <Navigate></Navigate> : (
    <div className="form">
      <form onSubmit={handleSubmit } >
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage('uname')}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage('pass')}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  )}
      </div>
    </div>
  );
}

export default Auth;
