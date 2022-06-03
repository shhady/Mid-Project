import React from "react";
import "./CryptoTicks.css";
import { Link } from "react-router-dom";
const ChooseBroker = () => {
  return (
    <div style={{ textAlign: "center", backgroundColor: "rgb(202, 202, 202)" }}>
      <h2> 7 Steps to choose trusted broker</h2>
      <p>
        1. Regulations <br />
        2. Transaction costs <br />
        3. Deposit and withdrawal
        <br /> 4. Trading platform
        <br /> 5. Execution speed
        <br /> 6. customers service
        <br /> 7.Educational courses
      </p>
      <Link to="/ChooseBrokerFullData">
        <button className="btn-allCryptos">Read More</button>
      </Link>
    </div>
  );
};
export default ChooseBroker;
