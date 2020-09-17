import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'

class Drops extends Component {
    render() {
        return (
            <div  className="container">
                 <div className="logo">
                    TILOK
                </div>
                <div className="links">
                    <a href="#action-1">Recommened Conntries</a>
                    <a href="#action-2">All Guides</a>
                    <a href="#action-3">hhhhhh</a>
                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <svg width="50px" height="30px" viewBox="0 0 16 16" class="bi bi-person-lines-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">LogIn</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">SignIn</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Helf</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

        );
    }

}
export default Drops;