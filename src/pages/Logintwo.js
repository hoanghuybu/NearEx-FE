import React, { Fragment, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useHistory, Link } from 'react-router-dom';

const requestBody = {
    accountSID: 'string',
    authToken: 'string',
    pathServiceSid: 'string',
    phone: 'string',
    token: 'string',
};

function Logintwo() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const [isGoogleAPIReady, setGoogleAPIReady] = useState(false);
    const history = useHistory();

    function handleSignInWithGoogle() {
        if (isGoogleAPIReady) {
            /* global google */
            google.accounts.id.prompt();
        }
    }

    function handleCallBackRespone(response) {
        var userObject = jwt_decode(response.credential);
        // sessionStorage.setItem('jwtToken', response.credential);
        setUserInfo(userObject);

        setTimeout(() => {
            sessionStorage.removeItem('jwtToken');
            sessionStorage.removeItem('user');
            setUserInfo({});
        }, 60 * 60 * 1000);
    }

    const checkUserVerification = async (userInfo) => {
        var googleId = userInfo.sub;
        try {
            const response = await fetch(
                `https://swd-nearex.azurewebsites.net/api/users/verification?googleId=${googleId}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                },
            );
            const isUserVerified = await response.json();
            if (isUserVerified) {
                await findUserByGoogleId(googleId);
                history.push('/');
            } else {
                const googleUser = {
                    email: userInfo.email || '',
                    password: '',
                    userName: userInfo.name || '',
                    phone: '',
                    gender: '',
                    dateOfBirth: null,
                    address: '',
                    avatar: userInfo.picture || '',
                    googleId: userInfo.sub || '',
                    coordinateString: '',
                };
                await createUser(googleUser);
                // history.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const createUser = async (googleUser) => {
        try {
            const response = await fetch('https://swd-nearex.azurewebsites.net/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(googleUser),
            });
            const newUser = await response.json();
            if (Object.keys(newUser).length > 0) {
                const user = JSON.stringify(newUser);
                sessionStorage.setItem('user', user);
                sessionStorage.setItem('jwtToken', newUser.token);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const findUserByGoogleId = async (googleId) => {
        try {
            const response = await fetch(
                `https://swd-nearex.azurewebsites.net/api/users/google-authentication?googleId=${googleId}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );
            const responseData = await response.json();
            const user = JSON.stringify(responseData);
            if (Object.keys(user).length > 0) {
                sessionStorage.setItem('user', user);
                sessionStorage.setItem('jwtToken', responseData.token);
                // var decodeJwt =  jwt_decode(jwtToken);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const loginUser = {
            phone: phone,
            password: password,
        };
        try {
            const response = await fetch('https://swd-nearex.azurewebsites.net/api/users/authentication', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginUser),
            });
            const newUser = await response.json();
            if (Object.keys(newUser).length > 0) {
                if (newUser.error) {
                    console.log(newUser.error);
                } else {
                    const user = JSON.stringify(newUser);
                    sessionStorage.setItem('user', user);
                    sessionStorage.setItem('jwtToken', newUser.token);
                    history.push('/');
                }
            }
            setTimeout(() => {
                sessionStorage.removeItem('jwtToken');
                sessionStorage.removeItem('user');
                setUserInfo({});
            }, 60 * 60 * 1000);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const loadGoogleIdentityAPI = () => {
            if (typeof google === 'undefined' || !google.accounts) {
                setTimeout(loadGoogleIdentityAPI, 100);
            } else {
                setGoogleAPIReady(true);
            }
        };

        loadGoogleIdentityAPI();
    }, []);

    useEffect(() => {
        if (isGoogleAPIReady) {
            /* global google */
            google.accounts.id.initialize({
                client_id: '212417987282-qc0dgl2pbsq4j2kp58rtf7h3fi1roano.apps.googleusercontent.com',
                callback: handleCallBackRespone,
            });
        }
    }, [isGoogleAPIReady]);

    useEffect(() => {
        if (Object.keys(userInfo).length > 0) {
            checkUserVerification(userInfo);
        }
    }, [userInfo]);

    return (
        <Fragment>
            <div className="login-wrapper">
                <div className="main-wrap min-vh-100">
                    <div className="nav-header bg-transparent shadow-none border-0 position-fixed zindex-900 w-100 p-5 text-center d-lg-block d-none ">
                        <a href="/">
                            <img src="assets/images/nearex-2.png" alt="logo" className="w-225" />
                        </a>
                    </div>

                    <div className="row min-vh-100">
                        <div className="card shadow-lg border-0 ms-auto me-auto login-card mt-auto mb-auto zindex-100 rounded-10 theme-dark-bg">
                            <div className="card-body rounded-0 text-start">
                                <h2 className="fw-700 display1-size display2-md-size mb-4 mt-2 white-text text-grey-900">
                                    Login into <br />
                                    your account
                                </h2>
                                <form onSubmit={handleLogin}>
                                    <div className="form-group icon-input mb-3">
                                        <i className="font-sm ti-tablet text-grey-500 pe-0"></i>
                                        <input
                                            type="text"
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="style2-input ps-5 form-control text-grey-900 white-text font-xsss fw-600"
                                            placeholder="Phone"
                                        />
                                    </div>
                                    <div className="form-group icon-input mb-1">
                                        <input
                                            type="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="style2-input ps-5 form-control text-grey-900 white-text font-xss ls-3"
                                            placeholder="Password"
                                        />
                                        <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                    </div>
                                    <div className="form-check text-start mb-3">
                                        <input type="checkbox" className="form-check-input mt-2" id="exampleCheck5" />
                                        <label
                                            className="form-check-label font-xssss text-grey-500 white-text"
                                            htmlFor="exampleCheck5"
                                        >
                                            Remember me
                                        </label>
                                        <a
                                            href="/forgotone"
                                            className="fw-600 font-xssss text-grey-700 white-text mt-1 float-right"
                                        >
                                            Forgot your Password?
                                        </a>
                                    </div>
                                </form>

                                <div className="col-sm-12 p-0 text-start">
                                    <div className="form-group mb-1">
                                        <a
                                            href="#"
                                            onClick={handleLogin}
                                            className="bg-current text-center style2-input text-white fw-600 border-0 p-0 "
                                        >
                                            Login
                                        </a>
                                    </div>
                                    <h6 className="text-grey-500 font-xssss fw-500 mt-0 mb-0 lh-32">
                                        Dont have account{' '}
                                        <a href="/registerone" className="fw-700 ms-1">
                                            Register
                                        </a>
                                    </h6>
                                </div>
                                <div className="col-sm-12 p-0 text-center mt-2 mb-3">
                                    <h6 className="mb-0 d-inline-block fw-500 font-xssss text-grey-500 mb-3">
                                        Or, Sign in with your social account{' '}
                                    </h6>
                                    <div className="form-group mb-1">
                                        <Link
                                            to="#"
                                            onClick={handleSignInWithGoogle}
                                            className="text-start font-xsss style2-input text-grey-900 fw-600 bg-greylight border-0 p-0 mb-2"
                                        >
                                            <img
                                                src="assets/images/icons8-google-240.svg"
                                                alt="icon"
                                                className="ms-2 w-40 mb-1 me-5"
                                            />{' '}
                                            Sign in with Google
                                        </Link>
                                    </div>
                                    {/* <div className="form-group mb-1"><a href="/" className="text-start font-xsss style2-input text-white fw-600 bg-twiiter border-0 p-0 "><img src="assets/images/icon-3.png" alt="icon" className="ms-2 w-40 mb-1 me-5" /> Sign in with Facebook</a></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Logintwo;
