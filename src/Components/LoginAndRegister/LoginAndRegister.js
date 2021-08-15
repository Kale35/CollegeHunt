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
    //Variables to 
    var registerEmail;
    var registerUsername;
    var registerPassword;
    var registerConfirmation;

    //Function called after signing up
    const onLoginSubmit = () => {
        registerEmail = document.getElementById("login-email-username");
        console.log("Submitted");
        console.log(registerEmail);
    }

    return( 
        <div className="login-register-inner-wrapper">
            <form className="login-form">
                <input type="text" className="login-register-input" id="login-email-username" placeholder="Username/Email"/>
                <input type="password" className="login-register-input" id="login-username" placeholder="Password"/>
                <Button                         
                    color="primary"
                    size="large"
                    onClick={onLoginSubmit()}>Sign In
                </Button>

            </form>
        </div>
    );
};

const RegisterWrapper = () => {

    //Variables to 
    var registerEmail;
    var registerUsername;
    var registerPassword;
    var registerConfirmation;

    //Function called after signing up
    const onRegisterSubmit = () => {
        registerEmail = document.getElementById("register-email");
        console.log("Submitted");
        console.log(registerEmail);
    }

    return( 
        <div className="login-register-inner-wrapper">
            <form className="register-form">
                <input type="email" className="login-register-input" id="register-email" placeholder="Enter your email"/>
                <input type="text" className="login-register-input" id="register-username" placeholder="Create your username"/>
                <input type="password" className="login-register-input" id="register-password" placeholder="Create your password"/>
                <input type="password" className="login-register-input" id="register-password-confirm" placeholder="Confirm your password"/>

                <Button
                    type="submit"                         
                    color="secondary"
                    size="large"
                    onClick={onRegisterSubmit()}>Submit
                </Button>

            </form>
        </div>
    );
};

export default LoginAndRegister;
