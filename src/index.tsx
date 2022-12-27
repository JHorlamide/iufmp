import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
// import { store } from "redux/store";
// import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "context/AuthProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
