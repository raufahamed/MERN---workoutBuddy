import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import WorkoutContext from './context/WorkoutContext';
import { AuthContextProvider } from './context/Authcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <BrowserRouter>
    <AuthContextProvider>
      <WorkoutContext>
         <App />
      </WorkoutContext>
    </AuthContextProvider>
  </BrowserRouter>
  </React.StrictMode>
);


