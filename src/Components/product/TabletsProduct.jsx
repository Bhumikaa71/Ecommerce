import React from 'react'
import { Link } from 'react-router-dom';


const TabletsProduct = ({ img, reviews, name, price, stock, discount }) => {

    return (
        <div className="p-4 space-y-4">

            <div className='flex justify-center items-center '>
                <Link to="/addtocartproduct"><img src={img} alt={name} /></Link></div>

            <div className="border-b  mx-8 border-gray-400"></div>

            <div className='flex flex-col items-center space-y-3'>

                <p className="flex justify-center  text-gray-600">{reviews} reviews</p>
                <div className='font-bold text-xl '>
                    <p className="">{name}</p>
                    <p className="line-through text-red-500">{price}</p>
                    <p className="">{stock}</p>
                    <p className="text-gray-500">{discount}</p>
                </div>
                <div className="border border-white space-x-3">
                    <button className=" text-green bg-green-200 py-2 px-4 rounded-xl">
                        FREE SHIPPING
                    </button>

                    <button className="text-red bg-red-200 py-2 px-4 rounded-xl">
                        FREE GIFT
                    </button>
                </div>
            </div>
        </div>


    );
};



export default TabletsProduct