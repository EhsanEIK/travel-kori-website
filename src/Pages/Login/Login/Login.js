import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {
    const { logIn } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log(from)

    const handleLoginSubmit = event => {
        event.preventDefault();
        setErrorMsg('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                if (user.emailVerified) {
                    toast.success("Login Successful");
                    navigate(from, { replace: true });
                }
                else {
                    return toast.error("Please verify email first");
                }
            })
            .catch(error => setErrorMsg(error.message));
    }

    return (
        <div className='container mx-auto mt-5'>
            <div className='d-flex justify-content-center'>
                <Form onSubmit={handleLoginSubmit} className='w-auto border rounded-2 p-5'>
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
                        {errorMsg}
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