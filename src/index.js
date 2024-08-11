/**
*!/usr/bin/env node
* -*- coding: utf-8 -*-
* DizzyCalc
*/


/**
* author: OTechCup
* copyright: &copy; 2024 - new Date().getFullYear() All Rights Reserved | Exfac
* credits: ["Mr. O"]
* version: Beta v0.1.0
* maintainer: OTechCup
* email: support@exfac.info
*/


// import modules
import React from "react";
import ReactDOM from "react-dom/client";

import InitRoutes from "./InitRoutes.jsx";
import reportWebVitals from "./reportWebVitals.js";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <InitRoutes />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
