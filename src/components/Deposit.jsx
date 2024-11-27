import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faQuestionCircle ,faMicrophone, faMessage, faCommentDots,faXmark,faHeart,faBell,faCirclePlus,faUser,faTimes,faCheck,faCopy,faHome,faWallet,faArrowDown,faClipboardList,faFileAlt,faExchangeAlt,faCog} from '@fortawesome/free-solid-svg-icons';
import image1 from  "../assets/image2.png"
import image2 from "../assets/image3.png"
import CryptoMarket from './cryptomarket';
import BottomNavigation from './Bottomnavigation';
const Deposit = () => {
    const [toggleform, settoggleform] = useState(false)
    const [copied, setCopied] = useState(false);
  const payID = "7474747";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(payID).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
    });
  };
  if (!toggleform) {
    document.body.style.overflow = 'auto'; // Scroll hide
  } else {
    document.body.style.overflow = 'hidden'; // Scroll show
  }
  
  const handletoggleform =()=>{
    settoggleform(!toggleform)
  }
  const handleclick = ()=>{
    navigate("/placeadd")
    settoggleform(!toggleform)
  }
  const coins = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "$43,000",
      change: "+3.2%",
      image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", // Replace with the actual image URL
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: "$3,200",
      change: "-1.5%",
      image: "https://cryptologos.cc/logos/ethereum-eth-logo.png", // Replace with the actual image URL
    },
    {
      name: "Solana",
      symbol: "SOL",
      price: "$55",
      change: "+5.0%",
      image: "https://cryptologos.cc/logos/solana-sol-logo.png", // Replace with the actual image URL
    },
    {
      name: "Matic",
      symbol: "MATIC",
      price: "$1.20",
      change: "+2.8%",
      image: "https://cryptologos.cc/logos/polygon-matic-logo.png", // Replace with the actual image URL
    },
  ];
  return (
    <>
<div className='bg-gray-300 h-[1400px] w-full'>
    <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-600 h-96 w-full">
    {/* Header Section */}
    <div className="flex items-center justify-between h-20 w-full px-6">
      {/* Menu Icon */}
      <div className="h-12 w-12 md:mx-20 border-purple-400 border-[3px] rounded-xl flex items-center justify-center" onClick={handletoggleform}>
        <img
          src="data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%20id='Menu%20/%20Menu_Alt_03'%3e%3cpath%20id='Vector'%20d='M5%2017H13M5%2012H19M5%207H13'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
          alt="Menu Icon"
          className="h-8 w-8"
        />
      </div>

      {/* Center Text */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text font-extrabold text-3xl md:text-4xl tracking-wide drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]">
        Gain
        <span className="text-white text-opacity-90 drop-shadow-[0_3px_5px_rgba(255,255,255,0.6)] italic underline decoration-purple-300 decoration-2 underline-offset-2">
          Pro
        </span>
      </div>

      {/* Icon Section */}
      <div className="flex space-x-4">
        <FontAwesomeIcon
          icon={faQuestionCircle}
          className="text-white text-3xl cursor-pointer hover:text-purple-300 transition-all duration-300"
        />
      </div>
    </div>
    <div className=" p-4 rounded-3xl shadow-lg w-80 mx-auto">
  {/* Total Balance Title */}
  <h3 className="text-lg font-manrope font-semibold text-gray-300">Total Balance</h3>

  {/* Total Balance Value (48.70 USDT) */}
  <p className="text-3xl font-roboto font-bold text-gray-100 mt-2">48.70 USDT</p>

  {/* Equivalent Dollar Value (= 45.70$) */}
  <p className="text-lg font-sansing text-gray-400 mt-2">= 45.70$</p>
</div>
<div className="h-46 w-full px-2 rounded-3xl relative">
  {/* Card Image */}
  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-LkeyHBd9LpeJ3i5MBvDW_0ns2xVUDFb1Q&s"
    className="object-cover h-full w-full rounded-3xl"
    alt="Card Image"
  />

  {/* Overlay Content */}
  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between items-center w-full px-4">
    {/* Visa Text */}
    <p className="text-white text-2xl font-roboto font-semibold">VISA</p>

    {/* Card Number with Copy Icon */}
    <div className="flex items-center space-x-2">
      <p className="text-white text-xl font-roboto">6543434</p>
      <i className="fa fa-copy text-white text-2xl cursor-pointer" />
    </div>
  
  </div>
  <div className="absolute glass-effect top-20 left-0 flex flex-col justify-start items-start w-full h-[1000px] px-4">
  {/* Trending Wallet Text */}
  <p className="text-white text-sm font-roboto font-semibold my-3">Trending Wallet</p>

  {/* USDT Amount */}
  <div className="flex items-center">
    <p className="text-white text-3xl font-montserrat">50.00</p>
    <p className="text-white text-sm font-helveticaLight ml-2">USDT</p>
  </div>
  <div className="flex space-x-16 justify-between items-center mt-10 ml-3">
  {/* Deposit Card */}
  <div className="h-16 w-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex flex-col justify-between items-center p-2">
  <img 
    src="https://cdn-icons-png.flaticon.com/512/2976/2976467.png" 
    alt="Deposit Icon" 
    className="w-16 h-16 object-cover"
  />
  <p className="text-purple-600 text-sm font-roboto mt-6">Deposit</p>
</div>


  {/* Withdraw Card */}
  <div className="h-16 w-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex flex-col justify-between items-center p-2">
    <img 
      src="https://cdn-icons-png.flaticon.com/512/9976/9976760.png" 
      alt="Withdraw Icon" 
      className="w-16 h-16 object-cover"
    />
    <p className="text-purple-600 text-sm font-roboto mt-6">Withdraw</p>
  </div>

  {/* Transfer Card */}
  <div className="h-16 w-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex flex-col justify-between items-center p-2">
    <img 
      src="https://cdn-icons-png.flaticon.com/512/179/179793.png" 
      alt="Transfer Icon" 
      className="w-16 h-16 object-cover"
    />
    <p className="text-purple-600 text-sm font-roboto mt-6">Transfer</p>
  </div>

</div>
<div className='h-[1px] w-full'></div>



</div>


</div>
<div className="p-6 mt-28 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-lg">
  {/* Balances Section */}
    <h2 className="  font-roboto font-bold rounded-lg  hover:shadow-lg transition transform hover:-translate-y-2">Balances</h2>
  

  {/* Coin Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {coins.map((coin, index) => (
      <div
        key={index}
        className="flex flex-col items-start p-4 bg-white border-2 border-pink-600 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-2"
      >
        {/* Coin Details */}
        <div className="flex items-center w-full mb-4">
          <img
            src={coin.image}
            alt={coin.name}
            className="w-14 h-14 rounded-full bg-gray-300 mr-4"
          />
          <div>
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-gray-800">{coin.name}</h3>
              <span className="ml-2 text-xl font-medium text-purple-700">
                {coin.price}
              </span>
            </div>
            <p className="text-sm text-gray-500">{coin.symbol}</p>
            <div className="flex justify-between items-center mt-4">
              <span
                className={`text-sm font-medium ${
                  coin.change.startsWith("-") ? "text-red-500" : "text-green-500"
                }`}
              >
                {coin.change}
              </span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


</div>

<div
  className={`h-[1100px] visible lg:invisible glass-effect absolute overflow-y-auto -mt-[500px] border-r-[1px] border-slate-600 z-[9999] backing overflow-x-hidden  w-full max-w-[400px] ${
    toggleform ? 'show mx-0' : ''
  }`}
  style={{ overflowY: 'auto' }}
>
  {/* User Info Section */}
  <div className="flex items-center space-x-4 p-4 mt-40 relative">
    {/* Profile Image */}
    <div className="h-[80px] w-[80px] rounded-full overflow-hidden border-4 border-purple-500">
      <img
        src="https://i.pravatar.cc/150?img=3" // Replace with actual image URL
        alt="User Profile"
        className="h-full w-full object-cover"
      />
    </div>

    {/* User Info */}
    <div className="flex flex-col">
      <div className="flex items-center space-x-2">
        <p className="text-lg font-semibold font-manrope text-gray-100">PayID: {payID}</p>
        <FontAwesomeIcon
          icon={faCopy}
          className="text-gray-200 text-xl cursor-pointer"
          onClick={copyToClipboard}
        />
        {copied && (
          <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xl" />
        )}
      </div>

      <p className="text-lg text-white flex items-center space-x-2 mt-2">
        <span>test144</span>
        <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xl" />
      </p>

      <div className="bg-green-500 text-white w-14 text-xs px-2 py-1 rounded-full mt-2">
        <p>Verified</p>
      </div>
    </div>

    {/* Close Icon */}
    <div>
    <FontAwesomeIcon
              icon={faXmark}
              className="text-[29px] text-white cursor-pointer translate-x-[50px] translate-y-[-60px] hover:opacity-80 transition-opacity duration-200"
              onClick={handletoggleform}
            />
    </div>
  </div>
  <div className='bg-gray-800 w-full h-[1px]'></div>
  {/* Buttons Section */}
{/* Buttons Section */}
{/* Buttons Section */}
<div className="flex flex-col space-y-4 p-4 ">
  {[
    { label: 'Home', icon: `https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/house-icon.png`},
    { label: 'Deposit', icon: "https://cdn-icons-png.freepik.com/256/2984/2984516.png?semt=ais_hybrid" },
    { label: 'Withdraw', icon: "https://cdn-icons-png.flaticon.com/512/9976/9976760.png" },
    { label: 'Deposit Logs', icon: "https://cdn-icons-png.flaticon.com/512/8553/8553054.png" },
    { label: 'Withdraw Logs', icon: "https://media.lordicon.com/icons/wired/lineal/2066-withdrawal.svg" },
    { label: 'Transfer Logs', icon: "https://cdn-icons-png.flaticon.com/512/4403/4403232.png" },
    { label: 'Settings', icon: "https://cdn-icons-png.freepik.com/256/1103/1103621.png?semt=ais_hybrid" },
  ].map((item, index) => (
    <button
      key={index}
      className="flex items-center space-x-4 h-16 px-4 py-2 font-raleway text-purple-900 bg-purple-300 hover:bg-purple-400 border-2 border-purple-400 transition duration-300 rounded-md w-full"
    >
      {/* Image instead of icon */}
      <img
        src={item.icon}
        alt={item.label}
        className="h-12 w-12 rounded-md object-cover background-color: transparent;"
      />
      <span className="text-lg">{item.label}</span>
    </button>
  ))}
</div>



</div>
</div>
</>
  )
}

export default Deposit