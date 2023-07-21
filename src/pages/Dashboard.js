import React, { Fragment } from 'react';

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';
import Dashnav from '../components/Dashnav';
import Dashmenu from '../components/Dashmenu';
import Dashorder from '../components/Dashorder';

function Dashboard() {
    return (
        <Fragment>
            <Headermob />
            <Upperheader />
            <Header />
            <Lowerheader />
            <Dashnav title="Dashboard" />

            <div className="main-div pb-5" style={{ marginBottom: '100px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <Dashmenu />
                        </div>
                        <div className="col-lg-8 pt-5 ps-4">
                            <div className="col-lg-12 ps-2 pe-2">
                                <div className="row">
                                    <div className="col-lg-12 ps-2 pe-2">
                                        <div className="card border-0 mt-3">
                                            <Dashorder />
                                        </div>
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

export default Dashboard;
