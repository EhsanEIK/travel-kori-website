import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaFacebook, FaGoogle, IconName } from "react-icons/fa";

const Login = () => {
    return (
        <div className='container mx-auto mt-5'>
            <div className='d-flex justify-content-center'>
                <Form className='w-50 border rounded-2 p-5'>
                    <h2 className='fw-bold'>Log in</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Form.Text className="text-danger d-block">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form>
            </div>
            <div className='d-flex justify-content-center mt-3'>
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