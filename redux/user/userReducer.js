import {
	USER_LOGOUT_FAILURE,
	USER_LOGOUT_REQUEST,
	USER_LOGOUT_SUCCESS,
	USER_AUTH_FAILURE,
	USER_AUTH_REQUEST,
	USER_AUTH_SUCCESS,
} from "./userTypes";

const initialState = {
	loading: false,
	authenticated: false,
	data: null,
	error: "",
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_AUTH_REQUEST:
			return {
				...state,
				loading: true,
			};
		case USER_AUTH_SUCCESS:
			return {
				loading: false,
				authenticated: true,
				data: action.payload,
				error: "",
			};
		case USER_AUTH_FAILURE:
			return {
				loading: false,
				data: null,
				error: action.payload,
			};
		case USER_LOGOUT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case USER_LOGOUT_SUCCESS:
			return {
				loading: false,
				authenticated: false,
				data: null,
				error: "",
			};
		case USER_LOGOUT_FAILURE:
			return {
				loading: false,
				data: null,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
