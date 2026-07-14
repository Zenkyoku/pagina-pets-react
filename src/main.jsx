import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const baseUrl = import.meta.env.BASE_URL;
const rootStyles = document.documentElement.style;
rootStyles.setProperty("--bg-home", `url(${baseUrl}img/Fondo-pagina.png)`);
rootStyles.setProperty("--bg-banner", `url(${baseUrl}img/banner.png)`);
rootStyles.setProperty("--bg-silithus", `url(${baseUrl}img/silithus.png)`);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);