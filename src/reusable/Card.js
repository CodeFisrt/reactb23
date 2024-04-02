import React from 'react';

const Card = (props) => {
    debugger;
    return (
        <div>
            <div className="card"  >
                <img className="card-img-top" src={props.product.productImageUrl} style={{height:'200px'}}   />
                <div className="card-body">
                    <h6 className="card-title">{props.product.productShortName}</h6>
                    <p className="card-text">{props.product.categoryName}</p>
                    <a href="javascript:void(0)" className="btn btn-primary">See Profile</a>
                </div>
            </div>
        </div>
    );
};

export default Card;