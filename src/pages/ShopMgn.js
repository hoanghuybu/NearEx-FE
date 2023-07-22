import React, { useEffect, Fragment } from 'react';
//import { Link } from 'react-router-dom';
import Nav from '../components/NavShop';
// import jwt_decode from 'jwt-decode';
// import { useHistory } from 'react-router-dom';

function ShopMgn() {
    const store = JSON.parse(sessionStorage.getItem('store'));
    const jwtToken = sessionStorage.getItem('jwtToken');
    // const history = useHistory();

    // const checkRole = () => {
    //     if (jwtToken) {
    //         var decode = jwt_decode(jwtToken);

    //         if (decode.role !== 'store') {
    //             history.push('/logintwo');
    //         }

    //         history.push('/logintwo');
    //     }
    // };

    // useEffect(() => {
    //     checkRole();
    // });

    return (
        <Fragment>
            <div class="container-fluid " style={{ padding: '0' }}>
                <div class="row ml-0 mr-0">
                    <div className="col-2 fixed-left">
                        <Nav />
                    </div>
                    <div
                        className="col-10"
                        style={{
                            paddingLeft: '50px',
                            paddingRight: '50px',
                            backgroundColor: '#efefefef',
                            minHeight: '1000px',
                        }}
                    >
                        <div className="card mb-4">
                            <h2
                                className="card-header"
                                style={{
                                    paddingTop: '50px',
                                    paddingBottom: '50px',
                                    fontWeight: 'bold',
                                    color: '#0B666A',
                                }}
                            >
                                Store Details
                            </h2>

                            <div className="card-body">
                                <div className="d-flex align-items-start align-items-sm-center gap-4">
                                    <img
                                        src={store?.logo}
                                        alt="user-avatar"
                                        className="d-block rounded"
                                        height="100"
                                        width="100"
                                        id="uploadedAvatar"
                                    />
                                </div>
                            </div>
                            <hr className="my-0" />
                            <div className="card-body">
                                <div className="row">
                                    <div className="mb-3 col-md-6">
                                        <label for="firstName" className="form-label">
                                            Store Name
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            disabled
                                            id="firstName"
                                            name="firstName"
                                            value={store?.storeName}
                                            autofocus
                                        />
                                    </div>

                                    <div className="mb-3 col-md-6">
                                        <label className="form-label" for="phoneNumber">
                                            Phone Number
                                        </label>
                                        <div className="input-group input-group-merge">
                                            <span className="input-group-text">VN (+84)</span>
                                            <input
                                                type="text"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                disabled
                                                className="form-control"
                                                placeholder="202 555 0111"
                                                value={store?.phone}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3 col-md-12">
                                        <label for="address" className="form-label">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            disabled
                                            name="address"
                                            placeholder="Address"
                                            value={store?.address}
                                        />
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

export default ShopMgn;
