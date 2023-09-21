import {
	PRODUCT_ACTION_REQUEST,
	PRODUCT_ACTION_SUCCESS,
	PRODUCT_ACTION_FAILURE,
} from "./productTypes";
import axios from "axios";

export const productActionRequest = () => {
	return {
		type: PRODUCT_ACTION_REQUEST,
	};
};

export const productActionSuccess = (data) => {
	return {
		type: PRODUCT_ACTION_SUCCESS,
		payload: data,
	};
};

export const productActionFailure = (error) => {
	return {
		type: PRODUCT_ACTION_FAILURE,
		payload: error,
	};
};

export const productList = () => {
	return function (dispatch) {
		dispatch(productActionRequest());
		axios
			.get("products/")
			.then((response) => {
				// response.data is the array of products
				const data = response.data;
				dispatch(productActionSuccess(data));
			})
			.catch((error) => {
				// error.message is the error description
				dispatch(productActionFailure(error.message));
			});
	};
};

export const productDetails = (slug) => {
	return function (dispatch) {
		dispatch(productActionRequest());
		axios
			.get(`products/${slug}/`)
			.then((response) => {
				const data = response.data;
				dispatch(productActionSuccess(data));
			})
			.catch((error) => {
				// error.message is the error description
				dispatch(productActionFailure(error.message));
			});
	};
};

export const productFilter = (
	search = "",
	category = "",
	min_price = "",
	max_price = ""
) => {
	return function (dispatch) {
		dispatch(productActionRequest());
		axios
			.get(
				`products/?search=${search}&category=${category}&min_price=${min_price}&max_price=${max_price}`
			)
			.then((response) => {
				// response.data is the array of products
				const data = response.data;
				dispatch(productActionSuccess(data));
			})
			.catch((error) => {
				// error.message is the error description
				dispatch(productActionFailure(error.message));
			});
	};
};
