import React from 'react'
import reacting from "../assets/reacting.svg";
import "font-awesome/css/font-awesome.css"; // Ensure this path is correct


const Register = () => {
  return (
    <div className="h-[1300px] w-full relative overflow-y-auto ">
    {/* Image container */}
    <div className="w-full h-[450px]">
      <img 
        src={reacting} 
        alt="Reacting" 
        className="w-full h-full object-cover"
      />
    </div>

    {/* Logo and text over the image */}
    <div className="absolute inset-0 mb-[800px] flex flex-col justify-center items-center text-center">
      {/* Logo */}
      <img
        src="https://gainpro.icu/assets/logo-Br5y1x9f.png"
        alt="GainPro Logo"
        className="h-32 mb-4" // Adjust the size of the logo as needed
      />

      {/* Text */}
      <h1 className="text-white text-3xl font-roboto font-bold mb-2">Welcome To GainPro</h1>
      <p className="text-white text-2xl font-roboto">After login you can Trade.</p>
    </div>
    <div className="space-y-4 h-52 w-full px-6 mt-10">
    <div className="relative">
    <input
      type="text"
      className="h-[76px] w-full bg-[#e5e7eb] rounded-3xl pl-14 font-roboto pr-4 text-lg focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your full name"
    />
    {/* FontAwesome User Icon inside the input field */}
    <i className="fa fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-3xl" />
  </div>
{/* Input with user icon */}
<div className="relative">
  <input
    type="text"
    className="h-[76px] w-full bg-[#e5e7eb] rounded-3xl pl-14 font-roboto pr-4 text-lg focus:ring-2 focus:ring-blue-500"
    placeholder="Enter your username"
  />
  {/* FontAwesome User Icon inside the input field */}
  <i className="fa fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-3xl" />
</div>
<div className="relative">
    <input
      type="email"
      className="h-[76px] w-full bg-[#e5e7eb] rounded-3xl pl-14 font-roboto pr-4 text-lg focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your email address"
    />
    {/* FontAwesome Envelope Icon inside the input field */}
    <i className="fa fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-3xl" />
  </div>
  <div className="flex items-center space-x-4">
    {/* Enter OTP Input with Icon */}
    <div className="relative w-full">
      <input
        type="text"
        className="h-[76px] w-full bg-[#e5e7eb] rounded-3xl pl-14 font-roboto pr-4 text-lg focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your OTP"
      />
      {/* FontAwesome Key Icon inside the input field */}
      <i className="fa fa-key absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-3xl" />
    </div>

    {/* Get OTP Button */}
    <button
      type="button"
      className="h-14 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white whitespace-nowrap font-helveticaLight rounded-3xl shadow-lg hover:bg-gradient-to-l"
    >
      Get OTP
    </button>
  </div>
{/* Input with password icon */}
<div className="relative">
  <input
    type="password"
    className="h-[76px] w-full bg-[#e5e7eb] rounded-2xl pl-14 pr-4 text-lg font-roboto focus:ring-2 focus:ring-blue-500"
    placeholder="Enter your password"
  />
  {/* FontAwesome Lock Icon inside the input field */}
  <i className="fa fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-2xl" />
</div>
<div className="relative">
    <input
      type="password"
      className="h-[76px] w-full bg-[#e5e7eb] rounded-3xl pl-14 font-roboto pr-4 text-lg focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your Withdraw PIN"
    />
    {/* FontAwesome Lock Icon inside the input field */}
    <i className="fa fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-3xl" />
  </div>

  {/* Referral Code Input with Optional Label */}
  <div className="relative">
    <input
      type="text"
      className="h-[76px] w-full bg-[#e5e7eb] rounded-3xl pl-14 font-roboto pr-4 text-lg focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your Referral Code (Optional)"
    />
    {/* FontAwesome Gift Icon inside the input field */}
    <i className="fa fa-gift absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-3xl" />
  </div>
</div>
<div className="relative px-20 mt-[450px] ">
  <button
    type="submit"
    className="w-full h-[70px] text-[22px] font-raleway  bg-gradient-to-r from-purple-600 to-blue-500 text-white text-lg font-semibold rounded-3xl shadow-md hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
  >
    Sign Up
  </button>
</div>
<div className="relative mt-6">
  <h3 className="text-center text-lg text-gray-700 font-manrope">
    Already have an account? <a href="/" className="text-purple-600 font-semibold hover:text-blue-500">Login</a>
  </h3>
</div>

  </div>

  )
}

export default Register