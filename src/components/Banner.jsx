import { bannerUrl } from "../constants";
import styles from "../styles/Banner.module.scss";

const Banner = () => {
	return (
		<div className={styles.container}>
			<div className={styles.gradient} />
			<div>
				<img
					src={bannerUrl}
					alt="audible original"
					className={styles.image}
				/>
			</div>
		</div>
	);
};

export default Banner;
