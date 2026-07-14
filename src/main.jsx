import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const baseUrl = import.meta.env.BASE_URL;
document.documentElement.style.setProperty("--base-url", baseUrl);
document.documentElement.style.setProperty("--bg-home", `url(${baseUrl}img/Fondo-pagina.png)`);
document.documentElement.style.setProperty("--bg-banner", `url(${baseUrl}img/banner.png)`);
document.documentElement.style.setProperty("--bg-silithus", `url(${baseUrl}img/silithus.png)`);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);