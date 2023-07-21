import React, { useState, Fragment } from 'react';

function Forgotone() {
    const [newPassword, setNewPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [msg, setMsg] = useState(null);

    const handleChangePassword = async (e) => {
        e.preventDefault();
        if (phone && newPassword) {
            try {
                const response = await fetch(
                    `https://swd-nearex.azurewebsites.net/api/users/forgotten-password?Phone=${phone}&NewPassword=${newPassword}`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    },
                );
                const newUser = await response.json();
                if (Object.keys(newUser).length > 0) {
                    setMsg('Change Password Successfully. Please Login again');
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            setMsg('Please enter phone and new password');
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
                            <div className="card-body rounded-0 text-left p-4">
                                <h2 className="fw-700 display1-size display2-md-size mb-4 mt-0 white-text">
                                    Change <br /> your password
                                </h2>
                                <form>
                                    <div className="form-group icon-input mb-3">
                                        <input
                                            type="text"
                                            className="style2-input ps-5 form-control text-grey-900 white-text font-xss ls-3"
                                            placeholder="Phone"
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                        <i className="font-sm ti-tablet text-grey-500 pe-0"></i>
                                    </div>
                                    <div className="form-group icon-input mb-1">
                                        <input
                                            type="Password"
                                            className="style2-input ps-5 form-control text-grey-900 white-text font-xss ls-3"
                                            placeholder="New Password"
                                            onChange={(e) => setNewPassword(e.target.value)}
                                        />
                                        <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                    </div>
                                    <div className="form-check text-left mb-3">
                                        <input type="checkbox" className="form-check-input mt-2" id="exampleCheck4" />
                                        <label
                                            className="form-check-label font-xssss text-grey-500"
                                            htmlFor="exampleCheck4"
                                        >
                                            Accept Term and Conditions
                                        </label>
                                    </div>
                                </form>

                                <div className="col-sm-12 p-0 text-left mb-0">
                                    <div className="form-group mb-1">
                                        <a
                                            href="/loginone"
                                            className="font-xsss text-center style2-input text-white fw-600 bg-current border-0 p-0 "
                                            onClick={handleChangePassword}
                                        >
                                            Change Password
                                        </a>
                                    </div>
                                </div>
                                <h6 className="text-grey-500 font-xssss fw-500 mt-0 mb-0 lh-32 white-text">
                                    Already have account{' '}
                                    <a href="/logintwo" className="fw-700 ms-1">
                                        Login
                                    </a>
                                </h6>
                                {msg !== null && <h6>{msg}</h6>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Forgotone;
