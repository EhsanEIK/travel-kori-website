import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import logo from '../../../assets/icons/logo.jpg';

const Menubar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut().then(() => { toast.success("Log out successfuly!") })
            .catch(error => console.error(error));
    }

    return (
        <Navbar bg="primary" expand="lg" className='py-3'>
            <Container>
                <Link className='text-decoration-none' to='/'><Navbar.Brand className='text-warning fw-bold'>
                    <Image src={logo} style={{ width: '50px', marginRight: '10px' }} /> TRAVEL-KORI</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='text-decoration-none text-white me-2' to='/'>Home</Link>
                        <Link className='text-decoration-none text-white me-2' to=''>About Us</Link>
                        <Link className='text-decoration-none text-white me-2' to=''>Contact Us</Link>
                    </Nav>
                    <div className="justify-content-end">
                        <Navbar.Text>
                            {
                                user?.uid ?
                                    <Link onClick={handleLogOut} className='text-decoration-none px-2 py-1 me-2'>
                                        <Button variant="outline-light">Logout</Button>
                                    </Link>
                                    : <>
                                        <Link className='text-decoration-none text-dark me-2' to='/login'>
                                            <Button variant="info">Login</Button>
                                        </Link>
                                        <Link className='text-decoration-none text-dark me-2' to='/register'>
                                            <Button variant="danger">Register</Button>
                                        </Link>
                                    </>
                            }

                            <Link className='text-decoration-none text-white mx-4' to=''>{user?.displayName}</Link>
                        </Navbar.Text>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;