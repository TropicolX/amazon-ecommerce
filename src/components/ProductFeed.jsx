import React from "react";

import Product from "./Product";

import styles from "../styles/ProductFeed.module.scss";

const ProductFeed = ({ products }) => {
	const productCards = products
		.slice(0, 4)
		.map(({ id, title, price, description, category, images }) => (
			<Product
				key={id}
				id={id}
				name={title}
				price={price}
				description={description}
				category={category.name}
				image={images[0]}
				average_rating={Math.floor(Math.random() * 5) + 1}
				ratings_count={Math.floor(Math.random() * 100) + 1}
			/>
		));

	const productCards2 = products
		.slice(4, 5)
		.map(({ id, title, price, description, category, images }) => (
			<Product
				key={id}
				id={id}
				name={title}
				price={price}
				description={description}
				category={category.name}
				image={images[0]}
				average_rating={Math.floor(Math.random() * 5) + 1}
				ratings_count={Math.floor(Math.random() * 100) + 1}
			/>
		));

	const productCards3 = products
		.slice(5, products.length)
		.map(({ id, title, price, description, category, images }) => (
			<Product
				key={id}
				id={id}
				name={title}
				price={price}
				description={description}
				category={category.name}
				image={images[0]}
				average_rating={Math.floor(Math.random() * 5) + 1}
				ratings_count={Math.floor(Math.random() * 100) + 1}
			/>
		));

	return (
		<div className={styles.productFeed}>
			{productCards}
			<img
				className={styles.advert}
				src="https://links.papareact.com/dyz"
				alt="advert"
			/>
			<div className={styles.secondSet}>{productCards2}</div>
			{productCards3}
		</div>
	);
};

export default ProductFeed;
