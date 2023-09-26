import Leaf from "../assets/Leaf";
import ProductsCard from "./ProductsCard";

const Products = () => {
	const cards_details = [
		{
			title: "Product",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem hic pariatur molestiae quae mollitia, veritatis nostrum quo sapiente! Unde repellendus assumenda explicabo libero beatae, temporibus, magni fugit nesciunt animi ullam dicta odit!",
			icon: <Leaf />,
			id: 1,
		},
		{
			title: "Product",
			content:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum praesentium ab voluptas facere deserunt consequuntur doloribus nemo ullam consectetur, delectus omnis, quis, quaerat corrupti atque nulla ea libero eveniet repellat temporibus cum.",
			icon: <Leaf />,
			id: 2,
		},
		{
			title: "Product",
			content:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, magnam ipsam consectetur beatae laboriosam deleniti a libero fugiat odit dolor culpa iste nemo tempora dignissimos qui necessitatibus optio neque recusandae voluptatem incidunt.",
			icon: <Leaf />,
			id: 3,
		},
	];

	return (
		<section id="products" className="py-8 px-4 md:px-10 lg:px-16 bg-white">
			<h2 className="mb-16 text-6xl text-center text-green-400 font-Poppins font-bold">
				Our products
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{cards_details.map((card_details) => (
					<ProductsCard
						key={card_details.id}
						title={card_details.title}
						icon={card_details.icon}
					>
						{card_details.content}
					</ProductsCard>
				))}
			</div>
		</section>
	);
};

export default Products;
