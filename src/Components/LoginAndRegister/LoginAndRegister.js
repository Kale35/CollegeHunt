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
    return(
    <div className="login-register-inner-wrapper">
        <input type="text" className="login-register-input" id="register-password" placeholder="Create your password"/>
        <input type="text" className="login-register-input" id="register-password-confirm" placeholder="Confirm your password"/>
        <Button                         
            style={{ marginTop: '30px'}}
            color="primary" type="submit">Sign In 
        </Button>
    </div>

    );
};

const RegisterWrapper = () => {
    var registerEmail = "Email@email.com";
    var registerUsername;
    var registerPassword;
    var registerConfirmation;


    const onRegisterSubmit = () => {
        console.log("Submitted");
        console.log(registerEmail);
    }

    return( 
        <div className="login-register-inner-wrapper">
            <form className="register-form" onSubmit={onRegisterSubmit()}>
                <input type="email" className="login-register-input" id="register-email" placeholder="Enter your email"/>
                <input type="text" className="login-register-input" id="register-username" placeholder="Create your username"/>
                <input type="password" className="login-register-input" id="register-password" placeholder="Create your password"/>
                <input type="password" className="login-register-input" id="register-password-confirm" placeholder="Confirm your password"/>

                <input                         
                    type="submit"/>

            </form>
        </div>
    );
};

export default LoginAndRegister;
