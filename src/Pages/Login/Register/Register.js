import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocailLogin from '../SocailLogin/SocailLogin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user)
    }


    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');

    }

    return (
        <div>
            <div className='register-form'>
                <h2 style={{ textAlign: 'center' }}>please register</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" name="name" id="name" placeholder='your name' />

                    <input type="email" name="email" id="email" placeholder=' email address' />

                    <input type="password" name="password" id="password" placeholder=' password' />
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept Terms and condition</label>
                    <input disabled={!agree} className='btn btn-primary primary w-50 mx-auto d-block text-white mt-2' type="submit" value="Register" />
                </form>
                <p>Alredy have account <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>please Login</Link></p>
                <SocailLogin></SocailLogin>

            </div>
        </div>
    );
};

export default Register;