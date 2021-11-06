import { createStore, applyMiddleware } from "redux";
import countryReducer from "./country/countryReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(
	countryReducer,
	applyMiddleware(logger, thunk)
	// composeWithDevTools(applyMiddleware(logger))
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
