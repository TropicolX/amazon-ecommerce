import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes";

const initialState = {
	items: [],
	numberOfItems: 0,
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return {
				items: [...state.items, action.payload],
				numberOfItems: state.items.length + 1,
			};
		case REMOVE_FROM_CART:
			return {
				items: state.items.filter((item) => item.id !== action.payload),
				numberOfItems: state.items.length - 1,
			};
		default:
			return state;
	}
};

export default cartReducer;
