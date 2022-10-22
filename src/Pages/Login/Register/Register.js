import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='container mx-auto my-5'>
            <div className='d-flex justify-content-center'>
                <Form className='w-50 border rounded-2 p-5'>
                    <h2 className='fw-bold text-center'>Register Now!</h2>
                    <hr />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name='fname' placeholder="Enter your first name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name='lname' placeholder="Enter your last name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name='confirm' placeholder="confirm password" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className='w-100'>
                        Register
                    </Button>
                    <p className='text-center mt-1'>Already have an account? <Link to='/login'>Login here</Link></p>
                    <Form.Text className="text-danger d-block">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form>
            </div>
        </div >
    );
};

export default Register;