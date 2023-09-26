import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Circles from "../assets/Circles";
import MousaImage from "../assets/MousaImage-Compressed.png";
import ClientsCard from "./ClientsCard";

const Clients = () => {
	const card_details = [
		{
			name: "Mousa Aboubaker",
			image: MousaImage,
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem hic pariatur molestiae quae mollitia, veritatis nostrum quo sapiente! Unde repellendus assumenda explicabo libero beatae, temporibus, magni fugit nesciunt animi ullam dicta odit!",
			id: 1,
		},
		{
			name: "Mousa Aboubaker",
			image: MousaImage,
			content:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum praesentium ab voluptas facere deserunt consequuntur doloribus nemo ullam consectetur, delectus omnis, quis, quaerat corrupti atque nulla ea libero eveniet repellat temporibus cum.",
			id: 2,
		},
		{
			name: "Mousa Aboubaker",
			image: MousaImage,
			content:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, magnam ipsam consectetur beatae laboriosam deleniti a libero fugiat odit dolor culpa iste nemo tempora dignissimos qui necessitatibus optio neque recusandae voluptatem incidunt.",
			id: 3,
		},
		{
			name: "Mousa Aboubaker",
			image: MousaImage,
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem hic pariatur molestiae quae mollitia, veritatis nostrum quo sapiente! Unde repellendus assumenda explicabo libero beatae, temporibus, magni fugit nesciunt animi ullam dicta odit!",
			id: 4,
		},
		{
			name: "Mousa Aboubaker",
			image: MousaImage,
			content:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, magnam ipsam consectetur beatae laboriosam deleniti a libero fugiat odit dolor culpa iste nemo tempora dignissimos qui necessitatibus optio neque recusandae voluptatem incidunt.",
			id: 5,
		},
		{
			name: "Mousa Aboubaker",
			image: MousaImage,
			content:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, magnam ipsam consectetur beatae laboriosam deleniti a libero fugiat odit dolor culpa iste nemo tempora dignissimos qui necessitatibus optio neque recusandae voluptatem incidunt.",
			id: 6,
		},
	];

	return (
		<section
			id="clients"
			className="relative my-16 overflow-hidden md:overflow-visible"
		>
			<Circles className="absolute top-4 -left-1/2 md:-left-1/3 fill-green-400 -z-10 opacity-50" />
			<h2 className="my-16 py-4 bg-white lg:bg-opacity-50 lg:backdrop-blur text-4xl text-green-400 text-center font-Poppins font-bold">
				What are our clients thinking about us?
			</h2>
			<Swiper
				style={{
					"--swiper-navigation-color": "#222",
					"--swiper-pagination-color": "#222",
				}}
				className="!p-10 !mx-4 md:!mx-10 lg:!mx-16"
				spaceBetween={50}
				slidesPerView={1}
				breakpoints={{
					1024: {
						slidesPerView: 3,
						spaceBetween: 70,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 60,
					},
				}}
				grabCursor
				pagination={{
					clickable: true,
				}}
				navigation={true}
				parallax
				loop
				autoplay={{ delay: 5000, disableOnInteraction: false }}
				speed={1000}
				modules={[Autoplay, Pagination, Navigation]}
			>
				{card_details.map((card_detail) => (
					<SwiperSlide className="bg-white border border-black rounded-lg">
						<ClientsCard name={card_detail.name} image={card_detail.image}>
							{card_detail.content}
						</ClientsCard>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Clients;
