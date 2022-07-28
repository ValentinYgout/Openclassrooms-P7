import React from 'react';

import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';

import { useAuth0 } from '@auth0/auth0-react';
import'./style.css'

const AuthenticationButton = () => {
  const {user, isAuthenticated } = useAuth0();

  return isAuthenticated ?<div className="authenticationDiv"> <span> 
    logged in as  <span className="loggedInInfo">{ user.name} </span>
     <br/>
     role:  <span className="loggedInInfo">{user["https://example.com/roles"][0]}</span>
      </span><LogoutButton /></div> : <LoginButton />;
};

export default AuthenticationButton;