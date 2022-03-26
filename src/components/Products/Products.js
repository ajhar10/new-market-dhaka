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

    //Add Product to Cart
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    //Choose One Cart Item Randomly
    const handleToCartItem = () => {
        const random = Math.floor(Math.random() * cart.length);
        setCart([]);
        setCart([cart[random]])
    }

    // For Clear Cart Item 
    const clearItem = () => {
        setCart([]);
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
                <Cart cart={cart} handleToCartItem={handleToCartItem} clearItem={clearItem}></Cart>
            </div>
        </div>
    );
};

export default Products;