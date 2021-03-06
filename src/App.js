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
import FundamentalAnalysis from "./components/FundamentalAnalysis";
import TechnicalAnalysis from "./components/TechnicalAnalysis";
import Indicators from "./components/Indicators";
import CandleSticks from "./components/CandleSticks";
import Patterns from "./components/Patterns";
import SupportResistance from "./components/SupportResistance";
import Fibonacci from "./components/Fibonacci";
import Dividends from "./components/Dividends";
import Leverage from "./components/Leverage";
import CryptoList from "./components/AllCryptosList";
import { AuthProvider } from "../src/context/AuthContext";
import QuestionsBridge from "./components/questionsBridge";
import GreenEnergy from "./components/GreenEnergy";
import EditingGenomes from "./components/EditingGenomes";
import SelfDrivingCars from "./components/SelfDrivingCars";
import Ecommerce from "./components/Ecommerce";
import Drones from "./components/Drones";
import FoodTech from "./components/FoodTech";

function App() {
  return (
    <div>
      <div>
        <AuthProvider>
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
            <Route path="/Indicators" exact component={Indicators} />
            <Route path="/Candle Sticks" exact component={CandleSticks} />
            <Route path="/Patterns" exact component={Patterns} />
            <Route path="/Fibonacci" exact component={Fibonacci} />
            <Route path="/Dividends" exact component={Dividends} />
            <Route path="/Leverage" exact component={Leverage} />
            <Route path="/CryptoList" exact component={CryptoList} />
            <Route path="/questions" exact component={QuestionsBridge} />
            <Route path="/GreenEnergy" exact component={GreenEnergy} />
            <Route path="/EditingGenomes" exact component={EditingGenomes} />
            <Route path="/SelfDrivingCars" exact component={SelfDrivingCars} />
            <Route path="/Ecommerce" exact component={Ecommerce} />
            <Route path="/Drones" exact component={Drones} />
            <Route path="/FoodTech" exact component={FoodTech} />

            <Route
              exact
              path="/ChartWidget"
              render={() => {
                window.location.href = "ChartWidget.html";
              }}
            />
            <Route
              exact
              path="/economicCalendar"
              render={() => {
                window.location.href = "economicCalendar.html";
              }}
            />
            <Route
              path="/SupportandResistance"
              exact
              component={SupportResistance}
            />
            <Route
              path="/Technical Analysis"
              exact
              component={TechnicalAnalysis}
            />
            <Route
              path="/Fundamental Analysis"
              exact
              component={FundamentalAnalysis}
            />
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
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
