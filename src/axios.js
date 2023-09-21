import axios from "axios";

const baseURL = " https://api.escuelajs.co/api/v1/";

const access_token = () => {
	if (typeof window !== "undefined") {
		const token =
			localStorage.getItem("access_token") != "undefined"
				? "JWT " + localStorage.getItem("access_token")
				: null;
		return token;
	} else {
		return null;
	}
};

const redirectToLogin = () => {
	if (
		typeof window !== "undefined" &&
		window.location.pathname !== "/login"
	) {
		window.location.href = "/login/";
	}
};

const instance = axios.create({
	baseURL: baseURL,
	timeout: 10000,
	headers: {
		Authorization: access_token(),
		"Content-Type": "application/json",
		accept: "application/json",
	},
});

instance.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		const originalRequest = error.config;
		// TODO: Cleanup file
		console.log(error.response);

		// if (
		// 	typeof error.response === "undefined" ||
		// 	error.response.status === 405
		// ) {
		// 	alert(
		// 		"A server/network error occured. Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly."
		// 	);
		// 	return Promise.reject(error);
		// }

		// if (
		// 	error.response.status === 401 &&
		// 	originalRequest.url === `${baseURL}token/refresh/`
		// ) {
		// 	window.location.href = "/login/";
		// 	return Promise.reject(error);
		// }

		if (
			error.response?.data?.code === "token_not_valid" &&
			error.response.status === 401 &&
			error.response.statusText === "Unauthorized"
		) {
			const refreshToken = localStorage.getItem("refresh_token");

			if (refreshToken && refreshToken != "undefined") {
				const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));

				// exp date in token is expressed in seconds, while now() returns milliseconds
				const now = Math.ceil(Date.now() / 1000);
				console.log(tokenParts.exp);

				if (tokenParts.exp > now) {
					return instance
						.post("/token/refresh/", { refresh: refreshToken })
						.then((response) => {
							localStorage.setItem(
								"access_token",
								response.data.access
							);

							instance.defaults.headers[
								"Authorization"
							] = `JWT ${response.data.access}`;
							originalRequest.headers[
								"Authorization"
							] = `JWT ${response.data.access}`;

							return instance(originalRequest);
						})
						.catch((err) => {
							console.log(err);
						});
				} else {
					console.log(
						"Refresh token is expired",
						tokenParts.exp,
						now
					);
					redirectToLogin();
				}
			} else if (window.location.pathname === "/") {
				console.log("Could not fetch user details");
			} else {
				console.log("Refresh token not available.");
				redirectToLogin();
			}
		}

		// specific error handling done elsewhere
		return Promise.reject(error);
	}
);

export default instance;
