import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Normalize
import { CssBaseline } from '@mui/material';

// Context
import { ContextProviderAuth } from './context/login/Context';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ContextProviderAuth>
      <App />
    </ContextProviderAuth>
  </React.StrictMode>,
  document.getElementById('root')
);