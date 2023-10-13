import axios from "axios";

const baseURL = "https://api.escuelajs.co/api/v1/";

const instance = axios.create({
	baseURL: baseURL,
	timeout: 10000,
});

export default instance;
