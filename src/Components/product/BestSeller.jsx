import React from 'react';
import { Link } from 'react-router-dom';

function BestSeller() {
  return (
    <div className='p-6'>
      <div className="flex justify-between">
        <div className="flex gap-32">
          <h1 className="font-bold text-xl">BEST SELLER</h1>
          <h2 className="font-extralight text-xl">NEW IN</h2>
          <h3 className="font-extralight text-xl">POPULAR</h3>
        </div>
        <div className="px-6">
          <Link to="/SellerviewAll">View All</Link>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
