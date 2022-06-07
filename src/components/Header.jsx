import React, { useRef } from "react";
import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import { AuthProvider } from "../context/AuthContext";
const Header = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const nameRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      console.log(emailRef.current.value, passwordRef.current.value);
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

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
        <div className="dropdown">
          <button className="dropbtn" style={{ fontWeight: "bold" }}>
            Log In
          </button>
          <div className="dropdown-content">
            <div>
              <label>Email</label>
              <input />
            </div>
            <div>
              <label>Password</label>
              <input />
            </div>
            <div>
              <button style={{ marginTop: "10px" }}>Log In</button>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn" style={{ fontWeight: "bold" }}>
            Sign Up
          </button>
          <div className="dropdown-content" style={{ width: "12rem" }}>
            {error && (
              <div
                style={{
                  backgroundColor: "#d77272",
                  borderRadius: "5px",
                  textAlign: "center",
                  height: "1.5rem",
                }}
              >
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div id="Username">
                <label>Full Name</label>
                <input type="text" ref={nameRef} />
              </div>
              <div id="email">
                <label>Email</label>
                <input type="email" ref={emailRef} />
              </div>
              <div id="password">
                <label>Password</label>
                <input type="password" ref={passwordRef} />
              </div>
              <div id="password-confirm">
                <label>Confirm Password</label>
                <input type="password" ref={passwordConfirmRef} />
              </div>

              <button
                style={{ marginTop: "10px" }}
                type="submit"
                disabled={loading}
              >
                Sign Up
              </button>
            </form>
          </div>
          {/* </AuthProvider> */}
        </div>
      </div>
      <div className="MenuMobile">
        <button>menu</button>
      </div>
    </div>
  );
};
export default Header;
