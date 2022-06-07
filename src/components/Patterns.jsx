import React from "react";
import "./styleCryptoData.css";
const Patterns = () => {
  return (
    <div className="MainContainer">
      <h1>Patterns</h1>
      <p>
        Patterns are created by up and down price movements. While these price
        movements sometimes appear randomly, sometimes they form patterns that
        traders use for analysis or trading purposes. There are many candlestick
        patterns. The patterns are separated into ups and downs. Bullish
        patterns indicate that the price may go up, while bearish patterns
        indicate that the price may go down. No pattern works all the time,
        because candlestick patterns represent trends in price action, not
        guarantees.
        <br /> Here is a sample to get you started:
        <h3>bullish patterns:</h3>
        <img
          src="https://toppickinvestment.com/wp-content/uploads/2021/04/image-2.png"
          alt="bullish"
          width="100%"
        />
        <h3>Bearish patterns:</h3>
        <img
          src="https://toppickinvestment.com/wp-content/uploads/2021/04/image-3.png"
          alt="Bearish"
          width="100%"
        />
      </p>
    </div>
  );
};
export default Patterns;
