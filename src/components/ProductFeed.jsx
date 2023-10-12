import { FixedSizeGrid as Grid } from "react-window";

import Product from "./Product";

import styles from "../styles/ProductFeed.module.scss";

const columnWidth = 435; // Width of each column
const rowHeight = 529.16; // Height of each row

const ProductFeed = ({ products }) => {
	const columnCount = Math.floor(window.innerWidth / columnWidth); // Calculate number of columns based on window width
	const rowCount = Math.ceil(products.length / columnCount); // Calculate number of rows

	const cellRenderer = ({ columnIndex, rowIndex, style }) => {
		const index = rowIndex * columnCount + columnIndex;
		if (index >= products.length) {
			return null; // Return null for cells outside the range of products
		}

		const { id, title, price, description, category, images } =
			products[index];
		return (
			<div style={style}>
				<Product
					key={id}
					id={id}
					name={title}
					price={price}
					description={description}
					category={category.name}
					image={images[0]}
					average_rating={5}
					ratings_count={20}
				/>
			</div>
		);
	};

	return (
		<Grid
			columnCount={columnCount}
			columnWidth={columnWidth}
			height={rowHeight * rowCount}
			rowCount={rowCount}
			rowHeight={rowHeight}
			width={columnWidth * columnCount}
			className={styles.productFeed}
		>
			{cellRenderer}
		</Grid>
	);
};

export default ProductFeed;
