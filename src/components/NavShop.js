import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavShop extends Component {
    render() {
        return (
            <div className="navigation scroll-bar">
                <div className="container-xl ps-0 pe-0">
                    <div className="nav-content">
                        <div className="nav-wrap bg-white bg-transparent-card rounded-xxl  pt-3 pb-1 mb-3 mt-2 ">
                            <div
                                className="nav-caption fw-600 font-xssss text-grey-500 d-flex "
                                style={{ marginBottom: '30px' }}
                            >
                                <Link to="/" className="d-flex justify-content-between" style={{ margin: 'auto' }}>
                                    <img
                                        src="assets/images/logo.png"
                                        alt="logo"
                                        style={{ height: '64px', width: '205px' }}
                                        className="logo"
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className="nav-wrap bg-white bg-transparent-card rounded-xxl  pt-3 pb-1 mb-2">
                            <div
                                className="nav-caption fw-200 font-xsss text-grey-500 d-flex ps-0"
                                style={{ marginBottom: '20px' }}
                            >
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
                                    <Link to="/shopmgn" className="nav-content-bttn open-font">
                                        <span className="text-700" style={{ color: '#071952', fontWeight: '600' }}>
                                            Store Information
                                        </span>
                                    </Link>
                                </li>
                                <li className="p-1">
                                    <Link to="/sale-report" className="nav-content-bttn open-font">
                                        <span className="text-700" style={{ color: '#071952', fontWeight: '600' }}>
                                            Sales Report
                                        </span>
                                    </Link>
                                </li>
                                <li className="p-1">
                                    <Link to="/product-mgn" className="nav-content-bttn open-font">
                                        <span className="text-700" style={{ color: '#071952', fontWeight: '600' }}>
                                            Product Management
                                        </span>
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

export default NavShop;
