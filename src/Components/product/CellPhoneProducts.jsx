import React from 'react'
import { Link } from 'react-router-dom';

import CellPhoneProductsCart from './CellPhoneProductsCard';
import BestProduct from './BestProduct';


function CellPhoneProducts() {
    return (
        <div className='mt-10 p-4'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-2xl'>Top CeLLPHONES & TABLETS</h1>
                <Link to="/CellPhoneviewAll">View All</Link>
            </div>
            <div className='grid grid-cols-2 py-8'>
                <div className='relative'>
                    <img src='assets/22.png'
                        alt='redmi note 12 Pro+ 5g' className='rounded-xl'>
                    </img>
                    <div className='absolute bottom-20 left-6 right-6'>
                        <h1 className='text-4xl text-black font-extrabold'>REDMI NOTE<br /> 12 PRO+ 5g
                        </h1>
                        <div className='text-xl py-8'>
                            <p>Rise to the challenge</p>
                        </div>
                        <button className='border border-white text-white bg-black h-10 w-36 rounded-xl'>
                            Shop Now
                        </button>
                    </div>
                </div>

                <div className='grid grid-cols-3'>
                    <CellPhoneProductsCart name={"iPhone (iOS)"} stock={"74items"} img={"assets/23.png"} />
                    <CellPhoneProductsCart name={"Xiaomi"} stock={"52items"} img={"assets/24.png"} />
                    <CellPhoneProductsCart name={"Android"} stock={"35items"} img={"assets/25.png"} />
                    <CellPhoneProductsCart name={"5G Support"} stock={"12items"} img={"assets/26.png"} />
                    <CellPhoneProductsCart name={"Gaming)"} stock={"8items"} img={"assets/27.png"} />
                    <CellPhoneProductsCart name={"Accessories"} stock={"29items"} img={"assets/28.png"} />

                </div>
            </div>
            <div className='border-t w-8xl border-gray-400'></div>

        </div>
    )
}

export default CellPhoneProducts

