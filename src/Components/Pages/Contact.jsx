import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

function Contact() {
  return (
    <div className="p-4 md:p-8 space-y-6">

      {/* Breadcrumb */}
      <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-4">
        <p className="text-gray-500 flex flex-wrap gap-1 text-sm md:text-base">
          <span>Home</span>
          <span>/</span>
          <span>Page</span>
          <span>/</span>
          <span className="font-bold">Contact</span>
        </p>
      </div>

      {/* Main Contact Section */}
      <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-4 md:p-8">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Contact Form */}
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl font-bold">READY TO WORK WITH US</h1>
            <p className="text-gray-500">Contact us for all your questions and opinions</p>

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

            {/* Email */}
            <div className="flex flex-col space-y-2">
              <label>Email Address<span className="text-red-500">*</span></label>
              <input type="text" className="border border-gray-600 rounded-xl p-3 w-full" />
            </div>

            {/* Phone */}
            <div className="flex flex-col space-y-2">
              <label>Phone Number<span className="text-red-500">*</span></label>
              <input type="text" className="border border-gray-600 rounded-xl p-3 w-full" />
            </div>

            {/* Country */}
            <div className="flex flex-col space-y-2">
              <label>State/Country<span className="text-red-500">*</span></label>
              <select className="border border-gray-600 rounded-xl p-3 w-full">
                <option>Select country</option>
                <option value="1">United States (US)</option>
                <option value="2">Nepal</option>
                <option value="3">India</option>
                <option value="4">China</option>
                <option value="5">Bhutan</option>
              </select>
            </div>

            {/* Subject */}
            <div className="flex flex-col space-y-2">
              <label>Subject (optional)</label>
              <input type="text" className="border border-gray-600 rounded-xl p-3 w-full" />
            </div>

            {/* Message */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Note about your order, e.g., special note for delivery"
                className="border border-gray-600 rounded-xl p-5 w-full"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <p className="text-sm">
                I want to receive news and updates once in a while. By submitting, I agree to the{" "}
                <span className="text-green-400 underline">Terms & Conditions</span>
              </p>
            </div>

            {/* Send Button */}
            <div>
              <button className="bg-green-500 w-full md:w-1/4 p-4 rounded-xl text-white hover:bg-green-600 transition">
                SEND MESSAGE
              </button>
            </div>
          </div>

          {/* Headquarter & Social */}
          <div className="flex-1 space-y-6">

            <div className="bg-gray-200 rounded-2xl p-6 flex flex-col space-y-6">
              {/* US Headquarter */}
              <div>
                <h1 className="uppercase text-gray-500 text-xs">United States (Headquarter)</h1>
                <p>152 Thatcher Road St, Manhattan, 10463, US<br />
                  (+025) 3886 25 16<br />
                  <span className="text-green-400">hello@swattechmart.com</span>
                </p>
              </div>

              {/* UK Branch */}
              <div>
                <h1 className="uppercase text-gray-500 text-xs">United Kingdom (Branch)</h1>
                <p>12 Buckingham Rd, Thornthwaite, HG3 4TY, UK<br />
                  (+718) 895-5350<br />
                  <span className="text-green-400">contact@swattechmart.co.uk</span>
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <div className="bg-white h-8 w-8 rounded-full flex justify-center items-center p-2"><FaTwitter /></div>
                <div className="bg-white h-8 w-8 rounded-full flex justify-center items-center p-2"><FaFacebookF /></div>
                <div className="bg-white h-8 w-8 rounded-full flex justify-center items-center p-2"><FaInstagram /></div>
                <div className="bg-white h-8 w-8 rounded-full flex justify-center items-center p-2"><FaYoutube /></div>
                <div className="bg-white h-8 w-8 rounded-full flex justify-center items-center p-2"><FaPinterest /></div>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img src="assets/63.png" alt="Office" className="max-w-full h-auto rounded-xl" />
            </div>
          </div>

        </div>
      </div>

      {/* Map */}
      <div className="bg-white rounded-2xl shadow-md p-4">
        <div className="h-96 w-full">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.5643942773295!2d87.6691940110761!3d27.358083876286155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e61b178a6a778f%3A0xac73ff69a32b8a69!2sBirendra%20Chok!5e0!3m2!1sen!2snp!4v1766645849537!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </div>
  );
}

export default Contact;
