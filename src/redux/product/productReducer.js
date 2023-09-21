import {
	PRODUCT_ACTION_REQUEST,
	PRODUCT_ACTION_SUCCESS,
	PRODUCT_ACTION_FAILURE,
} from "./productTypes";

const initialState = {
	loading: false,
	data: [],
	error: "",
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case PRODUCT_ACTION_REQUEST:
			return {
				...state,
				loading: true,
			};
		case PRODUCT_ACTION_SUCCESS:
			return {
				loading: false,
				data: action.payload,
				error: "",
			};
		case PRODUCT_ACTION_FAILURE:
			return {
				loading: false,
				data: {},
				error: action.payload,
			};
		default:
			return state;
	}
};

export default productReducer;
