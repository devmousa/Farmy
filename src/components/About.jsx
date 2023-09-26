import Leaf from "../assets/Leaf";
import AboutCard from "./AboutCard";

const About = () => {
	const cards_details = [
		{
			title: "Who are we ?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem hic pariatur molestiae quae mollitia, veritatis nostrum quo sapiente! Unde repellendus assumenda explicabo libero beatae, temporibus, magni fugit nesciunt animi ullam dicta odit!",
			icon: <Leaf />,
			id: 1,
		},
		{
			title: "Helping farms",
			content:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum praesentium ab voluptas facere deserunt consequuntur doloribus nemo ullam consectetur, delectus omnis, quis, quaerat corrupti atque nulla ea libero eveniet repellat temporibus cum.",
			icon: <Leaf />,
			id: 2,
		},
		{
			title: "Saving Farms",
			content:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, magnam ipsam consectetur beatae laboriosam deleniti a libero fugiat odit dolor culpa iste nemo tempora dignissimos qui necessitatibus optio neque recusandae voluptatem incidunt.",
			icon: <Leaf />,
			id: 3,
		},
	];

	return (
		<>
			<svg
				className="fill-green-400 translate-y-1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
			>
				<path d="M0,96L48,112C96,128,192,160,288,192C384,224,480,256,576,272C672,288,768,288,864,266.7C960,245,1056,203,1152,202.7C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
			</svg>
			<section id="about" className="py-16 px-4 md:px-10 lg:px-16 bg-green-400">
				<h2 className="mb-16 text-6xl text-center text-white font-Poppins font-bold">
					About us
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{cards_details.map((card_details) => (
						<AboutCard
							key={card_details.id}
							title={card_details.title}
							icon={card_details.icon}
						>
							{card_details.content}
						</AboutCard>
					))}
				</div>
			</section>
			<svg
				className="fill-green-400 rotate-180 -translate-y-1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
			>
				<path d="M0,160L48,149.3C96,139,192,117,288,106.7C384,96,480,96,576,128C672,160,768,224,864,229.3C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
			</svg>
		</>
	);
};

export default About;
