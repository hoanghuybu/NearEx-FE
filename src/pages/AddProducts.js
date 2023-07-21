import React, { useEffect, useState, Fragment } from 'react';
//import { Link } from 'react-router-dom';
import Nav from '../components/NavShop';

function AddProduct() {
    const [avatar, setAvatar] = useState('');
    const [cate, setCate] = useState([]);
    const [msg, setMsg] = useState('');
    const store = JSON.parse(sessionStorage.getItem('store'));
    const [product, setProduct] = useState({
        code: '',
        price: 0,
        origin: '',
        productImg: '',
        productName: '',
        description: '',
        unit: '',
        netWeight: 0,
        categoryId: 0,
        storeId: 0,
    });
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        if (e.target.files.length !== 0) {
            file.preview = URL.createObjectURL(file);
            setAvatar(file);
        }
    };
    const uploadImage = async (avatar) => {
        try {
            const formData = new FormData();
            formData.append('file', avatar);
            const response = await fetch('https://swd-nearex.azurewebsites.net/api/files', {
                method: 'POST',
                body: formData,
            });
            const results = await response.text();
            console.log(results);
            return results;
        } catch (error) {
            console.log(error);
        }
    };
    const handleUpdateProduct = async (e) => {
        e.preventDefault();
        if (avatar == '') {
            const updateProduct = { ...product, storeId: store.id };
            const response = await fetch('https://swd-nearex.azurewebsites.net/api/products', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem('jwtToken')}`,
                },
                body: JSON.stringify(updateProduct),
            });
            if (response.error) {
                console.log(response.error);
            } else {
                setMsg('Upload product successfull');
            }
        } else {
            const result = await uploadImage(avatar);
            const updateProduct = { ...product, productImg: result, storeId: store.id };
            // console.log(updateUser);
            // console.log(result);
            const response = await fetch('https://swd-nearex.azurewebsites.net/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem('jwtToken')}`,
                },
                body: JSON.stringify(updateProduct),
            });
            const newProduct = await response.json();
            if (newProduct.error) {
                console.log(newProduct.error);
            } else {
                setMsg('Upload product successfull');
            }
        }
    };
    const getCategory = async () => {
        try {
            const response = await fetch('https://swd-nearex.azurewebsites.net/api/categories');
            const responseData = await response.json();
            setCate(responseData.results);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);
    useEffect(() => {
        getCategory();
    }, []);

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
                        <div className="card mb-4">
                            <h2
                                className="card-header"
                                style={{
                                    paddingTop: '50px',
                                    paddingBottom: '50px',
                                    fontWeight: 'bold',
                                    color: '#0B666A',
                                }}
                            >
                                Add Product
                            </h2>

                            <div className="card-body">
                                <div class="d-flex align-items-start align-items-sm-center gap-4">
                                    <img
                                        src={avatar ? avatar.preview : 'https://via.placeholder.com/50x50.png'}
                                        alt="user-avatar"
                                        class="d-block rounded"
                                        height="100"
                                        width="100"
                                        id="uploadedAvatar"
                                    />
                                    <div class="button-wrapper">
                                        <label for="upload" class="btn btn-primary me-2 mb-4" tabindex="0">
                                            <span class="d-none d-sm-block">Upload new photo</span>
                                            <i class="bx bx-upload d-block d-sm-none"></i>
                                            <input
                                                type="file"
                                                id="upload"
                                                class="account-file-input"
                                                hidden
                                                accept="image/png, image/jpeg"
                                                onChange={handlePreviewAvatar}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-0" />
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xssss mb-2 white-text">
                                                    Product Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control theme-black-bg rounded-10"
                                                    onChange={(e) =>
                                                        setProduct({ ...product, productName: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xssss mb-2 white-text">
                                                    Origin
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control theme-black-bg rounded-10"
                                                    onChange={(e) => setProduct({ ...product, origin: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xssss mb-2 white-text">
                                                    Description
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control theme-black-bg rounded-10"
                                                    onChange={(e) =>
                                                        setProduct({ ...product, description: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xssss mb-2 white-text">
                                                    Unit
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control theme-black-bg rounded-10"
                                                    onChange={(e) => setProduct({ ...product, unit: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xssss mb-2 white-text">
                                                    Net Weight
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control theme-black-bg rounded-10"
                                                    onChange={(e) =>
                                                        setProduct({ ...product, netWeight: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xssss mb-2 white-text">
                                                Categories
                                            </label>
                                            <select
                                                className="form-control theme-black-bg rounded-10"
                                                name="genders"
                                                id="genders"
                                                onChange={(e) => setProduct({ ...product, categoryId: e.target.value })}
                                            >
                                                {cate.map((category) => (
                                                    <option key={category.id} value={category.id}>
                                                        {category.categoryName}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xssss mb-2 white-text">
                                                    Code
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control theme-black-bg rounded-10"
                                                    onChange={(e) => setProduct({ ...product, code: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xssss mb-2 white-text">
                                                    Price
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control theme-black-bg rounded-10"
                                                    onChange={(e) => setProduct({ ...product, price: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <button
                                            onClick={handleUpdateProduct}
                                            type="submit"
                                            class="btn btn-primary me-2"
                                        >
                                            Save changes
                                        </button>
                                        <button type="reset" class="btn btn-outline-secondary">
                                            Cancel
                                        </button>
                                    </div>
                                    {msg !== null && <h6>{msg}</h6>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AddProduct;
