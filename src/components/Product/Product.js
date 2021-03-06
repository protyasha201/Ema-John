import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props);
    const { img, name,seller, price,stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img}></img>
            </div>
            <div>
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock- Order soon</small></p>
                <button 
                onClick={() => props.handleAddProduct(props.product)}
                className="buy-button"><FontAwesomeIcon icon={faShoppingCart}/>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;