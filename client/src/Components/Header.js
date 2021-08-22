import React, { useState } from 'react';
import './Component CSS/Header.css';
import Button from '@material-ui/core/Button';
import SchoolIcon from '@material-ui/icons/School';
import LoginAndRegister from './LoginAndRegister/LoginAndRegister';

function Header() {
    const [modalShown, setModalShown] = useState(false);

    return (
        <React.Fragment>
            {modalShown ? <LoginAndRegister /> : null }
            <div className="header">
                <div className="header__logo">
                    <SchoolIcon></SchoolIcon>
                </div>
                <div className="header__buttons">
                    <div className="header__button">
                        <Button onClick={() => setModalShown(!modalShown)}>
                            Login
                        </Button>
                    </div>
                    {/* <div className="header__button">
                    <Button onClick={() => setloginModalVisible(!loginModalVisible)}>Sign Up</Button>
                </div> */}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;
