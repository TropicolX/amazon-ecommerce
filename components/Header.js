/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";

import { getUser, logoutUser } from "../redux";
import styles from "../styles/Header.module.scss";

const Header = ({ showLogoOnly = false }) => {
	const user = useSelector((state) => state.user);
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const logout = () => {
		dispatch(logoutUser());
	};

	useEffect(() => {
		if (!showLogoOnly) {
			dispatch(getUser());
		}
	}, []);

	return (
		<header>
			{/* Top nav */}
			<div className={styles.navTop}>
				<div className={styles.flex}>
					<Link href="/" passHref>
						<div className={styles.logoWrap}>
							<Image
								alt="logo"
								src="https://links.papareact.com/f90"
								width={150}
								height={40}
								objectFit="contain"
								className={styles.logo}
							/>
						</div>
					</Link>

					{/* Right */}
					{!showLogoOnly && (
						<div className={styles.right}>
							<Link
								href={user.authenticated ? "#" : "/login"}
								passHref
							>
								<div
									className={styles.link}
									onClick={user.authenticated && logout}
								>
									<p>
										{user.data
											? `Hello ${user.data.first_name}`
											: "Sign In"}
									</p>
									<p>Account & Lists</p>
								</div>
							</Link>
							<div className={styles.link}>
								<p>Returns</p>
								<p>& Orders</p>
							</div>
							<Link href="/checkout" passHref>
								<div className={styles.cart}>
									<span className={styles.badge}>
										{cart.numberOfItems}
									</span>
									<ShoppingCartIcon
										className={styles.cartIcon}
									/>
									<p>Cart</p>
								</div>
							</Link>
						</div>
					)}
				</div>

				{/* Search */}
				{!showLogoOnly && (
					<div className={styles.search}>
						<input className={styles.searchInput} type="text" />
						<div className={styles.searchIconWrap}>
							<SearchIcon className={styles.searchIcon} />
						</div>
					</div>
				)}
			</div>
			{/* Bottom nav */}
			{!showLogoOnly && (
				<div className={styles.navBottom}>
					<p className={styles.iconText}>
						<MenuIcon className={styles.menuIcon} />
						All
					</p>
					<p className={styles.link}>Prime Video</p>
					<p className={styles.link}>Amazon Business</p>
					<p className={styles.link}>Electronics</p>
					<p className={styles.link}>Food & Grocery</p>
					<p className={styles.link}>Buy Again</p>
					<p className={styles.link}>Shopper Toolkit</p>
					<p className={styles.link}>Health & Personal Care</p>
				</div>
			)}
		</header>
	);
};

export default Header;
