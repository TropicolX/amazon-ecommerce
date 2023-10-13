import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { selectCartItems } from "../store/cartSlice";
import { logoUrl } from "../constants";

import styles from "../styles/Header.module.scss";

const Header = ({ showLogoOnly = false }) => {
	const cartItems = useSelector(selectCartItems);
	const cartItemsCount = cartItems.length;

	return (
		<header>
			{/* Top nav */}
			<div className={styles.navTop}>
				<div className={styles.flex}>
					<Link to="/">
						<div className={styles.logoWrap}>
							<img
								alt="logo"
								src={logoUrl}
								className={styles.logo}
							/>
						</div>
					</Link>

					{/* Right */}
					{!showLogoOnly && (
						<div className={styles.right}>
							<Link to={"#"}>
								<div className={styles.link}>
									<p>Sign In</p>
									<p>Account & Lists</p>
								</div>
							</Link>
							<div className={styles.link}>
								<p>Returns</p>
								<p>& Orders</p>
							</div>
							<Link to="/checkout">
								<div className={styles.cart}>
									<span className={styles.badge}>
										{cartItemsCount}
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
						<label htmlFor="search" className="sr-only">
							Search
						</label>
						<input
							id="search"
							className={styles.searchInput}
							type="text"
						/>
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

Header.propTypes = {
	showLogoOnly: PropTypes.bool,
};

export default Header;
