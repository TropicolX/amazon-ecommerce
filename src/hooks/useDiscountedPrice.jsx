import { useState } from "react";

const useDiscountedPrice = (productPrice, discount) => {
	const [discountedPrice, setDiscountedPrice] = useState(null);

	const calculateDiscount = () => {
		const worker = new Worker("/discountCalculatorWorker.js");

		worker.addEventListener("message", (e) => {
			setDiscountedPrice(e.data);
			worker.terminate(); // Terminate the worker after receiving the result
		});

		// Send a message to the Web Worker to initiate the calculation
		worker.postMessage({
			type: "calculateDiscount",
			payload: { productPrice, discount },
		});
	};

	return { calculateDiscount, discountedPrice };
};

export default useDiscountedPrice;
