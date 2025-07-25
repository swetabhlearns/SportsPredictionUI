import React, { useState } from "react";
import Button from "./Button";

interface OpenOrder {
  id: string;
  market: string;
  type: "buy" | "sell";
  orderType: "Limit" | "Market";
  price: string;
  amount: string;
  filled: string;
  date: string;
}

type ActiveTab = "open" | "positions" | "history";

interface OrderTabsProps {
  openOrders: OpenOrder[];
}

const OrderTabs: React.FC<OrderTabsProps> = ({ openOrders }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("open");
  return (
    <div className="order-tabs">
      <nav className="tab-nav">
        <Button
          onClick={() => setActiveTab("open")}
          className={`tab-button ${activeTab === "open" ? "active" : ""}`}
        >
          OPEN ORDERS
        </Button>
        <Button
          onClick={() => setActiveTab("positions")}
          className={`tab-button ${activeTab === "positions" ? "active" : ""}`}
        >
          POSITIONS
        </Button>
        <Button
          onClick={() => setActiveTab("history")}
          className={`tab-button ${activeTab === "history" ? "active" : ""}`}
        >
          TRADE HISTORY
        </Button>
      </nav>
      <div>
        {activeTab === "open" && (
          <div>
            <div className="order-tabs-controls">
              <label className="order-tabs-checkbox-label">
                <input type="checkbox" className="order-tabs-checkbox" />
                <span>Hide Other Pairs</span>
              </label>
              <Button className="order-tabs-cancel-all">Cancel All</Button>
            </div>
            {openOrders.length === 0 ? (
              <div style={{ textAlign: "center", color: "var(--gray-500)" }}>
                No open orders.
              </div>
            ) : (
              openOrders.map((order) => (
                <div key={order.id} className="open-order-card">
                  <div className="open-order-header">
                    <div className="open-order-market-wrapper">
                      <span className="open-order-market">
                        CSK / IPL Winner
                      </span>
                      <div className="open-order-meta">
                        <span className="open-order-type">Limit / Buy</span>
                        <span className="open-order-date">{order.date}</span>
                      </div>
                    </div>
                    <div className="open-order-progress-wrapper">
                      <span className="open-order-progress">0%</span>
                      <Button className="open-order-cancel">Cancel</Button>
                    </div>
                  </div>
                  <div className="open-order-details">
                    <span className="open-order-filled">Filled / Amount</span>
                    <span className="open-order-price-label">
                      0.00 / <span className="open-order-price-label-value">0.01</span>
                    </span>
                  </div>
                  <div className="open-order-details-values">
                    <span className="open-order-filled-value">
                      {order.filled} / {order.amount}
                    </span>
                    <span className="open-order-price-value">
                      {order.price}¢
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
        {activeTab === "positions" && (
          <div style={{ textAlign: "center", color: "var(--gray-500)" }}>
            No active positions.
          </div>
        )}
        {activeTab === "history" && (
          <div style={{ textAlign: "center", color: "var(--gray-500)" }}>
            No trade history.
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTabs; 