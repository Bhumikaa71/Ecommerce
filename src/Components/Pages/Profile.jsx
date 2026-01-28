import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { FiArrowRight } from "react-icons/fi";



function Profile() {
    return (

        <div>

            <div className='g-white border border-gray-50 shadow:md rounded-2xl ml-4'>
                <p className='p-8 text-gray-500 flex gap-3'>
                    <span>Home</span>
                    <span>/</span>
                    <span>Page</span>
                    <span>/</span>
                    <span className='font-bold'>Profile</span></p>
            </div>


            <div className='bg-white my-4 border border-gray-100 shadow:md rounded-2xl'>

                <div className='flex space-x-24 mx-10 p-6'>
                    <div className='bg-gray-200 w-xs shadow:md p-4 rounded-2xl'>
                        <img src='assets/65.png'></img>
                        <h1 className='font-bold my-2'>Mark Cole</h1><br />
                        <p className='text-gray-400'>swoo@gmail.com</p><br />


                        <button className='bg-green-500 w-full p-4 flex items-center justify-between px-4 rounded-xl text-white shadow-sm'>
                            <span>Change Password</span>
                            <FiArrowRight className='text-xl' /></button><br />

                        {/* order */}

                        <button className='bg-white w-full p-4 flex items-center justify-between px-4 rounded-xl text-black shadow-sm'>
                            <span>My Order</span>
                            <FiArrowRight className='text-xl' /></button><br />

                        {/* my address */}

                        <button className='bg-white w-full p-4 flex items-center justify-between px-4 rounded-xl text-black shadow-sm'>
                            <span>My Address</span>
                            <FiArrowRight className='text-xl' /></button><br />

                        {/* change password */}

                        <button className='bg-white w-full p-4 flex items-center justify-between px-4 rounded-xl text-black shadow-sm'>
                            <span>Change Password</span>
                            <FiArrowRight className='text-xl' /></button>
                    </div>

                    {/* //Account info */}
                    <div className='p-8 w-2/3 flex flex-col space-y-6'>
                        <h1 className='uppercase font-extrabold text-2xl'>Account info</h1>

                        {/* First name */}

                        <div className='flex space-x-2 w-full justify-between'>
                            <div className='w-1/2 flex flex-col space-y-2'>                                <label>First Name<span className='text-red-500'>*</span></label>
                                <input type='text' placeholder='Mark' className='w-full  border border-gray-600 rounded-xl p-3'></input>
                            </div>

                            {/* last name */}

                            <div className='w-1/2 flex flex-col space-y-2'>
                                <label>Last Name<span className='text-red-500'>*</span></label>
                                <input type='text' placeholder='Cole' className='w-full border border-gray-600 rounded-xl p-3'></input>
                            </div>
                        </div>

                        {/* email */}
                        <div className='flex flex-col space-y-2'>
                            <label>Email Adress<span className='text-red-500'>*</span></label>
                            <input type='email' placeholder='swoo@gmail.com' className='w-full border border-gray-600 rounded-xl p-3'></input></div>



                        {/* phone */}
                        <div className='flex flex-col space-y-2'>
                            <label>Phone Number(optional)<span className='text-red-500'>*</span></label>
                            <input type='text' placeholder='+1 0231 4554 452' className='border border-gray-600 rounded-xl p-3'></input></div>

                            <button className=' w-1/8 p-4 bg-green-500 rounded-2xl text-xs text-white'>SAVE</button>
                    </div>

                </div>


            </div>


        </div>

    )
}

export default Profile

