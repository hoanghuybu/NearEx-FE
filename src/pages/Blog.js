import React, { Component , Fragment } from "react";

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';
import Pagetitle from '../components/Pagetitle';

const blogList = [
    {
        imageUrl: 'blog.png',
        title: 'Aenean  Dieting Strategies That Almost Always Backfire',
        meta: 'LIFESTYLE'
    },
    {
        imageUrl: 'blog.png',
        title: 'The doner is a Turkish creation of meat, often lamb.',
        meta: 'FOOD'
    },
    {
        imageUrl: 'blog.png',
        title: 'The only nutrition program follow & supremely effective',
        meta: 'Freshveg'
    },
    {
        imageUrl: 'blog.png',
        title: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
        meta: 'LIFESTYLE'
    },
    {
        imageUrl: 'blog.png',
        title: 'Steak salad with goat cheese and arugula for your family?',
        meta: 'FOOD'
    },
    {
        imageUrl: 'blog.png',
        title: 'Egg salad sandwich with avocado and watercress chip pancakes',
        meta: 'Freshveg'
    },
    {
        imageUrl: 'blog.png',
        title: 'Broad beans, tomato, garlic & mozzarella cheese bruschetta',
        meta: 'LIFESTYLE'
    },
    {
        imageUrl: 'blog.png',
        title: 'Steak salad with goat cheese and arugula for your family?',
        meta: 'FOOD'
    },
    {
        imageUrl: 'blog-.png',
        title: 'Egg salad sandwich with avocado and watercress chip pancakes',
        meta: 'Freshveg'
    },
    {
        imageUrl: 'blog.png',
        title: 'Best Food 2022: the top wearables you can buy today',
        meta: 'Freshveg'
    },
]

