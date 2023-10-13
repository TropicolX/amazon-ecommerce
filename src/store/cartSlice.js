import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.items = [...state.items, action.payload];
		},
		removeFromCart: (state, action) => {
			state.items = state.items.filter(
				(item) => item.id !== action.payload
			);
		},
	},
});

// Actions
export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;

// Reducer
export default cartSlice.reducer;
