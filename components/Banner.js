/* eslint-disable @next/next/no-img-element */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import styles from "../styles/Banner.module.scss";

const Banner = () => {
	return (
		<div className={styles.container}>
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
						loading="lazy"
						src="https://links.papareact.com/gi1"
						alt=""
					/>
				</div>
				<div>
					<img
						loading="lazy"
						src="https://links.papareact.com/6ff"
						alt=""
					/>
				</div>
				<div>
					<img
						loading="lazy"
						src="https://links.papareact.com/7ma"
						alt=""
					/>
				</div>
			</Carousel>
		</div>
	);
};

export default Banner;
