import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

const CheckoutProduct = ({ id, name, price }) => {
	const dispatch = useDispatch();

	const removeProduct = () => {
		dispatch(removeFromCart(id));
	};

	return (
		<div>
			<h3>
				{name} - ${price}{" "}
				<button className="inline-btn" onClick={removeProduct}>
					Remove
				</button>
			</h3>
		</div>
	);
};

export default CheckoutProduct;
