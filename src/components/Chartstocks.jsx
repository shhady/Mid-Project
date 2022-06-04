import React from "react";

const NewComponent = () => {
  return (
    <>
      {/* TradingView Widget BEGIN */}
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget" />
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/markets/"
            rel="noopener"
            target="_blank"
          >
            <span className="blue-text">Financial Markets</span>
          </a>{" "}
        </div>
      </div>
      {/* TradingView Widget END */}
    </>
  );
};
export default NewComponent;
