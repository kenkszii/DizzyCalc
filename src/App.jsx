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
import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/account/pages/Dashboard.jsx";


function App() {
	return (
		<Routes>
			<Route 
				path="/" 
				element={<Dashboard />}
			/>
		</Routes>
	);
};


export default App;
