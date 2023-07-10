import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavAdmin extends Component {
    render() {
        return (
            <div className="navigation scroll-bar">
                <div className="container-xl ps-0 pe-0">
                    <div className="nav-content">
                        <div className="nav-wrap bg-white bg-transparent-card rounded-xxl  pt-3 pb-1 mb-3 mt-2 ">
                            <div className="nav-caption fw-600 font-xssss text-grey-500 d-flex ">
                                <Link to="/" className="d-flex justify-content-between" style={{ margin: 'auto' }}>
                                    <img
                                        src="assets/images/logo.png"
                                        alt="logo"
                                        style={{ height: '64px', width: '205px' }}
                                        className="logo"
                                    />
                                </Link>
                            </div>
                            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl  pt-3 pb-1 mb-2">
                                <div className="mb-3 ps-2">
                                    <div
                                        className="mb-1 top-content rounded-pill"
                                        style={{ backgroundColor: '#e7e7ff', padding: '10px', marginLeft: '15px' }}
                                    >
                                        <Link to="/defaultbadge" className="nav-content-bttn open-font rounded-xxl">
                                            <i className="font-xl text-current feather-home me-3"></i>
                                            <span>Dashboard</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="nav-caption fw-200 font-xsss text-grey-500 d-flex ps-0">
                                <span
                                    style={{
                                        borderBottom: '1px solid #8c8b8b',
                                        width: '30px',
                                        height: '15px',
                                        marginRight: '20px',
                                    }}
                                ></span>
                                <span style={{ color: '#b3bcc6' }}>USER MANAGERMENT</span>
                            </div>
                            <ul className="mb-1 top-content ps-4">
                                <li className="p-1">
                                    <Link to="/home" className="nav-content-bttn font-x">
                                        <i className="font-xl feather-user text-grey-500  me-3"></i>
                                        <span className="text-grey-700">Customer Account</span>
                                    </Link>
                                </li>
                                <li className="p-1">
                                    <Link to="/home" className="nav-content-bttn open-font">
                                        <i className="font-xl feather-inbox text-grey-500  me-3"></i>
                                        <span className="text-grey-700">Order History</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="nav-wrap bg-white bg-transparent-card rounded-xxl  pt-3 pb-1 mb-2">
                            <div className="nav-caption fw-200 font-xsss text-grey-500 d-flex ps-0">
                                <span
                                    style={{
                                        borderBottom: '1px solid #8c8b8b',
                                        width: '30px',
                                        height: '15px',
                                        marginRight: '20px',
                                    }}
                                ></span>
                                <span style={{ color: '#b3bcc6' }}>STORE MANAGEMENT </span>
                            </div>
                            <ul className="mb-1 top-content ps-3">
                                <li className="p-1">
                                    <Link to="/home" className="nav-content-bttn open-font">
                                        <i className="font-xl feather-shopping-bag text-grey-500  me-3"></i>
                                        <span className="text-grey-700">Store Information</span>
                                    </Link>
                                </li>
                                <li className="p-1">
                                    <Link to="/home" className="nav-content-bttn open-font">
                                        <i className="font-xl feather-file-text text-grey-500  me-3"></i>
                                        <span className="text-grey-700">Sales Report</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="nav-wrap bg-white bg-transparent-card rounded-xxl  pt-3 pb-1 mb-2">
                            <div className="nav-caption fw-200 font-xsss text-grey-500 d-flex ps-0">
                                <span
                                    style={{
                                        borderBottom: '1px solid #8c8b8b',
                                        width: '30px',
                                        height: '15px',
                                        marginRight: '20px',
                                    }}
                                ></span>
                                <span style={{ color: '#b3bcc6' }}>MISC</span>
                            </div>
                            <ul className="mb-1 top-content ps-3">
                                <li className="p-1">
                                    <Link to="/home" className="nav-content-bttn open-font">
                                        <i className="font-xl feather-headphones text-grey-500  me-3"></i>
                                        <span className="text-grey-700">Support</span>
                                    </Link>
                                </li>
                                <li className="p-1">
                                    <Link to="/home" className="nav-content-bttn open-font">
                                        <i className="font-xl feather-file text-grey-500  me-3"></i>
                                        <span className="text-grey-700">Documentation</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavAdmin;
