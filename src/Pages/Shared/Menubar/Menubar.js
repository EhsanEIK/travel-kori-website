import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">TRAVEL-KORI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='text-decoration-none text-dark me-2' to='/'>Home</Link>
                        <Link className='text-decoration-none text-dark me-2' to='/booking'>Bookings</Link>
                        <Link className='text-decoration-none text-dark me-2' to=''>Destination</Link>
                        <Link className='text-decoration-none text-dark me-2' to=''>About Us</Link>
                        <Link className='text-decoration-none text-dark me-2' to=''>Contact Us</Link>
                    </Nav>
                    <div className="justify-content-end">
                        <Navbar.Text>
                            <Link className='text-decoration-none text-dark me-2' to='/login'>Login</Link>
                            <Link className='text-decoration-none text-dark me-2' to='/register'>Register</Link>
                        </Navbar.Text>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;