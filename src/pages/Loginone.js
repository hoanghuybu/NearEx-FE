import React, { useState, Fragment } from 'react';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';

function Loginone() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        const loginStore = {
            phone: phone,
            password: password,
        };
        try {
            const response = await fetch('https://swd-nearex.azurewebsites.net/api/stores/authentication', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginStore),
            });
            const newUser = await response.json();
            if (Object.keys(newUser).length > 0) {
                if (newUser.error) {
                    console.log(newUser.error);
                } else {
                    const user = JSON.stringify(newUser);
                    sessionStorage.setItem('store', user);
                    sessionStorage.setItem('jwtToken', newUser.token);
                    var decodeJwt = jwt_decode(newUser.token);
                    console.log(decodeJwt.role);
                    if (decodeJwt.role == 'store') {
                        history.push('/shopmgn');
                    }
                    // else if(decodeJwt.role == 'admin') {
                    //     history.push('/test2')
                    // }
                }
            }
            setTimeout(() => {
                sessionStorage.removeItem('jwtToken');
                sessionStorage.removeItem('store');
            }, 60 * 60 * 1000);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Fragment>
            <div className="main-wrap min-vh-100">
                <div className="row min-vh-100">
                    <div
                        className="col-xl-5 d-none d-xl-block p-0 min-vh-100 bg-image-cover bg-image-bottomcenter bg-no-repeat posr"
                        style={{ backgroundImage: `url("assets/images/login-bg2.jpg")` }}
                    ></div>
                    <div className="col-xl-7 min-vh-100 align-items-center d-flex bg-dark-black rounded-3 overflow-hidden">
                        <div className="card shadow-lg border-0 ms-auto me-auto login-card mt-auto mb-auto zindex-100 rounded-10 theme-dark-bg">
                            <div className="card-body rounded-0 text-start p-4">
                                <h2 className="fw-700 display1-size display2-md-size mb-4 mt-0 white-text text-grey-900">
                                    Login into <br />
                                    your account
                                </h2>
                                <form>
                                    <div className="form-group icon-input mb-3">
                                        <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                        <input
                                            type="text"
                                            className="style2-input ps-5 form-control text-grey-900 white-text font-xsss fw-600"
                                            placeholder="Phone"
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group icon-input mb-1">
                                        <input
                                            type="Password"
                                            className="style2-input ps-5 form-control text-grey-900 white-text font-xss ls-3"
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                    </div>
                                </form>

                                <div className="col-sm-12 p-0 text-start">
                                    <div className="form-group mb-1">
                                        <a
                                            href="#"
                                            onClick={handleLogin}
                                            className="bg-current text-center style2-input text-white fw-600 border-0 p-0 font-xsss"
                                        >
                                            Login
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Loginone;
