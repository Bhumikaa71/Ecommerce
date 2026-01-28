import React from 'react'
import { Link } from 'react-router-dom';


const AddToCart = ({ img, reviews, name, price, stock, description, category, minimumOrderQuantity, warrantyInformation, tags, shippingInformation }) => {
    return (
        <div>
            <div className='bg-gray-100 w-3/2 rounded-2xl grid space-y-10'>
                <div className='flex justify-between'>

                    <div className='flex justify-center items-center'>
                        <img src={img} alt={name} className="rounded-full max-w-full h-auto" />
                    </div>

                    <div className='flex flex-col space-y-4 p-14 font-serif'>
                        <p className='text-center'>Review: {reviews}</p>
                        <p className='font-bold text-2xl'>Name: {name}</p>
                        <p className='font-bold text-red-600 text-2xl'>Price: {price}</p>
                        <button className='font-bold rounded-xl p-2 w-1/3 border border-gray-900 flex justify-between'>
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </button>

                        <p className='text-xl'>Category: {category}</p>
                        <p className='text-xl'>Minimum Order Quantity: {minimumOrderQuantity}</p>
                        <p className='text-xl'>Warranty Information: {warrantyInformation}</p>
                        <p className='text-xl'>Shipping Information: {shippingInformation}</p>
                        <p className='text-xl'>Tags: {tags}</p>

                        <button className="text-green-700 text-shadow-2xs bg-green-100 h-8 w-36 rounded-xl">
                            FREE SHIPPING
                        </button>
                        <div className='flex space-x-2'>
                            <input type='checkbox' className='w-4' />
                            <p>{stock}</p>
                        </div>
                    </div>

                    <div className='space-x-4 p-2'>
                        <button className='bg-gray-200 rounded-full p-6'></button>
                        <button className='bg-red-100 rounded-full p-6'></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddToCart;
