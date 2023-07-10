import { Link } from 'react-router-dom';

function SearchResult({ data }) {
    return (
        <Link to={'/single-product-5?campaignId=' + data.id} className="wrapper-search">
            <img className="avatar-search" src={data.product.productImg} alt=""></img>
            <div className="info-search">
                <h4 className="name-search">
                    <span> {data.product.productName} </span>
                </h4>
                <span className="text-current">{data.campaignDetails[data.campaignDetails.length - 1].discount} </span>
                <span className="unit-search">VND</span>
            </div>
        </Link>
    );
}

export default SearchResult;
