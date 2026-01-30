import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";
import { CiSearch, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import {
  IoReorderThreeOutline,
  IoCloseOutline,
  IoBagAddOutline,
} from "react-icons/io5";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-2 sm:p-4 mx-auto">
      <div className="font-serif p-3 sm:p-4 border border-gray-100 bg-white rounded-3xl">
        {/*  Header*/}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center">
          {/* Hotline */}
          <div className="flex items-center gap-2">
            <h1 className="bg-[#EBEEF6] p-2 rounded-xl text-sm">
              Hotline 24/7
            </h1>
            <h1 className="font-bold text-sm">(025) 3886 25 16</h1>
          </div>

          {/* Sell &/ Tracking */}
          <div className="hidden md:flex gap-5">
            <p>Sell on Swoo</p>
            <p>Order Tracking</p>
          </div>

          {/* Currency / Language */}
          <div className="flex items-center space-x-3">
            <p className="flex items-center">
              USD <IoIosArrowDown />
            </p>
            <div className="border-r h-6"></div>
            <p className="flex items-center">
              <img src="assets/1.png" className="h-5 w-5 mr-1" alt="Language" />
              Eng <IoIosArrowDown />
            </p>
          </div>
        </div>

        {/*  Desktop Navbar*/}
        <div className="hidden lg:flex py-8 justify-between items-center w-full">
          <Link to="/">
            <img src="assets/2.png" className="h-14" alt="Logo" />
          </Link>

          <ul className="flex space-x-6 font-bold">
            <li className="flex items-center group relative">
              HOMES <IoIosArrowDown />
              <ul className="absolute top-full hidden group-hover:block bg-white shadow-md rounded-xl p-3 space-y-2">
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
              </ul>
            </li>

            <li className="flex items-center group relative">
              PAGES <IoIosArrowDown />
              <ul className="absolute top-full hidden group-hover:block bg-white shadow-md rounded-xl p-3 space-y-2">
                <li>item 1</li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/checkout">Check Out</Link>
                </li>
              </ul>
            </li>

            <li className="flex items-center group relative">
              PRODUCTS <IoIosArrowDown />
              <ul className="absolute top-full hidden group-hover:block bg-white shadow-md rounded-xl p-3 space-y-2">
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
              </ul>
            </li>

            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>

          {/* Icons */}
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
              <span className="text-gray-600">WELCOME</span>
              <div className="font-bold">
                <Link to="/login">LOG IN / </Link>
                <Link to="/Register">REGISTER</Link>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-gray-400 relative">
                <p className="absolute -top-2 -right-2 bg-[#1ABA1A] text-white rounded-full h-6 w-6 text-xs flex items-center justify-center">
                  5
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">CART</p>
                <p className="text-xl font-bold">$1,689.00</p>
              </div>
            </div>
          </div>
        </div>

        {/*  Mobile Nav */}
        <div className="lg:hidden">
          <div className="flex justify-between items-center py-4">
            <img src="assets/2.png" className="h-12" alt="Logo" />

            {!isOpen && (
              <IoReorderThreeOutline
                size={32}
                className="cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>

          {isOpen && (
            <div className="fixed inset-0 bg-white z-50 overflow-y-auto p-6">
              {/* Close Icon at top-right */}
              <div className="flex justify-end">
                <IoCloseOutline
                  size={32}
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </div>

              <ul className="space-y-6 mt-4 text-lg">
                <li>
                  <Link onClick={() => setIsOpen(false)} to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsOpen(false)} to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsOpen(false)} to="/checkout">
                    Checkout
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsOpen(false)} to="/contact">
                    Contact
                  </Link>
                </li>

                <li className="flex gap-4 pt-4">
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

                <li className="font-bold text-2xl">
                  <Link onClick={() => setIsOpen(false)} to="/login">
                    LOG IN
                  </Link>
                </li>
                <li className="font-bold text-2xl">
                  <Link onClick={() => setIsOpen(false)} to="/Register">
                    REGISTER
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Categories section */}
        <div className="mt-4 bg-[#1ABA1A] rounded-xl p-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex bg-white rounded-2xl p-3 w-full lg:w-2/5 items-center gap-3">
              <div className="flex font-bold group relative">
                All Categories <IoIosArrowDown />
                <ul className="absolute top-full hidden group-hover:block bg-white shadow-md rounded-xl p-3">
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                </ul>
              </div>

              <input
                type="search"
                placeholder="Search anything..."
                className="flex-1 outline-none"
              />
              <CiSearch size={22} />
            </div>

            <div className="hidden xl:flex text-white justify-between flex-1 text-sm">
              <p>FREE SHIPPING OVER $199</p>
              <p>30 DAYS MONEY BACK</p>
              <p>100% SECURE PAYMENT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
