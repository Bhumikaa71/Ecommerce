import React from 'react';
import { Link } from 'react-router-dom';

const BrandProduct = ({ img, name, description }) => {
    return (
        <div className='p-4 w-full sm:w-80 mx-auto'>
            <div className='flex flex-col items-center sm:items-start space-y-4'>
                
                {/* Product Image */}
                <Link to="/addtocartproduct">
                    <img src={img} alt={name} className='w-full sm:w-auto h-auto rounded-xl' />
                </Link>

                {/* Product Info */}
                <div className='flex flex-col space-y-2 text-center sm:text-left'>
                    <p className='font-bold text-xl sm:text-2xl'>{name}</p>
                    <p className='font-light text-gray-500 text-sm sm:text-base'>{description}</p>

                    <button className='border border-green-500 text-green-500 bg-white p-3 rounded-xl'>
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BrandProduct;
