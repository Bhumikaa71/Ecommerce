import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Footer() {
  return (
    <div className="bg-gray-50 mt-10 p-6">
      
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* 1. SWOO Info */}
        <div>
          <h1 className="font-bold text-lg mb-4">SWOO - 1ST NYC TECH ONLINE MARKET</h1>
          <p className="text-gray-700 mb-2 text-sm">HOTLINE 24/7</p>
          <p className="text-green-500 font-extrabold text-lg mb-2">(025) 3686 25 16</p>
          <p className="text-gray-500 mb-2 text-sm">257 Thatcher Road St, Brooklyn, Manhattan, NY 10092</p>
          <p className="text-gray-500 mb-4 text-sm">contact@Swootechmart.com</p>
          <div className="flex space-x-3">
            <div className="bg-gray-300 h-8 w-8 flex items-center justify-center rounded-full"><FaTwitter /></div>
            <div className="bg-gray-300 h-8 w-8 flex items-center justify-center rounded-full"><FaFacebookF /></div>
            <div className="bg-gray-300 h-8 w-8 flex items-center justify-center rounded-full"><FaInstagram /></div>
            <div className="bg-gray-300 h-8 w-8 flex items-center justify-center rounded-full"><FaYoutube /></div>
            <div className="bg-gray-300 h-8 w-8 flex items-center justify-center rounded-full"><FaPinterest /></div>
          </div>
        </div>

        {/* 2. Top Categories */}
        <div>
          <h1 className="font-bold mb-4">TOP CATEGORIES</h1>
          <ul className="space-y-1 text-gray-500 text-sm">
            <li>Laptops</li>
            <li>PC and Computers</li>
            <li>Cell Phones</li>
            <li>Tablets</li>
            <li>Gaming and VR</li>
            <li>Networks</li>
            <li>Cameras</li>
            <li>Sounds</li>
            <li>Office</li>
          </ul>
        </div>

        {/* 3. Company */}
        <div>
          <h1 className="font-bold mb-4">COMPANY</h1>
          <ul className="space-y-1 text-gray-500 text-sm">
            <li>About SWOO</li>
            <li>Contact</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Sitemap</li>
            <li>Store Location</li>
          </ul>
        </div>

        {/* 4. Help Center */}
        <div>
          <h1 className="font-bold mb-4">HELP CENTER</h1>
          <ul className="space-y-1 text-gray-500 text-sm">
            <li>Customer Service</li>
            <li>Policy</li>
            <li>Terms and Condition</li>
            <li>Track Order</li>
            <li>FAQs</li>
            <li>My Account</li>
            <li>Product Support</li>
          </ul>
        </div>

        {/* 5. Partner */}
        <div>
          <h1 className="font-bold mb-4">PARTNER</h1>
          <ul className="space-y-1 text-gray-500 text-sm">
            <li>Become Seller</li>
            <li>Affiliate</li>
            <li>Advertise</li>
            <li>Partnership</li>
          </ul>
        </div>
      </div>

      {/* Currency, Language, Subscription */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 mt-10">
        {/* Currency & Language */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex gap-2">
            <div className="flex items-center justify-between border border-gray-400 rounded-xl px-3 h-10 bg-white cursor-pointer">
              USD <IoIosArrowDown />
            </div>
            <div className="flex items-center justify-between border border-gray-400 rounded-xl px-3 h-10 bg-white cursor-pointer">
              <img src="assets/1.png" alt="Eng" className="h-5 w-5 mr-1" /> Eng <IoIosArrowDown />
            </div>
          </div>
        </div>

        {/* Subscribe */}
        <div className="flex flex-col w-full lg:w-2/3">
          <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
            SUBSCRIBE & GET <span className="text-red-600">10% OFF</span> FOR YOUR FIRST ORDER
          </h1>
          <div className="flex flex-col sm:flex-row mt-4 gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 p-2 border border-gray-400 rounded-lg"
            />
            <button className="bg-green-500 text-white font-bold px-6 py-2 rounded-lg">
              SUBSCRIBE
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-2 italic">
            By subscribing, you accept our <span className="underline">Policy</span>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400 my-6"></div>

      {/* Footer Bottom */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
        <p>© 2024 <span className="text-black font-bold">Shawonetc3</span>. All Rights Reserved</p>

        {/* Logos */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <img src="assets/57.png" className="h-8" alt="logo1" />
          <img src="assets/58.png" className="h-8" alt="logo2" />
          <img src="assets/59.png" className="h-8" alt="logo3" />
          <img src="assets/60.png" className="h-8" alt="logo4" />
          <img src="assets/61.png" className="h-8" alt="logo5" />
        </div>

        <p className="text-blue-500 cursor-pointer">Mobile Site</p>
      </div>
    </div>
  );
}

export default Footer;
