import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashmenu() {
    const [loginUser, setLoginUser] = useState({});

    const checkUser = () => {
        const user = sessionStorage.getItem('user');
        if (user) {
            const parsedUser = JSON.parse(user);
            setLoginUser(parsedUser);
        }
    };

    const hanldeLogout = () => {
        sessionStorage.clear();
    };

    //API Upload
    //console.log(loginUser.userName);

    useEffect(() => {
        checkUser();
    }, []);

    return (
        <div className="card rounded-10 shadow-xss p-4 border-0 mt-n10">
            <div className="card-body text-center">
                <figure className="avatar ms-auto me-auto mb-0 mt-0 w100">
                    <img
                        src={loginUser.avatar !== '' ? loginUser.avatar : 'https://via.placeholder.com/50x50.png'}
                        alt="avatar"
                        className="shadow-sm rounded-circle w-125"
                    />
                </figure>
                <h4 className="fw-700 text-grey-900 white-text font-sm mb-0 mt-3">{loginUser.userName}</h4>
                <span className="fw-600 font-xssss text-grey-500 mt-0 d-block">@ {loginUser.userName}</span>
            </div>
            <div className="card-body p-0 mt-4">
                <ul className="list-inline mb-0">
                    <li className="list-inline-item d-block me-0">
                        <Link to="/dashboard" className="pt-2 pb-2 d-flex align-items-center">
                            <i className="btn-round-sm bg-primary-gradiant text-white feather-home font-xss me-3"></i>{' '}
                            <h4 className="fw-600 font-xsss ls-0 text-grey-700 mb-0 mt-0">Dashboard</h4>
                            <i className="ti-angle-right font-xsssss text-grey-500 ms-auto mt-1"></i>
                        </Link>
                    </li>
                    <li className="list-inline-item d-block me-0">
                        <Link to="/address" className="pt-2 pb-2 d-flex align-items-center">
                            <i className="btn-round-sm bg-gold-gradiant text-white feather-user font-xss me-3"></i>{' '}
                            <h4 className="fw-600 font-xsss ls-0 text-grey-700 mb-0 mt-0">Update Infomation</h4>
                            <i className="ti-angle-right font-xsssss text-grey-500 ms-auto mt-1"></i>
                        </Link>
                    </li>
                    <li className="list-inline-item d-block me-0">
                        <Link to="/orders" className="pt-2 pb-2 d-flex align-items-center">
                            <i className="btn-round-sm bg-mini-gradiant text-white feather-hard-drive font-xss me-3"></i>{' '}
                            <h4 className="fw-600 font-xsss ls-0 text-grey-700 mb-0 mt-0">Orders</h4>
                            <i className="ti-angle-right font-xsssss text-grey-500 ms-auto mt-1"></i>
                        </Link>
                    </li>
                    {/* <li className="list-inline-item d-block me-0">
                        <Link to="/coupon" className="pt-2 pb-2 d-flex align-items-center">
                            <i className="btn-round-sm bg-skype text-white feather-award font-xss me-3"></i>{' '}
                            <h4 className="fw-600 font-xsss ls-0 text-grey-700 mb-0 mt-0">Coupon</h4>
                            <i className="ti-angle-right font-xsssss text-grey-500 ms-auto mt-1"></i>
                        </Link>
                    </li>
                    <li className="list-inline-item d-block me-0">
                        <Link to="/payment" className="pt-2 pb-2 d-flex align-items-center">
                            <i className="btn-round-sm bg-current-gradiant text-white feather-credit-card font-xss me-3"></i>{' '}
                            <h4 className="fw-600 font-xsss ls-0 text-grey-700 mb-0 mt-0">Payment</h4>
                            <i className="ti-angle-right font-xsssss text-grey-500 ms-auto mt-1"></i>
                        </Link>
                    </li>
                    <li className="list-inline-item d-block me-0">
                        <Link to="/notification" className="pt-2 pb-2 d-flex align-items-center">
                            <i className="btn-round-sm bg-blue-gradiant text-white feather-bell font-xss me-3"></i>{' '}
                            <h4 className="fw-600 font-xsss ls-0 text-grey-700 mb-0 mt-0">Notification</h4>
                            <i className="ti-angle-right font-xsssss text-grey-500 ms-auto mt-1"></i>
                        </Link>
                    </li> */}
                    <li className="list-inline-item d-block me-0">
                        <Link onClick={hanldeLogout} to="" className="pt-2 pb-2 d-flex align-items-center">
                            <i className="btn-round-sm bg-red-gradiant text-white feather-lock font-xss me-3"></i>{' '}
                            <h4 className="fw-600 font-xsss ls-0 text-grey-700 mb-0 mt-0">Logout</h4>
                            <i className="ti-angle-right font-xsssss text-grey-500 ms-auto mt-1"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Dashmenu;
