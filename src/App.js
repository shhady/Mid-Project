import React from "react";
import Header from "./components/Header";
import WhyUs from "./components/WhyUs";
import CryptoTicks from "./components/CryptoTicks";
function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="WhyUs">
        <WhyUs />
        <CryptoTicks />
      </div>
    </div>
  );
}

export default App;
