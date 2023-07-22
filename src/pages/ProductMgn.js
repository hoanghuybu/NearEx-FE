import React, { useEffect, useState, Fragment } from 'react';
//import { Link } from 'react-router-dom';
import Nav from '../components/NavShop';

function ProductMgn() {
    const [listProduct, setListProduct] = useState([]);
    const store = JSON.parse(sessionStorage.getItem('store'));
    const getProductByStoreId = async () => {
        try {
            const response = await fetch(
                `https://swd-nearex.azurewebsites.net/api/products?PageSize=50&StoreId=${store.id}`,
            );
            const responseData = await response.json();
            setListProduct(responseData.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProductByStoreId();
    }, []);

    console.log(listProduct);
    return (
        <Fragment>
            <div class="container-fluid " style={{ padding: '0' }}>
                <div class="row ml-0 mr-0">
                    <div className="col-2 fixed-left">
                        <Nav />
                    </div>

                    <div
                        className="col-10"
                        style={{
                            paddingLeft: '50px',
                            paddingRight: '50px',
                            backgroundColor: '#efefefef',
                            minHeight: '1000px',
                        }}
                    >
                        <div className="card">
                            <h2
                                className="card-header"
                                style={{
                                    paddingTop: '50px',
                                    paddingBottom: '50px',
                                    fontWeight: 'bold',
                                    color: '#0B666A',
                                }}
                            >
                                Products
                            </h2>
                            <div className="table-responsive text-nowrap">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Category</th>
                                            <th>Price</th>
                                            <th>Description</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-border-bottom-0">
                                        {listProduct.map((product) => (
                                            <tr key={product.id}>
                                                <td>
                                                    <img
                                                        src={product.productImg}
                                                        alt="product"
                                                        className="w-100 mt-1 d-inline-block"
                                                    />
                                                </td>
                                                <td>{product.productName}</td>
                                                <td>{product.category.categoryName}</td>
                                                <td>{product.price}</td>
                                                <td>{product.description}</td>
                                                <td>{product.status}</td>
                                                <td>
                                                    <a href="/edit-store">Edit</a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <a href="/add-product">Add Product</a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ProductMgn;
