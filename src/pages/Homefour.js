import React, { Fragment, useEffect, useState } from 'react';
import Slider from 'react-slick';

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footertwo from '../components/Footertwo';
// import Blog from '../components/Blog';
import Catagorysldier from '../components/Catagorysldier';
import Addbannerone from '../components/Addbannerone';
import Addbannerfour from '../components/Addbannerfour';
import Sliderthree from '../components/Sliderthree';
import jwt_decode from 'jwt-decode';

// const dealProduct = [
//     { imageUrl: 'p.png', title: 'Blue Diamond Almonds ', price: '39', weight: '400 gm' },
//     { imageUrl: 'p.png', title: 'Assorted Donuts Salted ', price: '29', weight: '2 Kg' },
//     { imageUrl: 'p.png', title: 'Natures Own Wheat ', price: '40', weight: '400 gm' },
//     { imageUrl: 'p.png', title: 'Tailgater Ham  Organic ', price: '40', weight: '1 Kg' },
//     { imageUrl: 'p.png', title: 'Kobita Almonds Salted ', price: '40', weight: '100 gm' },
//     { imageUrl: 'p.png', title: 'Natures Own 100% Wheat ', price: '29', weight: '500 gm' },
// ];

// const trendProduct = [
//     { imageUrl: 'p.png', title: 'Tailgater Ham  Organic ', price: '40', weight: '1 Kg' },
//     { imageUrl: 'p.png', title: 'Apple Juice Organic Food ', price: '39', weight: '200 gm' },
//     { imageUrl: 'p.png', title: 'Almonds Lightly Salted ', price: '29', weight: '300 gm' },
//     { imageUrl: 'p.png', title: 'Assorted Donuts Salted ', price: '79', weight: '5 Kg' },
//     { imageUrl: 'p.png', title: 'Natures Own 100% Wheat ', price: '29', weight: '500 gm' },
// ];

