import React from "react";
import homeSvg from "../assets/markets.svg";
import tradeSvg from "../assets/Trade-Icon.svg";
import portfolioSvg from "../assets/Wallet-Icon.svg";
import moreSvg from "../assets/more.svg";

const BottomNav: React.FC = () => (
  <nav className="bottom-nav">
    <a href="#markets" className="nav-item">
      <img src={homeSvg} alt="" /> <span>Markets</span>
    </a>
    <a href="#trade" className="nav-item active">
      <img src={tradeSvg} alt="" /> <span>Trade</span>
    </a>
    <a href="#portfolio" className="nav-item">
      <img src={portfolioSvg} alt="" /> <span>$30.38</span>
    </a>
    <a href="#more" className="nav-item">
      <img src={moreSvg} alt="" /> <span>More</span>
    </a>
  </nav>
);

export default BottomNav;
