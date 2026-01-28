import React from 'react';
import CameraProduct from './CameraProduct';

function AudioProducts() {
    return (
        <div>
        <div className='grid grid-cols-3 gap-4 my-14 p-4'>
            {/* First image*/}
            <div>
                <div className='flex justify-between py-5'>
                    <h1 className='font-bold text-2xl'>AuDIOS & CAMERAS</h1>
                    <h1 className='text-xl'>View All</h1>
                </div>
                <div className='relative'>
                    <img src='assets/36.png' className='rounded-2xl' alt="Speaker 2023" />
                    <div className='absolute bottom-44 left-10 text-3xl text-white font-bold'>
                        <p>Best<br />Speaker<br />2023</p>
                    </div>
                </div>
                <div className='border-t  my-10 mx-4'></div>
            </div>

            {/* Second image*/}
            <div>
                <div className='flex justify-between py-5'>
                    <h1 className='font-bold text-2xl'>GAMING</h1>
                    <h1 className='text-xl'>View All</h1>
                </div>
                <div className='relative'>
                    <img src='assets/37.png' className='rounded-2xl' alt="Speaker 2023" />
                    <div className='absolute bottom-32 left-10 text-3xl text-black font-bold'>
                    <p>WIRELESS <br />RGB GAMING <br />MOUSE</p>

                    </div>
                </div>
                <div className='border-t my-14 mx-4'></div>
            </div>

            {/* Third image */}
            <div>
                <div className='flex justify-between py-5'>
                    <h1 className='font-bold text-2xl'>AuDIOS & CAMERAS</h1>
                    <h1 className='text-xl'>View All</h1>
                </div>
                <div className='relative'>
                    <img src='assets/38.png' className='rounded-2xl' alt="Speaker 2023" />
                    <div className='absolute bottom-44 left-56 text-white font-bold'>
                        <p className='font-extralight px-4'>Home Theater 4k</p>
                        <p className='font-bold text-3xl'>Laser Projector</p>

                    </div>
                </div>
                <div className='border-t  my-10 mx-4'></div>
            </div>
        </div>

        <div className='grid grid-cols-6 p-4'>
            <CameraProduct  img={"assets/39.png"} name={"Speaker"} items={"12items"}/>
            <CameraProduct  img={"assets/40.png"} name={"DSLR Camera"} items={"9items"}/>
            <CameraProduct  img={"assets/41.png"} name={"Monitor"} items={"28items"}/>
            <CameraProduct  img={"assets/42.png"} name={"chair"} items={"12items"}/>
            <CameraProduct  img={"assets/43.png"} name={"Printer"} items={"9items"}/>
            <CameraProduct  img={"assets/44.png"} name={"Network"} items={"90items"}/>
            <CameraProduct  img={"assets/45.png"} name={"Earbuds"} items={"5items"}/>
            <CameraProduct  img={"assets/46.png"} name={"Microphone"} items={"12items"}/>
            <CameraProduct  img={"assets/47.png"} name={"Controller"} items={"9items"}/>
            <CameraProduct  img={"assets/48.png"} name={"Keybord"} items={"30items"}/>
            <CameraProduct  img={"assets/49.png"} name={"Security"} items={"12items"}/>
            <CameraProduct  img={"assets/50.png"} name={"Projectors"} items={"12items"}/>


        </div>
        </div>
    );
}

export default AudioProducts;
