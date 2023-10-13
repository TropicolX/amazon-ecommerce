import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

// Lazy loading components
const Home = lazy(() => import("./pages/Home"));
const Checkout = lazy(() => import("./pages/Checkout"));

const App = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route
						exact
						path="/checkout"
						element={<Checkout />}
					></Route>
				</Routes>
			</Router>
		</Suspense>
	);
};

export default App;
