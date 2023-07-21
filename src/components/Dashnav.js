import React, { Component } from 'react';

class Dashnav extends Component {
    render() {
        const { title } = this.props;
        return (
            <div
                className="das-nav md-mt-6 p-0 bg-current-shade bg-image-bottomcenter bg-image-cover"
                style={{
                    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fbguser.png?alt=media&token=ecdb9e8b-56f3-4351-9ca8-65ec6f9a1580")`,
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 ps-4 offset-lg-4 d-flex align-items-start flex-column h-250">
                            <h1
                                className="mt-lg-auto mb-4 mt-5 display3-size display1-sm-size text-white-900 fw-700"
                                style={{ color: 'white' }}
                            >
                                {title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashnav;
