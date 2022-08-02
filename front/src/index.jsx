
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'
import {Auth0Provider} from '@auth0/auth0-react'
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from './Context/authProvider';







const root = ReactDOM.createRoot(
  document.getElementById("root")
)
root.render(
  <Router>
<AuthProvider>

   <App/>
</AuthProvider>
   </Router>
);
