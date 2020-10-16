import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const money = transactions.map(transaction => transaction.amount);
  const total = money.reduce((acc,item) => (acc += item), 0).toFixed(2);

  return (
    <div className="container">
      <h4>Your Balance</h4>
  <h1>₹{total}</h1>
    </div>
  );
};

