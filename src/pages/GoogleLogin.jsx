import React from 'react';
import './google.css';
import Login from '../components/google/Login';
import Logout from '../components/google/Logout';
import LoginHooks from '../components/google/LoginHooks';
import LogoutHooks from '../components/google/LogoutHooks';

function GoogleLogin() {
  return (
    <div className="App">
      <h2>The Components way</h2>
      <Login />
      {/* <br />
      <Logout />
      <h2>The Hooks way</h2>
      <LoginHooks />
      <LogoutHooks />
      <br /> */}
     
    </div>
  );
}

export default GoogleLogin;