import React from 'react';

function CheckOut() {
  return (
    <div className="p-4 md:p-8 space-y-6">

      {/* Breadcrumb */}
      <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-4">
        <p className="text-gray-500 flex flex-wrap gap-1 text-sm md:text-base">
          <span>Home</span>
          <span>/</span>
          <span>Page</span>
          <span>/</span>
          <span className="font-bold">Profile</span>
        </p>
      </div>

      <div className="bg-white border border-gray-100 shadow-md rounded-2xl py-6 md:py-10 px-4 md:px-8 space-y-6">

        {/* Checkout Header */}
        <h1 className="font-bold text-2xl">CHECKOUT</h1>

        {/* Returning Customer / Coupon Boxes */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex-1 bg-gray-300 p-4 rounded-2xl text-base md:text-xl">
            <p>
              Returning customer?{" "}
              <span className="text-red-400 underline cursor-pointer">Click here to log in</span>
            </p>
          </div>
          <div className="flex-1 bg-gray-300 p-4 rounded-2xl text-base md:text-xl">
            <p>
              Have a coupon?{" "}
              <span className="text-red-400 underline cursor-pointer">Click here to enter your code</span>
            </p>
          </div>
        </div>

        {/* Billing Details & Order Summary */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Billing Details */}
          <div className="flex-1 flex flex-col space-y-6">
            <h2 className="font-bold text-xl">Billing Detail</h2>

            {/* Name */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col space-y-2">
                <label>First Name<span className="text-red-500">*</span></label>
                <input type="text" className="border border-gray-600 rounded-xl p-3 w-full" />
              </div>
              <div className="flex-1 flex flex-col space-y-2">
                <label>Last Name<span className="text-red-500">*</span></label>
                <input type="text" className="border border-gray-600 rounded-xl p-3 w-full" />
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col space-y-2">
              <label>Company Name (optional)</label>
              <input type="text" className="border border-gray-600 rounded-xl p-3 w-full" />
            </div>

            {/* Country */}
            <div className="flex flex-col space-y-2">
              <label>Country/Region<span className="text-red-500">*</span></label>
              <select className="border border-gray-600 rounded-xl p-3 w-full">
                <option>Select country</option>
                <option value="1">United States (US)</option>
                <option value="2">Nepal</option>
                <option value="3">India</option>
                <option value="4">China</option>
                <option value="5">Bhutan</option>
              </select>
            </div>

            {/* Address */}
            <div className="flex flex-col space-y-2">
              <label>Street Address</label>
              <input type="text" placeholder="House number and street name..." className="border border-gray-600 rounded-xl p-3 w-full" />
              <input type="text" placeholder="Apartment, suite, unit, etc (Optional)" className="border border-gray-600 rounded-xl p-3 w-full" />
            </div>

            {/* Town/City */}
            <div className="flex flex-col space-y-2">
              <label>Town/City<span className="text-red-500">*</span></label>
              <input type="text" className="border border-gray-600 rounded-xl p-3 w-full" />
            </div>

            {/* State */}
            <div className="flex flex-col space-y-2">
              <label>State/Country<span className="text-red-500">*</span></label>
              <select className="border border-gray-600 rounded-xl p-3 w-full">
                <option>Select state</option>
                <option value="1">Washington</option>
                <option value="2">Nepal</option>
                <option value="3">India</option>
                <option value="4">China</option>
                <option value="5">Bhutan</option>
              </select>
            </div>

            {/* Zip & Phone */}
            <div className="flex flex-col space-y-2">
              <label>Zip Code<span className="text-red-500">*</span></label>
              <input type="text" className="border border-gray-600 rounded-xl p-3 w-full" />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Phone Number<span className="text-red-500">*</span></label>
              <input type="text" className="border border-gray-600 rounded-xl p-3 w-full" />
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-2">
              <label>Email Address<span className="text-red-500">*</span></label>
              <input type="text" className="border border-gray-600 rounded-xl p-3 w-full" />
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Create an account?</span>
            </div>

            {/* Additional Info */}
            <div className="flex flex-col space-y-2">
              <h2 className="font-bold text-lg">Additional Information</h2>
              <textarea placeholder="Order notes, e.g. special note for delivery" className="border border-gray-600 rounded-xl p-4 w-full" />
            </div>
          </div>

          {/* Your Order Summary */}
          <div className="flex-1 flex flex-col space-y-6">
            <h2 className="font-bold text-2xl">Your Order</h2>
            <div className="bg-gray-200 rounded-2xl p-4 space-y-4">
              
              {/* Product Header */}
              <div className="flex justify-between text-gray-500">
                <span>PRODUCT</span>
                <span>SUB TOTAL</span>
              </div>
              <hr className="border-gray-400" />

              {/* Product Item */}
              <div className="flex gap-4 items-center">
                <img src="assets/66.png" alt="MacBook" className="rounded-xl w-20 h-20 object-cover" />
                <p className="text-lg font-bold">
                  Pineapple MacBook Pro 2022<br />
                  M1 / 512GB x 3
                </p>
              </div>

              {/* Shipping */}
              <div className="flex justify-between text-lg">
                <span>Worldwide Standard Shipping Free</span>
                <span className="text-red-500">+ $9.50</span>
              </div>
              <hr className="border-gray-400" />

              {/* Total */}
              <div className="flex justify-between font-bold text-lg">
                <span>Order Total</span>
                <span className="text-green-400">$1,746.50</span>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4 bg-gray-300 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <span className="font-bold text-lg">Direct Bank Transfer</span>
                </div>
                <p className="text-gray-600 text-sm md:text-base">
                  Make your payment directly into our bank account. Use your Order ID as reference.
                  Your order will not be shipped until funds are cleared.
                </p>

                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <span className="font-bold text-lg">Cash On Delivery</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" />
                    <span className="font-bold text-lg">PayPal <span className="text-blue-400 underline font-light">What's PayPal?</span></span>
                  </div>
                  <img src="assets/67.png" alt="PayPal" className="h-8" />
                </div>

                <button className="w-full bg-green-600 text-white text-lg md:text-xl py-3 rounded-2xl hover:bg-green-700 transition">
                  Place Order
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CheckOut;
