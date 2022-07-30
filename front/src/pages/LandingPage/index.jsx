import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import'./style.css'



const LandingPage = () => {
    const { user, isAuthenticated } = useAuth0();
    console.log({user})
    return isAuthenticated 
    ? <div className='LandingPage'> <span>Welcome to Groupomania's social media, {user.nickname} </span>
    </div> 
     : <div  className='LandingPage'><span>You must log in to access content!</span></div>;
     
     
};

export default LandingPage;

