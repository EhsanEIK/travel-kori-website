import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/'>Home</Link>
                        <Link to='/booking'>Bookings</Link>
                        <Link to=''>Destination</Link>
                        <Link to=''>About Us</Link>
                        <Link to=''>Contact Us</Link>
                    </Nav>
                    <div className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;