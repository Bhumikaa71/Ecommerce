import React from 'react';

function DownloadCard() {
  return (
    <div className='p-4 space-y-8'>
      {/* Top Section - 2 images */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* First image */}
        <div className='bg-[url(/assets/51.png)] bg-cover bg-center rounded-xl w-full h-64 sm:h-80 md:h-96 relative'>
          <div className='absolute inset-0 flex flex-col justify-center items-start p-6 sm:p-10'>
            <p className='text-3xl sm:text-5xl font-bold text-yellow-300'>10% Back</p>
            <p className='text-white text-base sm:text-xl py-2'>
              Earn 10% Cash back on 
              Swootech.<span className='underline'> Learn How</span>
            </p>
          </div>
        </div>

        {/* Second image */}
        <div className='bg-[url(/assets/52.png)] bg-cover bg-center rounded-xl w-full h-64 sm:h-80 md:h-96 relative'>
          <div className='absolute inset-0 flex flex-col justify-center p-6 sm:p-10 space-y-4'>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
              <p className='font-bold text-3xl sm:text-4xl text-white'>Download Our App</p>
              <p className='text-gray-300 text-sm sm:text-base mt-2 sm:mt-0'>
                Enter your phone number and we'll send you a download link.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-2 mt-4'>
              <input
                type='search'
                placeholder='(+xx) xxx...'
                className='text-white h-12 text-base sm:text-xl bg-black rounded-xl p-2 flex-1'
              />
              <button className='text-xl text-green-500 font-bold bg-black border border-green-500 rounded-xl h-12 px-4'>
                SEND LINK
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex flex-col sm:flex-row justify-between items-center mt-6 p-2'>
        <p className='font-bold text-2xl sm:text-3xl'>YOUR RECENT VIEWED</p>
        <p className='text-lg sm:text-xl mt-2 sm:mt-0 underline cursor-pointer'>View All</p>
      </div>
    </div>
  );
}

export default DownloadCard;
