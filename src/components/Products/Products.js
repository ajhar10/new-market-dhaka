import React, { useEffect, useState } from 'react';
import './Products.css';
import fakeData from '../../fakeData/fakeData.json'
import Product from '../Product/Product';


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(fakeData)
    }, [])
    return (
        <div className='products'>
            <div className="product-container">
                {
                    products.map(product =>
                        <Product product={product} key={product.id}></Product>

                    )
                }
            </div>
            <div className="cart-container">
                <h1>Order List</h1>
            </div>
        </div>
    );
};

export default Products;