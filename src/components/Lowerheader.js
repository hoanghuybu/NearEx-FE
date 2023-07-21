import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Lowerheader() {
    const [location, setLocation] = useState(false);
    const [listCategory, setListCategory] = useState([]);
    const handleModel = () => {
        setLocation(!location);
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
    const hanldeLogout = () => {
        sessionStorage.clear();
        if (window.location.pathname === '/') {
            window.location.reload();
        }
    };
    useEffect(() => {
        getCategory();
    }, []);

    return (
        <div className="lower-header pt-0 pb-0 shadow-xss bg-white d-none d-lg-block">
            <div className="container">
                <div className="container-wrap posr">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="dropdown dropdown-right border-0">
                                <Button
                                    onClick={handleModel}
                                    className="bg-transparent btn border-0 rounded-0 dropdown-toggle"
                                >
                                    <i className="feather-align-left"></i> All Categories
                                </Button>
                                <Modal
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                    show={location}
                                    className="left"
                                >
                                    <Button
                                        onClick={handleModel}
                                        className="btn-close z-index-5 posa right-0 top-0 mt-3 me-3 font-xss"
                                    ></Button>
                                    <Modal.Body className="text-center pt-3 m-0">
                                        <div className="card w-100 p-2 pb-0 border-0 text-start">
                                            <h4 className="fw-700 font-lg text-grey-900 text-start mb-3 mt-n2 d-block ls-0">
                                                {' '}
                                                Categories
                                            </h4>
                                            <Navbar expand="lg" className="dropdown-navbar">
                                                <Navbar id="basic-navbar-nav" className="w-100 d-block">
                                                    <Nav>
                                                        {/* <NavDropdown title="Beverages" id="basic-nav-dropdown">
                                                                <NavDropdown.Item href="#action/3.1">Water</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.2">Sparkling Water</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.3">Soda Pop</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.4">Coffee</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.5">Milk Plant-Based Milk</NavDropdown.Item>
                                                            </NavDropdown>
                                                            <NavDropdown title="Biscuits  Snacks" id="basic-nav-dropdown">
                                                                <NavDropdown.Item href="#action/3.1">Water</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.2">Sparkling Water</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.3">Soda Pop</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.4">Coffee</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.5">Milk Plant-Based Milk</NavDropdown.Item>
                                                            </NavDropdown>
                                                            <NavDropdown title="Breads  Bakery" id="basic-nav-dropdown">
                                                                <NavDropdown.Item href="#action/3.1">Water</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.2">Sparkling Water</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.3">Soda Pop</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.4">Coffee</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.5">Milk Plant-Based Milk</NavDropdown.Item>
                                                            </NavDropdown>
                                                            <NavDropdown title="Breakfast  Dairy" id="basic-nav-dropdown">
                                                                <NavDropdown.Item href="#action/3.1">Water</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.2">Sparkling Water</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.3">Soda Pop</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.4">Coffee</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.5">Milk Plant-Based Milk</NavDropdown.Item>
                                                            </NavDropdown>
                                                            <NavDropdown title="Frozen Foods" id="basic-nav-dropdown">
                                                                <NavDropdown.Item href="#action/3.1">Water</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.2">Sparkling Water</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.3">Soda Pop</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.4">Coffee</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.5">Milk Plant-Based Milk</NavDropdown.Item>
                                                            </NavDropdown>
                                                           
                                                            <Nav.Link href="#Fruits"> Fruits  Vegetables </Nav.Link>
                                                            <Nav.Link href="#Grocery"> Grocery  Staples </Nav.Link>
                                                            <Nav.Link href="#Househol"> Household Needs </Nav.Link>
                                                            <Nav.Link href="#Meats"> Meats  Seafood </Nav.Link>
                                                            <Nav.Link href="#Egg">Eggs Substitutes </Nav.Link>
                                                            <Nav.Link href="#Hone">Honey Vegetables </Nav.Link>
                                                            <Nav.Link href="#Marmalade">Marmalades Staples </Nav.Link>
                                                            <Nav.Link href="#Sour">Sour Cream and Dips </Nav.Link>
                                                            <Nav.Link href="#Yogur">Yogurt Seafood </Nav.Link> */}
                                                        {listCategory.map((category) => (
                                                            <Nav.Link
                                                                key={category.id}
                                                                href={'/shop-4?categoryId=' + category.id}
                                                            >
                                                                {category.categoryName}
                                                            </Nav.Link>
                                                        ))}
                                                    </Nav>
                                                </Navbar>
                                            </Navbar>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="navbar navbar-expand-lg p-0">
                                <div className="navbar-collapse collapse show" id="main_nav">
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#main_nav"
                                        aria-expanded="true"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <ul className="navbar-nav">
                                        <li className="nav-item nav-item-toggle site-menu">
                                            <a className="nav-link dropdown-toggle" href="/g-4">
                                                Home{' '}
                                            </a>
                                            <ul className="sub-menu border-0 shadow-xss">
                                                {/* <li>
                                                        <Link className="dropdown-item" to="/g-1">
                                                            {' '}
                                                            Grocery One
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="/g-2">
                                                            {' '}
                                                            Grocery Two{' '}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="/g-3">
                                                            {' '}
                                                            Grocery Three{' '}
                                                        </Link>
                                                    </li> */}
                                                <li>
                                                    <Link className="dropdown-item" to="/g-4">
                                                        {' '}
                                                        NearEx
                                                    </Link>
                                                </li>
                                                {/* <li>
                                                        <Link className="dropdown-item" to="/g-5">
                                                            {' '}
                                                            Grocery Five
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="/g-6">
                                                            {' '}
                                                            Grocery Six{' '}
                                                        </Link>
                                                    </li> */}
                                            </ul>
                                        </li>

                                        <li className="nav-item nav-item-toggle mega-menu">
                                            <a className="nav-link dropdown-toggle" href="/">
                                                Pages
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="/">Shop</a>
                                                    <ul className="sub-mega-menu">
                                                        {/* <li>
                                                                <Link to="/shop-1"> Shop One</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/shop-2"> Shop Two </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/shop-3"> Shop Three </Link>
                                                            </li> */}
                                                        <li>
                                                            <Link to="/shop-4"> All Products</Link>
                                                        </li>
                                                        {/* <li>
                                                                <Link to="/shop-5"> Shop Five </Link>
                                                            </li> */}
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="/">Shop Page</a>
                                                    <ul className="sub-mega-menu">
                                                        <li>
                                                            <Link to="/cart">Cart</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/checkout">Checkout</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/dashboard">My account</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/orders">Order Tracking</Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <a href="/">Authentication</a>
                                                    <ul className="sub-mega-menu">
                                                        <li>
                                                            <Link to="/logintwo">Login Page</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/registertwo">Register Page</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/forgottwo">Forgot Password</Link>
                                                        </li>
                                                        {/* <li>
                                                            <Link to="/verifytwo">Veryfy Page</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/notfound">404 Page</Link>
                                                        </li> */}
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="/">Other Pages</a>
                                                    <ul className="sub-mega-menu">
                                                        <li>
                                                            <Link to="/about"> About Pages</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/contact"> Contact Pages</Link>
                                                        </li>
                                                        {/* <li><Link to="/blog"> Blog Pages</Link></li> */}
                                                        {/* <li>
                                                            <Link to="/blog-single"> Single Blog</Link>
                                                        </li> */}
                                                        <li>
                                                            <Link to="/faq"> Faq Pages</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item nav-item-toggle site-menu">
                                            <a className="nav-link dropdown-toggle" href="/">
                                                Dashboard
                                            </a>
                                            <ul className="sub-menu border-0 shadow-xss">
                                                <li>
                                                    <Link className="dropdown-item" to="/dashboard">
                                                        {' '}
                                                        Dashboard
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="/address">
                                                        {' '}
                                                        Update Information{' '}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="/orders">
                                                        {' '}
                                                        Orders{' '}
                                                    </Link>
                                                </li>
                                                {/* <li>
                                                    <Link className="dropdown-item" to="/coupon">
                                                        {' '}
                                                        Coupon
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="/payment">
                                                        {' '}
                                                        Payment{' '}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="/notification">
                                                        {' '}
                                                        Notification{' '}
                                                    </Link>
                                                </li> */}
                                                <li>
                                                    <Link onClick={hanldeLogout} className="dropdown-item" to="">
                                                        {' '}
                                                        Logout{' '}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        {/* <li className="nav-item nav-item-toggle">
                                            <a className="nav-items" href="/blog">
                                                Blog
                                            </a>
                                        </li> */}
                                        <li className="nav-item nav-item-toggle">
                                            <a className="nav-items" href="/contact">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item text-grey-500 fw-500 font-xssss">
                                            Need help? Call Us :{' '}
                                            <a href="tel:03340005000" className="fw-700 text-current">
                                                0934945650
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lowerheader;
