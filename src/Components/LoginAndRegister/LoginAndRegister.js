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
    return <div className="login-register-inner-wrapper">

    </div>;
};

const RegisterWrapper = () => {
    return( 
        <div className="login-register-inner-wrapper">
            <form className="register-form">
                <input type="text" className="login-register-input" id="register-email" placeholder="Enter your email"/>
                <input type="text" className="login-register-input" id="register-username" placeholder="Create your username"/>
                <input type="text" className="login-register-input" id="register-username" placeholder="Create your password"/>
                <input type="text" className="login-register-input" id="register-username" placeholder="Confirm your password"/>
                

            </form>
        </div>
    );
};

export default LoginAndRegister;
