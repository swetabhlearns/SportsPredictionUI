import React from "react";
import logoPng from "../assets/logo.png";
import starSvg from "../assets/Star.svg";
import notificationSvg from "../assets/notifications.svg";

const Header: React.FC = () => (
  <header className="headerStyle">
    <img src={logoPng} alt="Logo" className="headerLogoStyle" />
    <div className="header-actions">
      <img src={starSvg} alt="Logo" className="headerSvgStyle" />
      <img src={notificationSvg} alt="Logo" className="headerSvgStyle" />
    </div>
  </header>
);

export default Header; 