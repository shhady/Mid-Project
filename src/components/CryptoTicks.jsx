import React from "react";
import "./CryptoTicks.css";
import { useState, useEffect } from "react";
import axios from "axios";
const CryptoTicks = () => {
  const [cryptosData, setCryptosData] = useState(null);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false";
  useEffect(() => {
    const search = async () => {
      const response = await axios.get(url);
      setCryptosData(response.data);
    };
    search();
  }, []);

  console.log(cryptosData);
  if (!cryptosData) return null;
  const CryptoTicksCards = () => {
    return cryptosData.map((crypto) => {
      return (
        <div className="top">
          <img src={crypto.image} alt="" className="cryptoImg" />
          <div>
            <h5>{crypto.name}</h5>
            <p>${crypto.current_price.toLocaleString()}</p>

            {crypto.price_change_percentage_24h < 0 ? (
              <span className="red">
                %{crypto.price_change_percentage_24h.toFixed(2)}
              </span>
            ) : (
              <span className="green">
                %{crypto.price_change_percentage_24h.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="Featured">
      <div className="container">
        <div className="left">
          {/* <img
            src="https://toppickinvestment.com/wp-content/uploads/2021/04/blockchain-network-cryptography-3774715.jpg"
            alt=""
            height="100%"
            width="80%"
            style={{
              display: "flex",
              selfAlign: "center",
              borderRadius: "50%",
            }}
          /> */}
          <div className="blockchain">
            <button className="btn-allCryptos">Read about Blockchain</button>
          </div>
        </div>
        <div className="right">
          <div className="card">
            <h2 style={{ textAlign: "center" }}>
              Explore top 8 Crypto coins ranked by market cap
            </h2>
            {CryptoTicksCards()}
            <button className="btn-allCryptos">See more Cryptos</button>
          </div>
          {/* <div className="top">
            <img src="" alt="btc" />
            <div>
              <h5>Bitcoin</h5>
              <p>$4000</p>
              <span>2.5%</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default CryptoTicks;
