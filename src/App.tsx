import React, { useState, useEffect } from 'react';
import Routes from './routes';
import { getUser } from './app-controller';

const App: React.FC = () => {

  const [isLoggedIn, setLoggedIn] = useState(false);
  // TODO: implement logged in API

  useEffect(() => {
    // TODO: fetch initial data
    console.log('fetching initial data');
    getUser().then((user) => {
      console.log('user', user);
      if (user && user.id) setLoggedIn(true);
    })
  })

  const handleLogout = () => {
    // TODO: call API to logout
    setLoggedIn(false);
  }

  return (
    <Routes isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
  );
}

export default App;
