import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { FiArrowRight } from "react-icons/fi";

function CheckOut() {
    return (
        <div>

            <div className='bg-white border border-gray-100 shadow:md rounded-2xl mx-4'>
                <p className='p-8 text-gray-500 flex gap-3'>
                    <span>Home</span>
                    <span>/</span>
                    <span>Page</span>
                    <span>/</span>
                    <span className='font-bold'>Profile</span></p>
            </div>

            <div className='bg-white border border-gray-100 shadow:md rounded-2xl my-4 py-10'>
                {/* //checkout */}
                <h1 className='font-bold text-2xl p-6'>CHECKOUT</h1>

                <div className='flex items-center space-x-8 p-6'>
                    <div className='w-2/3 bg-gray-300 shadow:md p-4 rounded-2xl item text-xl'>
                        <p > Returning customer? <span className='text-red-400 underline'>Click here to log in</span></p>
                    </div>

                    <div className='bg-gray-300 shadow:md w-1/3 rounded-2xl text-xl'>
                        <p className='p-4'> Have a coupon? <span className='text-red-400 underline'>Click here to enter your code</span></p>
                    </div>
                </div>

                {/* <h1 className='font-bold p-8 -mb-10'>Billing Detail</h1> */}
                <div className='flex'>
                    <div className='p-8 w-2/3 flex flex-col space-y-6'>
                        <h1 className='font-bold'>Billing Detail</h1>

                        {/* First name */}
                        
                        <div className='flex space-x-2 w-full justify-between'>
                            <div className='w-1/2 flex flex-col space-y-2'>
                                <label>First Name<span className='text-red-500'>*</span></label>
                                <input type='text' className='w-full  border border-gray-600 rounded-xl p-3'></input>
                            </div>

                            {/* last name */}

                            <div className='w-1/2 flex flex-col space-y-2'>
                                <label>Last Name<span className='text-red-500'>*</span></label>
                                <input type='text' className='w-full border border-gray-600 rounded-xl p-3'></input>
                            </div>
                        </div>


                        {/* company name */}

                        <div className='flex flex-col space-y-2'>
                            <label>Company Name(optional)</label>
                            <input type='text' className='w-full border border-gray-600 rounded-xl p-3'></input>
                        </div>


                        {/* country */}
                        <div className='flex flex-col space-y-2'>
                            <label>Country/Region<span className='text-red-500'>*</span></label>
                            <select className='w-full border border-gray-600 rounded-xl p-3'>
                                <option>select country</option>
                                <option value="1">United States(US)</option>
                                <option value="2">Nepal</option>
                                <option value="3">India</option>
                                <option value="4">china</option>
                                <option value="5">Bhutan</option>
                            </select>
                        </div>

                        {/* street Address */}

                        <div className='flex flex-col space-y-2'>
                            <label>Street Address</label>
                            <input type='text' placeholder='House number and street name ...' className=' w-full border border-gray-600 rounded-xl p-3'></input><br/>

                            <input type='text' placeholder='Apartment, suite, unit, etc (Optional)' className='border border-gray-600 rounded-xl p-3'></input>

                        </div>
                        {/* Town city */}
                        <div className='flex flex-col space-y-2'>
                            <label>Town/City<span className='text-red-500'>*</span></label>
                            <input type='text' className='w-full border border-gray-600 rounded-xl p-3'></input>
                        </div>

                        {/* //state and country */}
                        <div className='flex flex-col space-y-2'>
                            <label>State/Country<span className='text-red-500'>*</span></label>
                            <select className='w-full border border-gray-600 rounded-xl p-3'>
                                <option>select country</option>
                                <option value="1">Washington</option>
                                <option value="2">Nepal</option>
                                <option value="3">India</option>
                                <option value="4">china</option>
                                <option value="5">Bhutan</option>
                            </select>
                        </div>

                        {/* Zip code */}
                        <div className='flex flex-col space-y-2'>
                            <label>Zip Code<span className='text-red-500'>*</span></label>
                            <input type='text' className='border border-gray-600 rounded-xl p-3'></input>
                        </div>

                        {/* Phone number */}

                        <div className='flex flex-col space-y-2'>
                            <label>Phone Number<span className='text-red-500'>*</span></label>
                            <input type='text' className='w-full border border-gray-600 rounded-xl p-3'></input>
                        </div>

                        {/* Email Address */}

                        <div className='flex flex-col space-y-2'>
                            <label>Email Address<span className='text-red-500'>*</span></label>
                            <input type='text' className='border border-gray-600 rounded-xl p-3'></input>
                        </div>

                        <div className='flex gap-x-2'>
                            <input type="checkbox"></input>
                            <p>Create an account?</p>
                        </div>
                        <div>
                            <h1 className='font-bold text-xl'>Additional Information</h1>
                            <div className='flex flex-col space-y-2'>
                                <p>Order Notes(optional)</p>
                                <textarea id="message" placeholder='Note about your order, e.g. special note for delivery ' class='w-full border border-gray-600 rounded-xl p-4'></textarea>
                            </div>
                        </div>
                    </div>


                    {/* //your order */}

                    <div className=' w-1/3 flex flex-col justify-end'>
                        <h1 className='font-bold text-2xl'>your Order</h1>

                        <div className='bg-gray-200 w-full rounded-2xl'>
                            <div className='flex justify-between text-gray-500 p-4'>
                                <h1>PRODUCT</h1>
                                <h1>SUB TOTAL</h1>
                            </div>
                            <p className='border w-lg ml-7 border-gray-400'></p>

                            <div className='flex p-6 gap-x-4'>
                                <img src='assets/66.png' alt='MacBook' className='rounded-xl'></img>
                                <p className='text-xl font-bold'>Pinnaeple Macbook Pro 2022<br />M1/ 512GB<br />x 3</p>
                            </div>

                            <div className='flex justify-between p-6 text-xl'>
                                <p>Worldwide Standard Shipping Free</p>
                                <p className='text-red-500'>+ $9.50</p>
                            </div>
                            <p className='border w-lg ml-7 border-gray-400'></p>

                            <div className='flex justify-between p-4 text-lg font-bold'>
                                <h1>Order Total</h1>
                                <h1 className='text-green-400'>$1,746.50</h1>
                            </div>

                            {/* next color box */}
                            <div className='bg-gray-300 rounded-b-xl'>
                                <div className='flex gap-x-3 p-8'>
                                    <input type="checkbox" className="w-6 h-6" />
                                    <h1 className='font-bold text-2xl'>Direct Bank Transfer</h1>
                                </div>
                                <div className='flex justify-center items-center text-gray-600 text-lg'>
                                    <p>
                                        Make your payment directly into our bank account. Please use your<br />
                                        Order ID as the payment reference. Your order will not be shipped<br />
                                        until the funds have cleared in our account.
                                    </p>
                                </div>

                                <div>

                                    <div className='flex gap-x-3 p-8'>
                                        <input type="checkbox" className="w-6 h-6" />
                                        <h1 className='font-bold text-2xl'>Cash On Delivery</h1>
                                    </div>

                                    <div className='flex justify-between p-8'>
                                        <div className='flex gap-x-3'>
                                            <input type="checkbox" className="w-6 h-6" />
                                            <h1 className='font-bold text-2xl'>PayPal  <span className='font-extralight  underline text-blue-400'>What's PayPal</span></h1>
                                        </div>
                                        <div>
                                            <img src='assets/67.png'></img>
                                        </div>
                                    </div>

                                    <div className='flex justify-center'>
                                        <button className='h-14 w-lg bg-[#1ABA1A] flex justify-center items-center rounded-2xl text-2xl text-white'>place order</button>
                                    </div><br />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut