import React, { Component , Fragment } from "react";

class Logintwo extends Component {
    render() {
        return (
            <Fragment>

                <div className="main-wrap min-vh-100">

                    <div className="nav-header bg-transparent shadow-none border-0 position-fixed zindex-900 w-100 p-5 text-center d-lg-block d-none ">
                        <a href="/"><img src="assets/images/nearex-2.png" alt="logo" className="w-225" /></a>
                    </div>
            
                    
                    <div className="row min-vh-100">
                        
                        
                        <div className="card shadow-lg border-0 ms-auto me-auto login-card mt-auto mb-auto zindex-100 rounded-10 theme-dark-bg">
                            <div className="card-body rounded-0 text-start">
                                <h2 className="fw-700 display1-size display2-md-size mb-4 mt-2 white-text text-grey-900">Login into <br />your account</h2>
                                <form>
                                    
                                    <div className="form-group icon-input mb-3">
                                        <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                        <input type="text" className="style2-input ps-5 form-control text-grey-900 white-text font-xsss fw-600" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group icon-input mb-1">
                                        <input type="Password" className="style2-input ps-5 form-control text-grey-900 white-text font-xss ls-3" placeholder="Password" />
                                        <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                    </div>
                                    <div className="form-check text-start mb-3">
                                        <input type="checkbox" className="form-check-input mt-2" id="exampleCheck5" />
                                        <label className="form-check-label font-xssss text-grey-500 white-text" for="exampleCheck5">Remember me</label>
                                        <a href="/forgotone" className="fw-600 font-xssss text-grey-700 white-text mt-1 float-right">Forgot your Password?</a>
                                    </div>
                                </form>
                                
                                <div className="col-sm-12 p-0 text-start">
                                    <div className="form-group mb-1"><a href="/logintwo" className="bg-current text-center style2-input text-white fw-600 border-0 p-0 ">Login</a></div>
                                    <h6 className="text-grey-500 font-xssss fw-500 mt-0 mb-0 lh-32">Dont have account <a href="/registerone" className="fw-700 ms-1">Register</a></h6>
                                </div>
                                <div className="col-sm-12 p-0 text-center mt-2 mb-3">
                                    
                                    <h6 className="mb-0 d-inline-block fw-500 font-xssss text-grey-500 mb-3">Or, Sign in with your social account </h6>
                                    <div className="form-group mb-1"><a href="/" className="text-start font-xsss style2-input text-grey-900 fw-600 bg-greylight border-0 p-0 mb-2"><img src="assets/images/icons8-google-240.svg" alt="icon" className="ms-2 w-40 mb-1 me-5" /> Sign in with Google</a></div>
                                    {/* <div className="form-group mb-1"><a href="/" className="text-start font-xsss style2-input text-white fw-600 bg-twiiter border-0 p-0 "><img src="assets/images/icon-3.png" alt="icon" className="ms-2 w-40 mb-1 me-5" /> Sign in with Facebook</a></div> */}
                                </div>
                            </div>
                        </div> 
                    </div>
                    
                </div>

            </Fragment>
        );
    }
}

export default Logintwo;