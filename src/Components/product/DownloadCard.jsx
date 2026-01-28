import React from 'react'

function DownloadCard() {
    return (
        <div className='p-4'>
            <div className='grid grid-cols-2 space-x-2'>

                <div>
                    {/* first images */}
                    <div className='bg-[url(/assets/51.png)] bg-cover bg-center rounded-xl w-full h-full'>
                        <div className='flex flex-col items-end px-20 py-16'>
                            <p className='flex justify-start text-5xl font-bold text-yellow-300'>10% Back</p>
                            <p className='text-white text-xl py-2'>Earn 10% Cash back on <br />Swootech.<span className='underline'>Learn How</span></p>
                        </div>
                    </div>
                </div>

                <div>
                    {/* second images */}
                    <div className='bg-[url(/assets/52.png)] bg-cover bg-center rounded-xl w-full h-full'>
                        <div className='flex py-10 space-x-20 px-16'>
                            <p className='font-bold text-4xl text-white'>Download <br />Our App</p>

                            <p className='text-gray-500'>Enter your phone number and we'll<br />send you a download link.</p>
                        </div>

                        <div className='flex justify-start px-16'>

                            <input type='search' placeholder='(+xx) xxx...' className='text-white h-12 text-xl bg-black rounded-xl p-2'></input>

                            <p className='text-xl text-green-500 p-2'>SEND LINK</p>
                        </div>

                    </div>


                </div>
            </div>
            <div className='mt-10 p-4 flex space-x-8'>
                <p className='font-bold text-3xl'>YOUR RECENT VIEWED</p>
                <p className='mt-2 text-xl'>View All</p>

            </div>
        </div>
    )
}

export default DownloadCard