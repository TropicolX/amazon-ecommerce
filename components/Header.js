import Image from "next/image";
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";
import styles from "../styles/Header.module.scss";

const Header = () => {
	return (
		<header>
			<div className={styles.navTop}>
				<div className={styles.flex}>
					<div className={styles.logoWrap}>
						<Image
							src="https://links.papareact.com/f90"
							width={150}
							height={40}
							objectFit="contain"
							className={styles.logo}
						/>
					</div>

					<div className={styles.right}>
						<div className={styles.link}>
							<p>Hello Busayo Jacobs</p>
							<p>Account & Lists</p>
						</div>
						<div className={styles.link}>
							<p>Returns</p>
							<p>& Orders</p>
						</div>
						<div className={styles.cart}>
							<span className={styles.badge}>0</span>
							<ShoppingCartIcon className={styles.cartIcon} />
							<p>Cart</p>
						</div>
					</div>
				</div>

				<div className={styles.search}>
					<input className={styles.searchInput} type="text" />
					<div className={styles.searchIconWrap}>
						<SearchIcon className={styles.searchIcon} />
					</div>
				</div>
			</div>
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
		</header>
	);
};

export default Header;
