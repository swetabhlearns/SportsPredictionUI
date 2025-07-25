import React from "react";

interface Order {
  price: string;
  shares: string;
  width: number;
}

const sellOrders: Order[] = [
  { price: "38¢", shares: "14,984.00", width: 83 },
  { price: "37¢", shares: "14,984.00", width: 66 },
  { price: "36¢", shares: "14,984.00", width: 58 },
  { price: "35.6¢", shares: "14,984.00", width: 50 },
  { price: "35¢", shares: "14,984.00", width: 42 },
];

const buyOrders: Order[] = [
  { price: "34¢", shares: "14,984.00", width: 25 },
  { price: "33.5¢", shares: "14,984.00", width: 33 },
  { price: "33.4¢", shares: "14,984.00", width: 42 },
  { price: "32¢", shares: "14,984.00", width: 58 },
  { price: "30¢", shares: "14,984.00", width: 75 },
];

const OrderBook: React.FC = () => (
  <div className="order-book">
    <div className="order-book-header">
      <span>Price</span>
      <span>Shares (CSK)</span>
    </div>
    <div className="order-book-sell-rows">
      {sellOrders.map((order, index) => (
        <div key={`sell-${index}`} className="order-row">
          <div className="order-bar sell" style={{ width: `${order.width}%` }}></div>
          <span className="order-book-sell-price">{order.price}</span>
          <span className="order-book-sell-shares">{order.shares}</span>
        </div>
      ))}
    </div>
    <div className="order-book-mid-row">
      <span className="order-book-mid-price">34.5¢</span>
      <span className="order-book-mid-spread">(Spread 1%)</span>
    </div>
    <div className="order-book-buy-rows">
      {buyOrders.map((order, index) => (
        <div key={`buy-${index}`} className="order-row">
          <div className="order-bar buy" style={{ width: `${order.width}%` }}></div>
          <span className="order-book-buy-price">{order.price}</span>
          <span className="order-book-buy-shares">{order.shares}</span>
        </div>
      ))}
    </div>
  </div>
);

export default OrderBook; 