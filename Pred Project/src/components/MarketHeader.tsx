import React from "react";
import cskLogo from "../assets/cskLogo.png";
import barChartSvg from "../assets/barchart.svg";

const MarketHeader: React.FC = () => (
  <div className="market-header">
    <div className="market-header-content">
      <div className="market-info">
        <img src={cskLogo} alt="CSK Logo" />
        <div className="marketHeader">
          <h1>Chennai Super Kings</h1>
          <p>$65.2M Vol.</p>
        </div>
      </div>
      <div className="marketHeaderStatsWrapper">
        <div className="marketHeaderStats">
          <p>34¢</p>
          <p className="percentageStats">+0.84%</p>
        </div>
        <img src={barChartSvg} className="barChartStyle" />
      </div>
    </div>
  </div>
);

export default MarketHeader; 