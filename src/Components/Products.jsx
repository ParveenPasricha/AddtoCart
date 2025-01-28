import React, { useEffect, useState } from "react";
import { Bars } from 'react-loading-icons';
import { useDispatch } from "react-redux";
import { addtocart } from "../Store/Slice";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    console.log("Adding to cart:", item);
    dispatch(addtocart(item))
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="bg-black">
        <h1 className="text-4xl h-screen font-bold text-center"><Bars /></h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-5 mx-20 my-20">
      {data.map((item) => (
        <div className="p-5 bg-gray-800" key={item.id}>
          <img className="w-52 h-52 " src={item.image} alt="item Image" />
          <p className="text-white font-bold">Title: {item.title}</p>
          <p className="text-white font-bold">Rs {item.price}/-</p>
          <button 
            className="text-white font-bold bg-gradient-to-r from-blue-700 to-grey-700 text-2xl rounded-lg" 
            onClick={() => handleAddToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
