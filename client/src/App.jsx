import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import './App.css';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link
} from "react-router-dom";
import AllGuide from './pages/AllGuide'
import SignIn from './pages/Signin'
import LogIn from './pages/Login'
import Home from './pages/home'
// import FFF from './comps/emeye';


// import Mains from './comps/main';

class App extends Component {
  render() {
    return (


      <div id="item">
             <div className="logo">
               TILOK
             </div>
        <Router>

          <Dropdown>
            {/* <h1>become a tour guide</h1> */}

            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <svg width="50px" height="30px" viewBox="0 0 16 16" class="bi bi-person-lines-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
              </svg>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item><Link to="/">Home</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/login">login</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/signin">signin</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/allguides">allguides</Link></Dropdown.Item>


            </Dropdown.Menu>
          </Dropdown>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LogIn} />
          <Route path="/signin" component={SignIn} />
          <Route path="/allguides" component={AllGuide} />
        </Router>
      </div>
    );
  }
};
export default App;
