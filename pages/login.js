import { useEffect, useRef } from "react";
import { ExclamationIcon } from "@heroicons/react/outline";
import { Formik } from "formik";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { loginUser } from "../redux";
import styles from "../styles/Auth.module.scss";

const Login = () => {
	const router = useRouter();
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const justMounted = useRef(true);

	const handleFormSubmit = (credentials) => {
		justMounted.current = false;
		dispatch(loginUser(credentials));
	};

	const errorMessage = (message = "An unexpected error occured.") => {
		console.log(message);
		return message;
	};

	useEffect(() => {
		justMounted.current = false;
		if (user.authenticated) router.push("/");
	}, [user.authenticated]);

	return user.loading || user.authenticated ? (
		<h2>Loading...</h2>
	) : (
		<div className={styles.home}>
			<Head>
				<title>Amazon 2.0 | Sign-In</title>
			</Head>

			<Header showLogoOnly />
			<main>
				<div className={styles.container}>
					{/* Error notice */}
					{user.error && !justMounted.current && (
						<div className={styles.error}>
							<div>
								<ExclamationIcon className={styles.icon} />
							</div>
							<div className={styles.text}>
								<h2>There was a problem</h2>
								<p>{errorMessage(user.error)}</p>
							</div>
						</div>
					)}
					<div className={styles.formContainer}>
						<h1>Sign-In</h1>
						<Formik
							initialValues={{ email: "", password: "" }}
							validate={(values) => {
								const errors = {};
								if (!values.email) {
									errors.email = "Required";
								} else if (
									!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
										values.email
									)
								) {
									errors.email = "Invalid email address";
								} else if (!values.password) {
									errors.password = "Required";
								}
								return errors;
							}}
							onSubmit={(values, { setSubmitting }) => {
								handleFormSubmit(values);
								setSubmitting(false);
							}}
						>
							{({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
								handleSubmit,
								isSubmitting,
								/* and other goodies */
							}) => (
								<form onSubmit={handleSubmit}>
									<label htmlFor="email">Email address</label>
									<input
										id="email"
										type="email"
										name="email"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.email}
									/>
									{errors.email &&
										touched.email &&
										errors.email}
									<label htmlFor="password">Password</label>
									<input
										id="password"
										type="password"
										name="password"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.password}
									/>
									{errors.password &&
										touched.password &&
										errors.password}
									<button
										type="submit"
										disabled={isSubmitting}
									>
										Sign-In
									</button>
								</form>
							)}
						</Formik>
						<small>
							By continuing, you agree to Amazon&apos;s{" "}
							<span>Conditions of Use</span> and{" "}
							<span>Privacy Notice.</span>
						</small>
					</div>
					<div className={styles.alt}>
						<small>New to Amazon?</small>
						<Link href="/register" passHref>
							<button>Create your Amazon account</button>
						</Link>
					</div>
				</div>
			</main>
			<Footer hideMainNav />
		</div>
	);
};

export default Login;
