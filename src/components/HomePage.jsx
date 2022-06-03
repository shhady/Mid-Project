import React from "react";
import WhyUs from "./WhyUs";
import CryptoTicks from "./CryptoTicks";
import StocksTicks from "./StocksTicks";
import Regulations from "./Regulations";
import ChooseBroker from "./ChooseBroker";
const HomePage = () => {
  return (
    <div className="WhyUs">
      <WhyUs />
      <CryptoTicks />
      <StocksTicks />
      <Regulations />
      <ChooseBroker />
    </div>
  );
};

export default HomePage;
