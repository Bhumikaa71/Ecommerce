import React from 'react';
import CellPhoneProductsCart from './CellPhoneProductsCard';

function LaptopProducts() {
  return (
    <div className='p-4 space-y-8'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
        <h1 className='font-bold text-2xl py-4 sm:py-10'>Best Laptops & Computers</h1>
        <h2 className='text-blue-500 hover:underline cursor-pointer'>View All</h2>
      </div>

      {/* Main content */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {/* Featured laptop */}
        <div className='relative'>
          <img
            src='assets/29.png'
            alt='Mobok 2 Superchard By M2'
            className='rounded-xl w-full object-cover'
          />
          <div className='absolute bottom-4 sm:bottom-20 left-4 sm:left-6 right-4 sm:right-6 text-white'>
            <h1 className='text-2xl sm:text-4xl font-extrabold'>
              Mobok 2<br />Superchard<br />By M2
            </h1>
            <div className='text-lg sm:text-xl py-2 sm:py-8'>
              <p>
                Start from <span className='text-green-700'>$1,199</span>
              </p>
            </div>
          </div>
        </div>

        {/* Other laptops */}
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
          <CellPhoneProductsCart name={"Macbook"} stock={"74 items"} img={"assets/30.png"} />
          <CellPhoneProductsCart name={"Gaming PC"} stock={"5 items"} img={"assets/31.png"} />
          <CellPhoneProductsCart name={"Laptop Office"} stock={"22 items"} img={"assets/32.png"} />
          <CellPhoneProductsCart name={"Laptop 15’’"} stock={"55 items"} img={"assets/33.png"} />
          <CellPhoneProductsCart name={"M1 2023"} stock={"32 items"} img={"assets/34.png"} />
          <CellPhoneProductsCart name={"Secondhand"} stock={"16 items"} img={"assets/35.png"} />
        </div>
      </div>

      {/* Divider */}
      <div className='border-t border-gray-400 mt-8'></div>
    </div>
  );
}

export default LaptopProducts;
