import axios from "../../axios";
import {
	USER_LOGOUT_FAILURE,
	USER_LOGOUT_REQUEST,
	USER_LOGOUT_SUCCESS,
	USER_AUTH_FAILURE,
	USER_AUTH_REQUEST,
	USER_AUTH_SUCCESS,
} from "./userTypes";

export const userAuthRequest = () => {
	return {
		type: USER_AUTH_REQUEST,
	};
};

export const userAuthSuccess = (data = null) => {
	return {
		type: USER_AUTH_SUCCESS,
		payload: data,
	};
};

export const userAuthFailure = (error) => {
	return {
		type: USER_AUTH_FAILURE,
		payload: error,
	};
};

export const userLogoutRequest = () => {
	return {
		type: USER_LOGOUT_REQUEST,
	};
};

export const userLogoutSuccess = () => {
	return {
		type: USER_LOGOUT_SUCCESS,
	};
};

export const userLogoutFailure = (error) => {
	return {
		type: USER_LOGOUT_FAILURE,
		payload: error,
	};
};

export const loginUser = (credentials) => {
	return function (dispatch) {
		dispatch(userAuthRequest());
		axios
			.post("user/login/", {
				email: credentials.email,
				password: credentials.password,
			})
			.then((response) => {
				// response.data is the array of users
				const data = response.data;
				dispatch(userAuthSuccess());
				localStorage.setItem("access_token", data.tokens.access);
				localStorage.setItem("refresh_token", data.tokens.refresh);
				axios.defaults.headers[
					"Authorization"
				] = `JWT ${localStorage.getItem("access_token")}`;
			})
			.catch((error) => {
				const errorMessage = error?.response?.data?.detail
					? error.response.data.detail
					: error.message;
				dispatch(userAuthFailure(errorMessage));
			});
	};
};

export const registerUser = (credentials) => {
	return function (dispatch) {
		dispatch(userAuthRequest());
		axios
			.post("user/register/", {
				email: credentials.email,
				first_name: credentials.first_name,
				last_name: credentials.last_name,
				password: credentials.password,
			})
			.then((response) => {
				const data = response.data;
				dispatch(userAuthSuccess());
				localStorage.setItem("access_token", data.tokens.access);
				localStorage.setItem("refresh_token", data.tokens.refresh);
				axios.defaults.headers[
					"Authorization"
				] = `JWT ${localStorage.getItem("access_token")}`;
			})
			.catch((error) => {
				// error.message is the error description
				const errorMessage = error?.response?.data?.detail
					? error.response.data.detail
					: error.message;
				dispatch(userAuthFailure(errorMessage));
			});
	};
};

export const getUser = () => {
	return function (dispatch) {
		dispatch(userAuthRequest());
		axios
			.get("user/current_user/")
			.then((response) => {
				const data = response.data.data;
				dispatch(userAuthSuccess(data));
			})
			.catch((error) => {
				// error.message is the error description
				const errorMessage = error?.response?.data?.detail
					? error.response.data.detail
					: error.message;
				dispatch(userAuthFailure(errorMessage));
			});
	};
};

export const logoutUser = () => {
	return function (dispatch) {
		dispatch(userLogoutRequest());
		const refreshToken = localStorage.getItem("refresh_token");
		axios
			.post("user/logout/blacklist/", {
				refresh_token: refreshToken,
			})
			.then((response) => {
				const data = response.data;
				console.log(data);
				dispatch(userLogoutSuccess());
				localStorage.removeItem("access_token");
				localStorage.removeItem("refresh_token");
				axios.defaults.headers["Authorization"] = null;
			})
			.catch((error) => {
				const errorMessage = error?.response?.data?.detail
					? error.response.data.detail
					: error.message;
				dispatch(userAuthFailure(errorMessage));
			});
	};
};
