import React from "react";
import "./style.css";
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
            <h5>eToro</h5>

            <h5>FXCM</h5>
            <h5>Interactive Brokers</h5>
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
            <Link to="/Technical Analysis">Technical Analysis</Link>
            <Link to="/Indicators">Indicators</Link>
            <Link to="/Patterns">Patterns</Link>
            <Link to="/Candle Sticks">Candle Sticks</Link>
            <Link to="/SupportandResistance">Support and Resistance</Link>
            <Link to="/Fibonacci">Fibonacci</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Tools</button>
          <div className="dropdown-content">
            <Link to="ChartWidget">Chart</Link>
            <Link to="economicCalendar">Economic Calendar</Link>
            {/*<a href="#">Top Movers</a>
            <a href="#">Crypto Market</a> */}
            <Link to="/Dividends">Dividends</Link>
            <Link to="Leverage">Leverage</Link>
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
