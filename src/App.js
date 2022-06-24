import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material';

import AppRouter from './routers/AppRouter';
// import { AuthProvider } from './context/auth';
// import { MessageProvider } from './context/message';



function App() {
  return (
    <Box>
      <Router>
        <AppRouter />
      </Router>
    </Box>
  );
};

export default App;