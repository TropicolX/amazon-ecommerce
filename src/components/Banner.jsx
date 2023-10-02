import { useState, useEffect } from "react";

import styles from "../styles/Banner.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
	const [loaded, setLoaded] = useState(false);
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		if (imageLoaded && !loaded) {
			setLoaded(true);
		}
	}, [imageLoaded, loaded]);

	return (
		<div className={styles.container}>
			{!loaded && <div className={styles.skeleton} />}
			<div className={styles.gradient} />
			<div style={{ display: loaded ? "block" : "none" }}>
				<img
					src="https://links.papareact.com/gi1"
					alt="audible original"
					className={styles.image}
					onLoad={() => !imageLoaded && setImageLoaded(true)}
				/>
			</div>
		</div>
	);
};

export default Banner;
