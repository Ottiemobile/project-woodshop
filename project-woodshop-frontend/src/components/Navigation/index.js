import React from 'react';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';



class Navigation extends React.Component{
    render(){
        return(
            <div>
                <Navbar bg="dark" expand="lg">
                    <Navbar.Brand href="#home">The T Tap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#menu">Menu</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>.

                            <NavDropdown title="Shop" id="basic-nav-dropdown">
                                <NavDropdown.Item href="">Brewing Supplies</NavDropdown.Item>
                                <NavDropdown.Item href="">Bottles</NavDropdown.Item>
                                <NavDropdown.Item href="">Beers</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </div>
        )
    }


}



export default Navigation;