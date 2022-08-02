import React from 'react';
import useAuth from '../../hooks/useAuth';
import'./style.css'


const LandingPage = () => {
    const {auth} = useAuth();
    const token = localStorage.getItem('accessToken')
    console.log({auth})

    return auth.username ||token
    ? <div className='LandingPage'> <span>Welcome to Groupomania's social media, {auth.username} </span>
    </div> 
     : <div  className='LandingPage'><span>You must log in to access content!</span></div>;
     
     
};

export default LandingPage;

