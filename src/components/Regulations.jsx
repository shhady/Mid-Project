import React from "react";
import { useEffect, useState } from "react";
import "./StocksTicks.css";
const dataReg = [
  {
    image:
      "https://images.financemagnates.com/images/NFA%27s%20logo_id_1110a5e4-c8a3-4c77-a1e6-945c468c86a3_size900.jpg",
    name: "United States",
    fullName: "National Futures Association (NFA)",
  },
  {
    image:
      "https://yt3.ggpht.com/ytc/AKedOLRc_nSNK_Bbw8f_2uL-2LbkjYe4vcBBX7yi_nWLwA=s900-c-k-c0x00ffffff-no-rj",
    name: "United Kingdom",
    fullName: " Financial Conduct Authority (FCA)",
  },

  {
    image:
      "https://www.glasslewis.com/wp-content/uploads/2018/09/ASIC_300x300.jpg",
    name: "Australia",
    fullName: " Australian Securities and Investment Commission (ASIC)",
  },
  {
    image:
      "https://static.wixstatic.com/media/a5c202_622231fea59d458d99af4587f09b027f~mv2.png/v1/fill/w_210,h_210,al_c,lg_1,enc_auto/Image-empty-state.png",
    name: "Switzerland",
    fullName: " Swiss Federal Banking Commission (SFBC)",
  },

  {
    image:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQG61nrcyZxPJg/company-logo_200_200/0/1519884049125?e=2147483647&v=beta&t=gtG4UMLFvP5471L4XLO9F7YrSTD1-1jtY4HNpUh2U68",
    name: "France",
    fullName: " Autorité des Marchés Financiers (AMF)",
  },
  {
    image:
      "data:image/png;base64,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",
    name: "Canada",
    fullName:
      "Investment Information Regulatory Organization of Canada (IIROC) ",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/en/1/11/CySEC_Logo.jpg",
    name: "Cyprus",
    fullName: " Cyprus Securities and Exchange Commission (Cysec)",
  },
  {
    image:
      "https://www.it-finanzmagazin.de/wp-content/uploads/2021/11/BaFin-516.png",
    name: "Germany",
    fullName: " Federal Financial Supervisory Authority (BaFIN)",
  },
];

const Regulations = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataReg);
  }, []);
  console.log(data);

  const insertCards = () => {
    return data.map((card) => {
      return (
        <div key={card.name} className="regCards">
          <div>
            <img
              alt="#"
              src={card.image}
              width="100px"
              height="50px"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div style={{ fontWeight: "bold" }}>{card.name}</div>
          <div>{card.fullName}</div>
        </div>
      );
    });
  };

  return (
    <div>
      <div style={{ marginLeft: "1rem" }}>
        <h1 style={{ textAlign: "center" }}>Trusted Regulators</h1>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {insertCards()}
          </div>
        </div>
        {/* <p>
          <b>United States</b>: National Futures Association (NFA) and Commodity
          Futures Trading Commission (CFTC)
          <br /> <b>United Kingdom</b>: Financial Conduct Authority (FCA) and
          Prudential Regulation Authority (PRA) <br />
          <b>Australia</b>: Australian Securities and Investment Commission
          (ASIC)
          <br />
          <b> Switzerland</b>: Swiss Federal Banking Commission (SFBC)
          <br /> <b>Germany</b>: Bundesanstalt für Finanzdienstleistungsaufsicht
          (BaFIN)
          <br /> <b>France</b>: Autorité des Marchés Financiers (AMF) <br />
          <b>Canada</b>: Investment Information Regulatory Organization of
          Canada (IIROC) <br />
          <b>Cyprus</b>: Cyprus Securities and Exchange Commission (Cysec)
        </p> */}
      </div>
    </div>
  );
};
export default Regulations;
