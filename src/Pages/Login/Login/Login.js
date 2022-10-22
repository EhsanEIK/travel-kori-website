import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container mx-auto mt-5'>
            <div className='d-flex justify-content-center'>
                <Form className='w-50 border rounded-2 p-5'>
                    <h2 className='fw-bold text-center'>Log in</h2>
                    <hr />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className='w-100'>
                        Login
                    </Button>
                    <p className='text-center mt-1'>Don't have an account? <Link to='/register'>Register here</Link></p>
                    <Form.Text className="text-danger d-block">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form>
            </div>
            <div className='d-flex justify-content-center my-3'>
                <div>
                    <div>
                        <Button variant="warning" type="submit" className='w-100 px-5'>
                            <FaGoogle /> Login via Google
                        </Button>
                    </div>
                    <div className='mt-3'>
                        <Button variant="primary" type="submit" className='w-100 px-5'>
                            <FaFacebook /> Login via Facebook
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;