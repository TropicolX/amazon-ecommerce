/* eslint-disable @next/next/no-img-element */
import React from "react";

import Product from "./Product";
import styles from "../styles/ProductFeed.module.scss";

const ProductFeed = ({ products }) => {
	const productCards = products
		.slice(0, 4)
		.map(
			({
				id,
				name,
				price,
				description,
				category,
				image,
				average_rating,
				ratings_count,
			}) => (
				<Product
					key={id}
					id={id}
					name={name}
					price={price}
					description={description}
					category={category}
					image={image}
					average_rating={average_rating}
					ratings_count={ratings_count}
				/>
			)
		);

	const productCards2 = products
		.slice(4, 5)
		.map(
			({
				id,
				name,
				price,
				description,
				category,
				image,
				average_rating,
				ratings_count,
			}) => (
				<Product
					key={id}
					id={id}
					name={name}
					price={price}
					description={description}
					category={category}
					image={image}
					average_rating={average_rating}
					ratings_count={ratings_count}
				/>
			)
		);

	const productCards3 = products
		.slice(5, products.length)
		.map(
			({
				id,
				name,
				price,
				description,
				category,
				image,
				average_rating,
				ratings_count,
			}) => (
				<Product
					key={id}
					id={id}
					name={name}
					price={price}
					description={description}
					category={category}
					image={image}
					average_rating={average_rating}
					ratings_count={ratings_count}
				/>
			)
		);

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
