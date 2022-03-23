import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

import { DAppProvider } from "@usedapp/core";

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={{}}>
  <TransactionsProvider>
    <App />
  </TransactionsProvider>
  </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
