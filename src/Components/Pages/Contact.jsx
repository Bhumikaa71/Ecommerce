import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Link } from 'react-router-dom';




function Contact() {
    return (
        <div>
            <div className='bg-white border border-gray-100 shadow:md rounded-2xl mx-4'>
                <p className='p-8 text-gray-500 flex gap-3'>
                    <span>Home</span>
                    <span>/</span>
                    <span>Page</span>
                    <span>/</span>
                    <span className='font-bold'>contact</span></p>
            </div>
            <div className='bg-white my-4 border border-gray-100 shadow:md rounded-2xl'>

                <div className='flex justify-between'>



                    <div className='p-8  w-3/2 flex flex-col space-y-6'>

                        <h1 className='text-3xl font-bold'>READY TO WORK WITH US</h1><br />
                        <p className='text-gray-500'>Contact us for all your questions and opinions</p>

                        {/* First name */}
                        <div className='flex space-x-2 w-full justify-between'>
                            <div className='w-1/2 flex flex-col space-y-2'>
                                <label>First Name<span className='text-red-500'>*</span></label>
                                <input type='text' className='border border-gray-600 rounded-xl p-3'></input>
                            </div>

                            {/* last name */}

                            <div className='w-1/2 flex flex-col space-y-2'>
                                <label>Last Name<span className='text-red-500'>*</span></label>
                                <input type='text' className='w-full border border-gray-600 rounded-xl p-3'></input>
                            </div>
                        </div>


                        {/* email */}
                        <div className='flex flex-col space-y-2'>
                            <label>Email Address<span className='text-red-500'>*</span></label>
                            <input type='text' className='border border-gray-600 rounded-xl p-3'></input>
                        </div>

                        {/* phone number */}
                        <div className='flex flex-col space-y-2'>
                            <label>Phone Number<span className='text-red-500'>*</span></label>
                            <input type='text' className='w-full border border-gray-600 rounded-xl p-3'></input>
                        </div>


                        {/* country */}
                        <div className='flex flex-col space-y-2'>
                            <label>State/Country<span className='text-red-500'>*</span></label>
                            <select className='w-full border border-gray-600 rounded-xl p-3'>
                                <option>select country</option>
                                <option value="1">Unites States(US)</option>
                                <option value="2">Nepal</option>
                                <option value="3">India</option>
                                <option value="4">china</option>
                                <option value="5">Bhutan</option>
                            </select>
                        </div>

                        {/* subject */}

                        <div className='flex flex-col space-y-2'>
                            <label>Subject(optional)</label>
                            <input type='text' className='w-full border border-gray-600 rounded-xl p-3'></input>
                        </div>

                        {/* message */}

                        <div class='flex flex-col space-y-2'>
                            <label for="message">Message</label><br />
                            <textarea id="message" placeholder='Note about your order, e.g. special note for delivery ' class='w-full border border-gray-600 rounded-xl p-5'></textarea>

                        </div>

                        {/* checkbox */}
                        <div className='flex gap-x-2'>
                            <input type="checkbox"></input>
                            <p>I want to receive news and updates once in a while. By submitting, I’m agreed to the <span className='text-green-400 underline'>Terms & Conditons</span></p>
                        </div>
                        {/* Send message */}
                        <div className='flex flex-col space-y-3'>
                            <button className='bg-green-500 w-1/6 p-4 rounded-xl text-xs text-white'>SEND MESSAGE</button>
                        </div>
                    </div>

                    {/* head quatar box */}
                    <div className='flex flex-col justify-center space-y-4 p-4'>
                        <div className='bg-gray-200 rounded-2xl p-8 flex flex-col gap-7 grid-rows-2'>
                            <h1 className='uppercase text-gray-500 text-xs'>united states (head quater)</h1>
                            <p className=''>152 Thatcher Road St, Mahattan, 10463, US<br />(+025) 3886 25 16<br /> <span className='text-green-400'>hello@swattechmart.com</span></p>

                            {/* branch */}
                            <h1 className='uppercase text-gray-500 text-xs'>united kingdom (branch)</h1>

                            <p className=''>12 Buckingham Rd, Thornthwaite, HG3 4TY, UK<br />(+718) 895-5350<br />
                                <span className='text-green-400'>contact@swattechmart.co.uk</span></p>

                            {/* icon */}
                            <div className="flex space-x-6">
                                <div className="bg-white h-8 w-8 rounded-full p-2">
                                    <FaTwitter />
                                </div>
                                <div className="bg-white h-8 w-8 rounded-full p-2">
                                    <FaFacebookF />
                                </div>
                                <div className="bg-white h-8 w-8 rounded-full p-2">
                                    <FaInstagram />
                                </div>
                                <div className="bg-white h-8 w-8 rounded-full p-2">
                                    <FaYoutube />
                                </div>
                                <div className="bg-white h-8 w-8 rounded-full p-2">
                                    <FaPinterest />
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <img src='assets/63.png'></img></div>
                    </div>
                </div>
            </div>
            {/* map */}

            <div className='w-8xl shadow:md bg-white rounded-2xl p-6'>
                <div className='h-96  flex justify-center'>
                    <iframe title="Google Maps Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.5643942773295!2d87.6691940110761!3d27.358083876286155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e61b178a6a778f%3A0xac73ff69a32b8a69!2sBirendra%20Chok!5e0!3m2!1sen!2snp!4v1766645849537!5m2!1sen!2snp"
                        width="95%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>



        </div>
    )
}

export default Contact