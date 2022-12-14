import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Menubar from '../../Shared/Menubar/Menubar';

const Register = () => {
    const { createUser, verifyEmail, updateUserProfile } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState('');

    useTitle('Register');

    const handleRegisterSubmit = event => {
        event.preventDefault();
        setErrorMsg('');

        const form = event.target;
        const firstName = form.fname.value;
        const lastName = form.lname.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        const name = firstName + ' ' + lastName;

        if (password !== confirm) {
            return alert('Password does not matched');
        }

        createUser(email, password)
            .then(result => {
                handleEmailVerify();
                handleUpdateUserProfile(name, photoURL)
                toast.success("Please check your mail to verify");
                form.reset();
            })
            .catch(error => setErrorMsg(error.message));
    }

    const handleEmailVerify = () => {
        verifyEmail()
            .then(() => { })
            .catch(e => console.error(e));
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e));
    }

    return (
        <>
            <Menubar></Menubar>
            <div className='container' style={{ marginBottom: "100px" }}>
                <div className='d-flex justify-content-center my-5'>
                    <Form onSubmit={handleRegisterSubmit} className='w-auto border rounded-2 p-5'>
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
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name='photoURL' placeholder="Enter your photo URL" />
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
                            {errorMsg}
                        </Form.Text>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Register;