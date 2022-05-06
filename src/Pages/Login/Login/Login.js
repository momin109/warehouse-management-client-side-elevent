import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocailLogin from '../SocailLogin/SocailLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;

    let from = location.state?.from.pathname || "/"

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address')
        }
    }

    return (

        <div className='login-form'>
            <h2 style={{ textAlign: 'center' }}>please Login</h2>
            <form onSubmit={handleSubmit}>

                <input ref={emailRef} type="text" name="email" id="email" placeholder='email address' required />

                <input ref={passwordRef} type="password" name="password" id="password" placeholder='password' required />
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Accept Terms and condition</label>
                <input className='btn btn-primary primary w-50 mx-auto d-block text-white mt-2' type="submit" value="Login" />
            </form>
            {errorElement}
            <p>new an account <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>please register</Link></p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset password</button></p>
            <SocailLogin></SocailLogin>
            <ToastContainer />
        </div>

    );
};

export default Login;