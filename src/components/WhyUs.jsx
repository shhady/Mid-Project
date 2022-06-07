import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const WhyUs = () => {
  return (
    <div className="Hero">
      <div className="heroContainer">
        {/* left side */}
        <div style={{ width: "50%" }}>
          <h1 style={{ textAlign: "center", marginTop: "40px" }}>
            EXPLORE THE FINANCIAL MARKETS
          </h1>
          <h5 style={{ textAlign: "center" }}>
            Crypto Currencies, Stocks, Indices, Forex, Commodities, ETFs,
            Portfolios...{" "}
          </h5>
        </div>

        <div style={{ width: "30%" }}>
          <Link to="questions">
            <button
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Questions & Answers
            </button>
          </Link>
        </div>
      </div>
      {/* right side */}
      <div className="tickImages">
        <img
          src="https://www.etoro.com/wp-content/uploads/2019/04/free-stocks-page1.png"
          height="80%"
          width="100%"
          alt="ticks"
        />
      </div>
    </div>
  );
};

export default WhyUs;
