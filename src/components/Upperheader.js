import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Headermob extends Component {
    render() {
        const {divClass} = this.props;
        return (
            <div className={`upper-header pt-2 pb-2 d-none d-lg-block ${divClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="nav">
                                <li className="nav-item"><Link className=" ps-0" to="/about">About Us</Link></li>
                                <li className="nav-item"><Link to="/dashboard">My account</Link></li>
                                <li className="nav-item"><Link to="/saved">Wishlist</Link></li>
                                <li className="nav-item"><Link to="/">Order Tracking</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-6 text-end">
                            <ul className="navbar-nav float-end">
                                <li className="nav-item nav-item-toggle active dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown" aria-expanded="false">English </a>
                                    <ul className="dropdown-menu border-0 shadow-xss">
                                    <li><a className="dropdown-item" href="/"> English</a></li>
                                    <li><a className="dropdown-item" href="/"> Spanish </a></li>
                                    <li><a className="dropdown-item" href="/"> Urdu </a></li>
                                    </ul>
                                </li>
                                
                                <li className="nav-item nav-item-toggle active dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown" aria-expanded="false">USD</a>
                                    <ul className="dropdown-menu border-0 shadow-xss">
                                    <li><a className="dropdown-item" href="/"> USD</a></li>
                                    <li><a className="dropdown-item" href="/"> AUD </a></li>
                                    <li><a className="dropdown-item" href="/"> REA </a></li>
                                    </ul>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Headermob;