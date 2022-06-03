import React from "react";
import "./styleCryptoData.css";
const IndicesFullData = () => {
  return (
    <div className="MainContainer">
      <h1>indices</h1>
      <p>
        Stock market indices around the world are powerful indicators of global
        economies and country-specific. In the US, the S&P 500, Dow Jones
        Industrial Average, and Nasdaq Composite are the three most followed
        indices by both media and investors In addition to these three indices,
        there are nearly 5,000 other indices that include US stocks. With so
        many indices, the US market has a wide range of methodologies and
        classifications that can serve a wide range of purposes. The media often
        reports on the trend of the top three indicators regularly throughout
        the day with major news presented as contributors and critics.
        Investment managers use indicators as benchmarks for performance
        reports. Meanwhile, investors of all kinds use indicators as proxies of
        performance and guides to customization. Indices also form the basis for
        passive index investing which is mostly done through exchange-traded
        funds that specifically track indices.
      </p>
      <h3>S&P 500</h3>
      <p>
        The Standard & Poor's 500 Index (commonly known as the S&P 500) is an
        index of 500 of the largest companies in US stocks that is chosen for
        the index primarily by capitalization, but the founding committee also
        takes into account other factors including liquidity, public flotation,
        rating sector, financial viability and history trading. The S&P 500
        represents nearly 80% of the total value of the US stock market.
        Overall, the S&P 500 gives a good indication of the movement in the US
        market as a whole. Indices are usually market-weighted or
        price-weighted. The S&P 500 is a market-weighted index (also referred to
        as a capitalization-weighted). Therefore, each share in the index is
        represented in proportion to its total market capital. In other words,
        if the total market value of the 500 companies in the S&P 500 decreases
        by 10%, the value of the index also decreases by 10%. In general,
        understanding how market indicators are created and used can help add
        meaning and clarity to a wide variety of investment methods.
      </p>
      <h3>Dow Jones Industrial Average</h3>
      <p>
        The Dow Jones Industrial Average (DJIA) is one of the oldest, most
        well-known and most widely used indices in the world. It includes shares
        of 30 of the largest and most influential companies in the United States
        DJIA is a price-weighted indicator. It was originally calculated by
        taking the total stock price of each company in the index and dividing
        this amount by the number of companies. Unfortunately, calculating the
        pointer is no longer so simple. Over the years, stock splits, spin-offs,
        and other events have led to changes in the divisor (a numerical value
        calculated by Dow Jones used to calculate the DJIA level) making it a
        very small number (less than 0.2). The Dow Jones Industrial Average
        represents about a quarter of the value of the entire US stock market,
        but the percent change in the Dow should not be interpreted as a clear
        indication that the entire market has fallen by the same percentage.
        This is due to the Dow's price weighting function. The basic problem is
        that a $1 change in the $120 share price in the index will have a
        greater impact on the Dow Jones Industrial Average than a $1 change in
        the $20 stock price, even though the highest-priced stock only changed
        0.8% and the other 5 %. The change in the Dow Jones index represents
        changes in investor expectations of the profits and risks of the large
        companies included in the index. Since the general attitude toward
        large-cap stocks often differs from that toward smaller stocks,
        international stocks, or technology stocks, the Dow should not be used
        to represent sentiment in other areas of the market. In general, the Dow
        is known for listing the top leading companies in the US markets with
        regular fixed dividends. So, while it is not necessarily a
        representation of the broad market, it can be a representation of the
        preferred stock market and dividend value.
      </p>
      <h3>NASDAQ index</h3>
      <p>
        Most investors know that NASDAQ is the exchange where technology stocks
        are traded. The Nasdaq Composite Index is a market value-weighted index
        of all stocks traded on the Nasdaq Stock Exchange, and this index
        includes some companies that are not based in the United States. Known
        for being tech-heavy, this indicator includes many sub-segments across
        the technology market including software, biotechnology, semiconductors,
        and more. Although this index is known for a large portion of technology
        stocks, it includes some securities from other industries as well.
        Investors will also find securities from a variety of sectors as well,
        including financial, industrial, insurance, transportation, and more.
        The Nasdaq Composite includes large and small companies, but unlike the
        Dow and S&P 500, it also includes many speculative companies with small
        market capitalization. Thus, its movement generally indicates the
        performance of the technology industry.
      </p>
    </div>
  );
};
export default IndicesFullData;
