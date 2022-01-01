import axios from "../axios";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
	return (
		<div className="home">
			<Head>
				<title>Amazon 2.0</title>
			</Head>

			<Header />
			<main>
				<Banner />
				<ProductFeed products={products} />
			</main>
			<Footer />
		</div>
	);
}

export async function getServerSideProps(context) {
	const products = await axios
		.get("products/")
		.then((response) => response.data);

	return {
		props: {
			products,
		},
	};
}
