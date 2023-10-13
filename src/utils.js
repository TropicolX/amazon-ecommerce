export const preloadImages = (images, callback) => {
	const preloadedImages = [];
	let loadedImages = 0;

	images.forEach((imageUrl) => {
		const img = new Image();
		img.src = imageUrl;
		img.onload = () => {
			loadedImages++;
			if (loadedImages === images.length) {
				// All images are loaded, invoke the callback function
				callback();
			}
		};
		preloadedImages.push(img);
	});

	return () => {
		// Clean up: remove event listeners and references to preloaded images
		preloadedImages.forEach((img) => (img.onload = null));
	};
};

export const calculateDiscountedPrices = (worker, products) => {
	return new Promise((resolve, reject) => {
		const updatedProducts = [];
		let processedCount = 0;

		// Set up the onmessage handler outside of the loop
		worker.onmessage = (e) => {
			const discountedPrice = e.data;
			// Create a new product object with updated discounted price
			const updatedProduct = {
				...products[processedCount],
				discountedPrice,
			};
			updatedProducts.push(updatedProduct);

			processedCount++;

			// If all products have been processed, resolve the promise with the updated products array
			if (processedCount === products.length) {
				resolve(updatedProducts);
			}
		};

		// Set up the onerror handler outside of the loop
		worker.onerror = (error) => {
			reject(error);
		};

		// Iterate through products and use web worker to calculate discounted prices
		products.forEach((product) => {
			const discount = Math.floor(Math.random() * 100);
			worker.postMessage({
				type: "calculateDiscount",
				payload: { productPrice: product.price, discount },
			});
		});
	});
};