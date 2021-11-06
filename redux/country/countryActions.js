import {
	FETCH_COUNTRIES_FAILURE,
	FETCH_COUNTRIES_REQUEST,
	FETCH_COUNTRIES_SUCCESS,
} from "./countryTypes";
import axios from "../../axios";

const API_KEY = "cd8feccf4b371908d1550eb46273c91d"

export const fetchCountriesRequest = () => {
	return {
		type: FETCH_COUNTRIES_REQUEST,
	};
};

export const fetchCountriesSuccess = (data) => {
	return {
		type: FETCH_COUNTRIES_SUCCESS,
		payload: data,
	};
};

export const fetchCountriesFailure = (error) => {
	return {
		type: FETCH_COUNTRIES_FAILURE,
		payload: error,
	};
};

export const fetchCountries = () => {
	return function (dispatch) {
		dispatch(fetchCountriesRequest());
		axios
			.get(`/all?access_key=${API_KEY}`)
			.then((response) => {
				// response.data is the array of users
				const countries = response.data;
				const pageCount = Math.ceil(countries.length / 8)
				dispatch(fetchCountriesSuccess({countries, pageCount}));
			})
			.catch((error) => {
				// error.message is the error description
				dispatch(fetchCountriesFailure(error.message));
			});
	};
};

export const fetchCountrySearch = (name) => {
	return function (dispatch) {
		dispatch(fetchCountriesRequest());
		axios
			.get(`/name/${name}`)
			.then((response) => {
				// response.data is the array of users
				const countries = response.data;
				dispatch(fetchCountriesSuccess(countries));
			})
			.catch((error) => {
				// error.message is the error description
				dispatch(fetchCountriesFailure(error.message));
			});
	};
};

export const fetchCountryRegion = (region) => {
	return function (dispatch) {
		dispatch(fetchCountriesRequest());
		axios
			.get(`/name/${region}`)
			.then((response) => {
				// response.data is the array of users
				const countries = response.data;
				dispatch(fetchCountriesSuccess(countries));
			})
			.catch((error) => {
				// error.message is the error description
				dispatch(fetchCountriesFailure(error.message));
			});
	};
};
