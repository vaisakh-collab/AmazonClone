import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase';

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                navigate('/')
            })
            .catch(error =>  alert(error.message))
        //firebase@8.10.1 login
    }

    const register = e => {
        e.preventDefault();

        //firebase@8.10.1 register
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                //successfully created a new user with email and password
                console.log(auth);
                if(auth){
                    navigate('/');
                }
            })
            .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to='/'>
        <img className = 'login__logo' src = 'https://assets.aboutamazon.com/2e/d7/ac71f1f344c39f8949f48fc89e71/amazon-logo-squid-ink-smile-orange.png' alt =''/>
        </Link>

        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange = {e => setPassword(e.target.value)}/>

                <button type='submit' className='login__signinButton' onClick={signIn}>Sign-in</button>
            </form>
            <p>
                By continuing, you agree to the AMAZON FAKE CLONE Conditions of Use and Privacy Notice.
            </p>

            <button onClick={register} className='login__registerButton'>Create your account</button>
        </div>
    </div>
  )
}

export default Login
