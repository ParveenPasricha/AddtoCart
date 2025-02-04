import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removecart } from "../Store/Slice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    console.log("Remove Item", id);
    dispatch(removecart({ id }));
  };

  const cartItems = useSelector((state) => state.Cart.cartItems);

  return (
    <div className="cart-container flex">
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="ml-48 bg-black text-white shadow-2xl rounded-3xl p-5">
          {cartItems.map((item) => (
            <div key={item.id} className="text-center ">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 justify-center"
                />
                <p className="m-5">{item.title}</p>
                <p>Price: Rs {item.price}/- </p>
                <p className="ml-2">Quantity: {item.quantity}</p>
                <br />
                <button
                  className="text-white font-bold bg-gradient-to-r from-blue-700 to-grey-700 text-2xl rounded-lg"
                  onClick={()=>handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
