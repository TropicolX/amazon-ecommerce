import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LazyImage = ({ src, alt, className = undefined }) => {
	const imgRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			});
		});

		const currentImgRef = imgRef.current;

		if (currentImgRef) {
			observer.observe(currentImgRef);
		}

		return () => {
			if (currentImgRef) {
				observer.unobserve(currentImgRef);
			}
		};
	}, []);

	return (
		<img
			ref={imgRef}
			className={className}
			src={src}
			loading={isVisible ? "eager" : "lazy"}
			alt={alt}
		/>
	);
};

LazyImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default LazyImage;
