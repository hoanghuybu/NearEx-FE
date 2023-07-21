import React, { useEffect, useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';
import Pagetitle from '../components/Pagetitle';
import { Modal, Button } from 'react-bootstrap';
import { geocodeByAddress } from 'react-google-places-autocomplete';

function Checkout() {
    const [location, setLocation] = useState(false);
    const user = JSON.parse(sessionStorage.getItem('user'));
    const jwtToken = sessionStorage.getItem('jwtToken');
    const history = useHistory();

    const handleModel = () => {
        setLocation(!location);
    };
    if (!user && !jwtToken) {
        history.push('/logintwo');
    }
    return (
        <Fragment>
            <Headermob />
            <Upperheader divClass="bg-lightgrey" />
            <Header />
            <Lowerheader />

            <Pagetitle title="Checkout" />

            <div className="content-wrap pt-lg-5 pb-lg-5 py-4 my-lg-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 checkout-form mb-3">
                            <div className="card border-size-md border p-4">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h6 className="font-xsss ls-3 fw-700 text-grey-700 border-bottom-light lh-38 mb-3">
                                            BILLING DETAILS
                                        </h6>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="Name">Name</label>
                                            <input
                                                type="text"
                                                className="form-control bg-greylight border-0"
                                                placeholder="Enter your name"
                                                id="Name"
                                                defaultValue={user?.userName}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="Email">Email</label>
                                            <input
                                                type="text"
                                                className="form-control bg-greylight border-0"
                                                placeholder="Enter your email"
                                                id="Email"
                                                defaultValue={user?.email}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="Phone">Phone</label>
                                            <input
                                                type="text"
                                                className="form-control bg-greylight border-0"
                                                placeholder="Enter your phone"
                                                id="Phone"
                                                defaultValue={user?.phone}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="Address">Address</label>
                                            <input
                                                type="text"
                                                className="form-control bg-greylight border-0"
                                                placeholder="Enter your address"
                                                id="Address"
                                                defaultValue={user?.address}
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="Zip">Zip Code</label>
                                            <input
                                                type="text"
                                                className="form-control bg-greylight border-0"
                                                placeholder="Enter here"
                                                id="Zip"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="City">City</label>
                                            <input
                                                type="text"
                                                className="form-control bg-greylight border-0"
                                                placeholder="Enter here"
                                                id="City"
                                            />
                                        </div>
                                    </div> */}
                                    <div className="col-lg-12">
                                        <div className="form-group icon-input mb-1">
                                            <label htmlFor="Location">Location</label>
                                            <input
                                                type="text"
                                                className="form-control bg-greylight border-0"
                                                placeholder="Enter here location"
                                                id="Location"
                                                defaultValue={user?.address}
                                            />
                                            <i
                                                className="location-custom font-sm feather-map-pin text-grey-500 pe-0"
                                                onClick={handleModel}
                                            ></i>
                                        </div>
                                        <Modal
                                            size="sm"
                                            aria-labelledby="contained-modal-title-vcenter"
                                            centered
                                            show={location}
                                            onHide={() => setLocation(false)}
                                        >
                                            <Button
                                                onClick={handleModel}
                                                className="btn-close z-index-5 posa right-0 top-0 mt-3 me-3 font-xss"
                                            ></Button>
                                            <Modal.Body className="text-center pt-4">
                                                <i className="feather-map-pin bg-greylight text-grey-900 btn-round-xxxl font-xl text-center rounded-6"></i>
                                                <h2 className="font-xss fw-700 text-grey-700 mt-4">
                                                    Select your location
                                                </h2>
                                                <p className="text-grey-500 font-xsssss mt-1">
                                                    Implementation of technologies to store <br /> unchange data based
                                                    on specific
                                                </p>
                                                <div className="inner-addon left-addon">
                                                    <input
                                                        type="text"
                                                        className="form-control ps-5 font-xssss border-sizelg rounded-6 bg-color-none fw-600 border text-grey-500"
                                                        defaultValue="675 Camac Street Down"
                                                    />
                                                    <i className="ti-location-arrow text-current ps-3 font-xss posa left-15 mt-3"></i>
                                                </div>
                                                <Button className="border-0 btn rounded-6 w-100 lh-2 d-block p-3 mt-0 mb-2 text-white bg-current font-xssss text-uppercase fw-600 ls-3">
                                                    Current Location{' '}
                                                </Button>
                                            </Modal.Body>
                                        </Modal>
                                        {/* <div className="form-check">
                                            <input
                                                className="form-check-input font-xs"
                                                type="checkbox"
                                                value="Drinks"
                                                id="flexCheckStock7"
                                            />
                                            <label className="form-check-label" htmlFor="flexCheckStock7">
                                                Save shipping address
                                            </label>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 checkout-form">
                            <div className="card border-size-md border border-danger p-4">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h6 className="font-xsss ls-3 fw-700 text-grey-700 border-bottom-light lh-38 mb-3">
                                            YOUR ORDERS
                                        </h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h4 className="text-grey-900 font-xssss fw-600 mb-2 d-flex">
                                            Subtotal <span className="ms-auto text-grey-500">$ 59.99</span>
                                        </h4>
                                        <h4 className="text-grey-900 font-xssss fw-600 mb-3 d-flex">
                                            Tax <span className="ms-auto text-grey-500">$ 0.99</span>
                                        </h4>
                                        <h4 className="text-grey-900 font-xss fw-600 mb-3 d-flex">
                                            Total <span className="ms-auto">$ 60.99</span>
                                        </h4>
                                        <h5 className="bg-greylight p-4 rounded-6 mt-3 mb-3 w-100 fw-600 text-grey-500 font-xssss d-flex">
                                            Apply Promo Code :{' '}
                                            <span className="ms-auto fw-700 text-grey-900">2 Promos</span>
                                        </h5>
                                    </div>
                                    <div className="col-lg-12">
                                        <h6 className="font-xsss ls-3 fw-700 text-grey-700 border-bottom-light lh-38 mb-3">
                                            PAYMENT
                                        </h6>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="card w-100 pb-0 border-0 text-start">
                                            <div className="col-lg-12 mt-2">
                                                {/* <div className="card bg-white rounded-6 border-0 shadow-xss p-0">
                                                    <div className="card-body d-flex justify-content-between align-items-end p-4">
                                                        <div>
                                                            <h4 className="text-grey-600 mb-0 d-flex font-xsss align-items-center justify-content-between mt-0 fw-600">
                                                                <img
                                                                    src="https://via.placeholder.com/50x50.png"
                                                                    alt="chip"
                                                                    className="float-left me-4"
                                                                />
                                                                4321 4432 6565 ****
                                                            </h4>
                                                        </div>
                                                        <div className="round float-right mb-2">
                                                            <input
                                                                id="radio-1"
                                                                className="radio-custom"
                                                                name="radio-group"
                                                                type="radio"
                                                                defaultChecked
                                                            />
                                                            <label
                                                                htmlFor="radio-1"
                                                                className="radio-custom-label m-0"
                                                            ></label>
                                                        </div>
                                                    </div>
                                                </div> */}

                                                <div className="card bg-white rounded-6 border-0 shadow-xss mt-3 p-0">
                                                    <div className="card-body d-flex justify-content-between align-items-end p-4">
                                                        <div>
                                                            <h4 className="text-grey-600 mb-0 d-flex font-xsss align-items-center justify-content-between mt-0 fw-600">
                                                                <img
                                                                    src="https://via.placeholder.com/50x50.png"
                                                                    alt="chip"
                                                                    className="float-left me-4"
                                                                    defaultChecked
                                                                />
                                                                Cash on delivery (COD)
                                                            </h4>
                                                        </div>
                                                        <div className="round float-right mb-2">
                                                            <input
                                                                id="radio-2"
                                                                className="radio-custom"
                                                                name="radio-group"
                                                                type="radio"
                                                            />
                                                            <label
                                                                htmlFor="radio-2"
                                                                className="radio-custom-label m-0"
                                                            ></label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card bg-white rounded-6 border-0 shadow-xss mt-3 p-0">
                                                    <div className="card-body d-flex justify-content-between align-items-end p-4">
                                                        <div>
                                                            <h4 className="text-grey-600 mb-0 d-flex font-xsss align-items-center justify-content-between mt-0 fw-600">
                                                                <img
                                                                    src="https://via.placeholder.com/50x50.png"
                                                                    alt="chip"
                                                                    className="float-left me-4"
                                                                />
                                                                VNPAY
                                                            </h4>
                                                        </div>
                                                        <div className="round float-right mb-2">
                                                            <input
                                                                id="radio-4"
                                                                className="radio-custom"
                                                                name="radio-group"
                                                                type="radio"
                                                            />
                                                            <label
                                                                htmlFor="radio-4"
                                                                className="radio-custom-label m-0"
                                                            ></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <a
                                            href="/checkout"
                                            className="w-100 bg-current text-white rounded-6 text-center btn fw-700 ls-3 font-xssss text-uppercase"
                                        >
                                            PLACE order
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </Fragment>
    );
}

export default Checkout;
