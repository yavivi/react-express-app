import React, { Component } from 'react';
import './App.css';
// import Name from './comps/name';
// import FFF from './comps/emeye';
import Drops from './comps/drop';
import CarousalPictures from './comps/picture';
import Mains from './comps/main';
import Searchs from './comps/sreach'

<<<<<<< HEAD
class App extends Component {
  render() {
    return (
      <div>
        {/* <img src="pictures/south.jpg" /> */}
        <div>
          <div id="d">
            <Drops></Drops>
            <br />
            <br />
            <br />
            <br />
            <Searchs></Searchs>
          </div>

          <CarousalPictures></CarousalPictures>
          <Mains></Mains>

        </div>
      </div>
    );
  }
};
=======
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Address should be replaced with FQDN of application and taken from ENV
    // const domain = process.env.REACT_APP_DOMAIN;
    const domain = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_DOMAIN : "localhost:3001";
    const http = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    fetch(`${http}://${domain}/users`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      }).catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit&nbsp;
          <code>src/App.jsx</code>
          &nbsp;and save to reload me!
          <br />
          Running in
          &nbsp;
          {process.env.NODE_ENV}
          &nbsp;
          mode
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Users List from Server:
          {
            users.map((user) => (<div key={user.id}>{user.name}</div>))
          }
        </a>
      </header>
    </div>
  );
}
>>>>>>> 0a13e19c3f4b9ee697fac9b9f388bb2f76788ab6
export default App;
  // const [users, set.sers] = useState([]);

  // useEffect(() => {
  //   // Address should be replaced with FQDN of application and taken from ENV
  //   const domain = process.env.REACT_APP_DOMAIN;
  //   const http = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  //   fetch(`${http}://${domain}/users`, {
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     }
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUsers(data);
  //     }).catch((err) => console.log(err));
  // }, []);