function Homefour() {
    const [listCategory, setListCategory] = useState([]);
    const [listProduct, setListProduct] = useState([]);
    const [listCampaign, setListCampaign] = useState([]);
    const [listBestSeller, setListBestSeller] = useState([]);

    const dealProductsettings = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 749,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    const getCategory = async () => {
        try {
            const response = await fetch('https://swd-nearex.azurewebsites.net/api/categories');
            const responseData = await response.json();
            setListCategory(responseData.results);
        } catch (error) {
            console.log(error);
        }
    };

    const getProduct = async () => {
        try {
            const response = await fetch('https://swd-nearex.azurewebsites.net/api/products');
            const responseData = await response.json();
            setListProduct(responseData.results);
        } catch (error) {
            console.log(error);
        }
    };

    const getCampaign = async () => {
        try {
            const response = await fetch('https://swd-nearex.azurewebsites.net/api/campaigns');
            const responseData = await response.json();

            setListCampaign(responseData.results);
        } catch (error) {
            console.log(error);
        }
    };
    const getBestSeller = async () => {
        try {
            const response = await fetch('https://swd-nearex.azurewebsites.net/api/campaigns/best-seller-campaign');
            const responseData = await response.json();

            setListBestSeller(responseData.results.slice(0, 5));
        } catch (error) {
            console.log(error);
        }
    };

    const handleJWT = () => {
        var jwtToken = sessionStorage.getItem('jwtToken');
        if (jwtToken) {
            var userObject = jwt_decode(jwtToken);
            console.log(userObject);
        }
    };
    useEffect(() => {
        getCategory();
        getProduct();
        getCampaign();
        getBestSeller();
        //handleJWT();
    }, []);

    // console.log(listCampaign);
    return (
        <Fragment>
            <div className="main-wrapper center-wrap">
                <Headermob />
                <Upperheader divClass="bg-lightgrey" />
                <Header />
                <Lowerheader />

                <div className="banner-wrapper pt-4 pb-3 md-mt-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 pe-lg-0 d-none d-lg-block lower-header z-index-2">
                                <ul className="dropdown-menu show w-100 posr mt-0 h-100 pt-2 p-3 pb-1 shadow-none bg-lightgrey border-0 rounded-6">
                                    {listCategory.map((category) => (
                                        <li key={category.id}>
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href={'/shop-4?categoryId=' + category.id}
                                            >
                                                {category.categoryName}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <Sliderthree />
                            </div>
                            <div className="col-lg-3 ps-lg-0 d-none d-lg-block d-xs-block sm-mt-3">
                                <div className="card w-100 border-0 shadow-none mb-0 ovh rounded-6 hover-zoom-image">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fside-banner.png?alt=media&token=7795d4e2-023f-4c3d-ad19-60ed57ff1879"
                                        alt="banner"
                                        className="w-100"
                                    />
                                    <div className="p-4 posa top-0 w-100">
                                        <span className="fw-700 ls-3 text-white bg-current ps-2 pe-2 lh-24 rounded-6 d-inline-block font-xsssss">
                                            30% OFF
                                        </span>
                                        <h4 className="font-md fw-700 lh-28 text-grey-900 mb-1 mt-3 ls-0">
                                            High Quality <br /> Products
                                        </h4>
                                        <a
                                            href="/g-4"
                                            className="fw-700 ls-1 border-bottom border-dark lh-20 d-inline-block text-grey-900 font-xsssss"
                                        >
                                            SHOP NOW
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 pe-2">
                                <Addbannerfour
                                    title="Fresh vegetable"
                                    tag="30% OFF"
                                    bgimage="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fb1.png?alt=media&token=5a82fda9-9a2e-44b2-9d51-5dc8905617a8"
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 pe-2 ps-2">
                                <Addbannerfour
                                    title="Healthy  vegetable"
                                    tag="50% OFF"
                                    bgimage="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fb2.png?alt=media&token=9fcf5aac-6ed0-4ccb-8a51-fc71ac028454"
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 ps-2">
                                <Addbannerfour
                                    title="Bread 50% OFF"
                                    tag="20% OFF"
                                    bgimage="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fb3.png?alt=media&token=52ddc121-d738-4819-b64d-e79dde5d8c53"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-wrap pt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 bg-white rounded-6 p-4 pb-3">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 xs-mb-4 md-mb-3 text-start">
                                        <i className="ti-shopping-cart text-grey-900 display1-size float-start me-3"></i>
                                        <h4 className="mt-0 fw-600 text-grey-900 font-xsss mb-0 ls-0">
                                            100% Secure Payments
                                        </h4>
                                        <p className="font-xsssss fw-500 text-grey-500 lh-26 mt-0 mb-0">
                                            100% Payment Protection.
                                        </p>
                                    </div>

                                    <div className="col-lg-3 col-md-6 xs-mb-4 md-mb-3 text-start">
                                        <i className="ti-headphone-alt text-grey-900 display1-size float-start me-3"></i>
                                        <h4 className="mt-0 fw-600 text-grey-900 font-xsss mb-0 ls-0">Support</h4>
                                        <p className="font-xsssss fw-500 text-grey-500 lh-26 mt-0 mb-0">
                                            Alway online feedback 24/7
                                        </p>
                                    </div>
                                    <div className="col-lg-3 col-md-6 md-mb-3 text-start">
                                        <i className="ti-lock text-grey-900 display1-size float-start me-3"></i>
                                        <h4 className="mt-0 fw-600 text-grey-900 font-xsss mb-0 ls-0">Trust pay</h4>
                                        <p className="font-xsssss fw-500 text-grey-500 lh-26 mt-0 mb-0">
                                            Easy Return Policy.
                                        </p>
                                    </div>
                                    <div className="col-lg-3 col-md-6 text-start">
                                        <i className="ti-reload text-grey-900 display1-size float-start me-3"></i>
                                        <h4 className="mt-0 fw-600 text-grey-900 font-xsss mb-0 ls-0">
                                            Return and Refund
                                        </h4>
                                        <p className="font-xsssss fw-500 text-grey-500 lh-26 mt-0 mb-0">
                                            100% money back guarantee
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 pt-3">
                                <h4 className="fw-700 font-sm mb-4 mt-2 ">Deal of the week</h4>
                            </div>

                            <div className="col-lg-12 mb-3">
                                <div className="banner-slider-5 rounded-6 bg-white border-danger">
                                    <Slider {...dealProductsettings} className="slick-arrow-top">
                                        {listCampaign.map((campaign) => (
                                            <div key={campaign.id} className="p-3 posr">
                                                <h4 className="ls-3 font-xsssss text-white text-uppercase bg-current fw-700 p-2 d-inline-block posa rounded-3">
                                                    {campaign.campaignDetails.length > 0 && (
                                                        <div>
                                                            {campaign.campaignDetails[
                                                                campaign.campaignDetails.length - 1
                                                            ].percentDiscount + '%'}
                                                        </div>
                                                    )}
                                                </h4>
                                                <span className="posa right-0 top-0 mt-3 me-3 z-index-5">
                                                    <i className="ti-heart font-xs text-grey-500"></i>
                                                </span>
                                                <div className="clearfix"></div>
                                                <a
                                                    href={'/single-product-5?campaignId=' + campaign.id}
                                                    className="d-block text-center p-2"
                                                >
                                                    <img
                                                        src={campaign.product.productImg}
                                                        alt="product"
                                                        className="w-100 mt-1 d-inline-block"
                                                    />
                                                </a>

                                                <div className="clearfix"></div>
                                                <h2 className="mt-2">
                                                    <a
                                                        href={'/single-product-5?campaignId=' + campaign.id}
                                                        className="text-grey-700 fw-600 font-xsss lh-2 ls-0"
                                                    >
                                                        {campaign.product.productName}
                                                    </a>
                                                </h2>
                                                <h6 className="font-xss ls-3 fw-700 text-current d-flex">
                                                    <span className="font-xsssss text-grey-500 d-flex">VND</span>
                                                    {campaign?.campaignDetails?.length > 0 && (
                                                        <div>
                                                            {
                                                                campaign.campaignDetails[
                                                                    campaign.campaignDetails.length - 1
                                                                ].discount
                                                            }
                                                        </div>
                                                    )}{' '}
                                                    <span className="ms-auto me-4 text-grey-500 fw-500 font-xsssss d-flex">
                                                        {campaign.product.netWeight + ' ' + campaign.product.unit}
                                                    </span>
                                                </h6>
                                                <div className="cart-count d-flex mt-4 mb-2">
                                                    <div className="number">
                                                        <span className="minus">-</span>
                                                        <input
                                                            type="text"
                                                            className="open-font me-1 ms-1"
                                                            defaultValue="1"
                                                        />
                                                        <span className="plus">+</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <Addbannerone />
                            </div>
                            <div className="col-lg-12 pt-3">
                                <h4 className="fw-700 font-sm mb-4 mt-2 ">Shop by Categories</h4>
                            </div>
                            <div className="col-lg-12">
                                <Catagorysldier />
                            </div>

                            <div className="col-lg-12 col-md-4 mt-4 mb-lg-5 mb-3 product-wrap-bottom">
                                <h4 className="fw-700 font-xss mb-3 mt-2">Best Seller</h4>

                                {listBestSeller.map((campaign) => (
                                    <div key={campaign.id} className="card border-0 rounded-6">
                                        <div className="card-content p-3 border border-bottom-0 border-light border-size-md">
                                            <div className="row">
                                                <div className="col-sm-2 col-xs-4">
                                                    <a
                                                        href={'/single-product-5?campaignId=' + campaign.id}
                                                        className="d-block text-center"
                                                    >
                                                        <img
                                                            src={campaign.product.productImg}
                                                            alt="product"
                                                            className="w-100 d-inline-block pt-2 rounded-6"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-sm-8 col-xs-8 ps-0">
                                                    <span className="ms-auto text-grey-500 fw-500 lh-1 font-xsssss mt-0 w-100 mb-2">
                                                        {campaign.product.netWeight + ' ' + campaign.product.unit}
                                                    </span>
                                                    <a
                                                        href={'/single-product-5?campaignId=' + campaign.id}
                                                        className="text-grey-900 fw-600 font-xssss lh-20 d-block ls-0 mb-0"
                                                    >
                                                        {campaign.product.productName}
                                                    </a>

                                                    <h6 className="font-xsss ls-3 fw-700 text-current float-start mt-1">
                                                        <span className="font-xsssss text-grey-500">VND</span>
                                                        {campaign.product.price}{' '}
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Blog /> */}
                <Footertwo divClass="bg-white" />
            </div>
        </Fragment>
    );
}

export default Homefour;
