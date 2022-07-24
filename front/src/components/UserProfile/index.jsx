import React from "react";


import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import  Loading from '../Loading';

const userProfile = () => {
  const { user, isAuthenticated } = useAuth0();
  
console.log(user)
  const { name, picture, email,nickname } = user;


  return (
    isAuthenticated && (
        
      <div>
            
        <img src={picture} alt="profile" />
       <h2>{name}</h2>
       <h2>{nickname}</h2>:
        <p>{email}</p>
      </div>
    )
   
  );
};

export default withAuthenticationRequired(userProfile, {
  onRedirecting: () => <Loading />,
});