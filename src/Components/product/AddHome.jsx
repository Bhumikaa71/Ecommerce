import React from 'react'
import AddToCartProduct from './AddToCartProduct'
import { Link } from 'react-router-dom';


function AddHome() {
  return (
    <div>
      <div className='bg-white border border-gray-100 shadow:md rounded-2xl mx-4'>

        <p className='p-8 text-gray-500 flex gap-3'>
          <span>Home</span>
          <span>/</span>
          <span>Page</span>
          <span>/</span>
          <span className='font-bold'>Cart</span></p>
      </div>
      <div className='bg-white my-4 border border-gray-100 shadow:md rounded-2xl p-8 '>


        <div className='flex justify-between items-end'>
          <AddToCartProduct />

          <div className='border border-green-600 w-1/4 p-10 rounded-2xl flex flex-col space-y-6'>
            <h1 className='font-bold text-lg'>Order Summary</h1>

            <div className='flex justify-between'>
              <p className='text-gray-500'>Sub Total:</p>
              <p className='font-bold'>$1,000.00</p>
            </div>
            <p className='border-b'></p>

            <div className='flex justify-between'>
              <p className='text-gray-500'>Shpping estimate:</p>
              <p className='font-bold'>$600.00</p>
            </div>
            <p className='border-b'></p>


            <div className='flex justify-between'>
              <p className='text-gray-500'>Tax estimate:</p>
              <p className='font-bold'>$137.00</p>
            </div>
            <p className='border-b'></p>

            <div className='flex justify-between'>
              <p className='font-bold'>Order total:</p>
              <p className='font-bold'>$1,737.00</p>
            </div>

           <div>
      <Link to="/CheckOut">
        <button className="bg-green-500 w-1/3 p-4 rounded-xl text-xs text-white hover:cursor-pointer">
          CHECK OUT
        </button>
      </Link>
    </div>


          </div>
        </div>
      </div>



    </div>
  )
}

export default AddHome