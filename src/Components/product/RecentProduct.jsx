import React from 'react'

function RecentProduct() {
  return (
    <div>
      <div className='flex justify-between items-center'>
        {/* //first image box */}
        <div className='flex p-4'>
          <div className='relative py-6'>
            <div className='h-8 w-14 rounded-xl p-1 text-white bg-black absolute left-7'>NEW</div>
            <div> <img src='assets/53.png' alt='Recently viewed'></img>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center text-center">
              <p className="text-sm">(152)</p>
              <p className="font-bold text-lg py-2">Xomie Remid 8 Sport Water Resistance Watch</p>
              <p className="font-bold text-xl">$579.00</p>
            </div>
          </div>
          <div className='bg-gray-200 h-10 w-14 rounded-full'></div>
        </div>

        {/* //second image box */}

        <div className='flex'>
          <div className='p-4'>
            <div className='h-8 w-14 rounded-xl p-1 text-white bg-black'>NEW</div>
            <img src='assets/54.png' alt='Recently viewed'></img>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="grid grid-rows-2 gap-2">
              <p className="font-bold text-xl">Microte Surface 2.0 Laptop</p>
              <p className="font-bold text-xl">$979.00</p>
            </div>
          </div>

          <div className='bg-gray-200 h-10 w-14 rounded-full'></div>
        </div>

        {/* //third images */}
        <div className='flex p-4'>
          <div>
            <img src='assets/55.png' alt='Recently viewed' className='py-16'></img>
          </div>

          <div className='flex flex-col items-center text-center'>
            <div className="grid grid-rows-2 gap-1 pt-16">
              <p className="font-bold text-xl">
                aPod Pro Tablet 2023<br />
                LTE + Wifi, GPS Cellular<br />
                12.9 Inch, 512GB
              </p>
              <p className="font-bold text-xl">$979.00 - $1,259.00</p>
            </div>
          </div>

          <div className='bg-gray-200 h-10 w-14 rounded-full my-16'></div>
        </div>


        {/* //fourth images */}
        <div className='flex p-4'>
          <div>
            <div className='relative left-6 top-10'>
              <div className='h-12 w-16 rounded-xl p-1 text-white bg-green-600 text-center text-xs flex items-center justify-center'>
                SAVE<br />$192.00
              </div>
              </div>

              <div><img src='assets/56.png' alt='Recently viewed'></img></div>
          </div>

          <div className='py-8'>
            <div className='flex flex-col items-center text-center'>
              <p className='flex justify-center mb-4'>(152)</p>
              <p className='font-bold text-xl'>SROK Smart Phone<br />128GB, Oled Retina </p>
              <p className='font-bold text-xl flex gap-1'>$579.00  <span className=' text-red-600 line-through'>$779.00</span></p>
              {/* <p className='font-bold text-xl text-red-600 line-through py-8'>$779.00</p> */}
            </div>
          </div>
          <div className='bg-gray-200 h-10 w-14 rounded-full'></div>
        </div>
      </div>
    </div>
  )
}

export default RecentProduct
