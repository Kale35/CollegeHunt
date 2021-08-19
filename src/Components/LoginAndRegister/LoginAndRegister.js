import React, { useState } from 'react';
import './LoginAndRegister.css';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Button } from '@material-ui/core';

const LoginAndRegister = () => {
    const [activeTab, setactiveTab] = useState('login');

    return (
        <div className="login-register-modal">
            <div className="login-register-modal__wrapper">
                <div className="login-register-modal__logo">
                    {activeTab && activeTab === 'login' ? (
                        <VpnKeyIcon
                            color={
                                activeTab && activeTab === 'login'
                                    ? 'primary'
                                    : 'disabled'
                            }
                            style={{ fontSize: 100 }}
                        />
                    ) : (
                        <PersonAddIcon
                            color={
                                activeTab && activeTab === 'register'
                                    ? 'secondary'
                                    : 'disabled'
                            }
                            style={{ fontSize: 100 }}
                        />
                    )}
                </div>
                <div className="login-register-modal__tabs">
                    <Button
                        color="primary"
                        size="large"
                        startIcon={<LockOpenIcon />}
                        style={{ marginRight: '15px' }}
                        onClick={() => setactiveTab('login')}
                    >
                        Login
                    </Button>
                    <Button
                        color="secondary"
                        size="large"
                        startIcon={<PersonAddIcon />}
                        onClick={() => setactiveTab('register')}
                    >
                        Register
                    </Button>
                </div>

                {activeTab && activeTab === 'login' ? (
                    <LoginWrapper />
                ) : (
                    <RegisterWrapper />
                )}
            </div>
        </div>
    );
};

const LoginWrapper = () => {
     //Variables for user when they register
     const [loginEmailUsername, setLoginEmailUsername] = useState("");
     const [loginPassword, setLoginPassword] = useState("");
 
     const onLoginSubmit = (e) => {
         e.preventDefault();
         console.log("Submitted");
         console.log(loginEmailUsername, loginPassword);
     }
     
    return (
        <div className="login-register-inner-wrapper">
            <form className="register-form" onSubmit={(e) => onLoginSubmit(e)}>
                <input onChange={e => setLoginEmailUsername(e.target.value)} type="text" className="login-register-input" id="register-password" placeholder="Email/Username" />
                <input onChange={e => setLoginPassword(e.target.value)} type="password" className="login-register-input" id="register-password-confirm" placeholder="Password" />
                <input
                    type="submit"
               />
            </form>
        </div>

    );
};

const RegisterWrapper = () => {

    //Variables for user when they register
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmation, setRegisterConfirmation] = useState("");

    const onRegisterSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
        console.log(registerEmail, registerUsername, registerPassword, registerConfirmation);
    }

    return (
        <div className="login-register-inner-wrapper">
            <form className="register-form" onSubmit={(e) => onRegisterSubmit(e)}>
                <input
                type="email"
                className="login-register-input" 
                id="register-email"
                placeholder="Enter your email" 
                onChange={e => setRegisterEmail(e.target.value)} />

                <input
                type="text"
                className="login-register-input"
                id="register-username"
                placeholder="Create your username"
                onChange={e => setRegisterUsername(e.target.value)}/>


                <input 
                type="password"
                className="login-register-input" 
                id="register-password"
                placeholder="Create your password"
                onChange={e => setRegisterPassword(e.target.value)}/>


                <input
                 type="password" className="login-register-input" id="register-password-confirm" placeholder="Confirm your password"  onChange={e => setRegisterConfirmation(e.target.value)}/>

                <input
                    type="submit" />
            </form>
        </div>
    );
};

export default LoginAndRegister;