import React, { useState, Fragment } from 'react';

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';
import Pagetitle from '../components/Pagetitle';

// const dealProduct = [
//     { imageUrl: 'p.png', title: 'Blue Diamond Almonds ', price: '39' },
//     { imageUrl: 'p.png', title: 'Natures Own Wheat ', price: '40' },
//     { imageUrl: 'p.png', title: 'Tailgater Ham  Organic ', price: '40' },
//     { imageUrl: 'p.png', title: 'Kobita Almonds Salted ', price: '40' },
// ];

function Cart() {
    const newCart = JSON.parse(sessionStorage.getItem('cart'));
    const subtotal =
        newCart?.campaignDetails?.length > 0 ? newCart.campaignDetails[newCart.campaignDetails.length - 1].discount : 0;
    const [quantity, setQuantity] = useState(newCart?.orderQuantity || 0);
    const total = subtotal * quantity;

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    };
    const handleRemoveCampaign = () => {
        sessionStorage.removeItem('cart');
        window.location.reload();
    };

    const handleCheckout = () => {
        var checkout = { ...newCart, orderQuantity: quantity };
        sessionStorage.setItem('cart', JSON.stringify(checkout));
    };
    return (
        <Fragment>
            <Headermob />
            <Upperheader divClass="bg-lightgrey" />
            <Header />
            <Lowerheader />

            <Pagetitle title="Cart" />

            <div className="content-wrap pt-lg-5 pb-lg-5 py-4 my-lg-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card border-0">
                                <div className="table-content table-responsive mb-2">
                                    <table className="table text-center mb-0">
                                        <thead className="bg-greylight rounded-10 ovh">
                                            <tr>
                                                <th className="border-0 p-3">&nbsp;</th>
                                                <th className="border-0 p-3">&nbsp;</th>
                                                <th className="border-0 p-3 fw-600 font-xsss mb-2 white-text">Name</th>
                                                <th className="border-0 p-3 fw-600 font-xsss mb-2 white-text">Price</th>
                                                <th className="border-0 p-3 fw-600 font-xsss mb-2 white-text">
                                                    Quantity
                                                </th>
                                                <th className="border-0 p-3 fw-600 font-xsss mb-2 white-text">
                                                    &nbsp;
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr key={newCart?.id}>
                                                <td>
                                                    <div className="form-check mt-1">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value="option1"
                                                        />
                                                        <label className="text-grey-500 font-xssss"></label>
                                                    </div>
                                                </td>
                                                <td className="product-thumbnail text-start ps-0">
                                                    <img
                                                        src={newCart?.product?.productImg}
                                                        alt="product"
                                                        className="w-80 d-inline-block pt-3 pb-3 bg-greylight rounded-6"
                                                    />
                                                </td>

                                                <td className="product-p">
                                                    <h6 className="text-grey-600 fw-600 font-xsss lh-22 d-block ls-0 mb-2">
                                                        {newCart?.product?.productName}
                                                    </h6>
                                                </td>
                                                <td className="product-total-price">
                                                    <h6 className="font-xs ls-3 fw-700 text-current float-start mt-1">
                                                        <span className="font-xsssss text-grey-500">VND</span>{' '}
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
                                                </td>
                                                <td className="product-remove text-right">
                                                    <div className="cart-count float-end ">
                                                        <div className="number">
                                                            <span className="minus" onClick={handleDecrease}>
                                                                -
                                                            </span>
                                                            <input
                                                                type="text"
                                                                className="open-font me-1 ms-1"
                                                                value={quantity}
                                                            />
                                                            <span className="plus" onClick={handleIncrease}>
                                                                +
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="product-remove text-right">
                                                    <a onClick={handleRemoveCampaign}>
                                                        <i className="ti-close font-xsss text-grey-500"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* <a
                                    href="/Checkout"
                                    className="w-200 ms-auto bg-greylight text-grey-600 rounded-6 text-center btn fw-700 ls-3 font-xssss p-3 text-uppercase"
                                >
                                    update
                                </a> */}
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card w-100 p-lg-4 pt-lg-0 pt-4 border-0 text-start">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h4 className="text-grey-900 font-xssss fw-600 mb-2 d-flex">
                                            Subtotal{' '}
                                            <span className="ms-auto text-grey-500">
                                                {newCart?.campaignDetails?.length > 0 && (
                                                    <div>
                                                        {
                                                            newCart.campaignDetails[newCart.campaignDetails.length - 1]
                                                                .discount
                                                        }
                                                    </div>
                                                )}
                                                VND
                                            </span>
                                        </h4>
                                        <h4 className="text-grey-900 font-xssss fw-600 mb-3 d-flex">
                                            Quantity <span className="ms-auto text-grey-500">{quantity}</span>
                                        </h4>
                                        <h4 className="text-grey-900 font-xss fw-600 mb-3 d-flex">
                                            Total <span className="ms-auto">{total} VND</span>
                                        </h4>
                                        <h5 className="bg-greylight p-4 rounded-6 mt-3 mb-3 w-100 fw-600 text-grey-500 font-xssss d-flex">
                                            Apply Promo Code :{' '}
                                            <span className="ms-auto fw-700 text-grey-900">2 Promos</span>
                                        </h5>
                                    </div>
                                </div>

                                <a
                                    href="/Checkout"
                                    onClick={handleCheckout}
                                    className="w-100 bg-current text-white rounded-6 text-center btn fw-700 ls-3 font-xssss p-3 text-uppercase"
                                >
                                    Checkout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </Fragment>
    );
}

export default Cart;
