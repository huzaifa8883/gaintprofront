import React from "react";

const CryptoMarket = () => {
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
    <div className="p-6 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Crypto Market</h2>
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
                className="w-14 h-14 rounded-full bg-gray-600 mr-4"
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
  );
};

export default CryptoMarket;
