import React, { useState, useEffect } from 'react';

function Productfilter() {
    const [listCategory, setListCategory] = useState([]);
    const [listShop, setListShop] = useState([]);

    const getCategory = async () => {
        try {
            const response = await fetch('https://swd-nearex.azurewebsites.net/api/categories');
            const responseData = await response.json();
            setListCategory(responseData.results);
        } catch (error) {
            console.log(error);
        }
    };

    const getShop = async () => {
        try {
            const response = await fetch('https://swd-nearex.azurewebsites.net/api/stores');
            const responseData = await response.json();
            setListShop(responseData.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCategory();

        getShop();
    }, []);
    return (
        <div className="side-wrap mb-4">
            <div className="form-group mb-3">
                <h6 className="fw-600 text-grey-900 font-xsss mb-0 text-capitalize">Category</h6>
            </div>
            {listCategory.map((category) => (
                <a href={'/shop-4?categoryId=' + category.id} style={{ color: 'GrayText' }}>
                    <div className="form-check" key={category.id}>
                        <label className="form-check-label" htmlFor={`flexCheck${category.id}`}>
                            {category.categoryName}
                        </label>
                        <i className="feather-chevron-right mt-1 font-xsss text-grey-500 ms-auto"></i>
                    </div>
                </a>
            ))}

            <div className="form-group mb-3 mt-5">
                <h6 className="fw-600 text-grey-900 font-xsss mb-0 text-capitalize">Shop</h6>
            </div>
            {listShop.map((shop) => (
                <a href={'/shop-4?storeId=' + shop.id} style={{ color: 'GrayText' }}>
                    <div className="form-check" key={shop.id}>
                        <label className="form-check-label" htmlFor="flexCheckDrinks">
                            {shop.storeName}
                        </label>
                        {/* <span className="mt-1 font-xssss fw-500 text-grey-500 ms-auto">(1233)</span> */}
                    </div>
                </a>
            ))}

            {/* <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Snacks" id="flexCheckSnacks" />
                <label className="form-check-label" htmlFor="flexCheckSnacks">
                    Vegan
                </label>
                <span className="mt-1 font-xssss fw-500 text-grey-500 ms-auto">(2231)</span>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Breads" id="flexCheckBreads" />
                <label className="form-check-label" htmlFor="flexCheckBreads">
                    Green Food
                </label>
                <span className="mt-1 font-xssss fw-500 text-grey-500 ms-auto">(754)</span>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Breakfast" id="flexCheckBreakfast" />
                <label className="form-check-label" htmlFor="flexCheckBreakfast">
                    Milk Fess
                </label>
                <span className="mt-1 font-xssss fw-500 text-grey-500 ms-auto">(27)</span>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Frozen" id="flexCheckFrozen" />
                <label className="form-check-label" htmlFor="flexCheckFrozen">
                    Frozen Foods
                </label>
                <span className="mt-1 font-xssss fw-500 text-grey-500 ms-auto">(61)</span>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Fruits" id="flexCheckFruits" />
                <label className="form-check-label" htmlFor="flexCheckFruits">
                    Fruits Vegetables
                </label>
                <span className="mt-1 font-xssss fw-500 text-grey-500 ms-auto">(76)</span>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Grocery" id="flexCheckGrocery" />
                <label className="form-check-label" htmlFor="flexCheckGrocery">
                    Grocery Staples
                </label>
                <span className="mt-1 font-xssss fw-500 text-grey-500 ms-auto">(45)</span>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Household" id="flexCheckHousehold" />
                <label className="form-check-label" htmlFor="flexCheckHousehold">
                    Household Needs
                </label>
                <span className="mt-1 font-xssss fw-500 text-grey-500 ms-auto">(23)</span>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Meats" id="flexCheckMeats" />
                <label className="form-check-label" htmlFor="flexCheckMeats">
                    Meats Seafood
                </label>
                <span className="mt-1 font-xssss fw-500 text-grey-500 ms-auto">(23)</span>
            </div> */}
        </div>
    );
}

export default Productfilter;
