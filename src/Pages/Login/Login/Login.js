import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Menubar from '../../Shared/Menubar/Menubar';

const Login = () => {
    const { logIn, googleSignIn } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState('');

    const googleProvider = new GoogleAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useTitle('Login');

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

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(r => {
                console.log(r.user);
                toast.success("Login Successful");
                navigate(from, { replace: true });
            })
            .catch(error => setErrorMsg(error.message));
    }

    return (
        <>
            <Menubar></Menubar>
            <div className='container' style={{ marginBottom: "100px" }}>
                <div className='d-flex justify-content-center mt-5'>
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
                            <Button onClick={handleGoogleSignIn} variant="warning" type="submit" className='w-100 px-5'>
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
            </div>
        </>
    );
};

export default Login;