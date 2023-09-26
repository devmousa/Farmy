import Facebook from "../assets/Facebook";
import Mail from "../assets/Mail";
import Twitter from "../assets/Twitter";
import Whatsup from "../assets/Whatsup";

const Contact = () => {
	const contacts = [
		{
			logo: <Mail />,
			content: "farmy@gmail.com",
			hover: "hover:bg-slate-500 hover:text-black",
			id: 1,
		},
		{
			logo: <Facebook />,
			content: "Farmy",
			hover: "hover:bg-blue-500 hover:text-white",
			id: 2,
		},
		{
			logo: <Whatsup />,
			content: "09123232344",
			hover: "hover:bg-green-300 hover:text-black",
			id: 3,
		},
		{
			logo: <Twitter />,
			content: "@Farmy",
			hover: "hover:bg-sky-400 hover:text-black",
			id: 4,
		},
	];

	return (
		<section id="contact" className="py-16 px-4 md:px-10 lg:px-16">
			<h2 className="mb-16 text-6xl text-center text-green-400 font-Poppins font-bold">
				Contact us
			</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-10">
				{contacts.map((contact) => (
					<div
						key={contact.id}
						className={`transition-all flex flex-row justify-around items-center py-4 bg-green-400 border border-black rounded-xl ${contact.hover}`}
					>
						<div className="w-16 mx-4 fill-white text-white">
							{contact.logo}
						</div>
						<p className="w-3/4 md:w-1/2 text-2xl text-center text-white font-Poppins font-semibold">
							{contact.content}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Contact;
