import React from 'react';
import { Link } from 'react-router-dom';


const BrandProduct = ({ img, name, description }) => {
    return (
        <div className='p-4'>

            <div>
                 <Link to="/addtocartproduct"><img src={img} alt={name} /></Link>
                <div className='flex flex-col space-y-4'>
                    <p className='font-bold  text-2xl'>{name}</p>
                    <p className='font-light text-gray-500'>{description}</p>
                    <button className='border border-green-500 text-green-500 bg-white p-3 w-1/3 rounded-xl'>
                        Shop Now
                    </button>
                </div>

            </div>
        </div>
    );
};

export default BrandProduct;
