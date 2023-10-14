import PropTypes from "prop-types";

import Product from "./Product";

import styles from "../styles/ProductFeed.module.scss";

const ProductFeed = ({ products }) => {
	return (
		<div className={styles.productFeed}>
			{products.map(
				({
					id,
					title,
					price,
					description,
					category,
					images,
					discountedPrice,
				}) => (
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
						discountedPrice={discountedPrice}
					/>
				)
			)}
		</div>
	);
};

ProductFeed.propTypes = {
	products: PropTypes.array.isRequired,
};

export default ProductFeed;
