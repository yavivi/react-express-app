import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Address should be replaced with FQDN of application and taken from ENV
    fetch('http://localhost:3001/users', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then((response) => response.json()).
      then((data) => {
        setUsers(data);
      }).
      catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload me!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Users List from Server: 
          {
            users.map((user) => 
              (<div key={user.id}>{user.name}</div>))
          }
        </a>
      </header>
    </div>
  );
}

export default App;
