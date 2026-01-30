import React from 'react';
import CameraProduct from './CameraProduct';

function AudioProducts() {
  return (
    <div>
      {/* Top Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-14 p-4'>
        {/* First image */}
        <div>
          <div className='flex justify-between py-5'>
            <h1 className='font-bold text-2xl'>AUDIOS & CAMERAS</h1>
            <h1 className='text-xl'>View All</h1>
          </div>
          <div className='relative'>
            <img src='assets/36.png' className='rounded-2xl w-full' alt="Speaker 2023" />
            <div className='absolute bottom-10 left-6 sm:bottom-20 sm:left-10 text-2xl sm:text-3xl text-white font-bold'>
              <p>Best<br />Speaker<br />2023</p>
            </div>
          </div>
          <div className='border-t my-6 sm:my-10 mx-4'></div>
        </div>

        {/* Second image */}
        <div>
          <div className='flex justify-between py-5'>
            <h1 className='font-bold text-2xl'>GAMING</h1>
            <h1 className='text-xl'>View All</h1>
          </div>
          <div className='relative'>
            <img src='assets/37.png' className='rounded-2xl w-full' alt="Wireless RGB Gaming Mouse" />
            <div className='absolute bottom-10 sm:bottom-16 left-6 sm:left-10 text-2xl sm:text-3xl text-black font-bold'>
              <p>WIRELESS <br />RGB GAMING <br />MOUSE</p>
            </div>
          </div>
          <div className='border-t my-6 sm:my-10 mx-4'></div>
        </div>

        {/* Third image */}
        <div>
          <div className='flex justify-between py-5'>
            <h1 className='font-bold text-2xl'>AUDIOS & CAMERAS</h1>
            <h1 className='text-xl'>View All</h1>
          </div>
          <div className='relative'>
            <img src='assets/38.png' className='rounded-2xl w-full' alt="Home Theater 4k" />
            <div className='absolute bottom-10 sm:bottom-20 left-6 sm:left-14 text-white'>
              <p className='font-extralight px-2 sm:px-4'>Home Theater 4k</p>
              <p className='font-bold text-2xl sm:text-3xl'>Laser Projector</p>
            </div>
          </div>
          <div className='border-t my-6 sm:my-10 mx-4'></div>
        </div>
      </div>

      {/* Bottom Section - Camera Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4'>
        <CameraProduct img={"assets/39.png"} name={"Speaker"} items={"12items"} />
        <CameraProduct img={"assets/40.png"} name={"DSLR Camera"} items={"9items"} />
        <CameraProduct img={"assets/41.png"} name={"Monitor"} items={"28items"} />
        <CameraProduct img={"assets/42.png"} name={"Chair"} items={"12items"} />
        <CameraProduct img={"assets/43.png"} name={"Printer"} items={"9items"} />
        <CameraProduct img={"assets/44.png"} name={"Network"} items={"90items"} />
        <CameraProduct img={"assets/45.png"} name={"Earbuds"} items={"5items"} />
        <CameraProduct img={"assets/46.png"} name={"Microphone"} items={"12items"} />
        <CameraProduct img={"assets/47.png"} name={"Controller"} items={"9items"} />
        <CameraProduct img={"assets/48.png"} name={"Keyboard"} items={"30items"} />
        <CameraProduct img={"assets/49.png"} name={"Security"} items={"12items"} />
        <CameraProduct img={"assets/50.png"} name={"Projectors"} items={"12items"} />
      </div>
    </div>
  );
}

export default AudioProducts;
