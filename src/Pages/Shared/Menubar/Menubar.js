import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Menubar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut().then(() => { toast.success("Log out successfuly!") })
            .catch(error => console.error(error));
    }

    return (
        <Navbar bg="warning" expand="lg">
            <Container>
                <Navbar.Brand href="#home">TRAVEL-KORI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='text-decoration-none text-dark me-2' to='/'>Home</Link>
                        <Link className='text-decoration-none text-dark me-2' to=''>About Us</Link>
                        <Link className='text-decoration-none text-dark me-2' to=''>Contact Us</Link>
                    </Nav>
                    <div className="justify-content-end">
                        <Navbar.Text>
                            {
                                user?.uid ?
                                    <Link onClick={handleLogOut} className='text-decoration-none text-white bg-secondary px-2 py-1 me-2'>Logout</Link>
                                    : <>
                                        <Link className='text-decoration-none text-dark me-2' to='/login'>Login</Link>
                                        <Link className='text-decoration-none text-dark me-2' to='/register'>Register</Link>
                                    </>
                            }

                            <Link className='text-decoration-none text-dark mx-4' to=''>{user?.displayName}</Link>
                        </Navbar.Text>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;