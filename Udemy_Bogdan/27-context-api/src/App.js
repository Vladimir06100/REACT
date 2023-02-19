import { useState } from 'react';
import UserContext from './context/UserContext';
import './App.css';
import User from './components/User';

function App() {
  const [user, setUser] = useState('Bogdan');
  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <User />
      </div>
    </UserContext.Provider>
  );
}

export default App;
