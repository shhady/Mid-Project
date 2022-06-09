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
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const nameRef = useRef();
  const [menu, setMenu] = useState(false);
  const [signUp, setSignUp] = useState("Sign Up");
  const [logIn, setLogIn] = useState("Log In");
  const [showDrop, setShowDrop] = useState(true);
  const emailRefLog = useRef();
  const passwordRefLog = useRef();
  const { logout } = useAuth();
  const { currentUser } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      console.log(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value
      );
      setSignUp(nameRef.current.value);
      setShowDrop(!showDrop);
      setLogIn("");
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError(
        "Failed to create an account, Password must be at least 6 characters"
      );
      setSignUp("Sign Up");
      setLogIn("Log In");
      setShowDrop(true);
    }
    setLoading(false);
  }
  async function handleSubmitLogIn(e) {
    e.preventDefault();
    // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //   return setError("Passwords do not match");
    // }
    try {
      console.log(emailRefLog.current.value, passwordRefLog.current.value);
      setSignUp("welcome Back");
      setShowDrop(!showDrop);
      setLogIn("");
      setError("");
      setLoading(true);
      await login(emailRefLog.current.value, passwordRefLog.current.value);
    } catch {
      setError("Failed to sign in");
      setSignUp("Sign Up");
      setLogIn("Log In");
      setShowDrop(true);
    }
    setLoading(false);
  }

  async function handleLogOut() {
    setError("");
    try {
      await logout();
      setSignUp("Sign Up");
      setLogIn("Log In");
      setShowDrop(true);
    } catch {
      setError("failed to log out");
    }
  }
  return (
    <div className="HeaderContainer">
      <div style={{ fontSize: ".8rem" }}>
        <Link to="/">
          <img src="./images/logo.png" height="60px" width="60px" alt="#" />
        </Link>
      </div>
      <div className="titles-header">
        <Link to="/">
          <button className="btn-header"> Home </button>
        </Link>
        <div className="dropdown">
          <button className="dropbtn">Brokers</button>
          <div className="dropdown-content">
            <a href="https://www.etoro.com" target="_blank" rel="noreferrer">
              eToro
            </a>
            <a href="https://www.fxcm.com" target="_blank" rel="noreferrer">
              FXCM
            </a>
            <a
              href="https://www.interactivebrokers.com"
              target="_blank"
              rel="noreferrer"
            >
              Interactive Brokers
            </a>
            {/* <h5>eToro</h5> */}
            {/* <h5>FXCM</h5>
            <h5>Interactive Brokers</h5> */}
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
        {/* <button className="btn-header"> Contact Us </button> */}
      </div>
      <div>
        <div className="dropdown">
          <button className="dropbtn" style={{ fontWeight: "bold" }}>
            {logIn}
          </button>
          {showDrop && (
            <div className="dropdown-content">
              {error && (
                <div
                  style={{
                    backgroundColor: "#d77272",
                    borderRadius: "5px",
                    textAlign: "center",
                    height: "fit-content",
                  }}
                >
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmitLogIn}>
                <div>
                  <label>Email</label>
                  <input type="email" ref={emailRefLog} />
                </div>
                <div>
                  <label>Password</label>
                  <input type="password" ref={passwordRefLog} />
                </div>
                <div>
                  <button style={{ marginTop: "10px" }}>Log In</button>
                </div>
              </form>
            </div>
          )}
        </div>
        <div className="dropdown">
          {currentUser ? (
            <div></div>
          ) : (
            <button className="dropbtn" style={{ fontWeight: "bold" }}>
              {signUp}
            </button>
          )}

          {showDrop && (
            <div className="dropdown-content">
              {error && (
                <div
                  style={{
                    backgroundColor: "#d77272",
                    borderRadius: "5px",
                    textAlign: "center",
                    height: "fit-content",
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
          )}
          {/* </AuthProvider> */}
          {currentUser && (
            <div>
              <button onClick={handleLogOut}>Log Out</button>
            </div>
          )}
        </div>
      </div>
      <div className="MenuMobile">
        <button
          onClick={() => {
            setMenu(true);
          }}
        >
          menu
        </button>
        <div className="MenuMobileTransition">
          {menu && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#eeeeee",
                justifyContent: "space-evenly",
                position: "fixed",
                top: "0px",
                height: "100vh",
                width: "110vw",
                marginLeft: "-80vw",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <button
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    X
                  </button>
                </div>
                <div>
                  <Link to="/">
                    <button
                      style={{ textAlign: "start", fontWeight: "bold" }}
                      className="btn-header"
                      onClick={() => {
                        setMenu(false);
                      }}
                    >
                      Home{" "}
                    </button>
                  </Link>
                </div>
              </div>
              <div
                className="dropdown"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <button className="dropbtn">Brokers</button>
                {/* <div className="dropdown-content" style={{ width: "100px" }}> */}

                <a
                  href="https://www.etoro.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  eToro
                </a>
                <a
                  href="https://www.fxcm.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  FXCM
                </a>
                <a
                  href="https://www.interactivebrokers.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Interactive Brokers
                </a>
                {/* </div> */}
              </div>
              <div
                className="dropdown"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <button className="dropbtn">Markets</button>
                {/* <div className="dropdown-content"> */}
                <Link
                  to="/CryptoCurrencyFullData"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Crypto Currency
                </Link>
                <Link
                  to="/Forex"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Forex
                </Link>
                <Link
                  to="/Commodities"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Commodities
                </Link>
                <Link
                  to="/StockMarket"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Stocks
                </Link>
                <Link
                  to="/IndicesFullData"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Indices
                </Link>
                <Link
                  to="/Portfolios"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Portfolios
                </Link>
                {/* </div> */}
              </div>
              <div
                className="dropdown"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <button className="dropbtn">Analysis</button>
                {/* <div className="dropdown-content"> */}
                <Link
                  to="/Fundamental Analysis"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Fundamental Analysis
                </Link>
                <Link
                  to="/Technical Analysis"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Technical Analysis
                </Link>
                <Link
                  to="/Indicators"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Indicators
                </Link>
                <Link
                  to="/Patterns"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Patterns
                </Link>
                <Link
                  to="/Candle Sticks"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Candle Sticks
                </Link>
                <Link
                  to="/SupportandResistance"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Support and Resistance
                </Link>
                <Link
                  to="/Fibonacci"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Fibonacci
                </Link>
                {/* </div> */}
              </div>
              <div
                className="dropdown"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <button className="dropbtn">Tools</button>
                {/* <div className="dropdown-content"> */}
                <Link
                  to="ChartWidget"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Chart
                </Link>
                <Link
                  to="economicCalendar"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Economic Calendar
                </Link>
                {/*<a href="#">Top Movers</a>
            <a href="#">Crypto Market</a> */}
                <Link
                  to="/Dividends"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Dividends
                </Link>
                <Link
                  to="Leverage"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Leverage
                </Link>
                {/* </div> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
