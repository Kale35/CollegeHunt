import React, { useState } from 'react';
import './LoginAndRegister.css';
import {
    Button,
    Grid,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Container,
    Avatar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    LockOutlined,
    LockOpen,
    PersonAdd,
    PersonAddOutlined,
    CloseOutlined,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    rememberme: {
        verticalAlign: 'middle',
    },
}));

const LoginAndRegister = ({ setModalShown }) => {
    const classes = useStyles();
    const [activeTab, setactiveTab] = useState('login');

    return (
        <div className="login-register-modal">
            <div className="login-register-modal__wrapper">
                <div className="login-register-modal__close">
                    <Grid container justifyContent="space-between">
                        <Grid item></Grid>
                        <Grid item>
                            <Button
                                variant="text"
                                onClick={() => setModalShown(false)}
                            >
                                <CloseOutlined />
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                <div className="login-register-modal__logo">
                    <Avatar
                        className={classes.avatar}
                        style={{ width: 65, height: 65 }}
                    >
                        {activeTab && activeTab === 'login' ? (
                            <LockOutlined style={{ fontSize: 45 }} />
                        ) : (
                            <PersonAddOutlined style={{ fontSize: 45 }} />
                        )}
                    </Avatar>
                </div>
                <div className="login-register-modal__tabs">
                    <Button
                        color="primary"
                        size="large"
                        startIcon={<LockOpen />}
                        style={{ marginRight: '15px' }}
                        onClick={() => setactiveTab('login')}
                    >
                        Login
                    </Button>
                    <Button
                        color="secondary"
                        size="large"
                        startIcon={<PersonAdd />}
                        onClick={() => setactiveTab('register')}
                    >
                        Register
                    </Button>
                </div>

                {activeTab && activeTab === 'login' ? (
                    <LoginWrapper setactiveTab={setactiveTab} />
                ) : (
                    <RegisterWrapper setactiveTab={setactiveTab} />
                )}
            </div>
        </div>
    );
};

const LoginWrapper = ({ setactiveTab }) => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="sm">
            <form className={classes.form} noValidate>
                <div className="login-register-inner-wrapper">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="usernameOrEmail"
                        label="Username or Email Address"
                        name="usernameOrEmail"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember my login details"
                        className={classes.rememberme}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="medium"
                        className={classes.submit}
                    >
                        Login
                    </Button>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Link
                                href="#"
                                variant="body2"
                                onClick={(e) => e.preventDefault()}
                            >
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                href="#"
                                variant="body2"
                                onClick={() => setactiveTab('register')}
                            >
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </form>
        </Container>
    );
};

const RegisterWrapper = ({ setactiveTab }) => {
    const classes = useStyles();
    //Variables for user when they register
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerConfirmation, setRegisterConfirmation] = useState('');

    const onRegisterSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted');
        console.log(
            registerEmail,
            registerUsername,
            registerPassword,
            registerConfirmation
        );
    };

    return (
        <Container component="main" maxWidth="sm">
            <form className={classes.form} noValidate>
                <div className="login-register-inner-wrapper">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Desired Username"
                        name="username"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="repassword"
                        label="Retype Password"
                        type="repassword"
                        id="repassword"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="medium"
                        className={classes.submit}
                    >
                        Register
                    </Button>
                    <Grid container justifyContent="space-between">
                        <Grid item></Grid>
                        <Grid item>
                            <Link
                                href="#"
                                variant="body2"
                                onClick={(e) => setactiveTab('login')}
                            >
                                Already have an account? Login
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </form>
        </Container>
    );
};

export default LoginAndRegister;
