import React from "react";
import Header from "./components/Header";
// import WhyUs from "./components/WhyUs";
// import CryptoTicks from "./components/CryptoTicks";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import Bitcoin from "./components/Bitcoin";
import Ethereum from "./components/Ethereum";
import Ripple from "./components/Ripple";
import Blockchain from "./components/Blockchain";
import ChooseBrokerFullData from "./components/ChooseBrokerFullData";
import CryptoCurrencyFullData from "./components/CryptoCurrencyFullData";
import StockMarket from "./components/StockMarket";
import Commodities from "./components/Commodities";
import IndicesFullData from "./components/IndicesFullData";
import Forex from "./components/Forex";
import Portfolios from "./components/Portfolios";
function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/Bitcoin" exact component={Bitcoin} />
          <Route path="/Ethereum" exact component={Ethereum} />
          <Route path="/Ripple" exact component={Ripple} />
          <Route path="/Blockchain" exact component={Blockchain} />
          <Route path="/Commodities" exact component={Commodities} />
          <Route path="/IndicesFullData" exact component={IndicesFullData} />
          <Route path="/Forex" exact component={Forex} />
          <Route path="/Portfolios" exact component={Portfolios} />

          <Route
            path="/ChooseBrokerFullData"
            exact
            component={ChooseBrokerFullData}
          />
          <Route
            path="/CryptoCurrencyFullData"
            exact
            component={CryptoCurrencyFullData}
          />
          <Route path="/StockMarket" exact component={StockMarket} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;