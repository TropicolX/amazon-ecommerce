import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

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
