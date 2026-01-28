import React from 'react'

function Deals() {
    return (
        <div className='p-4'>
            {/* deals of the day */}
            <div className='flex space-x-4'>
                <div className='flex-1 w-4/5'>
                    <div className='bg-[#1ABA1A]  rounded-2xl'>
                        <h1 className='p-4 text-white font-bold text-3xl'>DEALS OF THE DAY</h1>
                    </div>


                    <div className='grid grid-cols-2 gap-x-12 rounded-2xl p-8'>
                        <div className=''>
                            <img src='assets/14.png'></img>
                        </div>

                        <div >
                            <p className='text-center'>(12)</p>
                            <p className='font-extrabold text-2xl'>Xioma Redmi Note 11 Pro 256GB 2023, Black
                                Smartphone</p>

                            <div className='flex py-4'>
                                <p className='font-bold text-3xl text-red-400'>$569.00 </p>
                                <p className='font-bold text-2xl text-gray-400 line-through py-2'>$759.00</p> 
                            </div>
                            <ul className='list-disc space-y-3 ml-2'>
                                <li>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
                                <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
                                <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
                            </ul>

                            {/* button */}

                            <div className='py-4 flex justify-start gap-2'>
                                <button className='border border-white text-green bg-green-200 h-8 w-36 rounded-xl'>
                                    FREE SHIPPING
                                </button>

                                <button className='border border-white text-red bg-red-200 h-8 w-36 rounded-xl'>
                                    FREE GIFT
                                </button>
                            </div>

                            {/* time box */}
                            <div className='flex flex-cols-5 py-4 gap-x-8'>
                                <div><p className='font-bold'>HURRY UP<br/>
                                    PROMOTION WILL<br/>
                                    EXPIRES IN</p></div>

                                {/* //days */}

                                <div className='flex flex-col items-center justify-center bg-gray-200 rounded-xl w-20 h-20'>
                                    <p className='text-xl font-bold'>162</p>
                                    <p className='text-sm font-semibold'>d</p>
                                </div>
                                {/* hours */}

                                <div className='flex flex-col items-center justify-center bg-gray-200 rounded-xl w-20 h-20'>
                                    <p className='text-xl font-bold'>9</p>
                                    <p className='text-sm font-semibold'>h</p>
                                </div>
                                {/* minute */}


                                <div className='flex flex-col items-center justify-center bg-gray-200 rounded-xl w-20 h-20'>
                                    <p className='text-xl font-bold'>2</p>
                                    <p className='text-sm font-semibold'>m</p>
                                </div>

                                {/* seconds */}
                                <div className='flex flex-col items-center justify-center bg-gray-200 rounded-xl w-20 h-20'>
                                    <p className='text-xl font-bold'>4</p>
                                    <p className='text-sm font-semibold'>s</p>
                                </div>

                                {/* underline box */}

                            </div>
                            <div className='py-4 w-full'>
                                <div className='border-b w-full  '></div>

                                <div className='bg-gray-200 h-2 w-full rounded-xl mt-4'>

                                    <div className='bg-green-500 h-full w-58 rounded-xl'></div>
                                </div>
                                <p className='text-gray-600 py-2'>Sold:<span className='font-extrabold'>26/75</span></p>

                            </div>
                        </div>
                    </div>

                </div>
                {/* games images */}
                <div className='flex-none w-1/5'>
                    <div className='grid grid-rows-3 gap-y-2'>
                        <img src='assets/16.png' alt='img16'></img>
                        <img src='assets/17.png' alt='img17'></img>
                        <img src='assets/18.png' alt='img18'></img>
                    </div>
                </div>
            </div>


            <div className=' bg-[#1ABA1A] rounded-2xl w-9xl h-36 flex justify-center items-center'>

                <div><img src='assets/19.png' className=''></img></div>
                <div className='text-2xl text-white'><p>Member get <span className='text-amber-300'>FREE SHIPPING* </span> with no order Restraction apply <span className='underline'>Free 30 days trial!</span> </p></div>
            </div>
        </div>
    )
}

export default Deals