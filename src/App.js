import React from 'react';
import './App.css';

import Home from './pages/home/Home';
import NotificationHandler from './components/notification-handler/NotificationHandler';
import AlertContext from './components/alert-context/AlertContext';

import { toast } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <NotificationHandler />
      <AlertContext.Provider value={ { toast } }>
        <Home/>
      </AlertContext.Provider>
    </div>
  );
}

export default App;
