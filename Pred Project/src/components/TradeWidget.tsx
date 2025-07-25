import React, { useState } from "react";
import infoSvg from "../assets/info-svg.svg";
import chevDownSvg from "../assets/chevDown.svg";
import Button from "./Button";
import { toast } from "react-toastify";
import Slider from "./Slider/Slider"

interface TradeWidgetProps {
  onPlaceOrder: (
    order: Omit<any, "id" | "date" | "market" | "filled">
  ) => void;
}

type TradeType = "buy" | "sell";

const TradeWidget: React.FC<TradeWidgetProps> = ({ onPlaceOrder }) => {
  const [tradeType, setTradeType] = useState<TradeType>("buy");
  const [sharesPercentage, setSharesPercentage] = useState<number>(0);
  const [price, setPrice] = useState<string>("34.5");
  const [shares, setShares] = useState<string>("0");

  const handleBuy = () => {
    if (!price || !shares || Number(shares) <= 0 || Number(price) <= 0) return;
    onPlaceOrder({
      type: tradeType,
      orderType: "Limit",
      price,
      amount: shares,
    });
    toast.success("Order filled!", { position: "top-center" });
    setShares("0");
  };

  return (
    <div className="trade-widget">
      <div className="toggle-group">
        <Button
          onClick={() => setTradeType("buy")}
          className={`toggle-btn buy ${tradeType === "buy" ? "active" : ""}`}
        >
          BUY/LONG
        </Button>
        <Button
          onClick={() => setTradeType("sell")}
          className={`toggle-btn sell ${tradeType === "sell" ? "active" : ""}`}
        >
          SELL/SHORT
        </Button>
      </div>
      <div className="input-group" style={{ cursor: "pointer" }}>
        <div className="input-dropdown-preview">
          <img src={infoSvg} className="infoSvgStyle" />
          <span>Limit</span>
        </div>
        <img src={chevDownSvg} alt="Down Arrow" />
      </div>
      <div className="availableForTrade">
        <span>Available to Trade</span>
        <span>0.00 USDC</span>
      </div>
      <div className="input-group">
        <div className="input-price-trade">
          <input
            id="price"
            name="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="input-field"
            placeholder="Price (USD)"
          />
          <span className="input-mid-link">
            <span className="input-mid-value">34.95</span>
            <span className="input-mid-underline">Mid</span>
          </span>
        </div>
      </div>
      <div className="input-group">
        <input
          id="shares"
          name="shares"
          type="number"
          value={shares}
          onChange={(e) => setShares(e.target.value)}
          className="input-field"
          placeholder="Shares"
        />
      </div>
      <div className="slider-group" style={{width: '100%'}}>
        <Slider
          value={sharesPercentage}
          onChange={setSharesPercentage}
          min={0}
          max={100}
          step={1}
        />
        <span className="slider-value">{sharesPercentage} %</span>
      </div>
      <div className="borderOrderSummary"></div>
      <div className="order-summary">
        <div className="order-summary-row">
          <span className="order-summary-label">Order Total</span>
          <span className="order-summary-value">$0</span>
        </div>
        <div className="order-summary-row">
          <span className="order-summary-label">To Win 💵</span>
          <span className="order-summary-value">$0</span>
        </div>
      </div>
      <Button
        className="trade-submit-btn"
        onClick={handleBuy}
        disabled={
          tradeType !== "buy" ||
          !price ||
          !shares ||
          Number(shares) <= 0 ||
          Number(price) <= 0
        }
      >
        {tradeType === "buy" ? "BUY/LONG CSK" : "SELL/SHORT CSK"}
      </Button>
    </div>
  );
};

export default TradeWidget; 