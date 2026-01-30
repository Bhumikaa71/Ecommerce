import React from 'react';

const CameraProduct = ({ img, name, items }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition duration-300">
      
      {/* Product Image */}
      <img
        src={img}
        alt={name}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg object-cover"
      />

      {/* Product Name */}
      <h1 className="mt-4 text-lg sm:text-xl md:text-2xl font-bold text-center">
        {name}
      </h1>

      {/* Items Available */}
      <h2 className="mt-1 text-gray-500 text-sm sm:text-base text-center">
        {items}
      </h2>
    </div>
  );
};

export default CameraProduct;
