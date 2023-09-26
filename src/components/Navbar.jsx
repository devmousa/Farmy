import { useState } from "react";
import { useOutsideClick } from "outsideclick-react";

import Logo from "../assets/Logo.jsx";
import Close from "../assets/Close.jsx";
import Menu from "../assets/Menu.jsx";

const Navbar = () => {
	const navbar_items = [
		{ title: "Home", id: "home", key: 1 },
		{ title: "About", id: "about", key: 2 },
		{ title: "Products", id: "products", key: 3 },
		{ title: "Clients", id: "clients", key: 4 },
		{
			title: "Contact",
			id: "contact",
			key: 5,
			additional:
				"py-2 px-4 bg-green-400 text-white rounded hover:bg-green-500 hover:text-white border-none",
		},
	];

	const [opened, setOpened] = useState(false);

	const toggleMenu = () => {
		setOpened((opened) => !opened);
	};

	const handleOutsideClick = () => {
		setOpened(false);
	};

	const ref = useOutsideClick(handleOutsideClick);

	return (
		<nav className="py-4 md:px-4 flex flex-row justify-between items-center shadow z-10">
			<a href="#home" aria-label="Farmy homepage">
				<Logo className="h-10" />
			</a>
			<div className="hidden md:block">
				{navbar_items.map((navbar_item) => (
					<a
						className={`sm:inline mx-4 hover:text-green-400 ${navbar_item.additional}`}
						key={navbar_item.key}
						href={`#${navbar_item.id}`}
					>
						{navbar_item.title}
					</a>
				))}
			</div>
			<div ref={ref} className="block md:hidden relative">
				<button
					aria-label="toggle button"
					className="w-10 h-10 mr-4 outline-none"
					onClick={() => toggleMenu()}
				>
					{opened ? <Close /> : <Menu />}
				</button>
				<div
					className={`w-fit absolute pb-2 bg-green-50 bg-opacity-60 backdrop-blur-sm right-10 rounded ${
						opened ? "block" : "hidden"
					}`}
				>
					{navbar_items.map((navbar_item) => (
						<a
							className={`block mx-4 mt-2 pb-2 text-center hover:text-green-400 ${navbar_item.additional}`}
							key={navbar_item.key}
							href={`#${navbar_item.id}`}
						>
							{navbar_item.title}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
