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
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";


function InitRoutes() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};


export default InitRoutes;
