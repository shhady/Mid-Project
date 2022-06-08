import React from "react";
import axios from "axios";
import "./CryptoTicks.css";
import { useState, useEffect } from "react";

const CryptoList = () => {
  const [allCryptos, setAllCryptos] = useState([]);
  const [filteredCrypto, setFilteredCrypto] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const search = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setAllCryptos(response.data);
      setFilteredCrypto(response.data);
    };
    search();
  }, []);
  console.log(allCryptos);
  useEffect(() => {
    const filtered = allCryptos.filter((coin) =>
      coin.name.toLowerCase().includes(term)
    );
    setFilteredCrypto(filtered);
    console.log(filtered);
  }, [term, allCryptos]);

  if (!allCryptos) return null;
  if (!filteredCrypto) return null;
  const insertData = () => {
    return filteredCrypto.map((crypto) => {
      return (
        <div
          key={crypto.symbol}
          style={{
            // display: "flex",
            // justifyContent: "space-between",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",

            border: "1px solid #333",
          }}
        >
          <div style={{ height: "fit-content" }} className="imageAndName">
            <img
              src={crypto.image}
              alt={crypto.id}
              height="20px"
              width="20px"
            />
            {"  "}
            {crypto.name}
            {"    "}
            <span className="symbols" style={{ color: "grey" }}>
              {crypto.symbol.toUpperCase()}
            </span>
          </div>
          <div style={{ textAlign: "start" }}>
            ${crypto.current_price.toLocaleString()}
          </div>
          <div>
            {" "}
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
          <div>${crypto.market_cap.toLocaleString()}</div>
        </div>
      );
    });
  };
  return (
    <div className="MainContainer">
      <h1 style={{ textAlign: "center" }}>Crypto List</h1>
      <input
        type="text"
        placeholder="Search Coins"
        className="search"
        style={{ backgroundColor: "#d3d3d3", textAlign: "center" }}
        onChange={(e) => setTerm(e.target.value)}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          border: "3px solid #333",
          fontWeight: "bold",
        }}
      >
        <div>Name</div>
        <div>Price</div>
        <div>24h change</div>
        <div>Market Cap</div>
      </div>
      <div>{insertData()}</div>
    </div>
  );
};
export default CryptoList;
