self.addEventListener("message", (e) => {
	const { type, payload } = e.data;

	if (type === "calculateDiscount") {
		const result = calculateDiscount(payload);
		self.postMessage(result);
	}
});

function calculateDiscount({ productPrice, discount }) {
	// Perform complex discount calculation here
	const discountAmount = (productPrice * discount) / 100;
	const discountedPrice = (productPrice - discountAmount).toFixed(0);

	return discountedPrice;
}
