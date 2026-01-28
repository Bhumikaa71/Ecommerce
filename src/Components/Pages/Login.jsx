import React, { useState } from 'react';
import NavBar from '../NavBar'
import Footer from '../Footer'
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    emailAddress: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleLogin = async (event) => {
    event.preventDefault();
    const url = 'https://api.freeapi.app/api/v1/users/login';
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
    <div>

      <div className='g-white border border-gray-100 shadow:md rounded-2xl mx-4'>
        <p className='p-8 text-gray-500 flex gap-3'>
          <span>Home</span>
          <span>/</span>
          <span>Page</span>
          <span>/</span>
          <span className='font-bold'>Login</span></p>

      </div>
      <div className='bg-white my-4 border border-gray-100 shadow:md rounded-2xl'>
        <div className='grid grid-cols-2'>

          {/* images */}
          <div className='p-40'>
            <img src='assets/62.png'></img>
          </div>

          <form onSubmit={handleLogin}>

            <div className='p-20 flex flex-col space-y-6'>
              <h1 className='text-3xl font-bold text-green-500'>WELCOME BACK</h1>
              <p className='text-gray-500'>LOGIN TO CONTINUE</p>

              {/* email */}
              <div className='w-2/3 flex flex-col space-y-2'>
                <label>Email Address</label>
                <input type='text' placeholder='Example@gmail.com' name='emailAddress' value={user.emailAddress} onChange={handleInputChange} className='w-full border border-gray-600 rounded-xl p-3'></input>
              </div>

              {/* password */}
              <div className='w-2/3 flex flex-col space-y-2'>
                <label>Password</label>
                <input type='password' name='password' value={user.password} onChange={handleInputChange} className='w-full border border-gray-600 rounded-xl p-3'></input>
                <p className='text-gray-500 underline'>Forget Password ?</p>
               {/* <FaEyeSlash className='absolute top-11/12 right-1/5 ' /><br /> */}
              </div>




              <div className='flex flex-col space-y-3'>
                <button type='submit' className='bg-green-500 w-1/5 p-3 rounded-2xl cursor-pointer'>LOGIN</button>
                <p className=''>NEW USER ?<span className='text-green-500'>
                  <Link to="/register">SIGN UP</Link>


                </span></p>
              </div>
            </div>
          </form>
        </div>
      </div>


    </div>




  )
}

export default Login