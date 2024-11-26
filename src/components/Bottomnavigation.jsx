import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartLine, faExchangeAlt, faClipboardList, faWallet } from '@fortawesome/free-solid-svg-icons';

const BottomNavigation = () => {
  const [active, setActive] = useState('home');

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-800 p-4 shadow-lg z-50">
      <div className="flex justify-around items-center">
        
        {/* Home */}
        <div
          className={`flex flex-col items-center ${active === 'home' ? 'text-teal-400' : 'text-white'}`}
          onClick={() => setActive('home')}
        >
          <FontAwesomeIcon icon={faHome} className="text-2xl" />
          <p className="text-xs">Home</p>
        </div>
        
        {/* Markets */}
        <div
          className={`flex flex-col items-center ${active === 'markets' ? 'text-teal-400' : 'text-white'}`}
          onClick={() => setActive('markets')}
        >
          <FontAwesomeIcon icon={faChartLine} className="text-2xl" />
          <p className="text-xs">Markets</p>
        </div>
        
        {/* Trade */}
        <div
          className={`flex flex-col items-center ${active === 'trade' ? 'text-teal-400' : 'text-white'}`}
          onClick={() => setActive('trade')}
        >
          <FontAwesomeIcon icon={faExchangeAlt} className="text-2xl" />
          <p className="text-xs">Trade</p>
        </div>
        
        {/* Orders */}
        <div
          className={`flex flex-col items-center ${active === 'orders' ? 'text-teal-400' : 'text-white'}`}
          onClick={() => setActive('orders')}
        >
          <FontAwesomeIcon icon={faClipboardList} className="text-2xl" />
          <p className="text-xs">Orders</p>
        </div>
        
        {/* Wallet */}
        <div
          className={`flex flex-col items-center ${active === 'wallet' ? 'text-teal-400' : 'text-white'}`}
          onClick={() => setActive('wallet')}
        >
          <FontAwesomeIcon icon={faWallet} className="text-2xl" />
          <p className="text-xs">Wallet</p>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
