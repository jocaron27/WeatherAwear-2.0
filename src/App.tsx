import React, { useState } from 'react';
import './App.css';
import Routes from './routes';

const App: React.FC = () => {

  const [isLoggedIn, setLoggedIn] = useState(true);
  // TODO: implement logged in check

  const handleLogout = () => {
    setLoggedIn(false);
  }

  return (
    <Routes isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
  );
}

export default App;
