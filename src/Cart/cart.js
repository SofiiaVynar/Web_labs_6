import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './card_actions';
import Header from '../home/home_header'
function Cart() {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    return (
        <div>
            <Header/>
            <h1>Cart</h1>
            {cartItems.map(item => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default Cart;
