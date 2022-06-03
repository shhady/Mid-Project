import React from "react";
import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <button className="btn-header"> Home </button>
        </Link>
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
            <Link to="/CryptoCurrencyFullData">Crypto Currency</Link>
            <Link to="/Forex">Forex</Link>
            <Link to="/Commodities">Commodities</Link>
            <Link to="/StockMarket">Stocks</Link>
            <Link to="/IndicesFullData">Indices</Link>
            <Link to="/Portfolios">Portfolios</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Analysis</button>
          <div className="dropdown-content">
            <Link to="/Fundamental Analysis">Fundamental Analysis</Link>
            <Link to="Technical Analysis">Technical Analysis</Link>
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