class Blog extends Component {
    render() {
        return (
            <Fragment> 
                <Headermob />
                <Upperheader />
                <Header />
                <Lowerheader />

                <Pagetitle title="Blog" />

                <div className="blog-wrapper pt-5 pb-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    {blogList.map((value , index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-6 col-md-6">
                                            <article className="blog-div">
                                                <div className="card border-0 bg-transparent">
                                                    <div className="card-image mb-2 rounded-6 ovh"><a href="/blog-single"><img src={`assets/images/${value.imageUrl}`} alt="blog" className="w-100 hover-zoom" /></a></div>
                                                    <div className="card-content">
                                                        <span className="ls-3 mb-1 font-xssssss text-white text-uppercase bg-green fw-700 p-2 lh-1 d-inline-block rounded-10">{value.meta}</span>
                                                        <h2><a href="/blog-single" className="post-title fw-600 font-xss text-grey-900 lh-24">{value.title}</a></h2>
                                                    
                                                        <h4 className="text-grey-500 float-start d-flex fw-600 lh-20 font-xsssss mt-1 me-3"><i className="feather-user font-xss me-1"></i>By Admin</h4>
                                                        <h4 className="text-grey-500 float-start d-flex fw-600 lh-20 font-xsssss mt-1 me-3"><i className="feather-message-circle font-xs me-1"></i>54 Comments</h4>
                                                        <h4 className="text-grey-500 float-start d-flex fw-600 lh-20 font-xsssss mt-1 me-0"><i className="feather-calendar font-xss me-1"></i>22 Aug 2020</h4>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>                               
                                        // End Single Demo
                                    ))}
                                </div>

                                <div className="row">
                                    <div className="col-lg-12 mt-4 mb-4">
                                        <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item disabled"><a className="page-link" href="/"><i className="feather-chevron-left"></i></a></li>
                                            <li className="page-item active"><a className="page-link" href="/">1</a></li>
                                            <li className="page-item"><a className="page-link" href="/">2</a></li>
                                            <li className="page-item"><a className="page-link" href="/">3</a></li>
                                            <li className="page-item"><a className="page-link" href="/">4</a></li>
                                            <li className="page-item"><a className="page-link" href="/"><i className="feather-chevron-right"></i></a></li>
                                        </ul>
                                        </nav>
                                    </div>
                                </div>


                            </div>

                            <div className="col-lg-4 ps-lg-4">
                                <div className="card p-4 bg-lightgrey border-0 mb-3">
                                    <div className="form-group mb-0 icon-input">
                                        <i className="feather-search font-sm text-grey-400 z-index-1 mt-n1"></i>
                                        <input type="text" placeholder="Start typing to search.." className="lh-38 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-6 posr border-0 w-100" />
                                    </div>
                                </div>

                                <div className="card p-4 bg-lightgrey border-0 mb-3 side-wrap d-block">
                                    <div className="form-group mb-3">
                                        <h6 className="fw-700 text-grey-900 font-xss mb-0 text-capitalize">Categories</h6>
                                    </div>
                                    <div className="form-check ps-0">
                                        <h6 className="mb-0 form-check-label fw-500 ps-0">Drinks</h6>
                                        <i className="feather-chevron-right mt-1 font-xsss text-grey-500 ms-auto"></i>
                                    </div>
                                    <div className="form-check ps-0">
                                        <h6 className="mb-0 form-check-label fw-500 ps-0">Snacks  Biscuits</h6>
                                        <i className="feather-chevron-right mt-1 font-xsss text-grey-500 ms-auto"></i>
                                    </div>
                                    <div className="form-check ps-0">
                                        <h6 className="mb-0 form-check-label fw-500 ps-0">Breads  Bakery</h6>
                                        <i className="feather-chevron-right mt-1 font-xsss text-grey-500 ms-auto"></i>
                                    </div>
                                    <div className="form-check ps-0">
                                        <h6 className="mb-0 form-check-label fw-500 ps-0">Breakfast  Dairy</h6>
                                        <i className="feather-chevron-right mt-1 font-xsss text-grey-500 ms-auto"></i>
                                    </div>
                                    <div className="form-check ps-0">
                                        <h6 className="mb-0 form-check-label fw-500 ps-0">Frozen Foods</h6>
                                        <i className="feather-chevron-right mt-1 font-xsss text-grey-500 ms-auto"></i>
                                    </div>
                                    <div className="form-check ps-0">
                                        <h6 className="mb-0 form-check-label fw-500 ps-0">Fruits  Vegetables</h6>
                                        <i className="feather-chevron-right mt-1 font-xsss text-grey-500 ms-auto"></i>
                                    </div>
                                    <div className="form-check ps-0">
                                        <h6 className="mb-0 form-check-label fw-500 ps-0">Grocery  Staples</h6>
                                        <i className="feather-chevron-right mt-1 font-xsss text-grey-500 ms-auto"></i>
                                    </div>
                                    <div className="form-check ps-0">
                                        <h6 className="mb-0 form-check-label fw-500 ps-0">Household Needs</h6>
                                        <i className="feather-chevron-right mt-1 font-xsss text-grey-500 ms-auto"></i>
                                    </div>
                                    <div className="form-check ps-0">
                                        <h6 className="mb-0 form-check-label fw-500 ps-0">Meats  Seafood</h6>
                                        <i className="feather-chevron-right mt-1 font-xsss text-grey-500 ms-auto"></i>
                                    </div>
                                </div>

                                <div className="card p-4 bg-lightgrey border-0 mb-3 side-wrap d-block">
                                    <div className="form-group mb-3">
                                        <h6 className="fw-700 text-grey-900 font-xss mb-0 text-capitalize">Top Article</h6>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-xs-5 col-sm-5"><a href="/single-blog" className="d-block text-center"><img src="assets/images/blog-1.jpg" alt="product" className="w-100 overflow-hidden rounded-6" /></a></div>
                                        <div className="col-xs-7 col-sm-7 ps-0">
                                            <a href="/single-blog" className="text-grey-900 fw-600 font-xsss lh-20 d-block ls-0 mb-0">8 Amazing Tricks About Blog Food</a>
                                            <h6 className="font-xsssss text-grey-500 fw-600 text-current float-start mt-2">22 March 2020</h6>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-xs-5 col-sm-5"><a href="/single-blog" className="d-block text-center"><img src="assets/images/blog-3.jpg" alt="product" className="w-100 overflow-hidden rounded-6" /></a></div>
                                        <div className="col-xs-7 col-sm-7 ps-0">
                                            <a href="/single-blog" className="text-grey-900 fw-600 font-xsss lh-20 d-block ls-0 mb-0">Dieting Strategies That Almost Backfire</a>
                                            <h6 className="font-xsssss text-grey-500 fw-600 text-current float-start mt-2">22 March 2020</h6>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-5 col-sm-5"><a href="/single-blog" className="d-block text-center"><img src="assets/images/blog-2.jpg" alt="product" className="w-100 overflow-hidden rounded-6" /></a></div>
                                        <div className="col-xs-7 col-sm-7 ps-0">
                                            <a href="/single-blog" className="text-grey-900 fw-600 font-xsss lh-20 d-block ls-0 mb-0">3 Reasons You’re Struggling with Food</a>
                                            <h6 className="font-xsssss text-grey-500 fw-600 text-current float-start mt-2">22 March 2020</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="card p-4 bg-lightgrey border-0 mb-3 side-wrap d-block">
                                    <div className="form-group mb-3">
                                        <h6 className="fw-700 text-grey-900 font-xss mb-0 text-capitalize">Tag</h6>
                                    </div>
                                    <a href="/blog" className="tag-name">Grocery</a>
                                    <a href="/blog" className="tag-name">Fruits</a>
                                    <a href="/blog" className="tag-name">Vegetables</a>
                                    <a href="/blog" className="tag-name">Milk</a>
                                    <a href="/blog" className="tag-name">Drinks</a>
                                    <a href="/blog" className="tag-name">Food</a>
                                    <a href="/blog" className="tag-name">Grocery</a>
                                    <a href="/blog" className="tag-name">Drinks</a>
                                    <a href="/blog" className="tag-name">Chiness</a>
                                </div>

                                <div className="card w-100 border-0 shadow-none mb-3 ovh rounded-6 hover-zoom-image">
                                    <img src="assets/images/side-banner-4.jpg" alt="banner" className="w-100" />
                                    <div className="p-4 posa bottom-0 w-100">
                                        <span className="fw-700 ls-3 text-white bg-current ps-2 pe-2 lh-24 rounded-6 d-inline-block font-xsssss">30% OFF</span>
                                        <h4 className="font-xs fw-700 lh-28 text-grey-900 mb-3 mt-3 ls-0">High Quality <br /> Products</h4>
                                        <a href="/blog" className="fw-700 ls-3 text-grey-900 font-xsssss">SHOP NOW</a>
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
}

export default Blog;