import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import AppRouter from './routers/AppRouter';
import { AuthProvider } from './context/auth';
import { MessageProvider } from './context/message';

function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <MessageProvider>
            <AppRouter />
          </MessageProvider>
        </AuthProvider>
      </Router>
      <Toaster 
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#d7dbdc',
            color: '#000',
          },
        }}
      />
    </div>
  );
};

export default App;