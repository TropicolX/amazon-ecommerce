import {
	CurrencyDollarIcon,
	GlobeAltIcon,
	ChevronUpIcon,
} from "@heroicons/react/outline";

import styles from "../styles/Footer.module.scss";

const Footer = ({ hideMainNav = false }) => {
	return (
		<footer>
			{!hideMainNav && (
				<>
					<div className={styles.top}>
						<ChevronUpIcon className={styles.icon} />
						<p>Top of page</p>
					</div>
					<div className={styles.middle}>
						<ul className={styles.nav}>
							<li>Amazon.com</li>
							<li>Your Lists</li>
							<li>Find a Gift</li>
							<li>Browsing History</li>
							<li>Returns</li>
							<li>Cutomer Service</li>
						</ul>
						<ul className={styles.nav}>
							<li>Your Orders</li>
							<li>Gift Cards & Registry</li>
							<li>Your Account</li>
							<li>Sell products on Amazon</li>
						</ul>
					</div>
				</>
			)}
			<div className={styles.bottom}>
				<div className={styles.settings}>
					<p>
						<GlobeAltIcon className={styles.icon} />
						English
					</p>
					<p>
						<CurrencyDollarIcon className={styles.icon} />
						USD - U.S. Dollar
					</p>
				</div>
				<div className={styles.legal}>
					<ul>
						<li>Conditions of Use</li>
						<li>Privacy Notice</li>
						<li>Interest-Based Ads</li>
					</ul>
					<div>© 1996-2021, Amazon.com, Inc. or its affiliates</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
