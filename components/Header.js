import Image from "next/image";
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
	return (
		<header>
			<div className="nav nav__top">
				<div className="flex">
					<div className="logo__wrap">
						<Image
							src="https://links.papareact.com/f90"
							width={150}
							height={40}
							objectFit="contain"
							className="logo"
						/>
					</div>

					<div className="right">
						<div className="link">
							<p>Hello Busayo Jacobs</p>
							<p>Account & Lists</p>
						</div>
						<div className="link">
							<p>Returns</p>
							<p>& Orders</p>
						</div>
						<div className="cart link">
							<span className="badge">0</span>
							<ShoppingCartIcon className="cart__icon" />
							<p>Cart</p>
						</div>
					</div>
				</div>

				<div className="search">
					<input className="search__input" type="text" />
					<div className="search__icon__wrap">
						<SearchIcon className="search__icon" />
					</div>
				</div>
			</div>
			<div className="nav nav__bottom">
				<p className="link flex">
					<MenuIcon className="menu__icon" />
					All
				</p>
				<p className="link">Prime Video</p>
				<p className="link">Amazon Business</p>
				<p className="link">Electronics</p>
				<p className="link">Food & Grocery</p>
				<p className="link">Buy Again</p>
				<p className="link">Shopper Toolkit</p>
				<p className="link">Health & Personal Care</p>
			</div>
		</header>
	);
};

export default Header;
