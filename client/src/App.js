import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let res;
  fetch('http://localhost:3001/users', { 
    headers: {
      'Access-Control-Allow-Origin': 'localhost:3000'
    }
  }).then((response) => {
    res = response;
  }).catch((err) => console.log(err));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload me
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {res}
        </a>
      </header>
    </div>
  );
}

export default App;
