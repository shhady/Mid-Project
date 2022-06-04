import React from "react";
import "./styleCryptoData.css";
const CandleSticks = () => {
  return (
    <div className="MainContainer">
      <h1>CandleSticks</h1>
      <p>
        Japanese candlesticks chart originated in Japan more than 100 years
        before the West developed chart and bar charts. In the 1700s, a Japanese
        man named Homma discovered that although there was a connection between
        price, supply and demand for rice, markets were deeply influenced by the
        sentiments of merchants. Japanese candlesticks show this sentiment by
        visually representing the volume of price movements in different
        colours. Traders use candles to make trading decisions based on
        regularly occurring patterns that help predict the short-term direction
        of the price.
      </p>
      <h3>Japanese candles</h3>
      <p>
        The daily candle shows the market's open, high, low and close price for
        the day. The candle has a wide part called the "real body". This real
        body represents the price range between the opening and closing of that
        day's trading. When the real body is filled with red, it means that the
        close was lower than the opening. If the real body is filled with green,
        it means that the close was higher than the open.
      </p>
      <h3>Shadows:</h3>
      <p>
        Above and below the real body are 'shadows' or 'wicks'. The shadows show
        the highest or lowest price for that day's trading.
      </p>
    </div>
  );
};
export default CandleSticks;
