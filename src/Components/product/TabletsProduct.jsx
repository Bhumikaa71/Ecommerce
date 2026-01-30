import React from 'react';
import { Link } from 'react-router-dom';

const TabletsProduct = ({ img, reviews, name, price, stock, discount }) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center space-y-4">

      {/* Product Image */}
      <div className="w-full flex justify-center items-center">
        <Link to="/addtocartproduct">
          <img
            src={img}
            alt={name}
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md rounded-lg object-cover"
          />
        </Link>
      </div>

      {/* Divider */}
      <div className="w-full border-b border-gray-300"></div>

      {/* Product Info */}
      <div className="flex flex-col items-center space-y-2 sm:space-y-3 text-center">
        <p className="text-gray-600 text-sm sm:text-base">{reviews} reviews</p>

        <div className="font-bold text-lg sm:text-xl">
          <p className="truncate sm:whitespace-normal">{name}</p>
          <p className="line-through text-red-500">{price}</p>
          <p className="text-gray-700">{stock}</p>
          <p className="text-gray-500">{discount}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2">
          <button className="bg-green-200 text-green-700 font-semibold py-2 px-4 rounded-xl hover:bg-green-300 transition">
            FREE SHIPPING
          </button>
          <button className="bg-red-200 text-red-700 font-semibold py-2 px-4 rounded-xl hover:bg-red-300 transition">
            FREE GIFT
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabletsProduct;
