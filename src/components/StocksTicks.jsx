import React from "react";
import "./StocksTicks.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StocksTicks = () => {
  const [stocksData, setStocksData] = useState(null);
  const accessKey = "7e02917e72194c9eb998c42393377ebd";
  const url = `https://api.twelvedata.com/time_series?symbol=AAPL,AMZN,TSLA,GOOG,MSFT,FB&interval=1min&apikey=${accessKey}`;
  useEffect(() => {
    const search = async () => {
      const response = await axios.get(url);
      const stocksArr = Object.entries(response.data).map((e) => ({
        [e[0]]: e[1],
      }));
      setStocksData(stocksArr);
    };
    search();
  }, [url]);

  console.log(stocksData);

  if (!stocksData) return "Loading...";
  const insertDataAAPL = () => {
    return (
      <div>
        <div>
          <img src="/images/apple.png" alt="#" width="80px" />
        </div>
        <div>{stocksData[0].AAPL.meta.symbol}</div>
        {stocksData[0].AAPL.values[0].close >
        stocksData[0].AAPL.values[1].close ? (
          <div className="green">${stocksData[0].AAPL.values[0].close}</div>
        ) : (
          <div className="red">${stocksData[0].AAPL.values[0].close}</div>
        )}
      </div>
    );
  };
  const insertDataAMZN = () => {
    return (
      <div>
        <div>
          <img src="/images/amazon.png" alt="#" width="80px" />
        </div>
        <div>{stocksData[1].AMZN.meta.symbol}</div>
        {stocksData[1].AMZN.values[0].close >
        stocksData[1].AMZN.values[1].close ? (
          <div className="green">${stocksData[1].AMZN.values[0].close}</div>
        ) : (
          <div className="red">${stocksData[1].AMZN.values[0].close}</div>
        )}
      </div>
    );
  };
  const insertDataTSLA = () => {
    return (
      <div>
        <div>
          <img src="/images/tesla.png" alt="#" width="80px" />
        </div>
        <div>{stocksData[2].TSLA.meta.symbol}</div>
        {stocksData[2].TSLA.values[0].close >
        stocksData[2].TSLA.values[1].close ? (
          <div className="green">${stocksData[2].TSLA.values[0].close}</div>
        ) : (
          <div className="red">${stocksData[2].TSLA.values[0].close}</div>
        )}
      </div>
    );
  };
  const insertDataGOOG = () => {
    return (
      <div>
        <div>
          <img src="/images/google.png" alt="#" width="80px" />
        </div>
        <div>{stocksData[3].GOOG.meta.symbol}</div>
        {stocksData[3].GOOG.values[0].close >
        stocksData[3].GOOG.values[1].close ? (
          <div className="green">${stocksData[3].GOOG.values[0].close}</div>
        ) : (
          <div className="red">${stocksData[3].GOOG.values[0].close}</div>
        )}
      </div>
    );
  };

  const insertDataMSFT = () => {
    return (
      <div>
        <div>
          <img src="/images/msft.png" alt="#" width="80px" />
        </div>
        <div>{stocksData[4].MSFT.meta.symbol}</div>
        {stocksData[4].MSFT.values[0].close >
        stocksData[4].MSFT.values[1].close ? (
          <div className="green">${stocksData[4].MSFT.values[0].close}</div>
        ) : (
          <div className="red">${stocksData[4].MSFT.values[0].close}</div>
        )}
      </div>
    );
  };
  const insertDataFB = () => {
    return (
      <div>
        <div>
          <img src="/images/fb.png" alt="#" width="80px" />
        </div>
        <div>{stocksData[5].FB.meta.symbol}</div>
        {stocksData[5].FB.values[0].close > stocksData[5].FB.values[1].close ? (
          <div className="green">${stocksData[5].FB.values[0].close}</div>
        ) : (
          <div className="red">${stocksData[5].FB.values[0].close}</div>
        )}
      </div>
    );
  };
  return (
    <div className="containerStocks">
      <div className="stockcards" style={{ border: "3px solid #333" }}>
        <div style={{ textAlign: "center", width: "100%" }}>
          <h2>Stocks</h2>
        </div>
        <div className="stockcards">
          <div className="rankedStocks">
            <div
              className="Cardstocks"
              style={{ margin: "auto", marginTop: "1rem" }}
            >
              {insertDataAAPL()}
            </div>
            <div
              className="Cardstocks"
              style={{ margin: "auto", marginTop: "1rem" }}
            >
              {insertDataAMZN()}
            </div>
            <div
              className="Cardstocks"
              style={{ margin: "auto", marginTop: "1rem" }}
            >
              {insertDataTSLA()}
            </div>
            <div
              className="Cardstocks"
              style={{ margin: "auto", marginTop: "1rem" }}
            >
              {insertDataGOOG()}
            </div>
            <div
              className="Cardstocks"
              style={{ margin: "auto", marginTop: "1rem" }}
            >
              {insertDataMSFT()}
            </div>
            <div
              className="Cardstocks"
              style={{ margin: "auto", marginTop: "1rem" }}
            >
              {insertDataFB()}
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: "7%" }}>
          <Link to="/StockMarket">
            <button className="btn-allCryptos" style={{ width: "40%" }}>
              Learn More
            </button>
          </Link>
          <Link to="/ChartWidget">
            <button className="btn-allCryptos" style={{ width: "40%" }}>
              Chart
            </button>
          </Link>
        </div>
      </div>
      <div
        className="porfolioCards"
        style={{
          border: "3px solid #333",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="PorfolioCards"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div>
            {" "}
            <h2 style={{ marginLeft: "1rem", textAlign: "center" }}>
              Investment Portfolios
            </h2>
          </div>
        </div>{" "}
        <div>
          <div className="PorfolioCards">
            <div className="portfoliocard" style={{ margin: "auto" }}>
              <img
                src="https://www.coe.int/documents/10518249/62196672/Genom-Editing/c68fa21f-989a-fef0-2bf6-723be40c55fd"
                style={{ borderRadius: "10px" }}
                alt="#"
              />
              <button className="btn-allCryptos" style={{ width: "100%" }}>
                Editing Genomes
              </button>
            </div>
            <div
              className="portfoliocard"
              style={{ margin: "auto", marginTop: "1rem" }}
            >
              <img
                src="https://i.hurimg.com/i/hdn/75/0x0/62271ff14e3fe01bfcb3c7a8.jpg"
                style={{ borderRadius: "10px" }}
                alt="#"
              />
              <button className="btn-allCryptos" style={{ width: "100%" }}>
                Green Energy
              </button>
            </div>
            <div
              className="portfoliocard"
              style={{ margin: "auto", marginTop: "1rem" }}
            >
              <img
                src="https://valientemott.com/wp-content/uploads/2020/05/self-driving-cars-1030x564.jpg"
                style={{ borderRadius: "10px" }}
                alt="#"
              />
              <button className="btn-allCryptos" style={{ width: "100%" }}>
                Self Driving Cars
              </button>
            </div>
            <div
              className="portfoliocard"
              style={{ margin: "auto", marginTop: "1rem" }}
            >
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
          <div style={{ paddingLeft: "7%" }}>
            {" "}
            <Link to="Portfolios">
              <button className="btn-allCryptos" style={{ width: "40%" }}>
                Learn More
              </button>
              <button className="btn-allCryptos" style={{ width: "40%" }}>
                More Portfolios
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StocksTicks;
