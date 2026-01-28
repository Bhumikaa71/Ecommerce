import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { GiSelfLove } from 'react-icons/gi';
import { CiSearch, CiUser } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from 'react-icons/io5';

import { IoBagAddOutline } from 'react-icons/io5';

const NavBar =() =>{
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='p-4 mx-auto'>
            <div className='font-serif p-4 border border-gray-100 bg-white rounded-3xl'>

                {/* Header */}
                <div className='flex justify-between items-center'>

                    {/* Hotline */}
                    <div className='flex items-center gap-2'>
                        <h1 className='bg-[#EBEEF6] p-2 rounded-xl text-center'>
                            Hotline 24/7
                        </h1>
                        <h1 className='font-bold'>(025) 3886 25 16</h1>
                    </div>

                    {/* Sell on Swoo */}
                    <div className='flex align-middle gap-5 ml-auto'>
                        <p>Sell on Swoo</p>
                        <p>Order Tracking</p>
                    </div>

                    {/* Currency  Language */}
                    <div className='flex items-center space-x-3 ml-2'>
                        <p className='flex items-center'>
                            USD
                            <IoIosArrowDown />
                        </p>
                        <div className='mx-1 border-r h-8 gap-4'></div>
                        <p className='flex items-center'>
                            <img src='assets/1.png' className='h-5 w-5 m-2' alt='Language' />
                            Eng
                            <IoIosArrowDown className='' />
                        </p>
                    </div>
                </div>

                {/* Logo*/}

                <div className=''>
                    <div className="hidden lg:flex py-8 z-20 justify-between items-center w-full">
                        <div className="flex items-center shrink-0">
                            <Link to="/">
                                <img src="assets/2.png" className="h-14" alt="Logo" />
                            </Link>
                        </div>

                        {/* Desktop Nav */}
                        <ul className="flex space-x-6 font-bold">
                            <li className="flex items-center group">
                                HOMES
                                <IoIosArrowDown className="hover:rotate-180" />
                                <ul className="absolute hidden mt-32 space-y-2 p-2 group-hover:block bg-white shadow-md rounded-xl text-xl">
                                    <li>item 1</li>
                                    <li>item 2</li>
                                    <li>item 3</li>
                                </ul>
                            </li>

                            <li className="flex items-center group">
                                PAGES
                                <IoIosArrowDown className="hover:rotate-180" />
                                <ul className="absolute hidden mt-32 space-y-2 p-2 group-hover:block bg-white shadow-md rounded-xl text-xl">
                                    <li>item 1</li>
                                    <li><Link to="/profile">profile</Link></li>
                                    <li><Link to="/checkout">Check Out</Link></li>
                                </ul>
                            </li>

                            <li className="flex items-center group">
                                PRODUCTS
                                <IoIosArrowDown className="hover:rotate-180" />
                                <ul className="absolute hidden mt-32 space-y-2 p-2 group-hover:block bg-white shadow-md rounded-xl text-xl ml-8">
                                    <li>item 1</li>
                                    <li>item 2</li>
                                    <li>item 3</li>
                                </ul>
                            </li>

                            <li className="flex items-center">
                                <Link to="/contact">CONTACT</Link>
                            </li>
                        </ul>

                        {/* Icons Section */}
                        <div className="flex items-center space-x-4">
                            <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                                <IoBagAddOutline />
                            </div>
                            <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                                <GiSelfLove />
                            </div>
                            <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                                <CiUser />
                            </div>
                            <div className="text-sm">
                                <span className="text-gray-600">WELCOME</span><br />
                                <button className="font-bold text-2xl">
                                    <Link to="/login">LOG IN /</Link>
                                    <Link to="/Register">REGISTER</Link>
                                </button>
                            </div>

                            {/* Cart Section */}
                            <div className="flex items-center space-x-8">
                                <div className="h-10 w-10 rounded-full bg-gray-400">
                                    <p className='text-white bg-[#1ABA1A] border rounded-full h-8 w-8 pl-3 pt-1 mt-5 ml-6'>5</p>
                                </div>
                                <span>
                                    <p className='text-gray-400'>CART</p>
                                    <p className='text-xl font-bold'>$1,689.00</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* Mobile Nav */}
                    <div className="sm:block lg:hidden h-full z-10 ">
                        <div className=' bg-white p-4'>
                            <div className="flex items-center justify-between">
                                <img src="assets/2.png" className="h-14" alt="Logo" />

                                {/*Icon */}
                                <IoReorderThreeOutline onClick={() => setIsOpen(!isOpen)} />
                            </div>

                            {isOpen && (
                                <div className='fixed top-10 z-50 bg-white h-screen w-full'>
                                    <ul className="space-y-4 p-4">

                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/profile">Profile</Link></li>
                                        <li><Link to="/checkout">Checkout</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li className='flex space-x-3'>
                                            <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                                                <IoBagAddOutline />
                                            </div>
                                            <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                                                <GiSelfLove />
                                            </div>
                                            <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                                                <CiUser />
                                            </div>
                                        </li>

                                        <li className='font-bold text-2xl'> <Link to="/login">LOG IN /</Link></li>
                                        <li className='font-bold text-2xl'><Link to="/Register">REGISTER</Link></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                {/* All Categories Section */}
                <div>
                    <div className='bg-[#1ABA1A] h-20 flex items-center border-gray-100 rounded-xl mt-4'>
                        <div className='flex justify-between bg-white h-12 w-md ml-10 rounded-2xl p-3 items-center'>
                            <div className='flex font-bold text-lg group'>
                                All Categories
                                <IoIosArrowDown className="ml-1 mt-1 hover:rotate-180" />
                                <ul className="absolute hidden mt-10 space-y-2 p-2 group-hover:block bg-white shadow-md rounded-xl text-xl">
                                    <li>item 1</li>
                                    <li>item 2</li>
                                    <li>item 3</li>
                                </ul>
                            </div>

                            <div className='text-4xs'>
                                <input type='search' placeholder='Search anything...' className='h-full w-full' />
                            </div>

                            <div className='text-2xl'>
                                <CiSearch />
                            </div>
                        </div>

                        {/* Free shipping, money-back and secure payment */}
                        <div className='flex justify-between space-x-72 ml-24 text-white text-2xs'>
                            <p>FREE SHIPPING OVER $199</p>
                            <p>30 DAYS MONEY BACK</p>
                            <p>100% SECURE PAYMENT</p>
                        </div>
                    </div>
                </div>
            </div>
            );
}

            export default NavBar;
