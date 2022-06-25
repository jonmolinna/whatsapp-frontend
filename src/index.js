import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Normalize
import { CssBaseline } from '@mui/material';

// Context
import { ContextProviderAuth } from './context/login/Context';
import { ContextProviderRegister } from './context/register/Context';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ContextProviderAuth>
      <ContextProviderRegister>
        <App />
      </ContextProviderRegister>
    </ContextProviderAuth>
  </React.StrictMode>,
  document.getElementById('root')
);