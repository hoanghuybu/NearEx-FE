import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SearchAdmin extends Component {
    render() {
        return (
            <div className="container-fluid ">
                <div
                    class="form-group has-search d-flex rounded shadow-xss pt-3 ps-3 pb-1"
                    style={{ backgroundColor: '#fff' }}
                >
                    <i className="font-xl  feather-search text-grey-500 form-control-feedback"></i>
                    <input type="text" class="form-control border-0 font-x pb-3" placeholder="Search..." />

                    <div className="pe-5 d-flex ">
                        <button type="button" class="btn btn-light btn-sm border-dark rounded-0 mt-2 mb-3 ">
                            <a href="/Saved" className="nav-icon text-grey-800">
                                <i className="feather-star text-grey-800"></i>
                                &nbsp;Star
                            </a>
                        </button>
                        <button type="button" class="btn btn-outline-dark btn-sm rounded-0 mt-2 mb-3  ps-4 pe-4">
                            <a href="/Saved" className="nav-icon">
                                640
                            </a>
                        </button>
                    </div>
                    <Link to="/dashboard" className=" nav-icon p-0 pe-2 me-3">
                        <img
                            src={'https://via.placeholder.com/50x50.png'}
                            alt="user"
                            className="w-40 mt-1 rounded-circle"
                        />
                    </Link>
                </div>
            </div>
        );
    }
}

export default SearchAdmin;
