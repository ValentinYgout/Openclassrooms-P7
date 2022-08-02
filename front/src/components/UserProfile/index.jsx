import React from "react";
import './style.css'



import  Loading from '../Loading';

const userProfile = () => {
 
  
  

  const email= localStorage.getItem('email');
  const username= localStorage.getItem('username');






  return (
    
        
      <div className="userprofile">
            
        <table >
          <tbody>


       
              <tr>
                <th width="30%">Email</th>
            
                <td>{email}</td>
              </tr>
              <tr>
                <th width="30%">username	</th>
           
                <td>{username}</td>
              </tr>
              </tbody>
           
      
            </table>
      </div>
    
   
  );
};

export default userProfile