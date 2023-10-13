import { useSelector } from "react-redux";

import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import styles from "../styles/Checkout.module.scss";
import { useMemo } from "react";
import { selectCartItems } from "../store/cartSlice";

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartItemsCount = cartItems.length;

	const totalPrice = useMemo(() => {
		return cartItems.reduce((acc, product) => acc + product.price, 0);
	}, [cartItems]);

	return (
		<div className={styles.checkout}>
			<Header />

			<main className={styles.main}>
				{/* Left */}
				<div className={styles.left}>
					<img alt="promo" src="https://links.papareact.com/ikj" />

					<div className={styles.cart}>
						<h1>
							{cartItemsCount > 0
								? "Shopping Cart"
								: "Your cart is empty."}
						</h1>

						{cartItems.map((item, index) => (
							<CheckoutProduct
								key={index}
								id={item.id}
								name={item.name}
								price={item.price}
								description={item.description}
								category={item.category}
								image={item.image}
								average_rating={item.average_rating}
								ratings_count={item.ratings_count}
							/>
						))}
						{cartItemsCount > 0 && (
							<>
								<hr />
								<h3>Total price: ${totalPrice}</h3>
							</>
						)}
					</div>
				</div>

				{/* Right */}
				<div className={styles.right}></div>
			</main>
		</div>
	);
};

export default Checkout;
