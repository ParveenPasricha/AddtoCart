import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector(state => state.Cart.cartItems);

  return (
        <div className="cart-container flex">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className='ml-48 bg-black text-white shadow-2xl rounded-3xl p-5'>
              {cartItems.map((item) => (
                <div key={item.id} className="text-center ">
                  <div className='flex items-center'>
                  <img src={item.image} alt={item.title} className='w-20 justify-center' />
                  <p className='m-5'>{item.title}</p>
                  <p>Price: Rs {item.price}/- </p>
                  <p className='ml-2'>Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    };
    
    export default Cart;
    