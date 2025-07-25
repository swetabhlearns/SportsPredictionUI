import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import MarketHeader from "./components/MarketHeader";
import OrderBook from "./components/OrderBook";
import TradeWidget from "./components/TradeWidget";
import OrderTabs from "./components/OrderTabs";

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

const App: React.FC = () => {
  const permanentOrder: OpenOrder = {
    id: 'permanent',
    market: 'CSK / IPL Winner',
    type: 'buy',
    orderType: 'Limit',
    price: '30',
    amount: '0.01',
    filled: '0.00',
    date: '2025-06-03 14:57:23',
  };
  const [openOrders, setOpenOrders] = useState<OpenOrder[]>([]);

  const handlePlaceOrder = (
    order: Omit<OpenOrder, "id" | "date" | "market" | "filled">
  ) => {
    setOpenOrders((prev) => [
      {
        id: Math.random().toString(36).slice(2),
        market: "CSK / IPL Winner",
        filled: "0.00",
        date: new Date().toISOString().slice(0, 16).replace("T", " "),
        ...order,
      },
      ...prev,
    ]);
  };

  return (
    <>
      <div className="app-container">
        <Header />
        <main>
          <MarketHeader />
          <div className="layout-grid">
            <div>
              <TradeWidget onPlaceOrder={handlePlaceOrder} />
            </div>
            <OrderBook />
          </div>
          <div className="orderTapsWrapper">
            <OrderTabs openOrders={[...openOrders, permanentOrder]} />
          </div>
        </main>
        <BottomNav />
      </div>
    </>
  );
};

export default App;
