import React, { useState, useEffect, Fragment } from 'react';

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';
import Dashnav from '../components/Dashnav';
import Dashmenu from '../components/Dashmenu';

// const user = JSON.parse(sessionStorage.getItem('user'));
function Address() {
    const [avatar, setAvatar] = useState('');
    const [loginUser, setLoginUser] = useState({
        id: 0,
        email: '',
        password: null,
        passwordHash: '',
        passwordSalt: '',
        userName: '',
        phone: '',
        gender: '',
        dateOfBirth: '',
        address: '',
        avatar: '',
        coordinateString: 'string',
    });
    const [linkAvatar, setLinkAvatar] = useState('');

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        if (e.target.files.length !== 0) {
            file.preview = URL.createObjectURL(file);
            setAvatar(file);
        }
    };

    const handleCheckUser = () => {
        var check = sessionStorage.getItem('jwtToken');
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (check && user) {
            setLoginUser({
                ...loginUser,
                id: user.id,
                email: user.email,
                passwordHash: user.passwordHash,
                passwordSalt: user.passwordSalt,
                userName: user.userName,
                phone: user.phone,
                gender: user.gender,
                dateOfBirth: user.dateOfBirth,
                address: user.address,
                avatar: user.avatar,
            });
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
            setLinkAvatar(results);
            console.log(linkAvatar);
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    };

    const handleAvatar = async () => {
        await uploadImage(avatar);
        return linkAvatar;
    };

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        if (avatar !== '') {
            await handleAvatar();

            const response = await fetch(`https://swd-nearex.azurewebsites.net/api/users/${loginUser.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginUser),
            });
            if (response.ok) {
                const newUser = await response.json();
                if (newUser) {
                    sessionStorage.setItem('user', JSON.stringify(newUser));
                    // window.location.reload();
                }
            } else {
                console.log('Request failed:', response.status);
            }
        } else {
            setLoginUser({ ...loginUser, avatar: linkAvatar });
            const response = await fetch(`https://swd-nearex.azurewebsites.net/api/users/${loginUser.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginUser),
            });
            const newUser = await response.json();
            if (newUser) {
                sessionStorage.setItem('user', JSON.stringify(newUser));
            }
        }
    };

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    useEffect(() => {
        handleCheckUser();
    }, []);

    return (
        <Fragment>
            <Headermob />
            <Upperheader />
            <Header />
            <Lowerheader />
            <Dashnav title="Saved Address" />

            <div className="main-div pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <Dashmenu />
                        </div>
                        <div className="col-lg-8 pt-5 ps-4">
                            <div className="card border-0">
                                {/* <div className="card-body mb-3 bg-lightblue p-4 rounded-10">
                                        <h4 className="fw-700 mt-2 font-xss text-grey-900 d-flex mb-0">
                                            Hurin Seary{' '}
                                            <span className="bg-primary text-white font-xsssss fw-600 ls-3 p-2 rounded-6 ms-auto">
                                                HOME
                                            </span>
                                        </h4>
                                        <h6 className="fw-500 font-xssss text-grey-600 lh-22 mb-0">
                                            Manikpur, Thakurpara PO Ital Gacha 2 no Airport Gate <br /> Thakur Para
                                            United Club, Kolkata <br /> West Bengal - 700079
                                        </h6>
                                    </div>
                                    <div className="card-body mb-3 bg-lightgreen p-4 rounded-10">
                                        <h4 className="fw-700 mt-2 font-xss text-grey-900 d-flex mb-0">
                                            Surfiya Zakir{' '}
                                            <span className="bg-success text-white font-xsssss fw-600 ls-3 p-2 rounded-6 ms-auto">
                                                OFFICE
                                            </span>
                                        </h4>
                                        <h6 className="fw-500 font-xssss text-grey-600 lh-22 mb-0">
                                            Manikpur, Thakurpara PO Ital Gacha 2 no Airport Gate <br /> Thakur Para
                                            United Club, Kolkata <br /> West Bengal - 700079
                                        </h6>
                                    </div> */}
                                <div className="card-body text-center">
                                    <figure className="avatar ms-auto me-auto mb-0 mt-0 w100">
                                        <img
                                            src={avatar ? avatar.preview : 'https://via.placeholder.com/50x50.png'}
                                            alt="avatar"
                                            className="shadow-sm rounded-circle w-125"
                                        />
                                    </figure>
                                    <div>
                                        <input type="file" onChange={handlePreviewAvatar} className="form-control" />
                                    </div>
                                    <h4 className="fw-700 text-grey-900 white-text font-sm mb-0 mt-3">Hurin Seary</h4>
                                    <span className="fw-600 font-xssss text-grey-500 mt-0 d-block">@ swrryhurry</span>
                                </div>

                                <form onSubmit={handleCheckUser}>
                                    <div className="row">
                                        <div className="col-lg-12 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xssss mb-2 white-text">
                                                    User Name
                                                </label>
                                                <input
                                                    type="text"
                                                    defaultValue={
                                                        loginUser && loginUser.userName ? loginUser.userName : ''
                                                    }
                                                    className="form-control theme-black-bg rounded-10"
                                                    onChange={(e) =>
                                                        setLoginUser({ ...loginUser, userName: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xssss mb-2 white-text">
                                                    Email
                                                </label>
                                                <input
                                                    type="text"
                                                    defaultValue={loginUser && loginUser.email ? loginUser.email : ''}
                                                    className="form-control theme-black-bg rounded-10"
                                                    onChange={(e) =>
                                                        setLoginUser({ ...loginUser, email: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xssss mb-2 white-text">
                                                    Phone
                                                </label>
                                                <input
                                                    type="text"
                                                    defaultValue={loginUser && loginUser.phone ? loginUser.phone : ''}
                                                    className="form-control theme-black-bg rounded-10"
                                                    onChange={(e) =>
                                                        setLoginUser({ ...loginUser, phone: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xssss mb-2 white-text">
                                                    Address
                                                </label>
                                                <input
                                                    type="text"
                                                    defaultValue={
                                                        loginUser && loginUser.address ? loginUser.address : ''
                                                    }
                                                    className="form-control theme-black-bg rounded-10"
                                                    onChange={(e) =>
                                                        setLoginUser({ ...loginUser, address: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xssss mb-2 white-text">
                                                    Birthday
                                                </label>
                                                <input
                                                    type="date"
                                                    defaultValue={
                                                        loginUser && loginUser.dateOfBirth ? loginUser.dateOfBirth : ''
                                                    }
                                                    className="form-control theme-black-bg rounded-10"
                                                    onChange={(e) =>
                                                        setLoginUser({ ...loginUser, dateOfBirth: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xssss mb-2 white-text">
                                                    Gender
                                                </label>
                                                <select
                                                    className="form-control theme-black-bg rounded-10"
                                                    name="genders"
                                                    id="genders"
                                                    onChange={(e) =>
                                                        setLoginUser({ ...loginUser, gender: e.target.value })
                                                    }
                                                >
                                                    <option value="">Please Choosse Your Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* <div className="col-lg-12">
                                            <div className="form-check mb-2">
                                                <input
                                                    className="form-check-input font-xs"
                                                    type="checkbox"
                                                    value="Drinks"
                                                    id="flexCheckStock"
                                                />
                                                <label
                                                    className="form-check-label fw-600 font-xssss text-grey-600"
                                                    htmlFor="flexCheckStock"
                                                >
                                                    Save default shipping address
                                                </label>
                                            </div>
                                        </div> */}

                                        <div className="col-lg-12">
                                            <button
                                                onClick={handleUpdateUser}
                                                className="w-100 p-3 bg-current font-xsss ls-1 fw-600 text-white rounded-10 d-block text-center"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default Address;
