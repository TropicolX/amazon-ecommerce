import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";

import styles from "../styles/Banner.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
	const [loaded, setLoaded] = useState(false);
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		if (
			document.querySelector(".slider.animated") &&
			imageLoaded &&
			!loaded
		) {
			setLoaded(true);
		}
	}, [document.querySelector(".slider.animated"), imageLoaded]);

	return (
		<div className={styles.container}>
			{!loaded && <div className={styles.skeleton} />}
			<div className={styles.gradient} />
			<Carousel
				autoPlay
				infiniteLoop
				swipeable
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				interval={5000}
			>
				<div>
					<img
						src="https://links.papareact.com/gi1"
						alt="audible original"
						onLoad={() => !imageLoaded && setImageLoaded(true)}
					/>
				</div>
				<div>
					<img
						loading="lazy"
						src="https://links.papareact.com/6ff"
						alt="prime video"
					/>
				</div>
				<div>
					<img
						loading="lazy"
						src="https://links.papareact.com/7ma"
						alt="amazon music"
					/>
				</div>
			</Carousel>
		</div>
	);
};

export default Banner;
