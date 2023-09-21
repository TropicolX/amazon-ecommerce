import { useState } from "react";
import Currency from "react-currency-formatter";
import Rate from "rc-rate";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux";

import styles from "../styles/Product.module.scss";
import "rc-rate/assets/index.css";

const Product = ({
	id,
	name,
	price,
	description = "",
	category,
	image,
	average_rating,
	ratings_count,
}) => {
	const dispatch = useDispatch();

	const [hasPrime] = useState(Math.random() < 0.5);
	const star = <StarIcon className={styles.star} />;

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
		};
		dispatch(addToCart(product));
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
				character={star}
			/>
			{!hasPrime && (
				<img
					alt="amazon-choice"
					src="https://m.media-amazon.com/images/G/01/amazonsChoice/acBadge-p13n.svg"
					id={styles.amazonChoice}
				/>
			)}
			<p className={styles.description}>{description}</p>
			<div className={styles.price}>
				<Currency quantity={price} currency="USD" />
			</div>
			<button className={styles.button} onClick={addProduct}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
