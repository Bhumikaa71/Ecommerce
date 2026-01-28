import React from 'react'
import CellPhoneProductsCart from './CellPhoneProductsCard';


function LaptopProducts() {
    return (
        <div className='p-4 space-y-8'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-2xl py-10'>Best Laptops & Computers</h1>
                <h2>View All</h2>
            </div>

            <div className='grid grid-cols-2'>
                <div className='relative'>
                    <img
                        src='assets/29.png'
                        alt='Redmi Note 12 Pro+ 5G'
                        className='rounded-xl'
                    />
                    <div className='absolute bottom-20 left-6 right-6'>
                        <h1 className='text-4xl font-extrabold text-white'>
                            Mobok 2<br />Superchard<br />By M2
                        </h1>
                        <div className='text-xl py-8 text-white'>
                            <p>Start from <span className='text-green-700'>$1,199</span></p>
                        </div>

                    </div>
                </div>

                <div className='grid grid-cols-3'>

                    <CellPhoneProductsCart name={"Macbook"} stock={"74items"} img={"assets/30.png"} />
                    <CellPhoneProductsCart name={"Gaming PC"} stock={"5items"} img={"assets/31.png"} />
                    <CellPhoneProductsCart name={"Laptop Office"} stock={"22items"} img={"assets/32.png"} />
                    <CellPhoneProductsCart name={"Laptop 15’’"} stock={"55items"} img={"assets/33.png"} />
                    <CellPhoneProductsCart name={"M1 2023"} stock={"32items"} img={"assets/34.png"} />
                    <CellPhoneProductsCart name={"Secondhand"} stock={"16items"} img={"assets/35.png"} />
                </div>
            </div>
            <div className='border-t w-9xl border-gray-400'></div>
        </div>
    )
}

export default LaptopProducts
