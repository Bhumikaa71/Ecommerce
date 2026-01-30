import React from 'react';
import { FiArrowRight } from "react-icons/fi";

function Profile() {
  return (
    <div className="p-4 md:p-8 space-y-6">

      {/* Breadcrumb */}
      <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-4 md:p-8">
        <p className="text-gray-500 flex flex-wrap gap-1 text-sm md:text-base">
          <span>Home</span>
          <span>/</span>
          <span>Page</span>
          <span>/</span>
          <span className="font-bold">Profile</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-4 md:p-6">
        <div className="flex flex-col lg:flex-row lg:space-x-8">

          {/* Sidebar */}
          <div className="bg-gray-200 w-full lg:w-1/4 shadow-md p-4 rounded-2xl flex flex-col items-center space-y-4">
            <img src="assets/65.png" alt="Profile" className="w-32 h-32 rounded-full object-cover"/>
            <h1 className="font-bold text-lg">Mark Cole</h1>
            <p className="text-gray-400 text-sm md:text-base">swoo@gmail.com</p>

            {/* Buttons */}
            <div className="w-full flex flex-col space-y-2">
              <button className="bg-green-500 w-full flex items-center justify-between p-3 rounded-xl text-white shadow-sm">
                <span>Change Password</span>
                <FiArrowRight className="text-xl" />
              </button>
              <button className="bg-white w-full flex items-center justify-between p-3 rounded-xl text-black shadow-sm">
                <span>My Order</span>
                <FiArrowRight className="text-xl" />
              </button>
              <button className="bg-white w-full flex items-center justify-between p-3 rounded-xl text-black shadow-sm">
                <span>My Address</span>
                <FiArrowRight className="text-xl" />
              </button>
              <button className="bg-white w-full flex items-center justify-between p-3 rounded-xl text-black shadow-sm">
                <span>Change Password</span>
                <FiArrowRight className="text-xl" />
              </button>
            </div>
          </div>

          {/* Account Info */}
          <div className="w-full lg:w-3/4 mt-6 lg:mt-0 p-4 flex flex-col space-y-6">
            <h1 className="uppercase font-extrabold text-2xl">Account Info</h1>

            {/* Name */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex flex-col w-full">
                <label>First Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Mark" className="w-full border border-gray-600 rounded-xl p-3"/>
              </div>
              <div className="flex flex-col w-full">
                <label>Last Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Cole" className="w-full border border-gray-600 rounded-xl p-3"/>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label>Email Address <span className="text-red-500">*</span></label>
              <input type="email" placeholder="swoo@gmail.com" className="w-full border border-gray-600 rounded-xl p-3"/>
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label>Phone Number (optional)</label>
              <input type="text" placeholder="+1 0231 4554 452" className="w-full border border-gray-600 rounded-xl p-3"/>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button className="bg-green-500 text-white rounded-2xl px-6 py-3 font-bold hover:bg-green-600 transition">
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
