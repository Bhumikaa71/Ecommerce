import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const [user, setUser] = useState({
    yourName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const url = 'https://api.freeapi.app/api/v1/users/register';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          email: user.emailAddress,
          password: user.password,
          username: user.yourName
        })
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Success:", data);
      } else {
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="p-4 md:p-8 space-y-6">

      {/* Breadcrumb */}
      <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-4">
        <p className="text-gray-500 flex flex-wrap gap-1 text-sm md:text-base">
          <span>Home</span>
          <span>/</span>
          <span>Page</span>
          <span>/</span>
          <span className="font-bold">Register</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-white border border-gray-100 shadow-md rounded-2xl">
        <div className="flex flex-col lg:flex-row">

          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center p-8 lg:p-16">
            <img src="assets/62.png" alt="Register" className="max-w-full h-auto"/>
          </div>

          {/* Registration Form */}
          <div className="w-full lg:w-1/2 p-6 md:p-12 flex justify-center items-start">
            <form onSubmit={handleRegister} className="w-full max-w-md space-y-6">

              <h1 className="text-3xl font-bold text-green-500">Register</h1>
              <p className="text-gray-500">Join us</p>

              {/* Name */}
              <div className="flex flex-col space-y-2">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  name="yourName"
                  value={user.yourName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-600 rounded-xl p-3"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-2">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  name="emailAddress"
                  value={user.emailAddress}
                  onChange={handleInputChange}
                  className="w-full border border-gray-600 rounded-xl p-3"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col space-y-2 relative">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                  className="w-full border border-gray-600 rounded-xl p-3"
                />
                {/* <FaEyeSlash className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"/> */}
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col space-y-2 relative">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full border border-gray-600 rounded-xl p-3"
                />
                {/* <FaEyeSlash className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"/> */}
              </div>

              {/* Submit & Login */}
              <div className="flex flex-col space-y-2">
                <button
                  type="submit"
                  className="w-full p-3 text-white bg-green-500 rounded-2xl cursor-pointer hover:bg-green-600 transition"
                >
                  REGISTER
                </button>
                <p className="text-center text-gray-600">
                  Already a user?{" "}
                  <span className="text-green-500">
                    <Link to="/login">LOG IN</Link>
                  </span>
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
