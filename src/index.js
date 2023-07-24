import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./Components/Home";
import Stretch from "./Components/Stretch";
import Stretch1 from "./Components/Stretch1";
import Stretch2 from "./Components/Stretch2";
import Focus from "./Components/Focus";
import Breathe from "./Components/Breathe";
import Water from "./Components/Water";


import App from "./App";

import reportWebVitals from "./reportWebVitals";
import Streak from "./Streak";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="stretch" element={<Stretch />} />
        <Route path="stretch1" element={<Stretch1 />} />
        <Route path="stretch2" element={<Stretch2 />} />
        <Route path="focus" element={<Focus />} />
        <Route path="breathe" element={<Breathe />} />
        <Route path="water" element={<Water />} />
        {/* <Route path="custom" element={<Custom />} /> */}
        <Route path="streak" element={<Streak />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
