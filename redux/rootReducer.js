import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import productReducer from "./product/productReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
	product: productReducer,
	user: userReducer,
	cart: cartReducer,
});

export default rootReducer;
