import React from "react";
import { Link } from "react-router-dom";

const AddToCart = ({
  img,
  reviews,
  name,
  price,
  stock,
  description,
  category,
  minimumOrderQuantity,
  warrantyInformation,
  tags,
  shippingInformation,
}) => {
  return (
    <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start lg:items-center">

        {/* Product Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={img}
            alt={name}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-xl"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 space-y-3 sm:space-y-4 font-serif w-full">
          <p className="text-sm sm:text-base text-gray-600">
            Reviews: {reviews}
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
            {name}
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl font-bold text-red-600">
            {price}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center w-28 sm:w-32 border border-gray-800 rounded-xl overflow-hidden">
            <button className="flex-1 py-1 bg-gray-200 hover:bg-gray-300">
              -
            </button>
            <span className="flex-1 text-center text-sm sm:text-base">
              1
            </span>
            <button className="flex-1 py-1 bg-gray-200 hover:bg-gray-300">
              +
            </button>
          </div>

          {/* Product Info */}
          <div className="text-sm sm:text-base space-y-1">
            <p><span className="font-semibold">Category:</span> {category}</p>
            <p><span className="font-semibold">Minimum Order:</span> {minimumOrderQuantity}</p>
            <p><span className="font-semibold">Warranty:</span> {warrantyInformation}</p>
            <p><span className="font-semibold">Shipping:</span> {shippingInformation}</p>
            <p><span className="font-semibold">Tags:</span> {tags}</p>
          </div>

          {/* Free Shipping Badge */}
          <span className="inline-block text-green-700 bg-green-100 px-4 py-1 rounded-xl text-xs sm:text-sm">
            FREE SHIPPING
          </span>

          {/* Stock */}
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <input type="checkbox" className="w-4 h-4 sm:w-5 sm:h-5" />
            <p>{stock}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row lg:flex-col gap-3 mt-4 lg:mt-0">
          <button className="bg-gray-200 rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"></button>
          <button className="bg-red-100 rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"></button>
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default AddToCart;
