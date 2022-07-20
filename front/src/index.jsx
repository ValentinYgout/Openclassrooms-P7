
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'
import { AuthProvider } from './Context/authProvider';


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <AuthProvider>
      <App/>
  </AuthProvider>
);
