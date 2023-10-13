import styles from "../styles/Banner.module.scss";

const Banner = () => {
	return (
		<div className={styles.container}>
			<div className={styles.gradient} />
			<div>
				<img
					src="https://links.papareact.com/gi1"
					alt="audible original"
					className={styles.image}
				/>
			</div>
		</div>
	);
};

export default Banner;
