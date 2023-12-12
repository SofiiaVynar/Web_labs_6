import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from './cartSlice';
import Header from '../home/home_header';
import { Link } from 'react-router-dom'; 
import './cart.css';
import { logout } from '../auth';

function Cart() {
    const cartItems = useSelector(state => state.cart.items);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleRemoveFromCart = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    
    const handleLogout = () => {
        logout(); 
        navigate('/login');
    };


    return (
        <div>
            <Header />
            <h1>Cart</h1>
            <button className="exit-button" onClick={handleLogout}>Exit</button>
            {cartItems.length === 0 ? (
                <p className='empty'>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div className='cart1'>
                            <div key={item.id} className='buy'>
                                <img src={`http://localhost:3001${item.image}`} alt={item.name} />
                                <p className='name'>{item.name}</p>
                                <p className='quantit'>Quantity: {item.quantity}</p>
                                <p className='mll'>{item.ml} ml</p>
                                <p className='price'>Price: ${item.price}</p>
                                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <p className='total'>Total Price: ${totalPrice}</p>
                    <Link to="/successful" className='buyButton'>Buy</Link>
                </div>
            )}
        </div>
    );
}

export default Cart;










