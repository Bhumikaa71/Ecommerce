import React from 'react';
import { Link } from 'react-router-dom';


const BestProductCart = ({ img, reviews, name, price, stock,discount }) => {
  return (
    <div className="mt-10 p-4">

      <div>
        <div>
        <Link to="/addtocartproduct"><img src={img} alt={name} /></Link></div>
        <div className="border-b w-xs mx-8 border-gray-400"></div>
        <p className="flex justify-center mt-3 text-gray-600">{reviews}</p>

        <div className='font-bold mx-8 text-xl'>
        <p>{name}</p>
        <p className="line-through text-red-500">{price}</p>
        <p>{stock}</p>
        <p className="text-gray-500">{discount}</p>
        </div>



        <div className="mt-6 space-x-10 border border-white ">
          <button className="text-green bg-green-200 h-8 w-36 rounded-xl">
           <Link to="/addtocartproduct">FREE SHIPPING</Link>
            {/* FREE SHIPPING */}
          </button>

          <button className="text-red bg-red-200 h-8 w-36 rounded-xl">
            FREE GIFT
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default BestProductCart;