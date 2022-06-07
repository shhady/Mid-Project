import React from "react";
import WhyUs from "./WhyUs";
import CryptoTicks from "./CryptoTicks";
import StocksTicks from "./StocksTicks";
import Regulations from "./Regulations";
import ChooseBroker from "./ChooseBroker";
import SocialFollow from "./SocialFollow";
const HomePage = () => {
  return (
    <div className="WhyUs">
      <WhyUs />
      <CryptoTicks />
      <StocksTicks />
      <Regulations />
      <ChooseBroker />
      <SocialFollow />
    </div>
  );
};

export default HomePage;
