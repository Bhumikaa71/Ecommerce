import React from 'react';
import { Link } from 'react-router-dom';

const BestProductCart = ({ img, reviews, name, price, stock, discount }) => {
  return (
    <div className="mt-10 p-4 w-full sm:w-80 mx-auto">
      <div className="flex flex-col items-center">
        {/* Product Image */}
        <div className="w-full sm:w-auto">
          <Link to="/addtocartproduct">
            <img src={img} alt={name} className="w-full h-auto rounded-xl" />
          </Link>
        </div>

        {/* Divider */}
        <div className="border-b w-3/4 sm:w-full border-gray-400 my-3"></div>

        {/* Reviews */}
        <p className="text-center text-sm sm:text-base text-gray-600">{reviews}</p>

        {/* Product Details */}
        <div className="font-bold text-lg sm:text-xl text-center sm:text-left mt-2 space-y-1">
          <p>{name}</p>
          <p className="line-through text-red-500">{price}</p>
          <p>{stock}</p>
          <p className="text-gray-500">{discount}</p>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
          <button className="text-green bg-green-200 h-10 sm:h-8 w-full sm:w-36 rounded-xl">
            <Link to="/addtocartproduct">FREE SHIPPING</Link>
          </button>

          <button className="text-red bg-red-200 h-10 sm:h-8 w-full sm:w-36 rounded-xl">
            FREE GIFT
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestProductCart;
