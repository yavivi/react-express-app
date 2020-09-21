import React, { Component } from 'react';
import './App.css';
// import Name from './comps/name';
// import FFF from './comps/emeye';
import Drops from './comps/drop';
import CarousalPictures from './comps/picture';
import Mains from './comps/main';
import Searchs from './comps/sreach'

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




