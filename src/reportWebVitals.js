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


function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(
      function ({ getCLS, getFID, getFCP, getLCP, getTTFB }) {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      }
    );
  };
};


export default reportWebVitals;
