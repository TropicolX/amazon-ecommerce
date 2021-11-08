import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import Currency from "react-currency-formatter";
import Truncate from "react-truncate";
import styles from "../styles/Product.module.scss";

const Product = ({ id, name, price, description, category, image, rating }) => {
	const [hasPrime] = useState(Math.random() < 0.5);
	const star = <StarIcon className={styles.star} />;

	return (
		<div className={styles.productCard}>
			<p className={styles.category}>{category}</p>
			<Image src={image} height={200} width={200} objectFit="contain" />
			<h4 className={styles.name}>{name}</h4>
			<Rate
				value={rating.rate}
				disabled={true}
				allowHalf={true}
				allowClear={false}
				character={star}
			/>
			{!hasPrime && (
				<img
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
						alt="amazon prime"
					/>
					<p>FREE Next-day Delivery</p>
				</div>
			)}
			<button className={styles.button}>Add to cart</button>
		</div>
	);
};

export default Product;
