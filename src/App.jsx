import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Checkout from "./pages/checkout";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
				<Route exact path="/checkout" element={<Checkout />}></Route>
			</Routes>
		</Router>
	);
};

export default App;
