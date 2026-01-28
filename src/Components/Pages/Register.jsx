import React, { useState } from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';



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
    <div>

      <div className='bg-white border border-gray-100 shadow:md rounded-2xl px-4 mx-4 my-4'>

        <p className='p-8 text-gray-500 flex gap-3'>
          <span>Home</span>
          <span>/</span>
          <span>Page</span>
          <span>/</span>
          <span className='font-bold'>Register</span></p>
      </div>


      <div className='bg-white  border border-gray-100 shadow:md my-4 rounded-2xl'>

        <div className='grid grid-cols-2'>
            {/* //image */}

          <div className='p-40'>
            <img src='assets/62.png'></img>
            </div>
          <div>

              {/* //form submit */}
               <form onSubmit={handleRegister}>
                <div className='p-16 flex flex-col space-y-6'>

                <h1 className='text-3xl font-bold text-green-500'>Register</h1>
                <p className='text-gray-500'>JOIN TO US</p>


              {/* //name */}
                <div className='w-2/3 flex flex-col space-y-2'>
                  <label>Your Name</label>
                  <input type='text' placeholder='John Doe' name='yourName' value={user.yourName} onChange={handleInputChange} className='w-full  border border-gray-600 rounded-xl p-3'></input>
                </div>
                



                {/* email */}

                <div className='w-2/3 flex flex-col space-y-2'>
                  <label>Email Address</label>
                  <input type='text' placeholder='Example@gmail.com' name='emailAddress' value={user.emailAddress} onChange={handleInputChange} className='w-full border border-gray-600 rounded-xl p-3'></input>
                </div>
                

                {/* password */}
                <div className='w-2/3 flex flex-col space-y-2'>
                  <label>Password</label>
                  <input type='password' name='password' value={user.password} onChange={handleInputChange} className='w-full border border-gray-600 rounded-xl p-3'></input>

                  {/* <FaEyeSlash className='absolute top-11/12 right-1/5 ' /><br /> */}
                </div>

                {/* confirm password */}

                <div className='w-2/3 flex flex-col space-y-2'>

                  <label>Confirm Password</label>
                  <input type='password' name='confirmPassword' value={user.confirmPassword} onChange={handleInputChange} className='w-full border border-gray-600 rounded-xl p-3'></input>
                  {/* <FaEyeSlash className='absolute right-1/5 top-11/11 ' /><br /> */}

                </div>

                <div className='flex flex-col space-y-3'>
                  <button type='submit' className='w-1/5 p-3 text-white bg-green-500 rounded-2xl cursor-pointer'>REGISTER</button>
                  <p>ALREADY USER ? <span className='text-green-500'>
                    <Link to="/login">LOG IN</Link>
                  </span>
                  </p>
                </div>
                </div>
              </form>
            </div>
            
          </div>
        </div>


      </div>


    // </div>


  )
}

export default Register