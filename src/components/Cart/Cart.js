import './Cart.css'

const Cart = ({ cart, handleToCartItem, clearItem }) => {


    return (
        <div className='cart'>
            <div className="addProduct">
                <h2>Selected Item: {cart.length}</h2>
                {
                    cart.map(item =>

                        <div className='cart-item' key={item.id}><img className='cart-image' src={item.img} alt="" ></img><h3 className='item-name'>{item.name}</h3>
                        </div>
                    )
                }
                <button onClick={() => handleToCartItem()} className='cart-btn'>Choose 1 For Me</button>
                <br />
                <button onClick={() => clearItem()} className='cart-btn'>Clear All</button>



            </div>
        </div>
    );
};

export default Cart;