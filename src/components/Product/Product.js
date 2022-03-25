import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { img, name, price } = product;
    console.log(img);
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <button className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>

            </button>
        </div>
    );
};

export default Product;