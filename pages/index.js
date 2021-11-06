import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
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
		</div>
	);
}

export async function getServerSideProps(context) {
	const products = await fetch("http://127.0.0.1:8000/products/").then(
		(res) => res.json()
	);

	return {
		props: {
			products,
		},
	};
}
