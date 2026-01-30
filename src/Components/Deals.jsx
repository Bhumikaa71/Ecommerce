import React from 'react'

function Deals() {
    return (
        <div className='p-4 space-y-6'>
            {/* deals of the day */}
            <div className='flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0'>
                {/* Left Section */}
                <div className='flex-1 w-full sm:w-4/5'>
                    <div className='bg-[#1ABA1A] rounded-2xl p-4'>
                        <h1 className='text-white font-bold text-3xl sm:text-4xl'>DEALS OF THE DAY</h1>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-12 gap-y-6 rounded-2xl p-4 sm:p-8'>
                        <div>
                            <img src='assets/14.png' className='w-full h-auto rounded-xl' alt='Deal Product' />
                        </div>

                        <div>
                            <p className='text-center text-sm sm:text-base'>(12)</p>
                            <p className='font-extrabold text-lg sm:text-2xl'>
                                Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
                            </p>

                            <div className='flex flex-col sm:flex-row py-4 gap-2 sm:gap-4 items-start sm:items-center'>
                                <p className='font-bold text-2xl sm:text-3xl text-red-400'>$569.00</p>
                                <p className='font-bold text-xl sm:text-2xl text-gray-400 line-through'>$759.00</p> 
                            </div>

                            <ul className='list-disc space-y-2 ml-4 text-sm sm:text-base'>
                                <li>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
                                <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
                                <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
                            </ul>

                            {/* button */}
                            <div className='py-4 flex flex-col sm:flex-row gap-2 sm:gap-4'>
                                <button className='border border-white text-green bg-green-200 h-10 sm:h-8 w-full sm:w-36 rounded-xl'>
                                    FREE SHIPPING
                                </button>

                                <button className='border border-white text-red bg-red-200 h-10 sm:h-8 w-full sm:w-36 rounded-xl'>
                                    FREE GIFT
                                </button>
                            </div>

                            {/* time box */}
                            <div className='flex flex-col sm:flex-row sm:items-center py-4 gap-4 sm:gap-x-8'>
                                <div className='text-sm sm:text-base'>
                                    <p className='font-bold'>HURRY UP<br/>
                                        PROMOTION WILL<br/>
                                        EXPIRES IN
                                    </p>
                                </div>

                                {/* days */}
                                <div className='flex flex-col items-center justify-center bg-gray-200 rounded-xl w-16 h-16 sm:w-20 sm:h-20'>
                                    <p className='text-lg sm:text-xl font-bold'>162</p>
                                    <p className='text-xs sm:text-sm font-semibold'>d</p>
                                </div>
                                {/* hours */}
                                <div className='flex flex-col items-center justify-center bg-gray-200 rounded-xl w-16 h-16 sm:w-20 sm:h-20'>
                                    <p className='text-lg sm:text-xl font-bold'>9</p>
                                    <p className='text-xs sm:text-sm font-semibold'>h</p>
                                </div>
                                {/* minutes */}
                                <div className='flex flex-col items-center justify-center bg-gray-200 rounded-xl w-16 h-16 sm:w-20 sm:h-20'>
                                    <p className='text-lg sm:text-xl font-bold'>2</p>
                                    <p className='text-xs sm:text-sm font-semibold'>m</p>
                                </div>
                                {/* seconds */}
                                <div className='flex flex-col items-center justify-center bg-gray-200 rounded-xl w-16 h-16 sm:w-20 sm:h-20'>
                                    <p className='text-lg sm:text-xl font-bold'>4</p>
                                    <p className='text-xs sm:text-sm font-semibold'>s</p>
                                </div>
                            </div>

                            <div className='py-4 w-full'>
                                <div className='border-b w-full'></div>
                                <div className='bg-gray-200 h-2 w-full rounded-xl mt-4'>
                                    <div className='bg-green-500 h-full w-[70%] rounded-xl'></div>
                                </div>
                                <p className='text-gray-600 py-2 text-sm sm:text-base'>
                                    Sold: <span className='font-extrabold'>26/75</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section: Games Images */}
                <div className='flex-none w-full sm:w-1/5'>
                    <div className='grid grid-rows-3 gap-2'>
                        <img src='assets/16.png' alt='img16' className='w-full h-auto rounded-xl' />
                        <img src='assets/17.png' alt='img17' className='w-full h-auto rounded-xl' />
                        <img src='assets/18.png' alt='img18' className='w-full h-auto rounded-xl' />
                    </div>
                </div>
            </div>

            {/* Bottom Member Section */}
            <div className='bg-[#1ABA1A] rounded-2xl w-full sm:w-11/12 h-auto sm:h-36 flex flex-col sm:flex-row justify-center items-center p-4 sm:p-6 gap-4 sm:gap-8'>
                <div>
                    <img src='assets/19.png' alt='member' className='w-32 sm:w-auto' />
                </div>
                <div className='text-center sm:text-left text-sm sm:text-2xl text-white'>
                    <p>
                        Member get <span className='text-amber-300'>FREE SHIPPING* </span> with no order Restraction apply <span className='underline'>Free 30 days trial!</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Deals
