import React, { useState, useEffect } from 'react';

const productList = [
    {
        imageUrl: 'p.png',
        price: '39',
        status: 'Done',
        date: '23 oct 2021',
    },
    {
        imageUrl: 'p.png',
        price: '29',
        status: 'Done',
        date: '23 oct 2021',
    },
    {
        imageUrl: 'p.png',
        price: '19',
        status: 'Pending',
        date: '23 oct 2021',
    },
    {
        imageUrl: 'p.png',
        price: '29',
        status: 'Done',
        date: '23 oct 2021',
    },
    {
        imageUrl: 'p.png',
        price: '39',
        status: 'Pending',
        date: '23 oct 2021',
    },
];

function Dashorder() {
    const [listOrder, setListOrder] = useState([]);
    const user = JSON.parse(sessionStorage.getItem('user'));

    const getListOrder = async (user) => {
        const response = await fetch(`https://swd-nearex.azurewebsites.net/api/orders?CustomerId=${user.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('jwtToken')}`,
            },
        });
        const responseData = await response.json();
        setListOrder(responseData.results);
    };

    useEffect(() => {
        if (user) {
            getListOrder(user);
        }
    }, []);
    return (
        <div className="table-content table-responsive">
            <table className="table text-center mb-0">
                <thead className="bg-greylight rounded-10 ovh">
                    <tr>
                        <th className="border-0 p-3">Name</th>
                        <th className="border-0 p-3">Image</th>
                        <th className="border-0 p-3 fw-600 font-xsss mb-2 white-text">Price</th>
                        <th className="border-0 p-3 fw-600 font-xsss mb-2 white-text">Date</th>
                        <th className="border-0 p-3 fw-600 font-xsss mb-2 white-text">Status</th>
                        <th className="border-0 p-3 fw-600 font-xsss mb-2 white-text">&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {listOrder?.map((order) => (
                        <tr key={order?.id}>
                            <td>
                                <div className="form-check mt-1">
                                    <h6 className="font-xs ls-3 fw-700 text-current mt-1">{order?.productName} </h6>
                                </div>
                            </td>
                            <td className="product-thumbnail text-start ps-0">
                                <img
                                    src={order?.productImg}
                                    alt="product"
                                    className="w-80 d-inline-block pt-3 pb-3 bg-greylight rounded-6"
                                />
                            </td>

                            <td className="product-p">
                                <h6 className="font-xs ls-3 fw-700 text-current mt-1">
                                    <span className="font-xsssss text-grey-500">VND</span>
                                    {order?.unitPrice}{' '}
                                </h6>
                            </td>
                            <td className="product-quantity">
                                <span className="money text-grey-500 ls-3 font-xsssss fw-700">{order?.orderDate}</span>
                            </td>
                            <td className="product-total-price">
                                <span className="font-xsssss fw-700 ps-3 pe-3 lh-32 text-uppercase rounded-3 ls-2 alert-success d-inline-block text-success mb-1">
                                    DONE
                                </span>
                            </td>
                            {/* <td className="product-remove text-right">
                                <a href="/dashboard">
                                    <i className="feather-edit me-1 font-xs text-grey-500"></i>
                                </a>
                                <a href="/dashboard">
                                    <i className="ti-trash font-xs text-grey-500"></i>
                                </a>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Dashorder;
