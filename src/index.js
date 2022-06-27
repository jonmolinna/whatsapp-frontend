import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Normalize
import { CssBaseline } from '@mui/material';

// Context
import { ContextProviderAuth } from './context/login/Context';
import { ContextProviderRegister } from './context/register/Context';
import { ContextProviderUsers } from './context/users/Context';
import { ContextProviderMessages } from './context/messages/Context';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ContextProviderAuth>
      <ContextProviderRegister>
        <ContextProviderUsers>
          <ContextProviderMessages>
            <App />
          </ContextProviderMessages>
        </ContextProviderUsers>
      </ContextProviderRegister>
    </ContextProviderAuth>
  </React.StrictMode>,
  document.getElementById('root')
);