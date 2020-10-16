import React from "react";
import { Header } from "./componenets/Header";
import { Balance } from "./componenets/Balance";
import { IncomeExpenses } from "./componenets/IncomeExpenses";
import { TransactionList } from "./componenets/TransactionList";
import { AddTransaction } from "./componenets/AddTransaction";
import "./App.css";
import { GlobalProvider } from "./Context/GlobalState";
 
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
