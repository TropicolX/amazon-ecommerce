import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
	return (
		<div className="carousel__container">
			<div className="gradient" />
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
