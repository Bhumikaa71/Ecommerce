import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Deals from "./Deals";
import BestProduct from "./product/BestProduct";
import BrandProductCart from "./product/BrandProductCard";
import CellPhoneProducts from "./product/CellPhoneProducts";
import TabletsProduct from "./product/TabletsProduct";
import TabletsProductCart from "./product/TabletsProductCard";
import LaptopProducts from "./product/LaptopProducts";
import AudioProducts from "./product/AudioProducts";
import DownloadCard from "./product/DownloadCard";
import RecentProduct from "./product/RecentProduct";
import MarketPlace from "./MarketPlace";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import AddToCartProduct from './product/AddToCartProduct';

function Home() {
  return (
    <>
      <NavBar />
      <div className="p-4 space-y-2">
        {/* ================= Top Grid Section ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
          <ul className="w-full p-7 space-y-5 font-bold rounded-2xl">
            <h1 className="text-red-500 text-3xl">SALE 40% OFF</h1>
            <li>Laptops</li>
            <li>PC & Computers</li>
            <li>Cell Phones</li>
            <li>Tablets</li>
            <li>Gaming & VR</li>
            <li>Networking</li>
            <li>Cameras</li>
            <li>Sounds</li>
            <li>Office</li>
            <li>Storage, USB</li>
            <li>Accessories</li>
            <li>Clearance</li>
          </ul>

          <div className="w-full h-full sm:col-span-2 space-y-2">
            {/* Headset Image */}
            <div className="bg-center bg-cover bg-no-repeat bg-[url(/assets/4.png)] object-fill rounded-2xl w-full sm:p-16 p-8 min-h-75 sm:min-h-100">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl text-white font-bold">
                  Noise Cancelling
                  <br />
                  <span className="font-extralight text-lg sm:text-xl">HEADPHONE</span>
                </h1>
                <p className="text-white text-lg sm:text-xl">
                  Boso Over-Ear Headphone
                  <br />
                  Wifi, Voice Assistant,
                  <br />
                  Low Latency Game Mode
                </p>
                <div className="py-4">
                  <button className="border border-white text-black bg-white w-1/2 sm:w-1/6 p-3 rounded-xl">
                    <Link to="/addtocartproduct">Buy Now</Link>
                  </button>
                </div>
              </div>
            </div>

            {/* Game Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div className="bg-[url(/assets/5.png)] bg-cover bg-center rounded-xl w-full h-64 sm:h-80 relative">
                <div className="absolute transform translate-x-4 sm:translate-x-6 py-10 space-y-6">
                  <h1 className="text-xl sm:text-2xl text-black font-bold">
                    Sono Playgo 5<br />
                    from <span className="text-green-500">$569</span>
                  </h1>
                  <a href="Discover" className="font-light underline">
                    DISCOVER NOW
                  </a>
                </div>
              </div>

              <div className="bg-[url(/assets/6.png)] bg-cover bg-center rounded-xl w-full h-64 sm:h-80 relative">
                <div className="absolute transform translate-x-4 sm:translate-x-6 py-10 space-y-6">
                  <h1 className="text-xl sm:text-2xl text-white">
                    Logitek Bluetooth
                    <br />
                    <span className="text-yellow-300">Keyboard</span>
                  </h1>
                  <div className="text-white">
                    <p>Best for all devices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Watch + Camera) */}
          <div className="p-4 grid grid-rows-2 gap-4">
            <div className="bg-[url(/assets/7.png)] bg-cover bg-center rounded-xl w-full h-64 sm:h-full relative">
              <div className="absolute inset-0 flex justify-end items-center p-4 sm:p-8">
                <div className="space-y-4 sm:space-y-8 text-right">
                  <h1 className="text-xl sm:text-2xl text-black">xomia</h1>
                  <p className="text-black text-2xl sm:text-4xl font-bold">
                    Sport Water
                    <br />
                    Resistance
                    <br />
                    Watch
                  </p>
                  <button className="border border-white text-white bg-black p-3 rounded-xl">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[url(/assets/8.png)] bg-cover bg-center rounded-xl w-full h-64 sm:h-full relative">
              <div className="absolute transform translate-x-4 sm:translate-x-6 py-4 sm:py-10 space-y-4 sm:space-y-8">
                <h1 className="text-2xl sm:text-3xl text-white font-bold">
                  <span className="font-bold">OKODO</span> <br />
                  HERO 11+
                  <br />
                  BLACK
                </h1>
                <p className="text-gray-200 text-lg sm:text-xl">
                  FROM
                  <br />
                  <span className="text-green-500 text-2xl sm:text-3xl">$169</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  Featured Brand Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <img
                src="assets/9.png"
                className="border border-gray-300 shadow-md rounded-xl w-full"
                alt="brand"
              />
            </div>

            <div className="bg-white border border-gray-300 shadow-md rounded-xl relative">
              <div className="absolute m-4 sm:m-10 flex flex-col sm:flex-row justify-center space-x-14 items-center w-full">
                <p className="font-bold text-2xl">TOP CATEGORIES</p>
                <a href="View All" className="font-extralight text-xl text-gray-500 mt-2 sm:mt-0">
                  View All
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 pt-32 sm:pt-42 font-bold text-xl gap-4 sm:gap-2">
                <div className="flex flex-col items-center">
                  <img src="assets/10.png" alt="Laptops" />
                  <p>Laptops</p>
                </div>

                <div className="flex flex-col items-center">
                  <img src="assets/11.png" alt="PC Gaming" />
                  <p>PC Gaming</p>
                </div>

                <div className="flex flex-col items-center">
                  <img src="assets/12.png" alt="HeadPhones" />
                  <p>HeadPhones</p>
                </div>

                <div className="flex flex-col items-center">
                  <img src="assets/13.png" alt="Monitors" />
                  <p>Monitors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Deals />
      <BestProduct />
      <BrandProductCart />
      <CellPhoneProducts />
      <TabletsProductCart />
      <LaptopProducts />
      <TabletsProductCart />
      <AudioProducts />
      <DownloadCard />
      <RecentProduct />
      <MarketPlace />
      {/* <AddToCartProduct /> */}
      <Footer />
    </>
  );
}

export default Home;
