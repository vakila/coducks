import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RUBBER_DUCKY, SCROOGE } from "./data.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App product={RUBBER_DUCKY} user={SCROOGE} />
  </React.StrictMode>
);
