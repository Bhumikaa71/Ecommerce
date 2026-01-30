import React from 'react';
import { Link } from 'react-router-dom';

function BestSeller() {
  return (
    <div className='p-4 sm:p-6'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
        {/* Tabs */}
        <div className='flex flex-wrap gap-4 sm:gap-12 mb-2 sm:mb-0'>
          <h1 className='font-bold text-lg sm:text-xl'>BEST SELLER</h1>
          <h2 className='font-extralight text-lg sm:text-xl'>NEW IN</h2>
          <h3 className='font-extralight text-lg sm:text-xl'>POPULAR</h3>
        </div>

        {/* View All Link */}
        <div>
          <Link to="/SellerviewAll" className='text-blue-500 hover:underline'>
            View All
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
