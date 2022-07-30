
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'
import {Auth0Provider} from '@auth0/auth0-react'
import { BrowserRouter as Router } from "react-router-dom";






const root = ReactDOM.createRoot(
  document.getElementById("root")
)
root.render(
  <Router>
    
  <Auth0Provider
  domain="dev-5bvir81f.us.auth0.com"
  clientId="pcMD2ueWQQvl3uKCnrHljaCfJnp58e62"
  redirectUri={window.location.origin}
  audience="http://localhost:3500/api/"
  scope="openid profile email"
  >
      <App/>
   </Auth0Provider>
   </Router>
);
