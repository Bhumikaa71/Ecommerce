import React from 'react';
import { Link } from 'react-router-dom';
import CellPhoneProductsCart from './CellPhoneProductsCard';

function CellPhoneProducts() {
    return (
        <div className='mt-10 p-4'>
            {/* Header */}
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6'>
                <h1 className='font-bold text-2xl'>Top CELLPHONES & TABLETS</h1>
                <Link to="/CellPhoneviewAll" className='mt-2 sm:mt-0 text-blue-500 hover:underline'>
                    View All
                </Link>
            </div>

            {/* Main Content */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {/* Left Feature Image */}
                <div className='relative w-full'>
                    <img
                        src='assets/22.png'
                        alt='redmi note 12 Pro+ 5g'
                        className='rounded-xl w-full h-auto object-cover'
                    />
                    <div className='absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-auto'>
                        <h1 className='text-2xl sm:text-4xl text-black font-extrabold leading-snug'>
                            REDMI NOTE<br /> 12 PRO+ 5g
                        </h1>
                        <div className='text-lg sm:text-xl py-2 sm:py-4'>
                            <p>Rise to the challenge</p>
                        </div>
                        <button className='border border-white text-white bg-black h-10 w-32 sm:w-36 rounded-xl'>
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* Right Products Grid */}
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                    <CellPhoneProductsCart name={"iPhone (iOS)"} stock={"74 items"} img={"assets/23.png"} />
                    <CellPhoneProductsCart name={"Xiaomi"} stock={"52 items"} img={"assets/24.png"} />
                    <CellPhoneProductsCart name={"Android"} stock={"35 items"} img={"assets/25.png"} />
                    <CellPhoneProductsCart name={"5G Support"} stock={"12 items"} img={"assets/26.png"} />
                    <CellPhoneProductsCart name={"Gaming"} stock={"8 items"} img={"assets/27.png"} />
                    <CellPhoneProductsCart name={"Accessories"} stock={"29 items"} img={"assets/28.png"} />
                </div>
            </div>

            {/* Divider */}
            <div className='border-t border-gray-400 mt-8'></div>
        </div>
    );
}

export default CellPhoneProducts;
