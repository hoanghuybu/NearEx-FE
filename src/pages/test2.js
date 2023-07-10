import React, { Fragment } from 'react';
//import { Link } from 'react-router-dom';
import Nav from '../components/NavAdmin';
import Search from '../components/SearchAdmin';
import Footertwo from '../components/Footertwo';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Filler,
    Title,
    Tooltip,
    Legend,
);

function test2() {
    return (
        <Fragment>
            <div class="container-fluid " style={{ padding: '0' }}>
                <div class="row ml-0 mr-0">
                    <div className="col-3 fixed-left">
                        <Nav />
                    </div>
                    <div
                        className="col-9 pt-3"
                        style={{ padding: '0', backgroundColor: '#efefefef', minHeight: '1000px' }}
                    >
                        <div className="col-lg-12 ">
                            <Search />
                            <div class="container-fluid mt-5">
                                <div className="row">
                                    <div className="col-8 pb-2">
                                        <div className="col d-flex">
                                            <div
                                                className="col-8 pe-2 p-3 pb-2"
                                                style={{
                                                    backgroundColor: '#fff',
                                                    borderRadius: '25px 0px 0px 25px',
                                                    borderRight: '1px solid #efefef',
                                                    height: '392px',
                                                }}
                                            >
                                                <h2 className="p-2">Total revue</h2>
                                                <Bar
                                                    options={{
                                                        title: {
                                                            display: true,
                                                            text: 'Bar',
                                                        },
                                                        legend: {
                                                            display: true,
                                                            position: 'bottom',
                                                        },
                                                    }}
                                                    data={{
                                                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                                                        datasets: [
                                                            {
                                                                data: [15, 1, 2, 3, 5, 6],
                                                                label: '2022',
                                                                backgroundColor: '#3e95cd',
                                                                fill: false,
                                                            },
                                                            {
                                                                data: [1, 1, 1, 3, 1, 7],
                                                                label: '2023',
                                                                backgroundColor: '#8e5ea2',
                                                                fill: false,
                                                            },
                                                        ],
                                                    }}
                                                />
                                            </div>

                                            <div
                                                className="col align-items-center ps-2 pt-3"
                                                style={{ backgroundColor: '#fff', borderRadius: '0px 25px 25px 0px' }}
                                            >
                                                <select
                                                    class="form-select ps-4 ms-4 mt-3 border border-dark"
                                                    style={{
                                                        borderRadius: '25px',
                                                        border: '1px solid #000',
                                                        backgroundColor: 'red',
                                                    }}
                                                >
                                                    <option selected>2023</option>
                                                    <option value="1">One</option>
                                                </select>
                                                <Pie
                                                    style={{ height: '50px', width: '50px', marginLeft: '5px' }}
                                                    data={{
                                                        labels: [],
                                                        datasets: [
                                                            {
                                                                label: '# of Votes',
                                                                data: [19, 26],
                                                                backgroundColor: [
                                                                    'transparent',
                                                                    'rgba(255, 99, 132, 0.2)',
                                                                ],
                                                                borderColor: ['transparent', 'rgba(255, 99, 132, 1)'],
                                                                borderWidth: 1,
                                                            },
                                                        ],
                                                    }}
                                                    options={{
                                                        title: {
                                                            display: true,
                                                            text: 'Bar',
                                                        },
                                                        legend: {
                                                            display: true,
                                                            position: 'left',
                                                        },
                                                    }}
                                                />
                                                <h5 className="p-1 ms-2 mt-2">62% Company Growth</h5>
                                                <div className="d-flex">
                                                    <Link to="/home" className="nav-content-bttn open-font d-flex m-2">
                                                        <i className="font-xxl feather-dollar-sign text-blue-500  me-1"></i>
                                                        <span style={{ display: 'flex', flexDirection: 'column' }}>
                                                            <h5 className="text-grey-500 m-0">2021</h5>
                                                            <h5>$32.5k</h5>
                                                        </span>
                                                    </Link>
                                                    <Link to="/home" className="nav-content-bttn open-font d-flex m-2">
                                                        <i className="font-xxl feather-inbox text-green-500  me-3"></i>
                                                        <span style={{ display: 'flex', flexDirection: 'column' }}>
                                                            <h5 className="text-grey-500 m-0">2023</h5>
                                                            <h5>$62.5k</h5>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-6 ">
                                                <div
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        borderRadius: '25px',
                                                        height: '490px',
                                                    }}
                                                >
                                                    <Link
                                                        to="/home"
                                                        className="nav-content-bttn open-font d-flex pt-1 p-4"
                                                    >
                                                        <span
                                                            className="mt-3 "
                                                            style={{ display: 'flex', flexDirection: 'column' }}
                                                        >
                                                            <h2>Order Statistics</h2>
                                                            <h5 className="text-grey-500 m-0">42.82k Total Sales</h5>
                                                        </span>
                                                    </Link>
                                                    <div className="d-flex mt-2">
                                                        <Link
                                                            to="/home"
                                                            className="nav-content-bttn open-font d-flex m-2 align-items-center"
                                                        >
                                                            <span
                                                                className="ms-5 "
                                                                style={{ display: 'flex', flexDirection: 'column' }}
                                                            >
                                                                <h1 className="m-0 font-xl">8,258</h1>
                                                                <h3 className="text-grey-500">Total Orders</h3>
                                                            </span>
                                                        </Link>
                                                        <div class="col-sm-4">
                                                            <Pie
                                                                style={{
                                                                    height: '10px',
                                                                    width: '10px',
                                                                    marginLeft: '5px',
                                                                }}
                                                                data={{
                                                                    labels: [],
                                                                    datasets: [
                                                                        {
                                                                            label: '# of Votes',
                                                                            data: [12, 19, 3, 5],
                                                                            backgroundColor: [
                                                                                'rgba(255, 99, 132, 0.2)',
                                                                                'rgba(54, 162, 235, 0.2)',
                                                                                'rgba(255, 206, 86, 0.2)',
                                                                                'rgba(75, 192, 192, 0.2)',
                                                                            ],
                                                                            borderColor: [
                                                                                'rgba(255, 99, 132, 1)',
                                                                                'rgba(54, 162, 235, 1)',
                                                                                'rgba(255, 206, 86, 1)',
                                                                                'rgba(75, 192, 192, 1)',
                                                                            ],
                                                                            borderWidth: 1,
                                                                        },
                                                                    ],
                                                                }}
                                                                options={{
                                                                    title: {
                                                                        display: true,
                                                                        text: 'Bar',
                                                                    },
                                                                    legend: {
                                                                        display: true,
                                                                        position: 'left',
                                                                    },
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <ul className="mb-1 top-content ps-2 pe-2">
                                                        <li
                                                            className="p-1 d-flex"
                                                            style={{ justifyContent: 'space-between' }}
                                                        >
                                                            <Link
                                                                to="/home"
                                                                className="nav-content-bttn open-font d-flex m-2 align-items-center"
                                                            >
                                                                <i
                                                                    className="font-xl feather-smartphone p-2  me-3"
                                                                    style={{
                                                                        color: '#696cff',
                                                                        backgroundColor: '#e7e7ff',
                                                                        borderRadius: '10px',
                                                                    }}
                                                                ></i>
                                                                <span
                                                                    style={{ display: 'flex', flexDirection: 'column' }}
                                                                >
                                                                    <h3 className=" m-0">Electronic</h3>
                                                                    <h5 className="text-grey-500 m-0">
                                                                        Mobile, Earbuds, TV
                                                                    </h5>
                                                                </span>
                                                            </Link>
                                                            <h5 className="nav-content-bttn open-font d-flex m-2 align-items-center">
                                                                82.5k
                                                            </h5>
                                                        </li>
                                                        <li
                                                            className="p-1 d-flex"
                                                            style={{ justifyContent: 'space-between' }}
                                                        >
                                                            <Link
                                                                to="/home"
                                                                className="nav-content-bttn open-font d-flex m-2 align-items-center"
                                                            >
                                                                <i
                                                                    className="font-xl feather-feather   me-3 p-2"
                                                                    style={{
                                                                        color: '#7be045',
                                                                        backgroundColor: '#e7e7ff',
                                                                        borderRadius: '10px',
                                                                    }}
                                                                ></i>
                                                                <span
                                                                    style={{ display: 'flex', flexDirection: 'column' }}
                                                                >
                                                                    <h3 className=" m-0">Fashion</h3>
                                                                    <h5 className="text-grey-500 m-0">
                                                                        T-shirt, Jeans, Shoes
                                                                    </h5>
                                                                </span>
                                                            </Link>
                                                            <h5 className="nav-content-bttn open-font d-flex m-2 align-items-center">
                                                                82.5k
                                                            </h5>
                                                        </li>
                                                        <li
                                                            className="p-1 d-flex"
                                                            style={{ justifyContent: 'space-between' }}
                                                        >
                                                            <Link
                                                                to="/home"
                                                                className="nav-content-bttn open-font d-flex m-2 align-items-center"
                                                            >
                                                                <i
                                                                    className="font-xl feather-home   me-3 p-2"
                                                                    style={{
                                                                        color: '#05c4ec',
                                                                        backgroundColor: '#e7e7ff',
                                                                        borderRadius: '10px',
                                                                    }}
                                                                ></i>
                                                                <span
                                                                    style={{ display: 'flex', flexDirection: 'column' }}
                                                                >
                                                                    <h3 className=" m-0">Decor</h3>
                                                                    <h5 className="text-grey-500 m-0">
                                                                        Fine Art, Dining
                                                                    </h5>
                                                                </span>
                                                            </Link>
                                                            <h5 className="nav-content-bttn open-font d-flex m-2 align-items-center">
                                                                82.5k
                                                            </h5>
                                                        </li>{' '}
                                                        <li
                                                            className="p-1 d-flex"
                                                            style={{ justifyContent: 'space-between' }}
                                                        >
                                                            <Link
                                                                to="/home"
                                                                className="nav-content-bttn open-font d-flex m-2 align-items-center"
                                                            >
                                                                <i
                                                                    className="font-xl feather-life-buoy   me-3 p-2"
                                                                    style={{
                                                                        color: '#8592a3',
                                                                        borderRadius: '10px',
                                                                        backgroundColor: '#e7e7ff',
                                                                    }}
                                                                ></i>
                                                                <span
                                                                    style={{ display: 'flex', flexDirection: 'column' }}
                                                                >
                                                                    <h3 className=" m-0">Sports</h3>
                                                                    <h5 className="text-grey-500 m-0">
                                                                        Football, Cricket Kit
                                                                    </h5>
                                                                </span>
                                                            </Link>
                                                            <h5 className="nav-content-bttn open-font d-flex m-2 align-items-center">
                                                                82.5k
                                                            </h5>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        borderRadius: '25px',
                                                        height: '490px',
                                                    }}
                                                >
                                                    <ul class="nav nav-pills ms-2 p-2 pt-4 mb-3">
                                                        <li class="nav-item">
                                                            <a class="nav-link active" aria-current="page" href="#">
                                                                Income
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" href="#">
                                                                Expense
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" href="#">
                                                                Profit
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a
                                                                class="nav-link disabled"
                                                                href="#"
                                                                tabindex="-1"
                                                                aria-disabled="true"
                                                            >
                                                                <Link
                                                                    to="/home"
                                                                    className="nav-content-bttn open-font d-flex m-2 ps-3 pt-4 align-items-center"
                                                                >
                                                                    <i
                                                                        className="font-xl feather-archive   me-3 p-2"
                                                                        style={{
                                                                            color: '#696cff',
                                                                            backgroundColor: '#e7e7ff',
                                                                            borderRadius: '10px',
                                                                        }}
                                                                    ></i>
                                                                    <span
                                                                        style={{
                                                                            display: 'flex',
                                                                            flexDirection: 'column',
                                                                        }}
                                                                    >
                                                                        <h4 className="text-grey-500 m-0">
                                                                            Total Balance
                                                                        </h4>
                                                                        <h5>$459.10</h5>
                                                                    </span>
                                                                </Link>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <Line
                                                        data={{
                                                            labels: ['Jan', 'Feb', 'Mar', 'Apr'],
                                                            datasets: [
                                                                {
                                                                    data: [0, 7, 2, 8, 13],
                                                                    label: '',
                                                                    fill: true,
                                                                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                                                                    borderColor: '#3e95cd',
                                                                },
                                                            ],
                                                        }}
                                                        options={{
                                                            title: {
                                                                display: false,
                                                                text: '',
                                                            },
                                                            legend: {
                                                                display: false,
                                                                position: 'bottom',
                                                            },
                                                        }}
                                                    />
                                                    <div className="d-flex ms-4 mt-4">
                                                        <Link
                                                            to="/home"
                                                            className="nav-content-bttn open-font d-flex m-2 align-items-center"
                                                        >
                                                            <div class="col-sm-2 pb-4 ms-1 me-1">
                                                                <Pie
                                                                    style={{
                                                                        height: '10px',
                                                                        width: '10px',
                                                                        marginLeft: '5px',
                                                                    }}
                                                                    data={{
                                                                        labels: [],
                                                                        datasets: [
                                                                            {
                                                                                label: '# of Votes',
                                                                                data: [12, 19, 3, 5, 2, 3],
                                                                                backgroundColor: [
                                                                                    'rgba(255, 99, 132, 0.2)',
                                                                                    'rgba(54, 162, 235, 0.2)',
                                                                                    'rgba(255, 206, 86, 0.2)',
                                                                                    'rgba(75, 192, 192, 0.2)',
                                                                                    'rgba(153, 102, 255, 0.2)',
                                                                                    'rgba(255, 159, 64, 0.2)',
                                                                                ],
                                                                                borderColor: [
                                                                                    'rgba(255, 99, 132, 1)',
                                                                                    'rgba(54, 162, 235, 1)',
                                                                                    'rgba(255, 206, 86, 1)',
                                                                                    'rgba(75, 192, 192, 1)',
                                                                                    'rgba(153, 102, 255, 1)',
                                                                                    'rgba(255, 159, 64, 1)',
                                                                                ],
                                                                                borderWidth: 1,
                                                                            },
                                                                        ],
                                                                    }}
                                                                    options={{
                                                                        title: {
                                                                            display: true,
                                                                            text: 'Bar',
                                                                        },
                                                                        legend: {
                                                                            display: true,
                                                                            position: 'left',
                                                                        },
                                                                    }}
                                                                />
                                                            </div>
                                                            <span
                                                                style={{
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    width: '250px',
                                                                }}
                                                            >
                                                                <h5 className=" m-0">Expenses This Week</h5>
                                                                <h5 className="text-grey-500 mt-1 mb-0 font-xss">
                                                                    $39 less than
                                                                </h5>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="row mb-3">
                                            <div className="col-6">
                                                <div
                                                    className="p-2"
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        height: '185px',
                                                        borderRadius: '15px',
                                                    }}
                                                >
                                                    <div className="pt-4 pb-2">
                                                        <Link
                                                            to="/home"
                                                            className="nav-content-bttn open-font  m-2 pt-4 align-items-center"
                                                        >
                                                            <i
                                                                className="font-xl feather-clock ms-0  me-3 p-2"
                                                                style={{
                                                                    color: '#7be045',
                                                                    backgroundColor: '#e7e7ff',
                                                                    borderRadius: '10px',
                                                                }}
                                                            ></i>
                                                            <span
                                                                className="mt-3"
                                                                style={{
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                }}
                                                            >
                                                                <h5 className="m-0 ms-2">Profit</h5>
                                                                <h1 className="m-0 ms-2">$12,628</h1>
                                                            </span>
                                                        </Link>
                                                        <Link to="/home" className="nav-content-bttn pt-4 font-xsss">
                                                            <i className="font-x feather-arrow-up text-success pt-4 me-1"></i>
                                                            <span className="text-success "> +72.80% </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div
                                                    className="p-2"
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        height: '185px',
                                                        borderRadius: '15px',
                                                    }}
                                                >
                                                    <div className="pt-4 pb-2">
                                                        <Link
                                                            to="/home"
                                                            className="nav-content-bttn open-font  m-2 pt-4 align-items-center"
                                                        >
                                                            <i
                                                                className="font-xl feather-archive ms-0  me-3 p-2"
                                                                style={{
                                                                    color: '#05c4ec',
                                                                    backgroundColor: '#e7e7ff',
                                                                    borderRadius: '10px',
                                                                }}
                                                            ></i>
                                                            <span
                                                                className="mt-3"
                                                                style={{
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                }}
                                                            >
                                                                <h5 className="m-0 ms-2">Sales</h5>
                                                                <h1 className="m-0 ms-2">$4,679</h1>
                                                            </span>
                                                        </Link>
                                                        <Link to="/home" className="nav-content-bttn pt-4 font-xsss">
                                                            <i className="font-x feather-arrow-up text-success pt-4 me-1"></i>
                                                            <span className="text-success ">+28.42% </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-6">
                                                <div
                                                    className="p-2"
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        height: '185px',
                                                        borderRadius: '15px',
                                                    }}
                                                >
                                                    <div className="pt-4 pb-2">
                                                        <Link
                                                            to="/home"
                                                            className="nav-content-bttn open-font  m-2 pt-4 align-items-center"
                                                        >
                                                            <i
                                                                className="font-xl feather-dollar-sign ms-0  me-3 p-2"
                                                                style={{
                                                                    color: '#ff3e1d',
                                                                    backgroundColor: '#ffe7e3',
                                                                    borderRadius: '10px',
                                                                }}
                                                            ></i>
                                                            <span
                                                                className="mt-3"
                                                                style={{
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                }}
                                                            >
                                                                <h5 className="m-0 ms-2">Payments</h5>
                                                                <h1 className="m-0 ms-2">$2,456</h1>
                                                            </span>
                                                        </Link>
                                                        <Link to="/home" className="nav-content-bttn pt-4 font-xsss">
                                                            <i className="font-x feather-arrow-down text-danger pt-4 me-1"></i>
                                                            <span className="text-danger ">-14.82% </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div
                                                    className="p-2 shadow-xss"
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        height: '185px',
                                                        borderRadius: '15px',
                                                    }}
                                                >
                                                    <div className="pt-4 pb-2">
                                                        <Link
                                                            to="/home"
                                                            className="nav-content-bttn open-font  m-2 pt-4 align-items-center"
                                                        >
                                                            <i
                                                                className="font-xl feather-credit-card ms-0  me-3 p-2"
                                                                style={{
                                                                    color: '#696cff',
                                                                    backgroundColor: '#e7e7ff',
                                                                    borderRadius: '10px',
                                                                }}
                                                            ></i>
                                                            <span
                                                                className="mt-3"
                                                                style={{
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                }}
                                                            >
                                                                <h5 className="m-0 ms-2">Transactions</h5>
                                                                <h1 className="m-0 ms-2">$14,857</h1>
                                                            </span>
                                                        </Link>
                                                        <Link to="/home" className="nav-content-bttn pt-4 font-xsss">
                                                            <i className="font-x feather-arrow-up text-success pt-4 me-1"></i>
                                                            <span className="text-success ">+28.14% </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 mt-2">
                                                <ul
                                                    className="mb-1 top-content ps-2 pe-2"
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        borderRadius: '25px',
                                                        height: '490px',
                                                    }}
                                                >
                                                    <h2 className="p-2 pt-4">Transactions</h2>
                                                    <li
                                                        className="p-1 d-flex"
                                                        style={{ justifyContent: 'space-between' }}
                                                    >
                                                        <Link
                                                            to="/home"
                                                            className="nav-content-bttn open-font d-flex m-2 align-items-center"
                                                        >
                                                            <i
                                                                className="font-xl feather-dollar-sign ms-0  me-3 p-2"
                                                                style={{
                                                                    color: '#ff3e1d',
                                                                    backgroundColor: '#ffe7e3',
                                                                    borderRadius: '10px',
                                                                }}
                                                            ></i>
                                                            <span style={{ display: 'flex', flexDirection: 'column' }}>
                                                                <h5 className="text-grey-500 m-0">Paypal</h5>
                                                                <h3 className=" m-0">Send money</h3>
                                                            </span>
                                                        </Link>
                                                        <h5 className="nav-content-bttn open-font d-flex m-2 align-items-center">
                                                            82.5k
                                                        </h5>
                                                    </li>
                                                    <li
                                                        className="p-1 d-flex"
                                                        style={{ justifyContent: 'space-between' }}
                                                    >
                                                        <Link
                                                            to="/home"
                                                            className="nav-content-bttn open-font d-flex m-2 align-items-center"
                                                        >
                                                            <i
                                                                className="font-xl feather-archive ms-0  me-3 p-2"
                                                                style={{
                                                                    color: '#696eff',
                                                                    backgroundColor: '#e7e7ff',
                                                                    borderRadius: '10px',
                                                                }}
                                                            ></i>
                                                            <span style={{ display: 'flex', flexDirection: 'column' }}>
                                                                <h5 className="text-grey-500 m-0">Wallet</h5>
                                                                <h3 className=" m-0">Mac'D</h3>
                                                            </span>
                                                        </Link>
                                                        <h5 className="nav-content-bttn open-font d-flex m-2 align-items-center">
                                                            82.5k
                                                        </h5>
                                                    </li>
                                                    <li
                                                        className="p-1 d-flex"
                                                        style={{ justifyContent: 'space-between' }}
                                                    >
                                                        <Link
                                                            to="/home"
                                                            className="nav-content-bttn open-font d-flex m-2 align-items-center"
                                                        >
                                                            <i
                                                                className="font-xl feather-life-buoy   me-3 p-2"
                                                                style={{
                                                                    color: '#05c4ec',
                                                                    borderRadius: '10px',
                                                                    backgroundColor: '#e7e7ff',
                                                                }}
                                                            ></i>
                                                            <span style={{ display: 'flex', flexDirection: 'column' }}>
                                                                <h5 className="text-grey-500 m-0">Transfer</h5>
                                                                <h3 className=" m-0">Refund</h3>
                                                            </span>
                                                        </Link>
                                                        <h5 className="nav-content-bttn open-font d-flex m-2 align-items-center">
                                                            82.5k
                                                        </h5>
                                                    </li>
                                                    <li
                                                        className="p-1 d-flex"
                                                        style={{ justifyContent: 'space-between' }}
                                                    >
                                                        <Link
                                                            to="/home"
                                                            className="nav-content-bttn open-font d-flex m-2 align-items-center"
                                                        >
                                                            <i
                                                                className="font-xl feather-credit-card   me-3 p-2"
                                                                style={{
                                                                    color: '#7be045',
                                                                    borderRadius: '10px',
                                                                    backgroundColor: '#e7e7ff',
                                                                }}
                                                            ></i>
                                                            <span style={{ display: 'flex', flexDirection: 'column' }}>
                                                                <h5 className="text-grey-500 m-0">Credit Card</h5>
                                                                <h3 className=" m-0">Ordered Food</h3>
                                                            </span>
                                                        </Link>
                                                        <h5 className="nav-content-bttn open-font d-flex m-2 align-items-center">
                                                            82.5k
                                                        </h5>
                                                    </li>
                                                    <li
                                                        className="p-1 d-flex"
                                                        style={{ justifyContent: 'space-between' }}
                                                    >
                                                        <Link
                                                            to="/home"
                                                            className="nav-content-bttn open-font d-flex m-2 align-items-center"
                                                        >
                                                            <i
                                                                className="font-xl feather-archive ms-0  me-3 p-2"
                                                                style={{
                                                                    color: '#696eff',
                                                                    backgroundColor: '#e7e7ff',
                                                                    borderRadius: '10px',
                                                                }}
                                                            ></i>
                                                            <span style={{ display: 'flex', flexDirection: 'column' }}>
                                                                <h5 className="text-grey-500 m-0">Wallet</h5>
                                                                <h3 className=" m-0">Starbucks</h3>
                                                            </span>
                                                        </Link>
                                                        <h5 className="nav-content-bttn open-font d-flex m-2 align-items-center">
                                                            82.5k
                                                        </h5>
                                                    </li>
                                                    <li
                                                        className="p-1 d-flex"
                                                        style={{ justifyContent: 'space-between' }}
                                                    >
                                                        <Link
                                                            to="/home"
                                                            className="nav-content-bttn open-font d-flex m-2 align-items-center"
                                                        >
                                                            <i
                                                                className="font-xl feather-credit-card   me-3 p-2"
                                                                style={{
                                                                    color: '#ffac02',
                                                                    borderRadius: '10px',
                                                                    backgroundColor: '#e7e7ff',
                                                                }}
                                                            ></i>
                                                            <span style={{ display: 'flex', flexDirection: 'column' }}>
                                                                <h5 className="text-grey-500 m-0">Mastercard</h5>
                                                                <h3 className=" m-0">Ordered Food</h3>
                                                            </span>
                                                        </Link>
                                                        <h5 className="nav-content-bttn open-font d-flex m-2 align-items-center">
                                                            82.5k
                                                        </h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lower-footer pt-4 pb-3">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 text-center text-sm-start xs-mb-3">
                                        <p className="text-grey-500 fw-700 font-xsss mb-0">
                                            @ Copyright 2023 All rights reserved.
                                        </p>
                                    </div>
                                    {/* <div className="col-md-6 text-center text-sm-end">
                                <img src="https://via.placeholder.com/116x28.png" alt="payment" />
                            </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default test2;
