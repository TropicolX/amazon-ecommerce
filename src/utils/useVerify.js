import { useEffect, useState } from "react";
import axios from "../../axios";

export const useVerify = (authenticated) => {
	const [state, setState] = useState({
		isAuth: authenticated,
		isLoading: true,
	});

	useEffect(() => {
		if (!state.isAuth) {
			const token =
				localStorage.getItem("access_token") != "undefined" &&
				localStorage.getItem("access_token")
					? localStorage.getItem("access_token")
					: null;
			if (token === null) {
				setState({ isAuth: false, isLoading: false });
			} else {
				setState({ isAuth: true, isLoading: false });
			}
		} else {
			setState({ ...state, isLoading: false });
		}
	}, [state, setState]);

	return state;
};
