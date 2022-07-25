import React from "react";
import './style.css'


import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import  Loading from '../Loading';

const userProfile = () => {
  const { user, isAuthenticated } = useAuth0();
  
console.log(user)
  const { name, picture, email,nickname } = user;


  return (
    
        
      <div className="userprofile">
            
        <img src={picture} alt="profile" />
        <div>

       <h2>Nom:  {name}</h2>
       <h2> Username:  {nickname}</h2>
        <p> email:  {email}</p>
        </div>
      </div>
    
   
  );
};

export default withAuthenticationRequired(userProfile, {
  onRedirecting: () => <Loading />,
});