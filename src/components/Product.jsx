import { useState } from "react";
import PropTypes from "prop-types";
import Rate from "rc-rate";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";

import { addToCart } from "../store/cartSlice";
import { amazonChoiceUrl } from "../constants";

import styles from "../styles/Product.module.scss";
import "rc-rate/assets/index.css";

const Product = ({
	id,
	name,
	price,
	description = "",
	category,
	image,
	ratings_count,
	discountedPrice,
	average_rating,
}) => {
	const dispatch = useDispatch();
	const [added, setAdded] = useState(false);
	const [hasPrime] = useState(Math.random() < 0.5);

	const addProduct = () => {
		const product = {
			id,
			name,
			price,
			description,
			category,
			image,
			average_rating,
			ratings_count,
			discountedPrice,
		};
		dispatch(addToCart(product));
		setAdded(true);
	};

	return (
		<div className={styles.productCard}>
			<p className={styles.category}>{category}</p>
			<img alt="product-image" src={image} className={styles.image} />
			<h4 className={styles.name}>{name}</h4>
			<Rate
				value={average_rating}
				disabled={true}
				allowHalf={true}
				allowClear={false}
				character={<StarIcon className={styles.star} />}
			/>
			{!hasPrime && (
				<img
					alt="amazon-choice"
					src={amazonChoiceUrl}
					className={styles.amazonChoice}
				/>
			)}
			<p className={styles.description}>{description}</p>
			<div className={styles.price}>
				{discountedPrice ? (
					<>
						<s>${price}</s> <span>${discountedPrice}</span>
					</>
				) : (
					"..."
				)}
			</div>
			<button
				className={styles.button}
				onClick={addProduct}
				disabled={added}
			>
				Add to cart
			</button>
		</div>
	);
};

Product.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	description: PropTypes.string,
	category: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	ratings_count: PropTypes.number.isRequired,
	discountedPrice: PropTypes.string,
	average_rating: PropTypes.number.isRequired,
};

export default Product;
