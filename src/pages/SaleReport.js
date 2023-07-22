import { useEffect, Fragment } from 'react';
import { useState } from 'react';
import Nav from '../components/NavShop';

function SaleReport() {
    const store = JSON.parse(sessionStorage.getItem('store'));
    // const jwtToken = sessionStorage.getItem('jwtToken');
    const [report, setReport] = useState({});
    const [selectedFrom, setSelectedFrom] = useState('');
    const [selectedTo, setSelectedTo] = useState('');
    const [msg, setMsg] = useState('');

    const handleFromChange = (event) => {
        setSelectedFrom(event.target.value);
    };
    const handleToChange = (event) => {
        setSelectedTo(event.target.value);
    };

    const handleReportFromTo = async (e) => {
        e.preventDefault();
        if (selectedFrom && selectedTo) {
            const dateFrom = new Date(selectedFrom);
            const dateTo = new Date(selectedTo);
            if (dateFrom > dateTo) {
                setMsg('Start date is invalid');
            } else {
                try {
                    const response = await fetch(
                        `https://swd-nearex.azurewebsites.net/api/stores/report-in-range?FromDate=${selectedFrom}&ToDate=${selectedTo}&StoreId=${store.id}`,
                        {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Bearer ${sessionStorage.getItem('jwtToken')}`,
                            },
                        },
                    );
                    const responseData = await response.json();
                    // console.log(responseData);
                    setReport(responseData);
                    setMsg('');
                } catch (error) {
                    console.log(error);
                }
            }
        } else {
            handleReport();
        }
    };

    const handleReport = async () => {
        try {
            const response = await fetch(
                `https://swd-nearex.azurewebsites.net/api/stores/report-in-range?StoreId=${store.id}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${sessionStorage.getItem('jwtToken')}`,
                    },
                },
            );
            const responseData = await response.json();
            setReport(responseData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleReport();
    }, []);
    return (
        <Fragment>
            <div className="container-fluid " style={{ padding: '0' }}>
                <div className="row ml-0 mr-0">
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
                                Sales Report
                            </h2>

                            <form>
                                <div className="row" style={{ margin: '20px' }}>
                                    <div className="col-lg-5 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xssss mb-2 white-text">From</label>
                                            <input
                                                type="date"
                                                className="form-control theme-black-bg rounded-10"
                                                onChange={handleFromChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-5 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xssss mb-2 white-text">To</label>
                                            <input
                                                type="date"
                                                className="form-control theme-black-bg rounded-10"
                                                onChange={handleToChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xssss mb-2 white-text">
                                                {msg !== null && <span>{msg}</span>}
                                            </label>
                                            <input
                                                type="submit"
                                                className="form-control btn-primary text-white rounded-10 d-block bold"
                                                onClick={handleReportFromTo}
                                                style={{ paddingBottom: '50px' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="table-responsive text-nowrap">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Tổng số đơn hàng</th>
                                            <th>Tổng doanh thu</th>
                                            <th>Tổng số đợt giảm giá</th>
                                            <th>Tổng số sản phẩm</th>
                                            <th>Tổng số khách hàng</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-border-bottom-0">
                                        <tr>
                                            <td>{report.totalOrder}</td>
                                            <td>{report.totalAmount}</td>
                                            <td>{report.toTalCampaign}</td>
                                            <td>{report.totalProduct}</td>
                                            <td>{report.totalCustomer}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SaleReport;
