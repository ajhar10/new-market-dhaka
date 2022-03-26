import React, { useEffect, useState } from 'react';
import './Products.css';
import fakeData from '../../fakeData/fakeData.json'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(fakeData)
    }, [])

    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='products'>
            <div className="product-container">
                {
                    products.map(product =>
                        <Product product={product} handleAddToCart={handleAddToCart} key={product.id}></Product>

                    )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Products;