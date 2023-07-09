import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import "./reset.css";
import App from "./App";
import { RUBBER_DUCKY, SCROOGE } from "./data";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App product={RUBBER_DUCKY} user={SCROOGE} />
  </React.StrictMode>
);
