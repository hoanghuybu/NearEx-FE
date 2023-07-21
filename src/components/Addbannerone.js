import React, { Component } from 'react';

class Addbannerone extends Component {
    render() {
        return (
            <div
                className="card border-0 banner-wrap bg-image-cover bg-image-center"
                style={{
                    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Flong-banner.png?alt=media&token=73ce17c9-63cb-4722-88c6-bd8fd8abba90")`,
                }}
            >
                <div className="slide-content style4 text-center w-100">
                    <span className="text-current">All natural products</span>
                    <h2 className="text-grey-900">
                        <b className="d-block">SUMMER DISCOUNT </b>of the week
                    </h2>
                    <div className="clearfix"></div>
                    <a href="/" className="btn-lg rounded-25 btn bg-current">
                        SHOP NOW
                    </a>
                </div>
            </div>
        );
    }
}

export default Addbannerone;
