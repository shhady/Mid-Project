import React from "react";
import "./CryptoTicks.css";
const CryptoTicks = () => {
  return (
    <div className="Featured">
      <div className="container">
        <div className="left">
          <h2>Explore top crypto's like Bitcoin, Ethereum and Ripple</h2>
          <button>Read about Blockchain</button>
          <button>See more coins</button>
        </div>
        <div className="right">
          <div className="top">
            <img src="" alt="btc" />
            <div>
              <h5>Bitcoin</h5>
              <p>$4000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CryptoTicks;
