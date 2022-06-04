import React from "react";
import "./StocksTicks.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StocksTicks = () => {
  const [stocksData, setStocksData] = useState([1, 2, 3, 4, 5, 6]);
  // const accessKey = "7e02917e72194c9eb998c42393377ebd";
  // const url = `https://api.twelvedata.com/time_series?symbol=AAPL,AMZN,GOOG,MSFT,TSLA,NKE&interval=1min&apikey=${accessKey}`;
  // useEffect(() => {
  //   const search = async () => {
  //     const response = await axios.get(url);
  //     // setStocksData(response.data);
  //   };
  //   // search();
  // }, []);

  console.log(stocksData);
  if (!stocksData) return null;
  const insertData = () => {
    return stocksData.map((Stock) => {
      return (
        <div className="Cardstocks" key={Stock}>
          {stocksData}
        </div>
      );
    });
  };

  return (
    <div className="containerStocks">
      <div className="stockcards" style={{ border: "3px solid #333" }}>
        <div style={{ textAlign: "center", width: "100%" }}>
          <h2>Stocks</h2>
        </div>
        <div>
          <div className="rankedStocks">{insertData()}</div>
        </div>
      </div>
      <div
        className="porfolioCards"
        style={{ border: "3px solid #333", display: "flex" }}
      >
        <div
          className="PorfolioCards"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div>
            {" "}
            <h2 style={{ marginLeft: "1rem" }}>Investment Portfolios</h2>
          </div>
          <div>
            {" "}
            <Link to="Portfolios">
              <button className="btn-allCryptos" style={{ width: "70%" }}>
                Learn More
              </button>
            </Link>
          </div>
        </div>{" "}
        <div>
          <div className="PorfolioCards">
            <div className="portfoliocard">
              <img
                src="https://www.coe.int/documents/10518249/62196672/Genom-Editing/c68fa21f-989a-fef0-2bf6-723be40c55fd"
                style={{ borderRadius: "10px" }}
                alt="#"
              />
              <button className="btn-allCryptos" style={{ width: "100%" }}>
                Editing Genomes
              </button>
            </div>
            <div className="portfoliocard">
              <img
                src="https://i.hurimg.com/i/hdn/75/0x0/62271ff14e3fe01bfcb3c7a8.jpg"
                style={{ borderRadius: "10px" }}
                alt="#"
              />
              <button className="btn-allCryptos" style={{ width: "100%" }}>
                Green Energy
              </button>
            </div>
            <div className="portfoliocard">
              <img
                src="https://valientemott.com/wp-content/uploads/2020/05/self-driving-cars-1030x564.jpg"
                style={{ borderRadius: "10px" }}
                alt="#"
              />
              <button className="btn-allCryptos" style={{ width: "100%" }}>
                Self Driving Cars
              </button>
            </div>
            <div className="portfoliocard">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BIphnvV3nFJZMABURsNHvF6vVCGPMnG9JQ&usqp=CAU"
                style={{ borderRadius: "10px" }}
                alt="#"
              />
              <button className="btn-allCryptos" style={{ width: "100%" }}>
                Drones
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StocksTicks;
