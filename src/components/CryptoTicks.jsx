import React from "react";
import "./CryptoTicks.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const CryptoTicks = () => {
  const [cryptosData, setCryptosData] = useState(null);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false";
  useEffect(() => {
    const search = async () => {
      const response = await axios.get(url);
      setCryptosData(response.data);
    };
    search();
  }, []);

  console.log(cryptosData);
  if (!cryptosData) return null;
  const CryptoTicksCards = () => {
    return cryptosData.map((crypto) => {
      return (
        <div
          className="top"
          key={crypto.name}
          style={{ margin: "auto", marginTop: "1rem" }}
        >
          <img src={crypto.image} alt="" className="cryptoImg" />
          <div>
            <h5>{crypto.name}</h5>
            <p>${crypto.current_price.toLocaleString()}</p>

            {crypto.price_change_percentage_24h < 0 ? (
              <span className="red">
                %{crypto.price_change_percentage_24h.toFixed(2)}
              </span>
            ) : (
              <span className="green">
                %{crypto.price_change_percentage_24h.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="Featured">
      <div className="container">
        <div className="left">
          <div className="blockchain">
            <Link to="/Blockchain">
              {" "}
              <button className="btn-allCryptos" style={{ width: "150px" }}>
                Blockchain
              </button>{" "}
            </Link>
          </div>

          <div className="knowMore">
            <h3 style={{ textAlign: "center" }}>
              Everything you need to know about{" "}
            </h3>
            <Link to="/Bitcoin">
              <button className="btn-allCryptos">Bitcoin</button>
            </Link>
            <Link to="/Ethereum">
              <button className="btn-allCryptos">Ethereum</button>
            </Link>
          </div>
          <Link to="/Ripple">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button className="btn-allCryptos">Ripple</button>
            </div>
          </Link>
        </div>
        <div className="right">
          <div className="card">
            <div>
              <h2 style={{ textAlign: "center" }}>
                * Top 8 Crypto coins ranked by market cap
              </h2>
            </div>
            <div className="cryptocards">
              {CryptoTicksCards()}
              <Link to="CryptoList">
                <button className="btn-allCryptos" style={{ width: "20rem" }}>
                  See more Cryptos
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CryptoTicks;
