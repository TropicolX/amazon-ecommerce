/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Currency from "react-currency-formatter";
import Image from "next/image";
import Rate from "rc-rate";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import "rc-rate/assets/index.css";

import { addToCart } from "../redux";
import styles from "../styles/Product.module.scss";
import Truncate from "react-truncate";

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
			<Image
				alt="product-card"
				src={image}
				height={200}
				width={200}
				objectFit="contain"
			/>
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
			<Truncate lines={2} ellipsis={<span>...</span>}>
				<p className={styles.description}>{description}</p>
			</Truncate>
			<div className={styles.price}>
				<Currency quantity={price} currency="USD" />
			</div>
			{hasPrime && (
				<div className={styles.prime}>
					<img
						src="https://links.papareact.com/fdw"
						alt="amazon-prime"
					/>
					<p>FREE Next-day Delivery</p>
				</div>
			)}
			<button className={styles.button} onClick={addProduct}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
