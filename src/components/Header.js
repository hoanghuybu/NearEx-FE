import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import HandlessTippy from '@tippyjs/react/headless';
import SearchResult from './SearchResults';
import useDebounce from '../hooks/useDebounce';

// const trendProduct = [
//     { imageUrl: 'p.png', title: 'Almonds Lightly Salted ', price: '29', weight: '300 gm' },
//     { imageUrl: 'p.png', title: 'Assorted Donuts Salted ', price: '79', weight: '5 Kg' },
//     { imageUrl: 'p.png', title: 'Natures Own 100% Wheat ', price: '29', weight: '500 gm' },
//     { imageUrl: 'p.png', title: 'Blue Diamond Almonds ', price: '40', weight: '400 gm' },
// ];

function Header() {
    const [location, setLocation] = useState(false);
    const [cart, setCart] = useState(false);
    const [currentUser, setCurrentUser] = useState(false);
    const [loginUser, setLoginUser] = useState({});
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [checkCart, setCheckCart] = useState(false);

    const debounce = useDebounce(searchValue, 500);

    const newCart = JSON.parse(sessionStorage.getItem('cart'));
    const subtotal =
        newCart?.campaignDetails?.length > 0 ? newCart.campaignDetails[newCart.campaignDetails.length - 1].discount : 0;
    const [quantity, setQuantity] = useState(newCart?.orderQuantity || 0);
    const total = subtotal * quantity;

    const handleCheckUser = () => {
        var check = sessionStorage.getItem('jwtToken');
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (check && user) {
            setLoginUser(user);
            setCurrentUser(true);
        }
    };

    const handleModel = () => {
        setLocation(!location);
    };

    const handleCart = () => {
        setCart(!cart);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const searchCampaigns = async (debounce) => {
            try {
                const response = await fetch(
                    `https://swd-nearex.azurewebsites.net/api/campaigns?ProductName=${debounce}`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    },
                );
                const responseData = await response.json();
                setSearchResult(responseData.results);
            } catch (error) {
                console.log(error);
            }
        };
        searchCampaigns(debounce);
    }, [debounce]);

    useEffect(() => {
        handleCheckUser();
    }, []);

    useEffect(() => {
        if (newCart) {
            setCheckCart(true);
        }
    }, [newCart]);

    return (
        <div className={`header-wrapper pt-4 pb-4 z-index-5  d-none d-lg-block bg-white `}>
            <div className="container ">
                <div className="row">
                    <div className="col-lg-12 d-flex">
                        <Link to="/">
                            <img src="assets/images/logo.png" alt="logo" className="logo" />
                        </Link>
                        <div className="header-search ms-auto me-2 d-flex">
                            {/* <Button onClick={handleModel} className="location me-3 bg-transparent border-0">
                                <span className="fw-600 font-xssss text-grey-400">Delivery to</span>
                                <i className="feather-map-pin text-grey-500"></i>
                                <h4 className="fw-600 font-xssss mt-0 text-white mb-0 ls-0">Downtown New York..</h4>
                            </Button> */}
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
                                    <h2 className="font-xss fw-700 text-grey-700 mt-4">Select your location</h2>
                                    <p className="text-grey-500 font-xsssss mt-1">
                                        Implementation of technologies to store <br /> unchange data based on specific
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
                            <HandlessTippy
                                interactive
                                visible={showResult && searchResult.length > 0}
                                render={(attrs) => (
                                    <div className="search-result" tabIndex="-1" {...attrs}>
                                        <div className="popper-wrapper">
                                            <h4 className="search-title">Campaign</h4>
                                            {searchResult.map((result) => (
                                                <SearchResult key={result.id} data={result} />
                                            ))}
                                        </div>
                                    </div>
                                )}
                                onClickOutside={handleHideResult}
                            >
                                <div className="form-group mb-0 icon-input d-none d-xl-block me-2">
                                    <i className="feather-search font-sm text-grey-400"></i>
                                    <input
                                        value={searchValue}
                                        placeholder="Start typing to search.."
                                        className="lh-38 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl posr"
                                        onChange={handleChange}
                                        onFocus={() => setShowResult(true)}
                                    />
                                </div>
                            </HandlessTippy>
                            {/* <a href="/Notification" className="nav-icon">
                                <span className="dot-count bg-warning"></span>
                                <i className="feather-bell text-grey-500"></i>
                            </a>
                            <a href="/Saved" className="nav-icon">
                                <i className="feather-heart text-grey-500"></i>
                            </a> */}
                            <Button onClick={handleCart} className="nav-icon bg-transparent border-0 mt-n2 posr">
                                {checkCart && <span className="dot-count-cart bg-warning"></span>}

                                <i className="feather-shopping-bag text-grey-500"></i>
                            </Button>

                            <Modal
                                onHide={() => setCart(false)}
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                show={cart}
                                className="right"
                            >
                                <Button
                                    onClick={handleCart}
                                    className="btn-close z-index-5 posa right-0 top-0 mt-3 me-3 font-xss"
                                ></Button>
                                <Modal.Body className="text-center pt-3 m-0 pb-3">
                                    <div className="card w-100 p-2 pb-0 border-0 text-start">
                                        <h4 className="fw-700 font-lg text-grey-900 text-start mb-4 mt-n2 d-block">
                                            {' '}
                                            Cart
                                        </h4>

                                        <div key={newCart?.id} className="row mb-3">
                                            <div className="col-md-5 col-xs-5">
                                                <a href="/" className="d-block text-center">
                                                    <img
                                                        src={newCart?.product?.productImg}
                                                        alt="product"
                                                        className="w-100 d-inline-block pt-3 pb-3 bg-greylight rounded-6"
                                                    />
                                                </a>
                                            </div>
                                            <div className="col-md-7 col-xs-7 ps-0">
                                                <span className="ms-auto text-grey-500 fw-500 lh-1 font-xsssss mt-0 w-100 mb-2">
                                                    {newCart?.product?.netWeight + ' ' + newCart?.product?.unit}
                                                </span>
                                                <a
                                                    href="/"
                                                    className="text-grey-900 fw-600 font-xsss lh-22 d-block ls-0 mb-2 pe-lg-4"
                                                >
                                                    {newCart?.product?.productName}
                                                </a>
                                                <h6 className="font-xs ls-3 fw-700 text-current float-start mt-1">
                                                    <span className="font-xsssss text-grey-500">VND</span>
                                                    {newCart?.campaignDetails?.length > 0 && (
                                                        <div>
                                                            {
                                                                newCart.campaignDetails[
                                                                    newCart.campaignDetails.length - 1
                                                                ].discount
                                                            }
                                                        </div>
                                                    )}{' '}
                                                </h6>
                                                <div className="cart-count float-end ">
                                                    <div className="number">
                                                        <span className="minus">-</span>
                                                        <input
                                                            type="text"
                                                            className="open-font ms-1 me-1"
                                                            defaultValue={newCart?.orderQuantity}
                                                        />
                                                        <span className="plus">+</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card w-100 p-3 pt-4 border-0 text-start mt-auto">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h4 className="text-grey-900 font-xssss fw-600 mb-2 d-flex">
                                                    Subtotal <span className="ms-auto text-grey-500">{subtotal}</span>
                                                </h4>
                                                <h4 className="text-grey-900 font-xssss fw-600 mb-3 d-flex">
                                                    Quantity{' '}
                                                    <span className="ms-auto text-grey-500">
                                                        {newCart?.orderQuantity}
                                                    </span>
                                                </h4>
                                                <h4 className="text-grey-900 font-xss fw-600 mb-3 d-flex">
                                                    Total <span className="ms-auto">{total}</span>
                                                </h4>
                                                {/* <h5 className="bg-greylight p-4 rounded-6 mt-3 mb-3 w-100 fw-600 text-grey-500 font-xssss d-flex">
                                                    Apply Promo Code :{' '}
                                                    <span className="ms-auto fw-700 text-grey-900">2 Promos</span>
                                                </h5> */}
                                            </div>
                                        </div>

                                        {/* <a
                                            href="/Checkout"
                                            className="w-100 bg-current text-white rounded-6 text-center btn"
                                            id="checkout"
                                        >
                                            Checkout
                                        </a> */}
                                    </div>
                                </Modal.Body>
                            </Modal>

                            {currentUser ? (
                                <Link to="/dashboard" className=" nav-icon p-0">
                                    <img
                                        src={
                                            loginUser.avatar !== '' || loginUser.avatar !== null
                                                ? loginUser.avatar
                                                : 'https://via.placeholder.com/50x50.png'
                                        }
                                        alt="user"
                                        className="w-40 mt-1 rounded-circle"
                                    />
                                </Link>
                            ) : (
                                <Link to="/logintwo" className=" nav-icon p-0">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Faccount.png?alt=media&token=65bbe49f-91fd-414b-81ab-99bbf4f1674e"
                                        alt="user"
                                        className="w-40 mt-1 rounded-circle"
                                    />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
