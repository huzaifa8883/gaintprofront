import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import reacting from "../assets/reacting.svg";
import "font-awesome/css/font-awesome.css"; // Ensure this path is correct

const SignIn = () => {
  const navigate = useNavigate(); // Initialize the navigation hook
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the username and password match
    if (username === "huzaifa" && password === "56567") {
      // Redirect to home page if credentials are correct
      navigate("/home");
    } else {
      // Display an error message if the credentials are incorrect
      setError("Invalid username or password");
    }
  };

  return (
    <div className="h-full w-full relative">
      {/* Image container */}
      <div className="w-full h-[450px]">
        <img
          src={reacting}
          alt="Reacting"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Logo and text over the image */}
      <div className="absolute inset-0 mb-80 flex flex-col justify-center items-center text-center">
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
        {/* Input with user icon */}
        <div className="relative">
          <input
            type="text"
            className="h-[76px] w-full bg-[#e5e7eb] rounded-3xl pl-14 font-roboto pr-4 text-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update username state
          />
          {/* FontAwesome User Icon inside the input field */}
          <i className="fa fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-3xl" />
        </div>

        {/* Input with password icon */}
        <div className="relative">
          <input
            type="password"
            className="h-[76px] w-full bg-[#e5e7eb] rounded-2xl pl-14 pr-4 text-lg font-roboto focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
          />
          {/* FontAwesome Lock Icon inside the input field */}
          <i className="fa fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-2xl" />
        </div>
      </div>

      {/* Display error message if any */}
      {error && (
        <div className="text-red-500 text-center mt-4">
          <p>{error}</p>
        </div>
      )}

      <div className="relative px-20">
        <button
          type="submit"
          className="w-full h-[70px] text-[22px] font-raleway bg-gradient-to-r from-purple-600 to-blue-500 text-white text-lg font-semibold rounded-3xl shadow-md hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
          onClick={handleSubmit} // Handle form submission
        >
          Sign In
        </button>
      </div>

      <div className="relative mt-6">
        <h3 className="text-center text-lg text-gray-700 font-manrope">
          Not a member?{" "}
          <a href="/signup" className="text-purple-600 font-semibold hover:text-blue-500">
            Signup Now
          </a>
        </h3>
      </div>
    </div>
  );
};

export default SignIn;
