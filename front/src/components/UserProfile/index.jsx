import React from "react";
import './style.css'


import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import  Loading from '../Loading';

const userProfile = () => {
  const { user } = useAuth0();
  
  
console.log(user)
  const {picture, email,nickname } = user;





  return (
    
        
      <div className="userprofile">
            
        <img src={picture} alt="profile" />
        <table >
          <tbody>


       
              <tr>
                <th width="30%">Email</th>
            
                <td>{email}</td>
              </tr>
              <tr>
                <th width="30%">Nickname	</th>
           
                <td>{nickname}</td>
              </tr>
              </tbody>
           
      
            </table>
      </div>
    
   
  );
};

export default withAuthenticationRequired(userProfile, {
  onRedirecting: () => <Loading />,
});