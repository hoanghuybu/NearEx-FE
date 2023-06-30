import React, { useState, Fragment } from 'react';

function Registerone() {
    const [userName, setUseName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [msg, setMsg] = useState(null);
    const createUser = async (registerObject) => {
        try {
            const response = await fetch('https://swd-nearex.azurewebsites.net/api/users/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registerObject),
            });
            const newUser = await response.json();
            if (Object.keys(newUser).length > 0) {
                const user = JSON.stringify(newUser);
                sessionStorage.setItem('user', user);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const registerObject = {
            email: '',
            password: password,
            userName: userName,
            phone: phone,
            gender: gender,
            dateOfBirth: birthday,
            address: '',
            avatar: '',
            googleId: '',
            coordinateString: '',
        };
        if (password == confirm) {
            console.log(registerObject);
            await createUser(registerObject);
            setMsg('Create Successfully');
        } else {
            setMsg("password and confirm doesn't match");
        }
    };

    return (
        <Fragment>
            <div className="main-wrap min-vh-100 login-wrapper">
                <div className="row min-vh-100">
                    <div
                        className="col-xl-5 d-none d-xl-block p-0 min-vh-100 bg-image-cover bg-image-bottomcenter bg-no-repeat posr"
                        style={{ backgroundImage: `url("assets/images/login-bg2.jpg")` }}
                    ></div>
                    <div className="col-xl-7 min-vh-100 align-items-center d-flex bg-dark-black rounded-3 overflow-hidden">
                        <div className="card shadow-lg border-0 ms-auto me-auto login-card mt-auto mb-auto zindex-100 rounded-10 theme-dark-bg">
                            <div className="card-body rounded-0 text-start p-4">
                                <h2 className="fw-700 display1-size display2-md-size mb-4 mt-0 white-text text-grey-900">
                                    Create <br /> your account
                                </h2>
                                <form>
                                    <div className="form-group icon-input mb-3">
                                        <i className="font-sm ti-user text-grey-500 pe-0"></i>
                                        <input
                                            type="text"
                                            className="style2-input ps-5 form-control text-grey-900 white-text font-xsss fw-600"
                                            placeholder="Your Name"
                                            onChange={(e) => setUseName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group icon-input mb-3">
                                        <i className="font-sm ti-headphone-alt text-grey-500 pe-0"></i>
                                        <input
                                            type="text"
                                            className="style2-input ps-5 form-control text-grey-900 white-text font-xsss fw-600"
                                            placeholder="Phone"
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group icon-input mb-3">
                                        <select
                                            className="style2-input ps-5 form-control  white-text font-xsss fw-600"
                                            name="genders"
                                            id="genders"
                                            onChange={(e) => setGender(e.target.value)}
                                        >
                                            <option value="Male">Please Choosse Your Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group icon-input mb-3">
                                        <input
                                            type="date"
                                            className="style2-input ps-5 form-control text-grey-900 white-text font-xss ls-3"
                                            placeholder="Birthday"
                                            onChange={(e) => setBirthday(e.target.value)}
                                        />
                                        <i className="font-sm ti-calendar text-grey-500 pe-0"></i>
                                    </div>
                                    <div className="form-group icon-input mb-3">
                                        <input
                                            type="Password"
                                            className="style2-input ps-5 form-control text-grey-900 white-text font-xss ls-3"
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                    </div>
                                    <div className="form-group icon-input mb-1">
                                        <input
                                            type="Password"
                                            className="style2-input ps-5 form-control text-grey-900 white-text font-xss ls-3"
                                            placeholder="Confirm Password"
                                            onChange={(e) => setConfirm(e.target.value)}
                                        />
                                        <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                    </div>
                                    <div className="form-check text-start mb-3">
                                        <input type="checkbox" className="form-check-input mt-2" id="exampleCheck3" />
                                        <label
                                            className="form-check-label font-xssss text-grey-500 white-text"
                                            htmlFor="exampleCheck3"
                                        >
                                            Accept Term and Conditions
                                        </label>
                                    </div>
                                </form>

                                <div className="col-sm-12 p-0 text-start">
                                    <div className="form-group mb-1">
                                        <a
                                            href=""
                                            onClick={handleRegister}
                                            className="text-center font-xsss style2-input text-white fw-600 bg-current border-0 p-0 "
                                        >
                                            Register
                                        </a>
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
            </div>
        </Fragment>
    );
}

export default Registerone;
