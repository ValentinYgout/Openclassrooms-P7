import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';


const LandingPage = () => {
    const { user, isAuthenticated } = useAuth0();
    console.log({user})
    return isAuthenticated ? <div>Welcome to Groupomania's social media, {user.nickname} </div> : <div>You must log in to access content!</div>;
};

export default LandingPage;