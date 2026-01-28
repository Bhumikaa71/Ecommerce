import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Footer() {
    return (
        <div className='my-10 p-4'>

            <div className='grid grid-cols-5'>

                {/* //Swoo - 1st NYC tech online market */}
                <div className=''>
                    <h1 className='font-bold'>SWOO - 1ST NYC TECH ONLINE MARKET</h1>
                    <div className='grid grid-rows-5'>
                        
                        <p className='py-6 text-2xl'>HOTLINE 24/7</p>
                        <p className='text-green-500 text-4xl font-extrabold'>(025) 3686 25 16</p>
                        <p className='py-2'>257 Thatcher Road St, Brooklyn, Manhattan,<br />NY 10092</p>
                        <p>contact@Swootechmart.com</p>
                        
                        <div className='flex space-x-6'>
                            <div className='bg-gray-300 h-8 w-8 rounded-full p-2'><FaTwitter /></div>
                            <div className='bg-gray-300 h-8 w-8 rounded-full p-2'><FaFacebookF /></div>
                            <div className='bg-gray-300 h-8 w-8 rounded-full p-2'><FaInstagram /></div>
                            <div className='bg-gray-300 h-8 w-8 rounded-full p-2'><FaYoutube /></div>
                            <div className='bg-gray-300 h-8 w-8 rounded-full p-2'><FaPinterest /></div>
                        </div>
                    </div>
                </div>


                {/* top Categories */}
                <div>
                    <h1 className='font-bold'>TOP CATEGORIES</h1>
                    <ul className='py-4 space-y-2 text-gray-500 text-xl'>
                        <li>laptops</li>
                        <li>Pc and computers</li>
                        <li>Cell Phones</li>
                        <li>Tablets</li>
                        <li>Gaming and VR</li>
                        <li>Networks</li>
                        <li>Cameras</li>
                        <li>Sounds</li>
                        <li>Office</li>
                    </ul>
                </div>


                {/* company */}
                <div>
                    <h1 className='font-bold'>COMPANY</h1>
                    <ul className='py-4 space-y-2 text-gray-500 text-xl'>
                        <li>About SWOO</li>
                        <li>Contact</li>
                        <li>Carrer</li>
                        <li>Blog</li>
                        <li>Sitemap</li>
                        <li>Store Location</li>
                    </ul>
                </div>


                {/* help center */}
                <div>
                    <h1 className='font-bold'>HELP CENTER</h1>
                    <ul className='py-4 space-y-2 text-gray-500 text-xl'>
                        <li>Customer Service</li>
                        <li>Policy</li>
                        <li>Terms and Condition</li>
                        <li>Trach Order</li>
                        <li>FAQS</li>
                        <li>My Account</li>
                        <li>Product Support</li>
                    </ul>
                </div>


                {/* partner */}
                <div>
                    <h1 className='font-bold'>PARTNER</h1>
                    <ul className='py-4 space-y-2 text-gray-500 text-xl'>
                        <li>Become Seller</li>
                        <li>Affiliate</li>
                        <li>Advertise</li>
                        <li>Partnership</li>
                    </ul>
                </div>
            </div>

            {/* // usd and english */}
            <div className='flex flex-col sm:flex-row gap-2 space-x-34 py-16'>
                <div className='flex gap-3'>
                    <p className='flex items-center bg-white h-10 w-28 p-6 rounded-xl border border-gray-600'>USD
                        <IoIosArrowDown className='' />
                    </p>

                    <p className='flex items-center h-12 w-28 p-4 rounded-xl border border-gray-600'><img src='assets/1.png' className='h-5 w-5 mx-2' alt='Language' />Eng
                        <IoIosArrowDown className='' />
                    </p>
                </div>
                {/* subscribe & get 10% off for your first order */}
                <div className='w-full sm:w-7xl'>
                    <h1 className='font-bold text-2xl'>SUBSCRIBE & GET <span className='text-red-600'>10% OFF</span> FOR YOUR FIRST ORDER</h1>

                    {/* form */}
                    <div className='my-10 flex justify-between'>
                        <input type='text' placeholder='Enter your email address'></input>
                        <p className='text-green-500 font-bold'>SUBSCRIBE</p>
                    </div><br />
                    <p className='border-b w-full border-gray-400'></p>
                    <p className='italic py-4'>By subscribing, you’re accepted the our <span className='underline'>Policy</span></p>
                </div>
            </div>

            <div className='border-b w-8xl  border-gray-400'></div>

            {/* All right reserved */}
            <div className='flex flex-col sm:flex-row space-y-2 justify-between py-10'>

                <div>
                    <p className='text-gray-500'>© 2024 <span className='font-bold text-black'>Shawonetc3</span>. All Rights Reserved</p>
                </div>

                {/* logo */}
                <div className='grid grid-cols-5'>
                    <img src='assets/57.png'></img>
                    <img src='assets/58.png'></img>
                    <img src='assets/59.png'></img>
                    <img src='assets/60.png'></img>
                    <img src='assets/61.png'></img>

                </div>


                <div className='text-blue-500'><p>Mobile Site</p></div>

            </div>
        </div>
    )
}

export default Footer