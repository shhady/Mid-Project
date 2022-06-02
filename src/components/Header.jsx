import React from "react";
import "./style.css";
import { useState } from "react";
const Header = () => {
  // const [click, setClick] = useState(false);
  // const [menu, setMenu] = useState("menu");

  // const menuClick = () => {
  //   setClick(!click);
  // };
  return (
    <div className="HeaderContainer">
      <div style={{ fontSize: ".8rem" }}>topPickInvestment</div>
      <div className="titles-header">
        <button className="btn-header"> Home </button>
        <div className="dropdown">
          <button className="dropbtn">Brokers</button>
          <div className="dropdown-content">
            <a href="#">eToro</a>
            <a href="#">FXCM</a>
            <a href="#">Interactive Brokers</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Markets</button>
          <div className="dropdown-content">
            <a href="#">Crypto Currency</a>
            <a href="#">Forex</a>
            <a href="#">Commodities</a>
            <a href="#">Stocks</a>
            <a href="#">Indices</a>
            <a href="#">Portfolios</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Analysis</button>
          <div className="dropdown-content">
            <a href="#">Fundamental Analysis</a>
            <a href="#">Technical Analysis</a>
            <a href="#">Indicators</a>
            <a href="#">Patterns</a>
            <a href="#">Candle Sticks</a>
            <a href="#">Support and Resistance</a>
            <a href="#">Fibonacci</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Tools</button>
          <div className="dropdown-content">
            <a href="#">Graphs</a>
            <a href="#">Economic Calendar</a>
            <a href="#">Top Movers</a>
            <a href="#">Crypto Market</a>
            <a href="#">Dividends</a>
            <a href="#">Leverage</a>
          </div>
        </div>
        <button className="btn-header"> Contact Us </button>
      </div>
      <div>
        <button className="btn-openAccount">Subscribe</button>
      </div>
      <div className="MenuMobile">
        <button>menu</button>
      </div>
    </div>
  );
};
export default Header;
